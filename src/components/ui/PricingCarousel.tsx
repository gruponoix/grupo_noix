"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PricingCard from "@/components/ui/PricingCard";
import { PLANS } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const MOBILE_BP = 1024; // matches Tailwind `lg`

/**
 * Pricing plans:
 * - lg+  → static 3-column grid (unchanged desktop layout)
 * - <lg  → horizontal scroll-snap carousel. The card closest to the
 *          center is focused (full scale/opacity); neighbours shrink and
 *          dim. Swipe on touch, drag the scrollbar-less track, or tap dots.
 */
export default function PricingCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Start focused on the featured plan (Pro, index 1).
  const [active, setActive] = useState(1);

  const centerOn = useCallback((i: number, smooth: boolean) => {
    const track = trackRef.current;
    const el = itemRefs.current[i];
    if (!track || !el) return;
    const left = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const update = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const c = el.offsetLeft + el.clientWidth / 2;
        const d = Math.abs(c - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    // Center the featured plan on first paint (mobile only).
    if (window.innerWidth < MOBILE_BP) {
      requestAnimationFrame(() => centerOn(1, false));
    }
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [centerOn]);

  return (
    <div className="mx-auto mt-16 max-w-6xl">
      <div
        ref={trackRef}
        role="list"
        className={cn(
          "flex snap-x snap-mandatory items-start gap-5 overflow-x-auto px-[9%] pb-5 sm:px-[20%]",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          "lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0",
        )}
      >
        {PLANS.map((plan, i) => (
          <div
            key={plan.id}
            role="listitem"
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={cn(
              "min-w-0 shrink-0 basis-[82%] snap-center transition-[transform,opacity] duration-300 ease-out sm:basis-[58%]",
              "lg:basis-auto lg:shrink lg:!scale-100 lg:!opacity-100",
              i === active
                ? "scale-100 opacity-100"
                : "scale-[0.9] opacity-50",
            )}
          >
            <PricingCard plan={plan} index={i} />
          </div>
        ))}
      </div>

      {/* Pagination dots (mobile / tablet only) */}
      <div className="mt-3 flex items-center justify-center gap-2 lg:hidden">
        {PLANS.map((plan, i) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => centerOn(i, true)}
            aria-label={`Ver plan ${plan.name}`}
            aria-current={i === active}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === active
                ? "w-7 bg-noix-blue"
                : "w-2 bg-white/25 hover:bg-white/45",
            )}
          />
        ))}
      </div>
    </div>
  );
}
