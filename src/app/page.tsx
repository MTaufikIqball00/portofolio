import { CompetencyOverview } from "@/components/home/CompetencyOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HeroSection } from "@/components/home/HeroSection";
import { getGitHubUserProfile, getPinnedProjects } from "@/lib/github/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata();

export default async function HomePage() {
  const [{ projects }, userProfile] = await Promise.all([
    getPinnedProjects(),
    getGitHubUserProfile(),
  ]);

  return (
    <div className="space-y-4">
      <HeroSection publicReposCount={userProfile?.public_repos || 39} />
      <FeaturedProjects projects={projects} />
      <CompetencyOverview />
    </div>
  );
}
