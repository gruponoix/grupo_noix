"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import DeviceMockup from "@/components/ui/DeviceMockup";
import { PROJECTS, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ProjectCard({
  project,
  index,
  wide,
}: {
  project: Project;
  index: number;
  wide?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: (index % 2) * 0.1 }}
      className={cn("group h-full", wide && "lg:col-span-2")}
    >
      <div className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
        {/* Devices on a soft backdrop */}
        <div className="relative bg-gradient-to-b from-white/[0.07] to-transparent px-6 pb-12 pt-8 sm:px-10 sm:pb-14 sm:pt-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-60"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(47,139,255,0.18), transparent 70%)",
            }}
            aria-hidden
          />
          <DeviceMockup
            desktop={project.image}
            desktopWidth={project.width}
            desktopHeight={project.height}
            mobile={project.mobile}
            alt={`Web de ${project.name} — ${project.sector}`}
            className="transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Two-column detail block */}
        <div className="grid flex-1 gap-5 border-t border-white/[0.07] p-6 sm:grid-cols-2 sm:gap-8 sm:p-7">
          <div>
            <span className="inline-flex rounded-full bg-noix-blue/12 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-noix-blue-soft ring-1 ring-noix-blue/25">
              {project.tags.join(" · ")}
            </span>
            <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
              {project.name}
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {project.sector}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-sm leading-relaxed text-white/75">
              {project.description}
            </p>
            <div className="flex-1" />
            <p className="mt-4 flex items-start gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-noix-blue-soft">
              <Target className="mt-px h-3.5 w-3.5 shrink-0 text-noix-blue" />
              <span>Objetivo · {project.objective}</span>
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  return (
    <section id="proyectos" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Proyectos"
          title={
            <>
              Webs que ya están{" "}
              <span className="text-gradient-blue">trabajando</span>
            </>
          }
          subtitle="Una muestra de lo que hemos construido: tiendas online, catálogos multiidioma, escaparates inmobiliarios y paneles de gestión a medida."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              // An odd count would leave the last card alone: let it span the row.
              wide={PROJECTS.length % 2 === 1 && i === PROJECTS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
