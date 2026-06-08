"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, Minus, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Plan } from "@/lib/pricing";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function PricingCard({
  plan,
  index,
}: {
  plan: Plan;
  index: number;
}) {
  const featured = !!plan.featured;

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 150,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 16,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  // Send the visitor to the contact form and pre-fill it with this plan.
  function selectPlan() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("noix:plan", { detail: plan.name }));
    }
  }

  return (
    <motion.div
      className={cn("perspective h-full", featured && "lg:-mt-4 lg:mb-4")}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: index * 0.12 }}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={cn(
          "group relative flex h-full flex-col rounded-2xl p-5 transition-shadow duration-300 sm:p-7 lg:p-8",
          featured
            ? "glass-strong shadow-glow-lg ring-1 ring-noix-blue/40"
            : "glass hover:shadow-glow",
        )}
      >
        {/* Glow halo for the featured plan */}
        {featured && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[1px] -z-10 rounded-2xl bg-blue-sheen opacity-20 blur-2xl"
          />
        )}

        {/* Badge */}
        {plan.badge && (
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2"
            style={{ transform: "translateZ(40px)" }}
          >
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-noix-blue px-3 py-1 text-[11px] font-semibold text-white shadow-glow sm:px-3.5 sm:py-1.5 sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              {plan.badge}
            </span>
          </div>
        )}

        <div
          className="flex flex-col gap-1.5 sm:gap-2"
          style={{ transform: "translateZ(30px)" }}
        >
          <h3 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            {plan.name}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground sm:min-h-[42px] sm:text-sm">
            {plan.tagline}
          </p>
        </div>

        {/* Price */}
        <div
          className="mt-4 border-y border-white/10 py-4 sm:mt-6 sm:py-6"
          style={{ transform: "translateZ(24px)" }}
        >
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Desde
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {plan.priceFrom}
              <span className="align-top text-2xl sm:text-3xl">€</span>
            </span>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            + <span className="font-semibold text-noix-blue-soft">{plan.monthly}€</span>{" "}
            / mes de mantenimiento
          </div>
        </div>

        {/* Features */}
        <div className="mt-4 flex-1 sm:mt-6">
          {plan.inherits && (
            <p className="mb-2.5 text-sm font-semibold text-white/90">
              {plan.inherits}
            </p>
          )}
          <ul className="space-y-2 sm:space-y-3">
            {plan.features.map((f) => (
              <li key={f.label} className="flex items-start gap-3 text-sm">
                {f.included ? (
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-noix-blue/15 text-noix-blue">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                ) : (
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-muted-foreground/60">
                    <Minus className="h-3.5 w-3.5" />
                  </span>
                )}
                <span
                  className={cn(
                    f.included ? "text-white/85" : "text-muted-foreground/60",
                  )}
                >
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA → scrolls to the contact form and pre-fills the plan */}
        <a
          href="#contacto"
          onClick={selectPlan}
          style={{ transform: "translateZ(36px)" }}
          className={cn(
            "mt-6 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noix-blue focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night sm:mt-8 sm:py-3.5",
            featured
              ? "bg-noix-blue text-white shadow-glow hover:bg-[#4a9bff] hover:shadow-glow-lg"
              : "border border-white/15 bg-white/[0.04] text-white hover:border-noix-blue/50 hover:bg-white/[0.08]",
          )}
        >
          {plan.cta}
        </a>
      </motion.div>
    </motion.div>
  );
}
