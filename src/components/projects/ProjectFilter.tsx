"use client";

import { cn } from "@/lib/utils/cn";
import { ProjectCategory } from "@/types/project";
import { Filter, Search, X } from "lucide-react";
import React from "react";

interface ProjectFilterProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  languages: string[];
  activeLanguage: string | null;
  onSelectLanguage: (language: string | null) => void;
}

const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  All: "Semua Projek",
  "AI & LLMOps": "AI & LLMOps",
  "Autonomous Systems & Robotics": "Sistem Otonom & Robotika",
  "High-Performance Systems": "Sistem Kinerja Tinggi",
  "Enterprise Web & Healthcare": "Web Enterprise & Medis",
};

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  languages,
  activeLanguage,
  onSelectLanguage,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar */}
      <div className="relative w-full max-w-md">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Cari projek, teknologi, topik..."
          className="w-full pl-10 pr-9 py-2 text-sm rounded-lg border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
          aria-label="Cari repositori"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Hapus kata kunci pencarian"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                isSelected
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 dark:bg-white/[0.04] dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-white/[0.08] border border-slate-200/80 dark:border-white/[0.06]"
              )}
            >
              {CATEGORY_LABELS[cat] || cat}
            </button>
          );
        })}
      </div>

      {/* Language Quick Filters */}
      {languages.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap text-xs text-slate-500 dark:text-slate-400 pt-1">
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <Filter className="w-3 h-3" /> Bahasa:
          </span>
          <button
            type="button"
            onClick={() => onSelectLanguage(null)}
            className={cn(
              "px-2 py-0.5 rounded font-mono text-[11px] transition-colors",
              activeLanguage === null
                ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold"
                : "hover:text-slate-900 dark:hover:text-white"
            )}
          >
            Semua Bahasa
          </button>
          {languages.map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => onSelectLanguage(activeLanguage === lang ? null : lang)}
              className={cn(
                "px-2 py-0.5 rounded font-mono text-[11px] transition-colors",
                activeLanguage === lang
                  ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold"
                  : "hover:text-slate-900 dark:hover:text-white"
              )}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
