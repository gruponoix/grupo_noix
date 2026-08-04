"use client";

import { Rocket, Globe, ShieldCheck, Wrench, type LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import EmailButton from "@/components/ui/EmailButton";
import WhatsappIcon from "@/components/ui/WhatsappIcon";
import { whatsappLink } from "@/lib/whatsapp";
import { INCLUDED, type IncludedIcon } from "@/lib/pricing";

const ICONS: Record<IncludedIcon, LucideIcon> = {
  rocket: Rocket,
  globe: Globe,
  shield: ShieldCheck,
  wrench: Wrench,
};

export default function GetStarted() {
  return (
    <section id="incluido" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — Included in every plan (compact) */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-noix-blue-soft">
                <span className="h-px w-6 bg-noix-blue/60" />
                Sin letra pequeña
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Incluido en todos los planes
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 max-w-md text-pretty text-sm text-muted-foreground sm:text-base">
                Elijas el plan que elijas, estos pilares siempre están cubiertos
                para que solo te preocupes de tu negocio.
              </p>
            </Reveal>

            <Stagger
              className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              stagger={0.08}
            >
              {INCLUDED.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <StaggerItem key={item.title}>
                    <div className="group glass flex h-full items-start gap-3.5 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-noix-blue/15 text-noix-blue transition-colors group-hover:bg-noix-blue group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>

          {/* RIGHT — Contact form */}
          <Reveal delay={0.1}>
            <div
              id="contacto"
              className="relative scroll-mt-24 overflow-hidden rounded-[24px] border border-noix-blue/25 p-5 sm:p-7"
              style={{
                background:
                  "radial-gradient(130% 130% at 50% -10%, rgba(47,139,255,0.28) 0%, rgba(19,32,58,0.55) 45%, rgba(10,15,28,0.85) 100%)",
              }}
            >
              <div
                className="pointer-events-none absolute -top-20 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-noix-blue/25 blur-3xl"
                aria-hidden
              />

              <div className="mb-5 text-center">
                <h2 className="text-balance text-3xl font-black tracking-tightest text-white sm:text-4xl">
                  ¿Empezamos?
                </h2>
                <p className="mx-auto mt-2.5 max-w-sm text-pretty text-sm text-white/75">
                  Cuéntanos qué hace tu negocio y te diremos, sin compromiso, cómo
                  tu web puede vender más.
                </p>
              </div>

              <ContactForm />

              {/* Alternative contact channels */}
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  o si lo prefieres
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1fbb59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-noix-night"
              >
                <WhatsappIcon className="h-5 w-5" />
                Escríbenos por WhatsApp
              </a>

              <EmailButton
                email="gruponoixx@gmail.com"
                subject="Quiero una web que venda — Grupo NOIX"
                label="o por correo: gruponoixx@gmail.com"
                className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
