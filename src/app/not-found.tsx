import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home } from "lucide-react";
import React from "react";

export default function NotFound() {
  return (
    <div className="py-24 text-center space-y-6 max-w-md mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono font-extrabold text-2xl flex items-center justify-center mx-auto border border-sky-500/20">
        404
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Halaman atau repositori rekayasa yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>
      </div>

      <div className="pt-2 flex items-center justify-center gap-3">
        <Button href="/" variant="primary" size="sm">
          <Home className="w-4 h-4" />
          <span>Beranda</span>
        </Button>
        <Button href="/projects" variant="outline" size="sm">
          <ArrowLeft className="w-4 h-4" />
          <span>Lihat Projek</span>
        </Button>
      </div>
    </div>
  );
}
