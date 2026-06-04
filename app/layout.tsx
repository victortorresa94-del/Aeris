import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aeris.es"),
  title: "AERIS — Tu departamento de marketing completo",
  description:
    "Operado por expertos. Potenciado por IA. El departamento de marketing completo de tu empresa por lo que cuesta una sola persona.",
  openGraph: {
    title: "AERIS — Tu departamento de marketing completo",
    description:
      "Operado por expertos. Potenciado por IA. El departamento de marketing completo de tu empresa por lo que cuesta una sola persona.",
    locale: "es_ES",
    type: "website",
    siteName: "AERIS",
    images: [{ url: "/img/hero-arch.webp", width: 1200, height: 800, alt: "AERIS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AERIS — Tu departamento de marketing completo",
    description: "Operado por expertos. Potenciado por IA. Por lo que cuesta una sola persona.",
    images: ["/img/hero-arch.webp"],
  },
  icons: { icon: "/favicon.svg" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AERIS",
  description: "Marketing Operations Company. Estrategia + Ejecución + IA.",
  url: "https://aeris.es",
  email: "victor@aeris.es",
  slogan: "The unseen force that moves everything",
  address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* Mark JS active before paint so reveal-hiding only applies with JS (no-JS shows content). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Saltar al contenido
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
