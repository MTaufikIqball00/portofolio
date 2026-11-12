import { GitHubGraphQLResponse, GitHubRestRepo, GitHubRestUser } from "@/types/github";

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function validateGraphQLResponse(data: unknown): data is GitHubGraphQLResponse {
  if (!isRecord(data)) return false;

  // It can be valid if it has `data` or `errors`
  if ("errors" in data && Array.isArray(data.errors)) {
    return true;
  }

  if (!("data" in data) || !isRecord(data.data)) {
    return false;
  }

  const user = data.data.user;
  if (!user || !isRecord(user)) return false;

  if (typeof user.login !== "string") return false;

  if (user.pinnedItems && isRecord(user.pinnedItems)) {
    if (!Array.isArray(user.pinnedItems.nodes)) return false;
  }

  return true;
}

export function validateRestRepo(repo: unknown): repo is GitHubRestRepo {
  if (!isRecord(repo)) return false;

  return (
    typeof repo.name === "string" &&
    typeof repo.html_url === "string" &&
    typeof repo.stargazers_count === "number" &&
    typeof repo.forks_count === "number"
  );
}

export function validateRestUser(user: unknown): user is GitHubRestUser {
  if (!isRecord(user)) return false;

  return (
    typeof user.login === "string" &&
    typeof user.id === "number" &&
    typeof user.avatar_url === "string" &&
    typeof user.public_repos === "number"
  );
}
