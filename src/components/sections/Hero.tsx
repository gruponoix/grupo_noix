"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import Chip from "@/components/ui/Chip";
import { HERO_CHIPS } from "@/lib/pricing";

// 3D scene is heavy + browser-only → lazy load, never SSR.
const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.96]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-noix-night"
    >
      {/* Backdrop layers */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
      >
        <HeroScene />
      </div>
      {/* Fade scene into the page below */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-b from-transparent to-noix-night"
        aria-hidden
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Chip className="mb-7">
            Agencia de desarrollo web · negocios locales
          </Chip>
        </motion.div>

        <h1 className="text-balance text-4xl font-black leading-[0.98] tracking-tightest text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          <span className="block">
            <AnimatedText text="No es una web bonita." delay={0.25} />
          </span>
          <span className="mt-1 block text-gradient">
            <AnimatedText
              text="Es una web que vende."
              delay={0.6}
              highlight={[4]}
              highlightClassName="text-gradient-blue"
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
          className="mt-7 max-w-2xl text-pretty text-base text-white/70 sm:text-lg"
        >
          Diseñamos y desarrollamos webs rápidas, impecables en el móvil y
          pensadas para una sola cosa: convertir visitas en clientes para tu
          negocio local.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.25 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#planes"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-noix-blue px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-[#4a9bff] hover:shadow-glow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-noix-blue focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night sm:w-auto"
          >
            Ver planes y precios
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contacto"
            className="inline-flex w-full items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/30 hover:bg-white/[0.07] sm:w-auto"
          >
            Hablar con nosotros
          </a>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 1.45 } },
          }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2.5"
        >
          {HERO_CHIPS.map((chip) => (
            <motion.li
              key={chip}
              variants={{
                hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              <Chip>{chip}</Chip>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#planes"
        aria-label="Desplázate a los planes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/40 transition-colors hover:text-white/80"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.a>
    </section>
  );
}
