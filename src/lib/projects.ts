export interface Project {
  slug: string;
  name: string;
  /** "Sector · Ciudad" */
  sector: string;
  /** What we built, in one or two lines. */
  description: string;
  /** Disciplines, shown joined by "·" in a single pill. */
  tags: string[];
  /** The outcome, in a short uppercase claim. */
  objective: string;
  /** Full-page screenshot; only the top is shown in the laptop frame. */
  image: string;
  width: number;
  height: number;
  /** Mobile screenshot for the phone frame (optional). */
  mobile?: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "luxury-charter-marbella",
    name: "Luxury Charter Marbella",
    sector: "Alquiler de yates · Puerto Banús",
    description:
      "Web y catálogo de flota en cuatro idiomas, con posicionamiento SEO y solicitud de presupuesto directa por WhatsApp.",
    tags: ["Web", "SEO", "Captación"],
    objective:
      "+800 visitantes y 56 contactos, solo con SEO, en los 2 primeros meses",
    image: "/portfolio/luxury-charter-marbella.jpg",
    width: 1200,
    height: 4493,
    mobile: "/portfolio/movil/luxury-charter-marbella.jpg",
  },
  {
    slug: "siennelle",
    name: "Siennelle",
    sector: "Moda · Vestidos de fiesta",
    description:
      "Tienda online completa con catálogo por categorías, carrito, promociones automáticas y envíos a toda España.",
    tags: ["Tienda", "Pagos", "Promociones"],
    objective: "Marca nueva vendiendo en toda España",
    image: "/portfolio/siennelle.jpg",
    width: 1200,
    height: 5444,
    mobile: "/portfolio/movil/siennelle.jpg",
  },
  {
    slug: "mangoneando",
    name: "Mangoneando",
    sector: "Pizzería artesanal · Madrid",
    description:
      "Carta digital, pedidos online con pago integrado y panel de administración propio para gestionar el día a día del local. Además, un sistema con IA que gestiona los pedidos por WhatsApp de forma automática.",
    tags: ["Web", "Tienda", "IA WhatsApp"],
    objective: "Vender sin comisiones de plataformas",
    image: "/portfolio/mangoneando.jpg",
    width: 1200,
    height: 2250,
    mobile: "/portfolio/movil/mangoneando.jpg",
  },
  {
    slug: "arcadia",
    name: "Arcadia",
    sector: "Inmobiliaria de lujo · La Moraleja",
    description:
      "Escaparate para propiedades exclusivas con recorrido estancia por estancia, ficha técnica y solicitud de visita privada.",
    tags: ["Web", "Branding", "Captación"],
    objective: "Visitas privadas agendadas",
    image: "/portfolio/arcadia.jpg",
    width: 1200,
    height: 3185,
    mobile: "/portfolio/movil/arcadia.jpg",
  },
  {
    slug: "keitel",
    name: "Keitel Revenue",
    sector: "Consultoría hotelera · Málaga",
    description:
      "Web corporativa premium con servicios, casos de éxito y blog, orientada a captar diagnósticos de hoteles.",
    tags: ["Web", "Contenido", "Captación"],
    objective: "Diagnósticos solicitados por hoteles",
    image: "/portfolio/keitel.jpg",
    width: 1200,
    height: 9750,
    mobile: "/portfolio/movil/keitel.jpg",
  },
  {
    slug: "onlygusto",
    name: "Gusto",
    sector: "Eventos y ocio nocturno · Marbella",
    description:
      "Web inmersiva con vídeo a pantalla completa, galería y venta de entradas para sus noches en Marbella, Ibiza y Barcelona.",
    tags: ["Web", "Branding", "Entradas"],
    objective: "Más caché de marca y entradas centralizadas",
    image: "/portfolio/onlygusto.jpg",
    width: 1200,
    height: 2625,
    mobile: "/portfolio/movil/onlygusto.jpg",
  },
];
