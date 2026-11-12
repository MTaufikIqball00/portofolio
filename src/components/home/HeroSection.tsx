import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github } from "@/components/ui/GithubIcon";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  publicReposCount?: number;
}

export function HeroSection({ publicReposCount = 39 }: HeroSectionProps) {
  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/[0.06] dark:bg-sky-500/[0.08] rounded-full blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top 2-Column Split: Formal Identity & Executive Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (7 cols): Formal Intro, Title, Executive Bio, Credentials & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              {siteConfig.hireable && (
                <Badge variant="success" className="py-1 px-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Terbuka untuk Peluang Rekayasa & AI</span>
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

            {/* Formal Name & Heading */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
                  Portofolio Rekayasa Perangkat Lunak & AI
                </p>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-[1.12]">
                  {siteConfig.fullName}
                </h1>
              </div>

              <p className="text-sm sm:text-base font-mono font-medium text-slate-700 dark:text-slate-300">
                {siteConfig.positioning}
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Software engineer dengan fokus utama pada arsitektur sistem cerdas berbasis bukti nyata, rekayasa backend berkinerja tinggi, dan robotika otonom. Berpengalaman di industri sebagai Full Stack Developer di <strong>Kemendikbud Bandung</strong>, lulusan <strong>Universitas Komputer Indonesia (IPK 3.39)</strong> dengan tugas akhir drone otonom, serta tersertifikasi <strong>Ilmuwan Data Madya (BNSP)</strong>, <strong>Google AI</strong>, &amp; <strong>NVIDIA OpenUSD</strong>.
              </p>
            </div>

            {/* Formal Credential Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02] text-xs font-mono text-slate-700 dark:text-slate-300">
                <Briefcase className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-slate-100">Kemendikbud</span>
                  <span className="text-[11px] text-slate-500">Full Stack Developer</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02] text-xs font-mono text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-slate-100">UNIKOM • IPK 3.39</span>
                  <span className="text-[11px] text-slate-500">Tugas Akhir: Drone Otonom</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200/90 dark:border-white/[0.08] bg-slate-50/70 dark:bg-white/[0.02] text-xs font-mono text-slate-700 dark:text-slate-300">
                <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 dark:text-slate-100">Sertifikasi Resmi</span>
                  <span className="text-[11px] text-slate-500">BNSP, Google, NVIDIA, Cisco</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button href="/projects" variant="primary" size="md">
                <span>Jelajahi Projek</span>
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
          </div>

          {/* Right Column (5 cols): Formal Executive Profile Card */}
          <div className="lg:col-span-5 w-full">
            <Card className="p-6 border-slate-200/90 dark:border-white/[0.1] bg-gradient-to-b from-white to-slate-50/80 dark:from-white/[0.03] dark:to-white/[0.01] shadow-lg space-y-5">
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-slate-300 font-bold">
                    Kredensial Rekayasa
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  ID: MT-00
                </span>
              </div>

              {/* Profile Identity Row */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-slate-300 dark:border-white/20 shadow-sm flex-shrink-0">
                  <Image
                    src={siteConfig.avatarUrl}
                    alt={siteConfig.fullName}
                    fill
                    sizes="64px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                    {siteConfig.fullName}
                  </h3>
                  <p className="text-xs font-mono text-sky-600 dark:text-sky-400">
                    AI Engineer & Software Developer
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Bandung, Indonesia
                  </p>
                </div>
              </div>

              {/* Structured Key Metrics Rows */}
              <div className="space-y-2 pt-1 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Briefcase className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                    <span>Pengalaman Industri</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    Kemendikbud (2 Bulan)
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Pendidikan Terakhir</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    UNIKOM (IPK 3.39)
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Terminal className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                    <span>Tugas Akhir Sarjana</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    Drone Otonom Pertanian
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                    <Award className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>Sertifikasi Profesi</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">
                    BNSP, Google &amp; NVIDIA ({siteConfig.certificates.length} Lisensi)
                  </span>
                </div>
              </div>

              {/* Core Tech Tags */}
              <div className="pt-2 border-t border-slate-200/80 dark:border-white/[0.08]">
                <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                  Teknologi & Stack Terapan:
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">Python</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">Rust</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">Next.js 15</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">TypeScript</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">PostgreSQL</span>
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">ROS 2</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">Vercel</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom 5-Column KPI / Metrics Strip */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-slate-100">
              3.39
            </span>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">IPK Sarjana di UNIKOM</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Tugas Akhir: Drone Otonom</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-slate-100">
              2 Bulan
            </span>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Kemendikbud Bandung</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Full Stack Developer (LMS)</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-slate-100">
              {siteConfig.certificates.length}
            </span>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Sertifikat Resmi</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">BNSP, Google, NVIDIA, Cisco</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-slate-100">
              {siteConfig.verifiedPinnedRepos.length}
            </span>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Projek Terverifikasi</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">3 Live Demo di Vercel</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-mono font-bold text-slate-900 dark:text-slate-100">
              {publicReposCount}
            </span>
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Repositori Publik</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Kode Nyata di GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
}
