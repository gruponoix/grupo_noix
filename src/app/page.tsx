import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import SeoBand from "@/components/sections/SeoBand";
import Faq from "@/components/sections/Faq";
import GetStarted from "@/components/sections/GetStarted";
import Footer from "@/components/sections/Footer";
import { PLANS, SAAS_OFFER } from "@/lib/pricing";
import { FAQS } from "@/lib/faq";

const SITE = "https://gruponoix.com";

const businessLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE}/#organization`,
  name: "Grupo NOIX",
  alternateName: "NOIX",
  description:
    "Agencia de desarrollo web y software. Webs rápidas, móviles y diseñadas para vender para negocios locales, y SaaS a medida para empresas.",
  slogan: "No es una web bonita. Es una web que vende.",
  email: "gruponoixx@gmail.com",
  url: SITE,
  logo: `${SITE}/icon.png`,
  image: `${SITE}/opengraph-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Málaga",
    addressRegion: "Andalucía",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7213,
    longitude: -4.4214,
  },
  areaServed: [
    { "@type": "City", name: "Málaga" },
    { "@type": "AdministrativeArea", name: "Provincia de Málaga" },
    { "@type": "Country", name: "España" },
  ],
  knowsAbout: [
    "diseño web",
    "desarrollo web",
    "páginas web para negocios locales",
    "tiendas online",
    "SEO local",
    "desarrollo SaaS",
    "software a medida",
    "automatización de procesos",
  ],
  sameAs: ["https://www.instagram.com/gruponoix/"],
  priceRange: "€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de desarrollo web y software",
    itemListElement: [
      ...PLANS.map((plan) => ({
        "@type": "Offer",
        name: `Plan ${plan.name}`,
        description: plan.tagline,
        price: plan.priceFrom.replace(/\./g, ""),
        priceCurrency: "EUR",
      })),
      {
        "@type": "Offer",
        name: SAAS_OFFER.name,
        description: SAAS_OFFER.tagline,
        price: SAAS_OFFER.priceFrom.replace(/\./g, ""),
        priceCurrency: "EUR",
      },
    ],
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      {/* Cinematic page backdrop */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-noix-radial"
        aria-hidden
      />
      <Navbar />
      <main>
        <Hero />
        <Pricing />
        <SeoBand />
        <GetStarted />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
