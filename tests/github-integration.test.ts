import assert from "node:assert";
import test from "node:test";
import { siteConfig } from "../src/config/site";
import { getPinnedProjects, getProjectBySlug } from "../src/lib/github/client";
import { VERIFIED_FALLBACK_PROJECTS } from "../src/lib/github/fallback-data";
import { constructMetadata, generatePersonJsonLd } from "../src/lib/seo/metadata";

test("VERIFIED_FALLBACK_PROJECTS contains verified repositories and top 3 are deployed to Vercel", () => {
  assert.strictEqual(VERIFIED_FALLBACK_PROJECTS.length, 7);

  // Assert top 3 projects have active Vercel deployments
  for (let i = 0; i < 3; i++) {
    const p = VERIFIED_FALLBACK_PROJECTS[i];
    assert.ok(
      p.homepageUrl && p.homepageUrl.includes("vercel.app"),
      `Top 3 project ${p.name} must have a live Vercel deployment URL`
    );
  }

  const expectedNames = [
    "AutomatedGraph",
    "OmniMed-Insight",
    "AI-Algorithmic-Trading-BESS-Arbitrage-Optimizer",
    "Medchain",
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

test("generatePersonJsonLd contains valid schema.org Person definition with education background", () => {
  const jsonLd = generatePersonJsonLd();
  assert.strictEqual(jsonLd["@context"], "https://schema.org");
  assert.strictEqual(jsonLd["@type"], "Person");
  assert.strictEqual(jsonLd.name, siteConfig.fullName);
  assert.strictEqual(jsonLd.url, siteConfig.url);
  assert.strictEqual(jsonLd.email, "taufikschll@gmail.com");
  assert.strictEqual(siteConfig.email, "taufikschll@gmail.com");
  assert.strictEqual(jsonLd.alumniOf?.name, "Universitas Komputer Indonesia");
});

test("siteConfig and Harvest_Drone contain verified education credentials", () => {
  assert.strictEqual(siteConfig.education.institution, "Universitas Komputer Indonesia");
  assert.strictEqual(siteConfig.education.gpa, "3.39");
  assert.strictEqual(
    siteConfig.education.thesis,
    "Autonomous Drone untuk Pemantauan Lahan Pertanian"
  );

  const droneProject = VERIFIED_FALLBACK_PROJECTS.find(
    (p) => p.slug === "harvest_drone"
  );
  assert.ok(droneProject);
  assert.ok(droneProject.tagline.includes("Universitas Komputer Indonesia"));
  assert.ok(droneProject.tagline.includes("3.39"));
  assert.ok(
    droneProject.highlights.some(
      (h) => h.includes("Universitas Komputer Indonesia") && h.includes("3.39")
    )
  );
});

