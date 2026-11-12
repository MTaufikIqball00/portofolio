import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillCategories } from "@/config/skills";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export function SkillsGrid() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16">
      <SectionHeader
        badge="Kompetensi Berbasis Bukti"
        title="Keahlian Teknis & Kapabilitas Terapan"
        description="Setiap teknologi yang tercantum di bawah ini didukung oleh kode nyata yang berfungsi di repositori publik GitHub saya. Tanpa metrik palsu, persentase arbitrer, atau klaim tanpa bukti."
      />

      <div className="space-y-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <div className="border-b border-slate-200/80 dark:border-white/[0.08] pb-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>{category.title}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.skills.map((skill, sIdx) => (
                <Card
                  key={sIdx}
                  hoverEffect
                  className="p-4 flex flex-col justify-between space-y-3 border-slate-200/80 dark:border-white/[0.08]"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-mono">
                        {skill.name}
                      </h3>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] font-mono text-slate-600 dark:text-slate-300">
                      Repositori terverifikasi:
                    </span>
                    {skill.verifiedIn.map((repo) => (
                      <Link
                        key={repo}
                        href={`/projects/${repo.toLowerCase()}`}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-sky-600 dark:text-sky-400 hover:underline border border-slate-200 dark:border-white/[0.06]"
                      >
                        {repo}
                      </Link>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
