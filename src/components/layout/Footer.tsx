import { siteConfig } from "@/config/site";
import { Github } from "@/components/ui/GithubIcon";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-slate-200/80 dark:border-white/[0.08] bg-slate-50/50 dark:bg-[#07090e]/50 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Identity column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-[10px]">
                MT
              </span>
              <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">
                {siteConfig.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.positioning}. Merekayasa arsitektur perangkat lunak yang tangguh pada ranah AI, robotika, dan sistem terdistribusi.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                aria-label="Profil GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/{siteConfig.githubUsername}</span>
                <ArrowUpRight className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Navigation Shortcuts */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">
              Navigasi
            </h3>
            <ul className="space-y-2 text-xs">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Technical Stack */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">
              Fokus Sistem
            </h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>AI & Mesin GraphRAG</li>
              <li>Robotika Otonom (ROS 2/PX4)</li>
              <li>Sistem Kinerja Tinggi (Rust)</li>
              <li>Sistem Medis & Multi-Tenansi</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-4">
          <p>© {currentYear} {siteConfig.fullName}. Seluruh hak cipta dilindungi.</p>
          <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
            Next.js App Router • TypeScript Strict • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
