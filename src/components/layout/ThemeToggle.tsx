"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import React from "react";

export function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-9 h-9 rounded-lg border border-slate-700/60 dark:border-white/10 bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 dark:hover:border-sky-500/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      aria-label={`Beralih ke mode ${isDark ? "terang" : "gelap"}`}
      title={`Beralih ke mode ${isDark ? "terang" : "gelap"}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
