import { Check, Minus } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { COMPARISON, type Cell } from "@/lib/pricing";
import { cn } from "@/lib/utils";

function CellValue({ value }: { value: Cell }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-white/90">{value}</span>;
  }
  return value ? (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-noix-blue/15 text-noix-blue">
      <Check className="h-4 w-4" strokeWidth={3} />
    </span>
  ) : (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-muted-foreground/50">
      <Minus className="h-4 w-4" />
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <section id="comparativa" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Comparativa"
          title="Compara los planes al detalle"
          subtitle="Todo lo que entra en cada plan, de un vistazo."
        />

        <Reveal delay={0.05}>
          <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-white/10">
            <div className="max-h-[440px] overflow-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead className="sticky top-0 z-20">
                  <tr>
                    <th className="border-b border-white/10 bg-[#0b1320] px-5 py-4 text-sm font-semibold text-muted-foreground">
                      Característica
                    </th>
                    <th className="border-b border-white/10 bg-[#0b1320] px-4 py-4 text-center text-sm font-bold text-white">
                      Esencial
                    </th>
                    <th className="relative border-b border-white/10 bg-[#0e1a30] px-4 py-4 text-center text-sm font-bold text-white">
                      <span className="bg-blue-sheen bg-clip-text text-transparent">
                        Pro
                      </span>
                      <span className="ml-2 hidden rounded-full bg-noix-blue/20 px-2 py-0.5 align-middle text-[10px] font-semibold uppercase tracking-wide text-noix-blue-soft sm:inline">
                        Popular
                      </span>
                    </th>
                    <th className="border-b border-white/10 bg-[#0b1320] px-4 py-4 text-center text-sm font-bold text-white">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={cn(
                        "border-t border-white/[0.06]",
                        i % 2 === 1 && "bg-white/[0.015]",
                      )}
                    >
                      <td className="px-5 py-4 text-sm text-white/85">
                        {row.feature}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <CellValue value={row.esencial} />
                      </td>
                      <td className="bg-noix-blue/[0.06] px-4 py-4 text-center">
                        <CellValue value={row.pro} />
                      </td>
                      <td className="px-4 py-4 text-center">
                        <CellValue value={row.premium} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
