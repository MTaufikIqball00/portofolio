import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Github } from "@/components/ui/GithubIcon";
import { siteConfig } from "@/config/site";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  publicReposCount?: number;
}

export function HeroSection({ publicReposCount = 39 }: HeroSectionProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle background gradient accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto space-y-8 text-center sm:text-left">
        {/* Availability Pill & GitHub Verification */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
          {siteConfig.hireable && (
            <Badge variant="success" className="py-1 px-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Terbuka untuk Peluang Teknis</span>
            </Badge>
          )}
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/{siteConfig.githubUsername}</span>
          </a>
        </div>

        {/* Identity & Main Headline */}
        <div className="space-y-4">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-300 dark:border-white/20 shadow-sm flex-shrink-0">
              <Image
                src={siteConfig.avatarUrl}
                alt={siteConfig.fullName}
                fill
                sizes="48px"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-left">
              <h2 className="text-sm font-mono text-slate-500 dark:text-slate-400">
                {siteConfig.fullName} ({siteConfig.name})
              </h2>
              <p className="text-xs font-medium text-sky-600 dark:text-sky-400">
                {siteConfig.positioning}
              </p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12]">
            Membangun Sistem Cerdas. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">
              Merekayasa Solusi Nyata.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {siteConfig.heroSubtext}
          </p>
        </div>

        {/* CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <Button href="/projects" variant="primary" size="md">
            <span>Lihat Projek</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button href={siteConfig.githubUrl} external variant="outline" size="md">
            <Github className="w-4 h-4" />
            <span>Profil GitHub</span>
          </Button>

          <Button href="/contact" variant="ghost" size="md">
            <Mail className="w-4 h-4" />
            <span>Kontak</span>
          </Button>
        </div>

        {/* Quick Highlights Strip */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div>
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-slate-100">
              6
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">Projek Pinned Utama</p>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-slate-100">
              {publicReposCount}
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">Repositori Publik</p>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-slate-100">
              Python • Rust
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">Backend & Sistem Inti</p>
          </div>
          <div>
            <span className="text-xl sm:text-2xl font-mono font-bold text-slate-900 dark:text-slate-100">
              Next.js • ROS 2
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400">Full-Stack & Robotika</p>
          </div>
        </div>
      </div>
    </section>
  );
}
