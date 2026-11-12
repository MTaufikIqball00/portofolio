import { GitHubGraphQLRepoNode, GitHubRestRepo } from "@/types/github";
import { Project, ProjectCategory } from "@/types/project";
import { VERIFIED_FALLBACK_PROJECTS } from "./fallback-data";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Solidity: "#363636",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export function getLanguageColor(language: string | null): string {
  if (!language) return "#64748b";
  return LANGUAGE_COLORS[language] || "#64748b";
}

export function inferCategory(name: string, language: string | null, topics: string[]): ProjectCategory {
  const lowerName = name.toLowerCase();
  const allTerms = [lowerName, language?.toLowerCase() || "", ...topics.map((t) => t.toLowerCase())].join(" ");

  if (allTerms.includes("drone") || allTerms.includes("ros") || allTerms.includes("gazebo") || allTerms.includes("px4")) {
    return "Autonomous Systems & Robotics";
  }
  if (allTerms.includes("rust") || allTerms.includes("axum") || allTerms.includes("high-performance")) {
    return "High-Performance Systems";
  }
  if (
    allTerms.includes("graphrag") ||
    allTerms.includes("rag") ||
    allTerms.includes("llm") ||
    allTerms.includes("evaluasi") ||
    allTerms.includes("trulens") ||
    allTerms.includes("machine-learning")
  ) {
    return "AI & LLMOps";
  }
  if (
    allTerms.includes("medchain") ||
    allTerms.includes("blockchain") ||
    allTerms.includes("lms") ||
    allTerms.includes("health") ||
    allTerms.includes("ehr")
  ) {
    return "Enterprise Web & Healthcare";
  }

  return "AI & LLMOps";
}

export function mapGraphQLNodeToProject(node: GitHubGraphQLRepoNode): Project | null {
  if (node.isPrivate) return null;

  const fallback = VERIFIED_FALLBACK_PROJECTS.find(
    (p) => p.name.toLowerCase() === node.name.toLowerCase()
  );

  const topics = node.repositoryTopics?.nodes.map((n) => n.topic.name) || fallback?.topics || [];
  const language = node.primaryLanguage?.name || fallback?.language || "TypeScript";
  const languageColor = node.primaryLanguage?.color || getLanguageColor(language);

  return {
    slug: node.name.toLowerCase(),
    name: node.name,
    displayName: fallback?.displayName || node.name,
    tagline: fallback?.tagline || node.description || "Open-source engineering project",
    description: node.description || fallback?.description || "No description provided on GitHub.",
    htmlUrl: node.url,
    homepageUrl: (node.homepageUrl && node.homepageUrl.trim().length > 0 ? node.homepageUrl : fallback?.homepageUrl) || null,
    language,
    languageColor,
    stars: node.stargazerCount ?? 0,
    forks: node.forkCount ?? 0,
    updatedAt: node.updatedAt,
    createdAt: node.createdAt || fallback?.createdAt || new Date().toISOString(),
    topics,
    isArchived: node.isArchived ?? false,
    isPinned: true,
    category: fallback?.category || inferCategory(node.name, language, topics),
    problemStatement: fallback?.problemStatement || "Engineered to resolve real-world software challenges.",
    solution: fallback?.solution || "Robust, production-grade technical implementation.",
    keyFeatures: fallback?.keyFeatures || ["Production ready architecture", "Well-documented codebase"],
    architecture: fallback?.architecture || {
      overview: "Standard modular system architecture.",
      components: [{ title: "System Core", description: "Primary application logic and data processing." }],
    },
    techStack: fallback?.techStack || [language],
    highlights: fallback?.highlights || ["Verified public repository on GitHub"],
  };
}

export function mapRestRepoToProject(repo: GitHubRestRepo): Project | null {
  if (repo.private || repo.visibility === "private") return null;

  const fallback = VERIFIED_FALLBACK_PROJECTS.find(
    (p) => p.name.toLowerCase() === repo.name.toLowerCase()
  );

  const topics = repo.topics || fallback?.topics || [];
  const language = repo.language || fallback?.language || "TypeScript";
  const languageColor = getLanguageColor(language);

  return {
    slug: repo.name.toLowerCase(),
    name: repo.name,
    displayName: fallback?.displayName || repo.name,
    tagline: fallback?.tagline || repo.description || "Open-source engineering project",
    description: repo.description || fallback?.description || "No description provided on GitHub.",
    htmlUrl: repo.html_url,
    homepageUrl: (repo.homepage && repo.homepage.trim().length > 0 ? repo.homepage : fallback?.homepageUrl) || null,
    language,
    languageColor,
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    updatedAt: repo.updated_at,
    createdAt: repo.created_at || fallback?.createdAt || new Date().toISOString(),
    topics,
    isArchived: repo.archived ?? false,
    isPinned: true,
    category: fallback?.category || inferCategory(repo.name, language, topics),
    problemStatement: fallback?.problemStatement || "Engineered to solve real-world software challenges.",
    solution: fallback?.solution || "Robust, production-grade technical implementation.",
    keyFeatures: fallback?.keyFeatures || ["Production ready architecture", "Well-documented codebase"],
    architecture: fallback?.architecture || {
      overview: "Standard modular system architecture.",
      components: [{ title: "System Core", description: "Primary application logic and data processing." }],
    },
    techStack: fallback?.techStack || [language],
    highlights: fallback?.highlights || ["Verified public repository on GitHub"],
  };
}
