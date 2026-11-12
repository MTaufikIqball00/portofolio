import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github } from "@/components/ui/GithubIcon";
import { formatDate } from "@/lib/utils/cn";
import { Project } from "@/types/project";
import { ChevronRight, ExternalLink, GitFork, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const CATEGORY_LABELS: Record<string, string> = {
  All: "Semua Projek",
  "AI & LLMOps": "AI & LLMOps",
  "Autonomous Systems & Robotics": "Sistem Otonom & Robotika",
  "High-Performance Systems": "Sistem Kinerja Tinggi",
  "Enterprise Web & Healthcare": "Web Enterprise & Medis",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      hoverEffect
      className="flex flex-col justify-between h-full group relative border-slate-200/90 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-sky-500/40 transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Top Meta: Category & Language */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <Badge variant="accent" className="text-[11px]">
              {CATEGORY_LABELS[project.category] || project.category}
            </Badge>
            {project.homepageUrl?.includes("vercel.app") && (
              <Badge variant="success" className="text-[10px] py-0.5 px-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live Vercel</span>
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400">
            <span
              className="w-2 h-2 rounded-full inline-block"
              style={{ backgroundColor: project.languageColor }}
              aria-hidden="true"
            />
            <span>{project.language}</span>
          </div>
        </div>

        {/* Project Name and Tagline */}
        <div>
          <Link
            href={`/projects/${project.slug}`}
            className="group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded"
          >
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 flex items-center justify-between">
              <span>{project.displayName}</span>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-sky-500 transition-all" />
            </h3>
          </Link>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

          {/* Topics Pills */}
        {project.topics && project.topics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.topics.slice(0, 4).map((topic) => (
              <span
                key={topic}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/[0.06]"
              >
                #{topic}
              </span>
            ))}
            {project.topics.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-600 dark:text-slate-300">
                +{project.topics.length - 4} lainnya
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Footer: Stars, Forks, Last Updated, and Actions */}
      <div className="pt-5 mt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1" title="Bintang">
            <Star className="w-3.5 h-3.5 text-amber-500" />
            <span>{project.stars}</span>
          </span>
          <span className="flex items-center gap-1" title="Forks">
            <GitFork className="w-3.5 h-3.5" />
            <span>{project.forks}</span>
          </span>
          <span className="hidden sm:inline text-[11px] text-slate-600 dark:text-slate-400">
            Diperbarui {formatDate(project.updatedAt)}
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {project.homepageUrl && (
            <Button
              href={project.homepageUrl}
              external
              size="sm"
              variant="outline"
              className="h-8 px-2.5 text-xs"
              title="Buka Demo Langsung"
              aria-label={`Buka Demo Langsung untuk ${project.displayName}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Demo</span>
            </Button>
          )}

          <Button
            href={project.htmlUrl}
            external
            size="sm"
            variant="outline"
            className="h-8 px-2.5 text-xs"
            title="Lihat Repositori GitHub"
            aria-label={`Lihat Repositori GitHub untuk ${project.displayName}`}
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Kode</span>
          </Button>

          <Button
            href={`/projects/${project.slug}`}
            size="sm"
            variant="primary"
            className="h-8 px-3 text-xs"
          >
            <span>Detail</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
