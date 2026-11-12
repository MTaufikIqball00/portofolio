"use client";

import { siteConfig } from "@/config/site";
import { Github } from "@/components/ui/GithubIcon";
import { cn } from "@/lib/utils/cn";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);

  // Close mobile menu on route change without effect
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08] shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Monogram / Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-xs tracking-wider group-hover:scale-105 transition-transform">
            MT
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-mono text-slate-600 dark:text-slate-300 -mt-0.5">
              dev.portfolio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 text-sm font-medium"
          aria-label="Navigasi Utama"
        >
          {siteConfig.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-md transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                  isActive
                    ? "text-sky-600 dark:text-sky-400 font-semibold"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-sky-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Utilities (GitHub link, Mobile trigger) */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.03] text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Profil GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#07090e]/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/[0.04]"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-300">
              Verified GitHub Portfolio
            </span>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-sky-600 dark:text-sky-400 flex items-center gap-1.5 hover:underline"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@{siteConfig.githubUsername}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
