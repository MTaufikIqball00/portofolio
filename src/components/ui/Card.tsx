import { cn } from "@/lib/utils/cn";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({
  className,
  hoverEffect = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/[0.08] bg-[#0c1019]/80 backdrop-blur-sm p-6 shadow-sm",
        hoverEffect &&
          "transition-all duration-300 hover:border-white/20 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
