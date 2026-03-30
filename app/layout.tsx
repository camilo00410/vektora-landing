import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vektora.lat"),
  title: "Agencia de Inteligencia Artificial B2B en Colombia | Vektora",
  description:
    "Vektora: agencia de IA B2B para empresas latinoamericanas. Automatiza procesos con agentes de IA integrados con WhatsApp, HubSpot, Shopify y más. Desde Colombia para LATAM.",
  keywords: [
    "agencia inteligencia artificial Colombia",
    "agencia IA B2B Colombia",
    "automatización procesos empresas Colombia",
    "chatbots empresariales Colombia",
    "agentes IA Colombia",
    "automatizar empresa inteligencia artificial",
    "inteligencia artificial pymes Colombia",
    "chatbot WhatsApp empresas",
    "automatización empresarial Pereira",
    "empresa de IA Pereira",
    "agentes inteligentes LATAM",
    "inteligencia artificial Risaralda",
  ],
  authors: [{ name: "Vektora", url: "https://vektora.lat" }],
  creator: "Vektora",
  publisher: "Vektora",
  alternates: {
    canonical: "https://vektora.lat",
  },
  openGraph: {
    title: "Vektora | Agentes de IA para Empresas en Colombia — Automatización Inteligente",
    description:
      "Diseñamos e implementamos agentes de IA que automatizan procesos de negocio. Calificación de leads, atención al cliente, análisis documental. Pereira, Colombia.",
    url: "https://vektora.lat",
    siteName: "Vektora",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vektora — Agentes de IA para empresas en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vektora | Agentes de IA para Empresas en Colombia",
    description:
      "Automatizamos procesos de negocio con agentes de IA. Pereira, Colombia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
