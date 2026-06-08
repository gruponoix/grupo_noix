import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import ComparisonTable from "@/components/sections/ComparisonTable";
import SeoBand from "@/components/sections/SeoBand";
import IncludedInAll from "@/components/sections/IncludedInAll";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import { PLANS } from "@/lib/pricing";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Grupo NOIX",
  description:
    "Agencia de desarrollo web para negocios locales. Webs rápidas, móviles y diseñadas para vender.",
  slogan: "No es una web bonita. Es una web que vende.",
  email: "info@gruponoix.com",
  url: "https://gruponoix.com",
  areaServed: "ES",
  priceRange: "€€",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de desarrollo web",
    itemListElement: PLANS.map((plan) => ({
      "@type": "Offer",
      name: `Plan ${plan.name}`,
      description: plan.tagline,
      price: plan.priceFrom.replace(/\./g, ""),
      priceCurrency: "EUR",
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
        <ComparisonTable />
        <SeoBand />
        <IncludedInAll />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
