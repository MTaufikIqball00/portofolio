"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Github } from "@/components/ui/GithubIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  MessageSquare,
  Send,
} from "lucide-react";
import React, { useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyGitHub = () => {
    navigator.clipboard.writeText(siteConfig.githubUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending / preparing message
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-16">
      <SectionHeader
        badge="Komunikasi Langsung"
        title="Hubungi Saya"
        description="Terbuka untuk posisi rekayasa perangkat lunak, kolaborasi riset AI, dan diskusi projek open-source. GitHub adalah platform kontak utama yang terverifikasi."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Verified Channels */}
        <div className="space-y-6 md:col-span-1">
          <Card className="space-y-4 border-slate-200/90 dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                Status Ketersediaan
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Tersedia untuk posisi rekayasa penuh waktu (full-time), kontrak teknis profesional, dan pengembangan sistem cerdas terapan.
            </p>
          </Card>

          {/* Primary GitHub Card */}
          <Card className="space-y-4 border-slate-200/90 dark:border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100">
                  Saluran Kontak Utama
                </h4>
                <p className="text-[11px] text-slate-500">Profil GitHub</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Terhubung langsung melalui repositori, issue, atau diskusi GitHub:
            </p>

            <div className="space-y-2">
              <Button
                href={siteConfig.githubUrl}
                external
                variant="primary"
                size="sm"
                className="w-full text-xs"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Kunjungi @{siteConfig.githubUsername}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </Button>

              <button
                type="button"
                onClick={handleCopyGitHub}
                className="w-full py-1.5 px-3 rounded-lg border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Tautan Profil Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Tautan Profil</span>
                  </>
                )}
              </button>
            </div>
          </Card>
        </div>

        {/* Right Column: Professional Inquiries Form */}
        <div className="md:col-span-2">
          <Card className="p-6 border-slate-200/90 dark:border-white/[0.08]">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              <span>Kirim Pesan Profesional</span>
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Memiliki projek teknis, peluang rekayasa, atau pertanyaan arsitektur? Kirimkan pesan langsung melalui formulir ini.
            </p>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] p-6 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Pesan Berhasil Disiapkan
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Terima kasih telah menghubungi, {formData.name || "rekan"}! Anda juga dapat terhubung langsung melalui profil GitHub di{" "}
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 underline font-mono"
                  >
                    @{siteConfig.githubUsername}
                  </a>.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Kirim Pesan Lainnya
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                    >
                      Nama Lengkap *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="mis. Budi Santoso"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                    >
                      Alamat Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    Subjek *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="mis. Peluang AI Engineering / Konsultasi Arsitektur"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                  >
                    Pesan *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Detail mengenai posisi, projek, atau topik diskusi..."
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{loading ? "Mengirim..." : "Kirim Pesan"}</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
