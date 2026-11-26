import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://gruponoix.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Grupo NOIX — Soluciones digitales para negocios que quieren crecer.",
    template: "%s · Grupo NOIX",
  },
  description:
    "Desarrollo web y software a medida para negocios y empresas de toda España. Webs que venden, aplicaciones y SaaS que hacen crecer tu empresa. Webs desde 290€.",
  keywords: [
    "diseño web Málaga",
    "páginas web Málaga",
    "desarrollo web Málaga",
    "agencia web Málaga",
    "tienda online Málaga",
    "SEO local Málaga",
    "desarrollo de software a medida",
    "SaaS a medida",
    "páginas web para negocios locales",
    "web que vende",
    "Grupo NOIX",
  ],
  authors: [{ name: "Grupo NOIX" }],
  creator: "Grupo NOIX",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Grupo NOIX",
    title: "Grupo NOIX — Soluciones digitales para negocios que quieren crecer.",
    description:
      "Desarrollo web y software a medida para negocios y empresas de toda España. Webs que venden, aplicaciones y SaaS que hacen crecer tu empresa. Webs desde 290€.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo NOIX — Soluciones digitales para negocios que quieren crecer.",
    description:
      "Desarrollo web y software a medida para negocios y empresas de toda España. Webs que venden, aplicaciones y SaaS que hacen crecer tu empresa. Webs desde 290€.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-noix-night font-sans text-foreground antialiased">
        <LenisProvider>{children}</LenisProvider>
        {/* Cookieless analytics — no RGPD consent banner required */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
