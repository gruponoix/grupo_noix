import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Chip({
  children,
  icon,
  className,
}: {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md transition-colors hover:border-noix-blue/40 hover:text-white",
        className,
      )}
    >
      {icon ?? (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-noix-blue opacity-70" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-noix-blue" />
        </span>
      )}
      {children}
    </span>
  );
}
