import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { Award, Cpu, ExternalLink, ShieldCheck } from "lucide-react";
import React from "react";

export function CertificationsSection() {
  return (
    <section className="py-14 border-t border-white/[0.08]">
      <SectionHeader
        badge="Kredensial Resmi"
        title="Sertifikasi & Lisensi Profesional"
        description="Sertifikasi kompetensi resmi terverifikasi dari Badan Nasional Sertifikasi Profesi (BNSP), NVIDIA, dan Cisco Networking Academy."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {siteConfig.certificates.map((cert) => {
          const isBnsp = cert.issuerCategory === "BNSP";
          const isNvidia = cert.issuerCategory === "NVIDIA";

          const IconComponent = isBnsp
            ? Award
            : isNvidia
            ? Cpu
            : ShieldCheck;

          const accentColorClass = isBnsp
            ? "bg-emerald-500/10 text-emerald-400"
            : isNvidia
            ? "bg-sky-500/10 text-sky-400"
            : "bg-indigo-500/10 text-indigo-400";

          return (
            <Card
              key={cert.id}
              hoverEffect
              className={`p-4 sm:p-5 flex flex-col justify-between space-y-3.5 border-slate-200/90 dark:border-white/[0.08] ${
                isBnsp
                  ? "border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.03] to-transparent"
                  : ""
              }`}
            >
              <div className="space-y-2.5">
                {/* Header row: Icon + Title */}
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${accentColorClass}`}
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-slate-100 leading-snug line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5 truncate">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Footer Row: matches reference card */}
              <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <span>Status:</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/10 text-[10px]">
                    {cert.status || cert.issuerCategory}
                  </span>
                </div>

                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-sky-400 hover:text-sky-300 hover:underline transition-colors"
                  >
                    <span>Verifikasi</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="text-[10px] text-slate-500 font-mono">
                    {cert.issueDate}
                  </span>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
