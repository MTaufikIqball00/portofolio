import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Project } from "@/types/project";
import { ArrowRight } from "lucide-react";
import React from "react";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  // Strictly prioritize the top 3 projects deployed to Vercel
  const deployed = projects.filter((p) => p.homepageUrl && p.homepageUrl.includes("vercel.app"));
  const nonDeployed = projects.filter((p) => !p.homepageUrl || !p.homepageUrl.includes("vercel.app"));
  const featured = [...deployed, ...nonDeployed].slice(0, 3);

  return (
    <section className="py-16 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <SectionHeader
          badge="Live di Vercel"
          title="Projek Unggulan (Live Demo)"
          description="Tiga projek rekayasa sistem utama yang telah berhasil di-deploy ke Vercel dan dapat diakses langsung, mencakup GraphRAG, diagnostik klinis AI, dan optimasi algorithmic trading."
          className="mb-0"
        />
        <Button href="/projects" variant="outline" size="sm" className="self-start sm:self-end flex-shrink-0">
          <span>Lihat Semua ({projects.length})</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
