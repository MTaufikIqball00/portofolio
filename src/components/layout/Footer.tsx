import { siteConfig } from "@/config/site";
import { Github } from "@/components/ui/GithubIcon";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#07090e]/80 py-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Identity column */}
          <div className="sm:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-white text-slate-950 flex items-center justify-center font-mono font-bold text-[10px]">
                MT
              </span>
              <span className="font-semibold text-slate-100 text-sm">
                {siteConfig.fullName}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {siteConfig.positioning}. Merekayasa arsitektur perangkat lunak yang tangguh pada ranah AI, robotika, dan sistem terdistribusi.
            </p>

            {/* Social & Contact Icons (Hanya Ikon) */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-sky-400 bg-white/[0.03] text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                title={`Kirim Email (${siteConfig.email})`}
                aria-label={`Kirim Email ke ${siteConfig.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 hover:border-sky-400 bg-white/[0.03] text-slate-300 hover:text-sky-400 flex items-center justify-center transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                title={`Profil GitHub (@${siteConfig.githubUsername})`}
                aria-label={`Profil GitHub @${siteConfig.githubUsername}`}
              >
                <Github className="w-4 h-4" />
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
        <div className="pt-8 border-t border-slate-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 dark:text-slate-400 gap-4 text-center sm:text-left">
          <p>© {currentYear} {siteConfig.fullName}. Seluruh hak cipta dilindungi.</p>
          <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400">
            Next.js App Router • TypeScript Strict • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
