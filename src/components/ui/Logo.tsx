import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "select-none font-extrabold tracking-tightest text-foreground",
        className,
      )}
    >
      NO
      <span
        className="text-noix-blue"
        style={{ textShadow: "0 0 18px rgba(47,139,255,0.55)" }}
      >
        I
      </span>
      X
    </span>
  );
}
