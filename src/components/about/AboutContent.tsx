import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  Award,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  ExternalLink,
  FileText,
  GraduationCap,
  Layers,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-16">
      {/* Intro Header */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-300 dark:border-white/20 shadow-md flex-shrink-0">
            <Image
              src={siteConfig.avatarUrl}
              alt={siteConfig.fullName}
              fill
              sizes="96px"
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
                {siteConfig.fullName}
              </h1>
              <Badge variant="accent">AI & Perangkat Lunak</Badge>
            </div>
            <p className="text-sm sm:text-base font-mono text-sky-600 dark:text-sky-400">
              {siteConfig.positioning}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5 font-mono text-slate-700 dark:text-slate-300">
                <Briefcase className="w-3.5 h-3.5 text-sky-500" />
                <span>Eks Full Stack Developer • Kemendikbud Bandung</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-mono text-slate-700 dark:text-slate-300">
                <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
                <span>{siteConfig.education.institutionShort} (IPK {siteConfig.education.gpa})</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-mono text-slate-700 dark:text-slate-300">
                <Award className="w-3.5 h-3.5 text-emerald-500" />
                <span>Ilmuwan Data Madya (BNSP) & NVIDIA</span>
              </span>
              <span>•</span>
              <span>
                Profil GitHub:{" "}
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-300 hover:underline"
                >
                  @{siteConfig.githubUsername}
                </a>
              </span>
            </div>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
          Saya adalah seorang software engineer yang berfokus membangun sistem cerdas berbasis bukti nyata (evidence-grounded). Rekayasa yang saya kembangkan mencakup persimpangan antara kecerdasan buatan terapan, rekayasa sistem berkinerja tinggi, dan robotika otonom. Saya memprioritaskan arsitektur perangkat lunak yang tangguh, evaluasi deterministik, dan keamanan tipe data end-to-end.
        </p>
      </section>

      {/* Education Background */}
      <section className="space-y-6">
        <SectionHeader
          badge="Akademik"
          title="Pendidikan Terakhir"
          description="Latar belakang studi sarjana dan riset rekayasa tugas akhir berbasis wahana nirawak otonom."
          className="mb-6"
        />

        <Card className="p-6 sm:p-8 border-sky-500/20 bg-gradient-to-br from-sky-500/[0.03] to-indigo-500/[0.02] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/[0.08]">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {siteConfig.education.institution}
                  </h3>
                  <Badge variant="accent">Pendidikan Terakhir</Badge>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  {siteConfig.education.institutionShort}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs sm:text-sm font-semibold">
              <Award className="w-4 h-4 text-emerald-500" />
              <span>IPK: {siteConfig.education.gpa} / {siteConfig.education.maxGpa}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                Tugas Akhir / Skripsi
              </span>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                &ldquo;{siteConfig.education.thesis}&rdquo;
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {siteConfig.education.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10">ROS 2 Jazzy</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10">PX4 Autopilot</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10">LiDAR 2D Obstacle Avoidance</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10">Gazebo Harmonic</span>
              </div>

              <Button
                href={`/projects/${siteConfig.education.relatedProjectSlug}`}
                variant="outline"
                size="sm"
                className="text-xs whitespace-nowrap"
              >
                <span>Lihat Implementasi (Harvest_Drone)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Professional Experience */}
      <section className="space-y-6">
        <SectionHeader
          badge="Karier"
          title="Pengalaman Kerja & Profesional"
          description="Rekam jejak kontribusi rekayasa perangkat lunak pada instansi pemerintah dalam pengembangan sistem berskala enterprise."
          className="mb-6"
        />

        <div className="space-y-4">
          {siteConfig.experience.map((exp, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-8 border-sky-500/20 bg-gradient-to-br from-slate-900/[0.02] to-sky-500/[0.02] dark:from-white/[0.02] dark:to-sky-500/[0.03] space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-white/[0.08]">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {exp.role}
                      </h3>
                      <Badge variant="accent">{exp.company}</Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {exp.companyFull}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 self-start sm:self-auto px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-600 dark:text-sky-400 font-mono text-xs sm:text-sm font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>Durasi: {exp.period}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    Projek Utama yang Dikembangkan
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                    {exp.project}
                  </h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Button
                    href={`/projects/${exp.projectSlug}`}
                    variant="outline"
                    size="sm"
                    className="text-xs whitespace-nowrap"
                  >
                    <span>Lihat Implementasi (LMS)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Professional Certifications & Credentials */}
      <section className="space-y-6">
        <SectionHeader
          badge="Sertifikasi"
          title="Sertifikasi & Kredensial Profesional"
          description="Sertifikasi kompetensi resmi terverifikasi dari Badan Nasional Sertifikasi Profesi (BNSP), NVIDIA, dan Cisco Networking Academy."
          className="mb-6"
        />

        <div className="space-y-4">
          {siteConfig.certificates.map((cert) => {
            const isBnsp = cert.issuerCategory === "BNSP";
            return (
              <Card
                key={cert.id}
                className={`p-6 sm:p-7 border-slate-200/80 dark:border-white/[0.08] hover:border-sky-500/30 transition-all bg-[#0c1019]/80 space-y-4 ${
                  isBnsp
                    ? "border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.04] to-sky-500/[0.02]"
                    : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-white/[0.08]">
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isBnsp
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-sky-500/10 text-sky-400"
                      }`}
                    >
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                          {cert.title}
                        </h3>
                        <Badge variant={isBnsp ? "success" : "accent"}>
                          {cert.issuerCategory}
                        </Badge>
                        {cert.status && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-emerald-400 font-semibold">
                            {cert.status}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {"credentialId" in cert && cert.credentialId && (
                  <div className="text-[11px] font-mono text-slate-400 bg-black/20 px-3 py-1.5 rounded-lg border border-white/[0.05] flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span>
                      <strong className="text-slate-300">No. Sertifikasi / SKHA:</strong> {cert.credentialId}
                    </span>
                    {"licenseNumber" in cert && cert.licenseNumber && (
                      <span>
                        <strong className="text-slate-300">Lisensi:</strong> {cert.licenseNumber}
                      </span>
                    )}
                    {"signee" in cert && cert.signee && (
                      <span className="text-slate-400">
                        <strong className="text-slate-300">Otorisasi:</strong> {cert.signee}
                      </span>
                    )}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-slate-400">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08] text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {"verificationUrl" in cert && cert.verificationUrl && (
                    <Button
                      href={cert.verificationUrl}
                      external
                      variant="outline"
                      size="sm"
                      className="text-xs whitespace-nowrap self-stretch sm:self-auto"
                    >
                      <span>Verifikasi Kredensial</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="space-y-6">
        <SectionHeader
          badge="Prinsip"
          title="Prinsip Rekayasa & Pengembangan"
          description="Prinsip panduan yang diterapkan di seluruh repositori, arsitektur sistem, dan kontribusi open-source saya."
          className="mb-6"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="space-y-2">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
              <Brain className="w-4 h-4" />
              <h4>AI Berbasis Bukti Nyata (Evidence-Grounded AI)</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sistem AI harus dapat diaudit, diverifikasi, dan dijelaskan. Baik saat mengekstraksi graf properti di AutomatedGraph maupun menghitung peta panas Grad-CAM di OmniMed-Insight, setiap inferensi memerlukan sitasi bukti yang ketat.
            </p>
          </Card>

          <Card className="space-y-2">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <h4>Keamanan Memori & Waktu Kompilasi</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Memprioritaskan jaminan keamanan saat kompilasi. Memanfaatkan Rust (Axum, Tokio) untuk gateway keamanan kritis dan TypeScript strict mode di seluruh lapisan frontend untuk mengeliminasi kesalahan runtime sebelum rilis produksi.
            </p>
          </Card>

          <Card className="space-y-2">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
              <Terminal className="w-4 h-4" />
              <h4>Evaluasi Deterministik & LLMOps</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Model machine learning dalam produksi membutuhkan validasi kualitas berkelanjutan yang ketat. Pipeline evaluasi otomatis dengan Ragas, TruLens, dan metrik Prometheus memastikan penekanan halusinasi serta konsistensi performa.
            </p>
          </Card>

          <Card className="space-y-2">
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-sm">
              <Layers className="w-4 h-4" />
              <h4>Pragmatisme Dunia Nyata</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Sistem harus beroperasi secara andal di bawah batasan dunia nyata—seperti Ground Control Station luring (PMTiles) saat survei lapangan drone, fallback SQLite tertanam tanpa dependensi eksternal, dan isolasi data multi-tenant.
            </p>
          </Card>
        </div>
      </section>

      {/* Verified Technical Focus Areas */}
      <section className="space-y-6">
        <SectionHeader
          badge="Spesialisasi"
          title="Fokus Teknis & Ranah Aktif"
          description="Bidang riset terapan, rekayasa perangkat lunak, dan implementasi kode yang diverifikasi langsung dari repositori publik."
          className="mb-6"
        />

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                1. GraphRAG & Large Language Model Operations (LLMOps)
              </h3>
              <Badge variant="accent">AI / RAG</Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Merekayasa pipeline chunking sadar-struktur, graf pengetahuan properti (NetworkX, SQLite), serta retrieval hibrida leksikal (BM25) dan vektor dens. Membangun pusat kontrol LLMOps dengan pelacakan eksperimen, staging model registry, dan skor halusinasi otomatis.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>Terverifikasi di:</span>
              <Link href="/projects/automatedgraph" className="text-sky-600 dark:text-sky-400 hover:underline">
                AutomatedGraph
              </Link>
              <span>•</span>
              <Link href="/projects/llmops-evaluasi-model-end-to-end" className="text-sky-600 dark:text-sky-400 hover:underline">
                LLMOps Control Center
              </Link>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                2. Robotika Otonom & Edge Computing Udara
              </h3>
              <Badge variant="accent">Robotika</Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Menghubungkan ROS 2 Jazzy dengan perpesanan micro-XRCE-DDS PX4 Autopilot, simulasi fisika 3D Gazebo Harmonic, penghindaran rintangan LiDAR dinamis 2D, dan perencanaan jalur A*. Mengintegrasikan fotogrametri edge untuk deteksi kematangan panen pertanian.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>Terverifikasi di:</span>
              <Link href="/projects/harvest_drone" className="text-sky-600 dark:text-sky-400 hover:underline">
                Harvest_Drone
              </Link>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                3. Backend Kinerja Tinggi & AI yang Dapat Dijelaskan (XAI)
              </h3>
              <Badge variant="accent">Rust / XAI</Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Merancang platform dual-runtime yang memadukan batas keamanan memori Rust (Axum, Tokio) dengan model deep learning visi PyTorch. Menghitung peta panas fitur Grad-CAM secara real-time dan mengekspor bundle klinis sesuai standar HL7 FHIR R4.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>Terverifikasi di:</span>
              <Link href="/projects/omnimed-insight" className="text-sky-600 dark:text-sky-400 hover:underline">
                OmniMed-Insight
              </Link>
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                4. Web Enterprise & Sistem Multi-Tenansi
              </h3>
              <Badge variant="accent">Full-Stack</Badge>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Membangun aplikasi multi-tenant di Next.js dengan Supabase PostgreSQL, kontrol akses berbasis peran (RBAC), sinkronisasi buku besar audit terenkripsi, serta clustering profil mahasiswa (K-Means).
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span>Terverifikasi di:</span>
              <Link href="/projects/medchain" className="text-sky-600 dark:text-sky-400 hover:underline">
                Medchain
              </Link>
              <span>•</span>
              <Link href="/projects/lms" className="text-sky-600 dark:text-sky-400 hover:underline">
                LMS
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Call to action */}
      <section className="p-8 rounded-2xl border border-slate-200/80 dark:border-white/[0.08] bg-slate-100/50 dark:bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Tertarik untuk kolaborasi teknis?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Jelajahi implementasi kode sumber terbuka atau hubungi saya untuk diskusi rekayasa perangkat lunak.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button href="/projects" variant="primary" size="md">
            <span>Jelajahi Projek</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/contact" variant="outline" size="md">
            <span>Hubungi Saya</span>
          </Button>
        </div>
      </section>
    </div>
  );
}
