import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vektora — Agentes de IA que trabajan por ti",
  description:
    "Diseñamos, implementamos y operamos agentes inteligentes que automatizan los procesos repetitivos de tu empresa. Resultados medibles en 30 días.",
  keywords: ["agentes IA", "automatización", "inteligencia artificial", "Colombia", "LATAM"],
  openGraph: {
    title: "Vektora — Agentes de IA que trabajan por ti",
    description:
      "Diseñamos, implementamos y operamos agentes inteligentes que automatizan los procesos repetitivos de tu empresa.",
    url: "https://vektora.lat",
    siteName: "Vektora",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
