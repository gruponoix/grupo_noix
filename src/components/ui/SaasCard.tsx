"use client";

import { motion } from "framer-motion";
import {
  Building2,
  ArrowRight,
  LayoutDashboard,
  Users,
  Workflow,
  Plug,
  type LucideIcon,
} from "lucide-react";
import { SAAS_OFFER, type SaasIcon } from "@/lib/pricing";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const ICONS: Record<SaasIcon, LucideIcon> = {
  dashboard: LayoutDashboard,
  users: Users,
  workflow: Workflow,
  plug: Plug,
};

/** Enterprise-style wide card: custom SaaS / software for companies. */
export default function SaasCard() {
  function selectSaas() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("noix:prefill", { detail: SAAS_OFFER.prefill }),
      );
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mx-auto mt-8 max-w-6xl"
    >
      <div className="group relative overflow-hidden rounded-2xl">
        {/* Gradient border frame */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            padding: 1,
            background:
              "linear-gradient(120deg, rgba(47,139,255,.55), rgba(124,192,255,.12) 40%, rgba(47,139,255,.45))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
        {/* Soft corner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-noix-blue/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="glass-strong flex flex-col gap-8 rounded-2xl p-7 sm:p-9 lg:flex-row lg:items-center lg:gap-10">
          {/* Left: pitch + features */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-noix-blue/30 bg-noix-blue/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-noix-blue-soft">
              <Building2 className="h-3.5 w-3.5" />
              {SAAS_OFFER.eyebrow}
            </span>

            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {SAAS_OFFER.name}
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {SAAS_OFFER.tagline}
            </p>

            <ul className="mt-6 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {SAAS_OFFER.features.map((f) => {
                const Icon = ICONS[f.icon];
                return (
                  <li key={f.label} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-noix-blue/15 text-noix-blue">
                      <Icon style={{ width: 18, height: 18 }} />
                    </span>
                    {f.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: price + CTA */}
          <div className="flex shrink-0 flex-col items-stretch gap-4 border-t border-white/10 pt-7 lg:w-72 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Desde
              </div>
              <div className="mt-1 text-4xl font-extrabold tracking-tight text-white">
                {SAAS_OFFER.priceFrom}
                <span className="align-top text-2xl">€</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                {SAAS_OFFER.priceNote}
              </p>
            </div>
            <a
              href="#contacto"
              onClick={selectSaas}
              className="group/cta inline-flex items-center justify-center gap-2 rounded-lg bg-noix-blue px-5 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-[#4a9bff] hover:shadow-glow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noix-blue focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night"
            >
              {SAAS_OFFER.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
            </a>
            <p className="text-center text-xs text-muted-foreground/70">
              Respuesta en menos de 24h
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
