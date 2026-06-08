import { Search, Star, TrendingUp, Plus } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SEO_TIERS } from "@/lib/pricing";

export default function SeoBand() {
  return (
    <section
      id="seo"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.06] bg-noix-ink py-24 sm:py-28"
    >
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-noix-blue/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-noix-blue/10 blur-3xl" aria-hidden />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy + tiers */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-noix-blue/30 bg-noix-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-noix-blue-soft">
                <TrendingUp className="h-3.5 w-3.5" />
                Posicionamiento SEO
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Aparece <span className="text-gradient-blue">primero</span> en
                Google
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 max-w-md text-pretty text-base text-white/70 sm:text-lg">
                Cuando alguien busca tu servicio en tu ciudad, que te encuentre a
                ti, no a la competencia. Trabajamos tu posicionamiento para que
                el teléfono no deje de sonar.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.12}>
              {SEO_TIERS.map((tier) => (
                <StaggerItem key={tier.plan}>
                  <div className="glass h-full rounded-2xl p-5">
                    <div className="text-sm font-semibold text-white">
                      {tier.plan}
                    </div>
                    <div className="mt-2 flex items-baseline gap-1">
                      <Plus className="h-4 w-4 self-center text-noix-blue" />
                      <span className="text-3xl font-extrabold text-white">
                        {tier.price.replace("+", "")}€
                      </span>
                      <span className="text-sm text-muted-foreground">/mes</span>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">
                      {tier.note}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.15}>
              <p className="mt-5 text-xs text-muted-foreground/70">
                Servicio adicional opcional. No está incluido en el
                mantenimiento mensual de los planes.
              </p>
            </Reveal>
          </div>

          {/* Search mock */}
          <Reveal delay={0.1}>
            <div className="glass-strong mx-auto w-full max-w-md rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-white/80">
                  peluquería cerca de mí
                </span>
                <span className="ml-auto h-4 w-px animate-pulse bg-noix-blue" />
              </div>

              <div className="mt-4 space-y-3">
                {/* Winning result */}
                <div className="rounded-xl border border-noix-blue/40 bg-noix-blue/[0.08] p-4 shadow-glow">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-noix-blue px-1.5 py-0.5 text-[10px] font-bold text-white">
                      #1
                    </span>
                    <span className="text-sm font-semibold text-white">
                      Tu negocio
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <div className="flex text-noix-blue-soft">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      4,9 · Abierto ahora
                    </span>
                  </div>
                </div>

                {/* Faded competitors */}
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 opacity-50"
                  >
                    <div className="h-2.5 w-1/3 rounded bg-white/15" />
                    <div className="mt-2 h-2 w-1/2 rounded bg-white/10" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
