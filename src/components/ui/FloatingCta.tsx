"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Persistent bottom-right shortcut to pricing. Appears once the visitor
 * scrolls past the hero so it never covers it.
 */
export default function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setVisible(v > 500);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#planes"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="group fixed bottom-5 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-noix-blue py-3 pl-5 pr-4 text-white shadow-glow-lg transition-colors hover:bg-[#4a9bff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night sm:bottom-6 sm:right-6"
        >
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold">Ver planes</span>
            <span className="text-[11px] font-medium text-white/80">
              Desde 290€
            </span>
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
            <ArrowRight className="h-4 w-4" />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
