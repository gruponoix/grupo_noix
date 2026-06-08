"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Headline that reveals word-by-word with a masked slide-up.
 * `highlight` is a list of word indices that receive the blue gradient.
 */
export default function AnimatedText({
  text,
  className,
  highlight = [],
  highlightClassName = "text-gradient-blue",
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  highlight?: number[];
  highlightClassName?: string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <span className={className}>
        {words.map((w, i) => (
          <span key={i} className={highlight.includes(i) ? highlightClassName : undefined}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
          style={{ marginRight: "0.26em" }}
        >
          <motion.span
            className={cn(
              "inline-block",
              highlight.includes(i) && highlightClassName,
            )}
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, ease: EASE, delay: delay + i * stagger }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
