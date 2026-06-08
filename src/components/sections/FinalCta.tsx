"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

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
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-noix-blue/30 px-5 py-14 sm:px-12 sm:py-16"
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

          <div className="mb-6 text-center">
            <h2 className="text-balance text-4xl font-black tracking-tightest text-white sm:text-6xl">
              ¿Empezamos?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-white/75 sm:text-lg">
              Cuéntanos qué hace tu negocio y te diremos, sin compromiso, cómo tu
              web puede empezar a vender más. Respondemos rápido.
            </p>
          </div>

          <div className="mx-auto max-w-xl">
            <ContactForm />

            <a
              href="mailto:gruponoixx@gmail.com?subject=Quiero%20una%20web%20que%20venda%20%E2%80%94%20Grupo%20NOIX"
              className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              o escríbenos a gruponoixx@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
