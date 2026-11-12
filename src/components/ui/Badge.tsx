import { cn } from "@/lib/utils/cn";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent" | "success" | "muted";
  dotColor?: string;
}

export function Badge({
  className,
  variant = "default",
  dotColor,
  children,
  ...props
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide transition-colors";

  const variants = {
    default:
      "bg-slate-800/80 text-slate-300 border border-slate-700/60 dark:bg-white/[0.05] dark:text-slate-300 dark:border-white/10",
    outline:
      "bg-transparent text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-white/10",
    accent:
      "bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30",
    success:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
    muted:
      "bg-slate-200 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-transparent",
  };

  return (
    <span className={cn(baseClasses, variants[variant], className)} {...props}>
      {dotColor && (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: dotColor }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
