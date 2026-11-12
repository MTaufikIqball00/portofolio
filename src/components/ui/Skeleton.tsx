import { cn } from "@/lib/utils/cn";
import React from "react";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-200 dark:bg-white/[0.06]",
        className
      )}
      {...props}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-xl border border-slate-200/80 dark:border-white/[0.08] bg-white/70 dark:bg-[#0d121d]/80 p-6 flex flex-col justify-between h-full space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-4 w-12 rounded" />
        </div>
        <Skeleton className="h-6 w-3/4 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-5/6 rounded" />
      </div>
      <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
        <Skeleton className="h-4 w-20 rounded" />
        <Skeleton className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}
