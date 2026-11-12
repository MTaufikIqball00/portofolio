import { siteConfig } from "@/config/site";
import { GitHubRestUser } from "@/types/github";
import { Project } from "@/types/project";
import { GITHUB_CACHE_TAG, GITHUB_REVALIDATE_SECONDS, GITHUB_USER_CACHE_TAG } from "./cache";
import { VERIFIED_FALLBACK_PROJECTS } from "./fallback-data";
import { mapGraphQLNodeToProject, mapRestRepoToProject } from "./mapper";
import { PINNED_REPOS_GRAPHQL_QUERY } from "./queries";
import { validateGraphQLResponse, validateRestRepo, validateRestUser } from "./schemas";

const GITHUB_API_BASE = "https://api.github.com";

function getAuthHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Taufik-Engineering-Portfolio",
  };
  if (token && token.trim().length > 0) {
    headers.Authorization = `Bearer ${token.trim()}`;
  }
  return headers;
}

/**
 * Attempts to retrieve pinned repositories using the GitHub GraphQL API.
 * Requires GITHUB_TOKEN environment variable.
 */
async function fetchPinnedFromGraphQL(username: string): Promise<Project[] | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token || token.trim().length === 0) {
    return null; // Gracefully bypass GraphQL if no token is configured
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE}/graphql`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.trim()}`,
        "Content-Type": "application/json",
        "User-Agent": "Taufik-Engineering-Portfolio",
      },
      body: JSON.stringify({
        query: PINNED_REPOS_GRAPHQL_QUERY,
        variables: { username },
      }),
      next: {
        revalidate: GITHUB_REVALIDATE_SECONDS,
        tags: [GITHUB_CACHE_TAG],
      },
    });

    if (!response.ok) {
      console.warn(`[GitHub GraphQL] Request failed with status ${response.status}`);
      return null;
    }

    const json = await response.json();
    if (!validateGraphQLResponse(json)) {
      console.warn("[GitHub GraphQL] Response validation failed", json);
      return null;
    }

    if (json.errors && json.errors.length > 0) {
      console.warn("[GitHub GraphQL] Errors returned:", json.errors);
      return null;
    }

    const nodes = json.data?.user?.pinnedItems?.nodes;
    if (!nodes || !Array.isArray(nodes) || nodes.length === 0) {
      return null;
    }

    const projects: Project[] = [];
    for (const node of nodes) {
      if (node) {
        const mapped = mapGraphQLNodeToProject(node);
        if (mapped) projects.push(mapped);
      }
    }

    return projects.length > 0 ? projects : null;
  } catch (error) {
    console.warn("[GitHub GraphQL] Network error:", error);
    return null;
  }
}

/**
 * Retrieves the specific verified pinned repositories using GitHub REST API.
 * Works unauthenticated (subject to standard GitHub IP rate limits).
 */
async function fetchPinnedFromRest(username: string): Promise<Project[] | null> {
  try {
    const repos = siteConfig.verifiedPinnedRepos;
    const projectPromises = repos.map(async (repoName) => {
      try {
        const res = await fetch(`${GITHUB_API_BASE}/repos/${username}/${repoName}`, {
          headers: getAuthHeaders(),
          next: {
            revalidate: GITHUB_REVALIDATE_SECONDS,
            tags: [GITHUB_CACHE_TAG],
          },
        });

        if (!res.ok) {
          console.warn(`[GitHub REST] Failed to fetch repo ${repoName}: status ${res.status}`);
          return null;
        }

        const data = await res.json();
        if (!validateRestRepo(data)) {
          console.warn(`[GitHub REST] Invalid repo schema for ${repoName}`);
          return null;
        }

        return mapRestRepoToProject(data);
      } catch (err) {
        console.warn(`[GitHub REST] Error fetching repo ${repoName}:`, err);
        return null;
      }
    });

    const results = await Promise.all(projectPromises);
    const valid = results.filter((p): p is Project => p !== null);

    if (valid.length === repos.length) {
      return valid;
    }

    if (valid.length > 0) {
      const merged = repos.map((repoName) => {
        const live = valid.find((p) => p.name.toLowerCase() === repoName.toLowerCase());
        if (live) return live;
        const fallback = VERIFIED_FALLBACK_PROJECTS.find(
          (p) => p.name.toLowerCase() === repoName.toLowerCase()
        );
        return fallback!;
      });
      return merged;
    }

    return null;
  } catch (error) {
    console.warn("[GitHub REST] Batch fetch error:", error);
    return null;
  }
}

/**
 * Main entrance to get all pinned projects.
 * 1. Attempts GraphQL if token is configured.
 * 2. Attempts REST for the verified pinned repos.
 * 3. Falls back to verified offline dataset.
 */
export async function getPinnedProjects(): Promise<{ projects: Project[]; source: "graphql" | "rest" | "verified-fallback" }> {
  // 1. Try GraphQL
  const graphqlResult = await fetchPinnedFromGraphQL(siteConfig.githubUsername);
  if (graphqlResult && graphqlResult.length > 0) {
    return { projects: graphqlResult, source: "graphql" };
  }

  // 2. Try REST
  const restResult = await fetchPinnedFromRest(siteConfig.githubUsername);
  if (restResult && restResult.length > 0) {
    return { projects: restResult, source: "rest" };
  }

  // 3. Fallback to verified dataset
  return {
    projects: VERIFIED_FALLBACK_PROJECTS,
    source: "verified-fallback",
  };
}

/**
 * Get project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { projects } = await getPinnedProjects();
  const lowerSlug = slug.toLowerCase();
  const match = projects.find((p) => p.slug === lowerSlug || p.name.toLowerCase() === lowerSlug);
  if (match) return match;

  // Check fallback list directly
  const fallbackMatch = VERIFIED_FALLBACK_PROJECTS.find(
    (p) => p.slug === lowerSlug || p.name.toLowerCase() === lowerSlug
  );
  return fallbackMatch || null;
}

/**
 * Fetch GitHub user profile stats
 */
export async function getGitHubUserProfile(): Promise<GitHubRestUser | null> {
  try {
    const res = await fetch(`${GITHUB_API_BASE}/users/${siteConfig.githubUsername}`, {
      headers: getAuthHeaders(),
      next: {
        revalidate: GITHUB_REVALIDATE_SECONDS,
        tags: [GITHUB_USER_CACHE_TAG],
      },
    });

    if (!res.ok) {
      console.warn(`[GitHub Profile] Status: ${res.status}`);
      return null;
    }

    const data = await res.json();
    if (!validateRestUser(data)) {
      return null;
    }

    return data;
  } catch (error) {
    console.warn("[GitHub Profile] Error fetching user profile:", error);
    return null;
  }
}
