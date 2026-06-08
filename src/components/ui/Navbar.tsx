"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Planes", href: "#planes" },
  { label: "SEO", href: "#seo" },
  { label: "Incluido", href: "#incluido" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled
            ? "glass-strong shadow-card"
            : "border border-transparent bg-transparent",
        )}
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="Grupo NOIX — inicio"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-n.png"
            alt=""
            className="h-8 w-auto select-none"
            draggable={false}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-noix.png"
            alt="Grupo NOIX"
            className="h-6 w-auto select-none"
            draggable={false}
          />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="group inline-flex items-center gap-1.5 rounded-lg bg-noix-blue px-4 py-2 text-sm font-semibold text-white shadow-glow transition-all hover:bg-[#4a9bff] hover:shadow-glow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noix-blue focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night"
        >
          Empezar
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}
