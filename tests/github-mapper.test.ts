import assert from "node:assert";
import test from "node:test";
import { getLanguageColor, inferCategory, mapGraphQLNodeToProject, mapRestRepoToProject } from "../src/lib/github/mapper";
import { GitHubGraphQLRepoNode, GitHubRestRepo } from "../src/types/github";

test("getLanguageColor returns official hex color or default", () => {
  assert.strictEqual(getLanguageColor("TypeScript"), "#3178c6");
  assert.strictEqual(getLanguageColor("Python"), "#3572A5");
  assert.strictEqual(getLanguageColor("Rust"), "#dea584");
  assert.strictEqual(getLanguageColor(null), "#64748b");
  assert.strictEqual(getLanguageColor("UnknownLang"), "#64748b");
});

test("inferCategory correctly categorizes repository based on keywords", () => {
  assert.strictEqual(inferCategory("Harvest_Drone", "Python", ["ros2", "gazebo"]), "Autonomous Systems & Robotics");
  assert.strictEqual(inferCategory("AutomatedGraph", "Python", ["graphrag", "bm25"]), "AI & LLMOps");
  assert.strictEqual(inferCategory("OmniMed-Insight", "Rust", ["grad-cam", "axum"]), "High-Performance Systems");
  assert.strictEqual(inferCategory("Medchain", "TypeScript", ["blockchain", "ehr"]), "Enterprise Web & Healthcare");
  assert.strictEqual(inferCategory("LMS", "TypeScript", ["education", "multi-tenant"]), "Enterprise Web & Healthcare");
});

test("mapGraphQLNodeToProject filters out private repositories", () => {
  const privateNode: GitHubGraphQLRepoNode = {
    name: "PrivateRepo",
    description: "Private description",
    url: "https://github.com/MTaufikIqball00/PrivateRepo",
    homepageUrl: null,
    stargazerCount: 5,
    forkCount: 1,
    primaryLanguage: { name: "Rust", color: "#dea584" },
    updatedAt: "2026-11-01T00:00:00Z",
    isPrivate: true,
    isArchived: false,
  };

  const project = mapGraphQLNodeToProject(privateNode);
  assert.strictEqual(project, null);
});

test("mapGraphQLNodeToProject maps valid public repository correctly", () => {
  const publicNode: GitHubGraphQLRepoNode = {
    name: "AutomatedGraph",
    description: "Enterprise Automated GraphRAG platform",
    url: "https://github.com/MTaufikIqball00/AutomatedGraph",
    homepageUrl: "https://example.com/demo",
    stargazerCount: 10,
    forkCount: 2,
    primaryLanguage: { name: "Python", color: "#3572A5" },
    updatedAt: "2026-10-30T04:33:21Z",
    isPrivate: false,
    isArchived: false,
    repositoryTopics: {
      nodes: [{ topic: { name: "graphrag" } }, { topic: { name: "fastapi" } }],
    },
  };

  const project = mapGraphQLNodeToProject(publicNode);
  assert.ok(project);
  assert.strictEqual(project.slug, "automatedgraph");
  assert.strictEqual(project.name, "AutomatedGraph");
  assert.strictEqual(project.stars, 10);
  assert.strictEqual(project.forks, 2);
  assert.strictEqual(project.language, "Python");
  assert.strictEqual(project.languageColor, "#3572A5");
  assert.strictEqual(project.isArchived, false);
  assert.strictEqual(project.homepageUrl, "https://example.com/demo");
  assert.deepStrictEqual(project.topics, ["graphrag", "fastapi"]);
});

test("mapRestRepoToProject filters out private repositories and handles missing fields", () => {
  const privateRest: GitHubRestRepo = {
    name: "PrivateSecret",
    description: "Secret",
    html_url: "https://github.com/MTaufikIqball00/PrivateSecret",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: "Go",
    updated_at: "2026-11-01T00:00:00Z",
    created_at: "2026-01-01T00:00:00Z",
    archived: false,
    private: true,
    visibility: "private",
  };

  assert.strictEqual(mapRestRepoToProject(privateRest), null);

  const publicRestWithoutDesc: GitHubRestRepo = {
    name: "Harvest_Drone",
    description: null,
    html_url: "https://github.com/MTaufikIqball00/Harvest_Drone",
    homepage: "",
    stargazers_count: 3,
    forks_count: 1,
    language: null,
    updated_at: "2026-10-30T00:00:00Z",
    created_at: "2026-07-01T00:00:00Z",
    archived: false,
    private: false,
    visibility: "public",
  };

  const project = mapRestRepoToProject(publicRestWithoutDesc);
  assert.ok(project);
  assert.strictEqual(project.slug, "harvest_drone");
  assert.strictEqual(project.homepageUrl, null);
  // Falls back to verified fallback description & language when null
  assert.ok(project.description.length > 0);
  assert.strictEqual(project.language, "Python");
});
