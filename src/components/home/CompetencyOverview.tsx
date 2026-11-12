import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Bot, Cpu, GitBranch, Layers } from "lucide-react";
import Link from "next/link";
import React from "react";

const PILLARS = [
  {
    icon: Bot,
    title: "Rekayasa AI & LLMOps",
    description:
      "Mengembangkan platform GraphRAG sadar-struktur, graf pengetahuan properti, dan pipeline evaluasi model end-to-end memanfaatkan Ragas, TruLens, serta metrik halusinasi.",
    verifiedProjects: [
      { name: "AutomatedGraph", slug: "automatedgraph" },
      { name: "LLMOps-Evaluasi-Model-End-To-End", slug: "llmops-evaluasi-model-end-to-end" },
    ],
  },
  {
    icon: Cpu,
    title: "Sistem Kinerja Tinggi & Rust",
    description:
      "Membangun layanan backend type-safe dan memory-safe dalam Rust (Axum, Tokio, SQLx) dan Python (FastAPI) dengan basis data tertanam SQLite berkinerja tinggi serta konkurensi tinggi.",
    verifiedProjects: [
      { name: "OmniMed-Insight", slug: "omnimed-insight" },
      { name: "LLMOps-Evaluasi-Model-End-To-End", slug: "llmops-evaluasi-model-end-to-end" },
    ],
  },
  {
    icon: GitBranch,
    title: "Robotika Otonom & Simulasi (Tugas Akhir)",
    description:
      "Riset & Tugas Akhir di Universitas Komputer Indonesia (IPK 3.39): Merekayasa sistem wahana udara otonom memadukan ROS 2 Jazzy, PX4 Autopilot, dunia simulasi fisika Gazebo Harmonic, penghindaran rintangan dinamis LiDAR, dan perencanaan jalur A*.",
    verifiedProjects: [{ name: "Harvest_Drone", slug: "harvest_drone" }],
  },
  {
    icon: Layers,
    title: "Full-Stack Enterprise & LMS",
    description:
      "Pengalaman sebagai Full Stack Developer di Kemendikbud Bandung (projek LMS) serta rekayasa sistem enterprise berbasis Next.js, Supabase PostgreSQL, kepatuhan regulasi HL7 FHIR R4, dan clustering K-Means.",
    verifiedProjects: [
      { name: "LMS", slug: "lms" },
      { name: "Medchain", slug: "medchain" },
    ],
  },
];

export function CompetencyOverview() {
  return (
    <section className="py-16 border-t border-white/[0.08]">
      <SectionHeader
        badge="Kapabilitas Inti"
        title="Fokus Rekayasa & Pilar Arsitektur"
        description="Kapabilitas teknis inti yang terverifikasi melalui implementasi perangkat lunak open-source nyata dan arsitektur sistem tingkat produksi."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <Card
              key={idx}
              hoverEffect
              className="space-y-4 border-slate-200/90 dark:border-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {pillar.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-mono text-slate-500">Terverifikasi di:</span>
                {pillar.verifiedProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/40 border border-slate-200 dark:border-white/10 transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
