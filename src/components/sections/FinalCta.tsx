"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FinalCta() {
  return (
    <section id="contacto" className="relative scroll-mt-24 px-4 py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-noix-blue/30 px-6 py-16 text-center sm:px-12 sm:py-20"
          style={{
            background:
              "radial-gradient(120% 140% at 50% -20%, rgba(47,139,255,0.35) 0%, rgba(19,32,58,0.6) 45%, rgba(10,15,28,0.9) 100%)",
          }}
        >
          {/* animated glow */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 animate-glow-pulse bg-radial-glow"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-noix-blue/30 blur-3xl"
            aria-hidden
          />

          <h2 className="text-balance text-4xl font-black tracking-tightest text-white sm:text-6xl">
            ¿Empezamos?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/75 sm:text-lg">
            Cuéntanos qué hace tu negocio y te diremos, sin compromiso, cómo tu
            web puede empezar a vender más. Respondemos rápido.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@gruponoix.com?subject=Quiero%20una%20web%20que%20venda%20%E2%80%94%20Grupo%20NOIX"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-noix-blue px-7 py-4 text-base font-semibold text-white shadow-glow-lg transition-all hover:bg-[#4a9bff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night sm:w-auto"
            >
              <Mail className="h-5 w-5" />
              Escríbenos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:info@gruponoix.com"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-4 text-base font-medium text-white/80 transition-colors hover:text-white"
            >
              info@gruponoix.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
