export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Single source of truth for the visible FAQ section AND the FAQPage
 * JSON-LD. Google requires the schema text to match visible content.
 */
export const FAQS: FaqItem[] = [
  {
    q: "¿Cuánto cuesta una página web profesional?",
    a: "Nuestros planes cerrados empiezan en 290€ + 19€/mes (Esencial), 790€ + 35€/mes (Pro, el más elegido) y 2.190€ + 69€/mes (Premium, con tienda online). Precios orientativos sin IVA. Si tu proyecto no encaja en un plan, preparamos un presupuesto a medida gratis.",
  },
  {
    q: "¿Qué incluye la cuota de mantenimiento mensual?",
    a: "Todo lo necesario para que tu web funcione siempre: dominio propio, servidor (hosting), certificado SSL, copias de seguridad, actualizaciones y soporte. No incluye SEO, que es un servicio opcional aparte.",
  },
  {
    q: "¿Cuánto tardáis en entregar la web?",
    a: "Las webs de los planes Esencial y Pro suelen estar listas en cuestión de días, no meses. Los proyectos Premium y el software a medida dependen del alcance, y te damos plazos concretos antes de empezar.",
  },
  {
    q: "¿Hacéis SEO para aparecer en Google?",
    a: "Sí, como servicio opcional de posicionamiento local: desde +49€/mes con el plan Esencial y desde +89€/mes con Pro o Premium. Trabajamos para que tu negocio aparezca cuando alguien busca tus servicios en tu zona.",
  },
  {
    q: "¿Desarrolláis aplicaciones y SaaS o solo páginas web?",
    a: "Las dos cosas. Además de webs para negocios locales, desarrollamos SaaS y software a medida para empresas desde 3.500€: aplicaciones multiusuario, paneles de gestión, automatización de procesos e integraciones con CRM, ERP, APIs y pasarelas de pago.",
  },
  {
    q: "¿Dónde estáis y con qué ciudades trabajáis?",
    a: "Somos una agencia de desarrollo web con base en Málaga. Atendemos en persona a negocios de Málaga y provincia, y trabajamos 100% online con clientes de toda España: reuniones por videollamada, entregas y soporte a distancia. Escríbenos a gruponoixx@gmail.com o desde el formulario y te respondemos en menos de 24 horas.",
  },
];
