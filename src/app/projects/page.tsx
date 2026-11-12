import { ProjectList } from "@/components/projects/ProjectList";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getPinnedProjects } from "@/lib/github/client";
import { constructMetadata } from "@/lib/seo/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Projek Rekayasa",
  description:
    "Jelajahi projek open-source pinned nyata yang diambil dari GitHub, mencakup GraphRAG, robotika ROS 2, layanan backend Rust, dan arsitektur multi-tenant.",
  path: "/projects",
});

export default async function ProjectsPage() {
  const { projects, source } = await getPinnedProjects();

  return (
    <div className="pt-8 pb-16 space-y-8">
      <SectionHeader
        badge="Repositori Pinned GitHub"
        title="Projek Rekayasa Perangkat Lunak"
        description="Showcase sistem tingkat produksi yang dibangun dan dikembangkan oleh Taufik. Setiap repositori mencerminkan metadata GitHub nyata, topik, bahasa pemrograman, dan arsitektur teknis aslinya."
      />

      <ProjectList initialProjects={projects} source={source} />
    </div>
  );
}
