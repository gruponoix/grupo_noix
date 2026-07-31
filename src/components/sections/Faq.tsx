"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { FAQS } from "@/lib/faq";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          subtitle="Lo que todo el mundo nos pregunta antes de empezar. ¿Falta la tuya? Escríbenos."
        />

        <Stagger className="mx-auto mt-12 max-w-3xl space-y-3" stagger={0.06}>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={item.q}>
                <div
                  className={cn(
                    "glass overflow-hidden rounded-2xl transition-shadow duration-300",
                    isOpen && "ring-1 ring-noix-blue/30",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noix-blue"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        isOpen
                          ? "bg-noix-blue text-white"
                          : "bg-white/5 text-noix-blue-soft",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
