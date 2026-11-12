"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { Button } from "@/components/ui/Button";
import { Project, ProjectCategory } from "@/types/project";
import { AlertCircle } from "lucide-react";
import React, { useMemo, useState } from "react";

interface ProjectListProps {
  initialProjects: Project[];
  source: "graphql" | "rest" | "verified-fallback";
}

const CATEGORIES: ProjectCategory[] = [
  "All",
  "AI & LLMOps",
  "Autonomous Systems & Robotics",
  "High-Performance Systems",
  "Enterprise Web & Healthcare",
];

export function ProjectList({ initialProjects, source }: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLanguage, setActiveLanguage] = useState<string | null>(null);

  // Extract unique languages
  const languages = useMemo(() => {
    const set = new Set<string>();
    initialProjects.forEach((p) => {
      if (p.language) set.add(p.language);
    });
    return Array.from(set);
  }, [initialProjects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Category filter
      if (activeCategory !== "All" && project.category !== activeCategory) {
        return false;
      }

      // Language filter
      if (activeLanguage && project.language !== activeLanguage) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(query);
        const matchesDisplay = project.displayName.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesTopics = project.topics.some((t) => t.toLowerCase().includes(query));
        const matchesTech = project.techStack.some((tech) => tech.toLowerCase().includes(query));

        if (!matchesName && !matchesDisplay && !matchesDesc && !matchesTopics && !matchesTech) {
          return false;
        }
      }

      return true;
    });
  }, [initialProjects, activeCategory, activeLanguage, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Source banner / verification badge */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pb-2 border-b border-slate-200/60 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>
            {source === "graphql" && "Repositori Pinned GitHub Langsung (GraphQL)"}
            {source === "rest" && "Repositori Pinned GitHub Langsung (REST)"}
            {source === "verified-fallback" && "Snapshot Repositori Pinned GitHub Terverifikasi"}
          </span>
        </div>
        <span>Menampilkan {filteredProjects.length} dari {initialProjects.length} projek</span>
      </div>

      {/* Filter and Search Controls */}
      <ProjectFilter
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        languages={languages}
        activeLanguage={activeLanguage}
        onSelectLanguage={setActiveLanguage}
      />

      {/* Project Cards Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center rounded-xl border border-dashed border-slate-300 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] p-8 space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/5 flex items-center justify-center mx-auto text-slate-400">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            Tidak ada repositori yang cocok dengan kriteria
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Coba sesuaikan kata kunci pencarian atau pilih kategori filter yang berbeda.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              setActiveCategory("All");
              setActiveLanguage(null);
              setSearchQuery("");
            }}
          >
            Reset Filter
          </Button>
        </div>
      )}
    </div>
  );
}
