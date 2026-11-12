import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { constructMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Keahlian Rekayasa & Kapabilitas Teknis",
  description:
    "Jelajahi kompetensi teknis yang terverifikasi terhadap repositori GitHub nyata: AI/LLMOps, sistem Rust, robotika ROS 2, dan arsitektur web multi-tenant.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <div className="pt-8">
      <SkillsGrid />
    </div>
  );
}
