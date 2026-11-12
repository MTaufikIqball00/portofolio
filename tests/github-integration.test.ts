import assert from "node:assert";
import test from "node:test";
import { siteConfig } from "../src/config/site";
import { getPinnedProjects, getProjectBySlug } from "../src/lib/github/client";
import { VERIFIED_FALLBACK_PROJECTS } from "../src/lib/github/fallback-data";
import { constructMetadata, generatePersonJsonLd } from "../src/lib/seo/metadata";

test("VERIFIED_FALLBACK_PROJECTS contains exactly the 6 verified pinned repositories", () => {
  assert.strictEqual(VERIFIED_FALLBACK_PROJECTS.length, 6);

  const expectedNames = [
    "AutomatedGraph",
    "Medchain",
    "OmniMed-Insight",
    "LMS",
    "Harvest_Drone",
    "LLMOps-Evaluasi-Model-End-To-End",
  ];

  for (const name of expectedNames) {
    const exists = VERIFIED_FALLBACK_PROJECTS.some(
      (p) => p.name.toLowerCase() === name.toLowerCase()
    );
    assert.ok(exists, `Expected repository ${name} in verified fallback projects`);
  }
});

test("getPinnedProjects returns valid non-empty project list with real source", async () => {
  const { projects, source } = await getPinnedProjects();
  assert.ok(projects.length >= 6);
  assert.ok(["graphql", "rest", "verified-fallback"].includes(source));

  // Verify each project has required fields
  for (const project of projects) {
    assert.ok(project.slug.length > 0);
    assert.ok(project.displayName.length > 0);
    assert.ok(project.htmlUrl.startsWith("https://github.com/"));
    assert.ok(typeof project.stars === "number");
    assert.ok(typeof project.forks === "number");
    assert.ok(project.techStack.length > 0);
    assert.ok(project.keyFeatures.length > 0);
    assert.ok(project.architecture.overview.length > 0);
  }
});

test("getProjectBySlug correctly resolves project by exact slug or uppercase name", async () => {
  const p1 = await getProjectBySlug("automatedgraph");
  assert.ok(p1);
  assert.strictEqual(p1.name, "AutomatedGraph");

  const p2 = await getProjectBySlug("MEDCHAIN");
  assert.ok(p2);
  assert.strictEqual(p2.name, "Medchain");

  const p3 = await getProjectBySlug("non-existent-slug");
  assert.strictEqual(p3, null);
});

test("constructMetadata generates valid Next.js Metadata with canonical URL", () => {
  const meta = constructMetadata({
    title: "Projects",
    description: "Verified engineering projects.",
    path: "/projects",
  });

  assert.strictEqual(meta.title, "Projects | Taufik");
  assert.ok(String(meta.alternates?.canonical).includes("/projects"));
});

test("generatePersonJsonLd contains valid schema.org Person definition", () => {
  const jsonLd = generatePersonJsonLd();
  assert.strictEqual(jsonLd["@context"], "https://schema.org");
  assert.strictEqual(jsonLd["@type"], "Person");
  assert.strictEqual(jsonLd.name, siteConfig.fullName);
  assert.strictEqual(jsonLd.url, siteConfig.url);
  assert.ok(jsonLd.sameAs.includes(siteConfig.githubUrl));
});
