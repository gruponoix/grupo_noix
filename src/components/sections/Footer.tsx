import { Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";

const NAV = [
  { label: "Planes", href: "#planes" },
  { label: "SEO", href: "#seo" },
  { label: "Incluido", href: "#incluido" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-noix-ink">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-sm">
            <Logo className="text-2xl" />
            <p className="mt-4 text-pretty text-sm text-muted-foreground">
              No es una web bonita.{" "}
              <span className="font-semibold text-white/90">
                Es una web que vende.
              </span>{" "}
              Desarrollo web para negocios locales que quieren crecer.
            </p>
            <a
              href="mailto:gruponoixx@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-noix-blue-soft transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              gruponoixx@gmail.com
            </a>
          </div>

          <div className="md:justify-self-end">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navegación
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  className="text-sm font-semibold text-noix-blue-soft transition-colors hover:text-white"
                >
                  ¿Empezamos?
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal note */}
        <div className="mt-12 border-t border-white/[0.06] pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground/70">
            Todos los precios están expresados en euros (€) y no incluyen IVA. El
            mantenimiento mensual cubre dominio, servidor, certificado SSL, copias
            de seguridad, actualizaciones y soporte; no incluye servicios de
            posicionamiento SEO, que se contratan aparte. Los precios mostrados
            son orientativos y pueden variar según el alcance final de cada
            proyecto.
          </p>
          <p className="mt-6 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Grupo NOIX. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
