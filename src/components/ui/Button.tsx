import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2 gap-2",
    lg: "text-base px-5 py-2.5 gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-white text-slate-950 hover:bg-slate-200 shadow-sm font-semibold",
    secondary:
      "bg-white/[0.06] text-slate-200 hover:bg-white/[0.1] border border-white/10",
    outline:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.05] border border-white/15 hover:border-white/30",
    ghost:
      "bg-transparent text-slate-400 hover:text-white hover:bg-white/[0.05]",
  };

  const combinedClass = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
}
