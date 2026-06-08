import { Rocket, Globe, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { INCLUDED, type IncludedIcon } from "@/lib/pricing";

const ICONS: Record<IncludedIcon, LucideIcon> = {
  rocket: Rocket,
  globe: Globe,
  shield: ShieldCheck,
  wrench: Wrench,
};

export default function IncludedInAll() {
  return (
    <section id="incluido" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Sin letra pequeña"
          title="Incluido en todos los planes"
          subtitle="Da igual el plan que elijas: estos pilares siempre están cubiertos para que solo te preocupes de tu negocio."
        />

        <Stagger
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.1}
        >
          {INCLUDED.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <StaggerItem key={item.title} className="h-full">
                <div className="group glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-noix-blue/15 text-noix-blue transition-colors group-hover:bg-noix-blue group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
