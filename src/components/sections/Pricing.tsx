"use client";

import { ArrowUpRight, MessageSquareQuote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PricingCarousel from "@/components/ui/PricingCarousel";
import { Reveal } from "@/components/ui/Reveal";

export default function Pricing() {
  return (
    <section id="planes" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Planes y precios"
          title={
            <>
              Precios claros para una web{" "}
              <span className="text-gradient-blue">que trabaja por ti</span>
            </>
          }
          subtitle="Un pago inicial y un mantenimiento mensual que lo cubre todo. Sin permanencias eternas ni sorpresas: eliges según lo que tu negocio necesita vender."
        />

        <PricingCarousel />

        {/* Custom budget block */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-6xl">
            <div className="glass flex flex-col items-start justify-between gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-noix-blue/15 text-noix-blue">
                  <MessageSquareQuote className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    ¿Proyecto distinto?
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Cada negocio es un mundo. Cuéntanos el tuyo y te preparamos un
                    presupuesto personalizado a medida.
                  </p>
                </div>
              </div>
              <a
                href="#contacto"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("noix:prefill", {
                      detail:
                        "Hola, me gustaría un presupuesto personalizado para mi proyecto. Os cuento un poco: ",
                    }),
                  )
                }
                className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-all hover:border-noix-blue/50 hover:bg-white/[0.08]"
              >
                Presupuesto personalizado
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-muted-foreground/70">
          Precios orientativos en euros, IVA no incluido. El mantenimiento
          mensual incluye dominio, servidor, SSL, copias de seguridad,
          actualizaciones y soporte.
        </p>
      </div>
    </section>
  );
}
