import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Laptop + phone mockup. Frames are drawn in CSS (crisp at any resolution)
 * and only the screenshots are images.
 */
export default function DeviceMockup({
  desktop,
  desktopWidth,
  desktopHeight,
  mobile,
  alt,
  className,
}: {
  desktop: string;
  desktopWidth: number;
  desktopHeight: number;
  mobile?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Laptop — the right gutter is always reserved so every card's
          laptop is the same size, with or without a phone. */}
      <div className="relative pr-[14%] sm:pr-[12%]">
        {/* Screen bezel */}
        <div className="relative rounded-t-xl border border-white/15 bg-[#0d1424] p-[1.6%] pb-0 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.9)]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-md bg-black">
            <Image
              src={desktop}
              alt={alt}
              width={desktopWidth}
              height={desktopHeight}
              unoptimized
              loading="lazy"
              className="absolute inset-x-0 top-0 w-full"
              style={{ height: "auto" }}
            />
          </div>
        </div>
        {/* Base / hinge */}
        <div className="relative -mx-[3%] h-3 rounded-b-xl border-x border-b border-white/15 bg-gradient-to-b from-[#243350] to-[#0d1424] sm:h-4">
          <div className="absolute left-1/2 top-0 h-[3px] w-[12%] -translate-x-1/2 rounded-b-full bg-white/15" />
        </div>
      </div>

      {/* Phone, overlapping the laptop */}
      {mobile && (
        <div className="absolute bottom-[-4%] right-0 w-[20%] sm:w-[18%]">
          <div className="relative rounded-[14%/7%] border border-white/20 bg-[#0d1424] p-[4%] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.95)]">
            <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[11%/5%] bg-black">
              <Image
                src={mobile}
                alt=""
                width={480}
                height={1040}
                unoptimized
                loading="lazy"
                className="absolute inset-x-0 top-0 w-full"
                style={{ height: "auto" }}
              />
            </div>
            {/* Speaker slit */}
            <div className="absolute left-1/2 top-[2.5%] h-[1.5%] w-[26%] -translate-x-1/2 rounded-full bg-white/25" />
          </div>
        </div>
      )}
    </div>
  );
}
