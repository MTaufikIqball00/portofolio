import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github } from "@/components/ui/GithubIcon";
import { formatDate } from "@/lib/utils/cn";
import { Project } from "@/types/project";
import {
  ArrowLeft,
  ArrowUpRight,
  Boxes,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  GitFork,
  GraduationCap,
  Layers,
  ShieldAlert,
  Sparkles,
  Star,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const CATEGORY_LABELS: Record<string, string> = {
  All: "Semua Projek",
  "AI & LLMOps": "AI & LLMOps",
  "Autonomous Systems & Robotics": "Sistem Otonom & Robotika",
  "High-Performance Systems": "Sistem Kinerja Tinggi",
  "Enterprise Web & Healthcare": "Web Enterprise & Medis",
};

interface ProjectDetailViewProps {
  project: Project;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <article className="max-w-4xl mx-auto space-y-10 pb-16">
      {/* Back button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali ke Semua Projek</span>
        </Link>
      </div>

      {/* Header section */}
      <header className="space-y-4 border-b border-slate-200/80 dark:border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="accent">{CATEGORY_LABELS[project.category] || project.category}</Badge>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: project.languageColor }}
              aria-hidden="true"
            />
            <span>{project.language}</span>
          </div>
          {project.isPinned && (
            <Badge variant="default" className="text-[11px]">
              Repositori Pinned
            </Badge>
          )}
          {project.homepageUrl?.includes("vercel.app") && (
            <Badge variant="success" className="text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live di Vercel</span>
            </Badge>
          )}
          {project.slug === "harvest_drone" && (
            <Badge variant="accent" className="text-[11px] font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30">
              <GraduationCap className="w-3.5 h-3.5 mr-1 inline" />
              <span>Tugas Akhir — Universitas Komputer Indonesia (IPK 3.39)</span>
            </Badge>
          )}
          {project.slug === "lms" && (
            <Badge variant="accent" className="text-[11px] font-mono bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30">
              <Briefcase className="w-3.5 h-3.5 mr-1 inline" />
              <span>Kemendikbud Bandung — Full Stack Developer (2 Bulan)</span>
            </Badge>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          {project.displayName}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Live GitHub stats and buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5" title="Bintang">
              <Star className="w-4 h-4 text-amber-500" />
              <strong className="text-slate-700 dark:text-slate-200">{project.stars}</strong> bintang
            </span>
            <span className="flex items-center gap-1.5" title="Forks">
              <GitFork className="w-4 h-4" />
              <strong className="text-slate-700 dark:text-slate-200">{project.forks}</strong> fork
            </span>
            <span>Terakhir diperbarui {formatDate(project.updatedAt)}</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
            {project.homepageUrl && (
              <Button href={project.homepageUrl} external variant="outline" size="sm" className="w-full sm:w-auto">
                <ExternalLink className="w-4 h-4" />
                <span>Demo Langsung</span>
              </Button>
            )}
            <Button href={project.htmlUrl} external variant="primary" size="sm" className="w-full sm:w-auto">
              <Github className="w-4 h-4" />
              <span>Lihat Kode di GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </Button>
          </div>
        </div>
      </header>

      {/* Problem Statement & Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-amber-500/20 bg-amber-500/[0.02] dark:bg-amber-500/[0.03]">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold text-sm mb-3">
            <ShieldAlert className="w-4 h-4" />
            <h3>Pernyataan Masalah</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.problemStatement}
          </p>
        </Card>

        <Card className="border-sky-500/20 bg-sky-500/[0.02] dark:bg-sky-500/[0.03]">
          <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-semibold text-sm mb-3">
            <Sparkles className="w-4 h-4" />
            <h3>Solusi Rekayasa</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.solution}
          </p>
        </Card>
      </section>

      {/* System Architecture */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Arsitektur Sistem
          </h2>
        </div>
        <Card className="space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {project.architecture.overview}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.architecture.components.map((comp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-slate-200/80 dark:border-white/[0.06] bg-slate-50/50 dark:bg-white/[0.02] space-y-1.5"
              >
                <h4 className="text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                  {comp.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Key Features */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Boxes className="w-5 h-5 text-sky-600 dark:text-sky-400" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Fitur Teknis Utama
          </h2>
        </div>
        <Card>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Verified Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Sorotan & Metrik Terverifikasi
            </h2>
          </div>
          <Card className="border-emerald-500/20 bg-emerald-500/[0.02] dark:bg-emerald-500/[0.03]">
            <ul className="space-y-2 text-xs sm:text-sm">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      )}

      {/* Technology Stack */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
          Teknologi yang Diimplementasikan
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="default" className="text-xs py-1 px-3">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* Bottom Action Footer */}
      <div className="pt-8 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between">
        <Link
          href="/projects"
          className="text-xs font-mono text-slate-500 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Semua Projek</span>
        </Link>
        <Button href={project.htmlUrl} external variant="outline" size="sm">
          <Github className="w-4 h-4" />
          <span>Periksa Repositori</span>
        </Button>
      </div>
    </article>
  );
}
