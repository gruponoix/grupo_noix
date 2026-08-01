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
    default: "Grupo NOIX — No es una web bonita. Es una web que vende.",
    template: "%s · Grupo NOIX",
  },
  description:
    "Agencia de diseño y desarrollo web en Málaga para negocios locales. Webs rápidas, 100% móviles y diseñadas para convertir visitas en clientes, y SaaS a medida. Desde 290€.",
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
    title: "Grupo NOIX — No es una web bonita. Es una web que vende.",
    description:
      "Webs rápidas, móviles y pensadas para vender, para negocios locales. Planes desde 290€.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo NOIX — No es una web bonita. Es una web que vende.",
    description:
      "Webs rápidas, móviles y pensadas para vender, para negocios locales. Planes desde 290€.",
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
