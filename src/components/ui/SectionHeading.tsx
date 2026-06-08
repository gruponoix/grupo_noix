import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-noix-blue-soft",
              align === "center" ? "self-center" : "self-start",
            )}
          >
            <span className="h-px w-6 bg-noix-blue/60" />
            {eyebrow}
            <span className="h-px w-6 bg-noix-blue/60" />
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
