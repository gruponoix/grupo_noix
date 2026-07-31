export type PlanId = "esencial" | "pro" | "premium";

export interface PlanFeature {
  label: string;
  included: boolean;
}

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  priceFrom: string; // one-time setup, e.g. "290"
  monthly: string; // recurring, e.g. "19"
  inherits?: string;
  badge?: string;
  featured?: boolean;
  cta: string;
  features: PlanFeature[];
}

export const PLANS: Plan[] = [
  {
    id: "esencial",
    name: "Esencial",
    tagline: "La presencia profesional que tu negocio necesita para empezar a vender.",
    priceFrom: "290",
    monthly: "19",
    cta: "Empezar con Esencial",
    features: [
      { label: "Hasta 5 secciones", included: true },
      { label: "Diseño 100% responsive", included: true },
      { label: "Copywriting que convierte", included: true },
      { label: "Galería de imágenes", included: true },
      { label: "Botón directo de WhatsApp", included: true },
      { label: "Google Maps integrado", included: true },
      { label: "Base de datos de clientes", included: false },
      { label: "Tienda online", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Para negocios que quieren captar clientes y crecer de verdad.",
    priceFrom: "790",
    monthly: "35",
    inherits: "Todo lo de Esencial, y además:",
    badge: "Recomendado · Mejor valor",
    featured: true,
    cta: "Quiero el plan Pro",
    features: [
      { label: "Hasta 12 secciones", included: true },
      { label: "Base de datos de clientes", included: true },
      { label: "Formularios y captación de correos", included: true },
      { label: "Embudos de conversión", included: true },
      { label: "Blog editable", included: true },
      { label: "Integración con redes sociales", included: true },
      { label: "Tienda online", included: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "La maquinaria completa para vender online sin límites.",
    priceFrom: "2.190",
    monthly: "69",
    inherits: "Todo lo de Pro, y además:",
    cta: "Hablar de Premium",
    features: [
      { label: "Panel de gestión", included: true },
      { label: "Reservas y citas", included: true },
      { label: "Tienda online completa", included: true },
      { label: "Pasarela de pago", included: true },
      { label: "Integraciones CRM / email", included: true },
      { label: "Soporte prioritario", included: true },
    ],
  },
];

/* ── Hero trust chips ──────────────────────────────────────────── */
export const HERO_CHIPS = [
  "Carga <2s",
  "100% adaptada a móvil",
  "Textos que convierten",
  "Lista en días",
] as const;

/* ── SEO band ──────────────────────────────────────────────────── */
export const SEO_TIERS = [
  { plan: "Esencial", price: "+49", note: "Posicionamiento local básico" },
  { plan: "Pro y Premium", price: "+89", note: "SEO avanzado y seguimiento" },
] as const;

/* ── Included in every plan ────────────────────────────────────── */
export type IncludedIcon = "rocket" | "globe" | "shield" | "wrench";

export interface IncludedItem {
  icon: IncludedIcon;
  title: string;
  description: string;
}

export const INCLUDED: IncludedItem[] = [
  {
    icon: "rocket",
    title: "Creación",
    description: "Diseño, desarrollo y puesta en marcha completos de tu web.",
  },
  {
    icon: "globe",
    title: "Dominio",
    description: "Tu dominio propio (tunegocio.com) gestionado y renovado.",
  },
  {
    icon: "shield",
    title: "Servidor + SSL",
    description: "Hosting rápido y certificado de seguridad HTTPS incluido.",
  },
  {
    icon: "wrench",
    title: "Mantenimiento",
    description: "Copias, actualizaciones y soporte para que nunca se caiga.",
  },
];

/* ── SaaS / software a medida para empresas ────────────────────── */
export type SaasIcon = "dashboard" | "users" | "workflow" | "plug";

export interface SaasFeature {
  icon: SaasIcon;
  label: string;
}

export const SAAS_OFFER = {
  eyebrow: "Para empresas",
  name: "SaaS y software a medida",
  tagline:
    "¿Tu empresa necesita más que una web? Diseñamos y desarrollamos aplicaciones SaaS, paneles internos y herramientas a medida que crecen contigo.",
  features: [
    { icon: "users", label: "Aplicaciones SaaS multiusuario" },
    { icon: "dashboard", label: "Paneles de gestión e informes" },
    { icon: "workflow", label: "Automatización de procesos" },
    { icon: "plug", label: "Integraciones: CRM, ERP, APIs y pagos" },
  ] as SaasFeature[],
  priceFrom: "3.500",
  priceNote: "Proyectos a medida · según alcance y fases",
  cta: "Hablemos de tu proyecto",
  prefill:
    "Hola, somos una empresa y nos interesa desarrollar un SaaS / software a medida. Os contamos nuestro proyecto: ",
};
