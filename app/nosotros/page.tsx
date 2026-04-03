import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Quiénes Somos — Agencia de IA B2B en Pereira, Colombia | Vektora",
  description:
    "Somos Vektora, la agencia de inteligencia artificial en Pereira, Colombia. Especializados en agentes IA y automatización B2B para empresas latinoamericanas.",
  alternates: { canonical: "https://vektora.lat/nosotros" },
  openGraph: {
    title: "Quiénes Somos — Agencia de IA B2B en Pereira, Colombia | Vektora",
    description:
      "Somos Vektora, la agencia de inteligencia artificial en Pereira, Colombia. Especializados en agentes IA y automatización B2B para empresas latinoamericanas.",
    url: "https://vektora.lat/nosotros",
    type: "website",
    locale: "es_CO",
    siteName: "Vektora",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos — Agencia de IA B2B en Pereira, Colombia | Vektora",
    description:
      "Somos Vektora, la agencia de inteligencia artificial en Pereira, Colombia. Especializados en agentes IA y automatización B2B para empresas latinoamericanas.",
    images: ["/og-image.png"],
  },
};

const whatsappUrl =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";

const values = [
  {
    emoji: "🎯",
    title: "Resultados primero",
    desc: "No vendemos tecnología. Vendemos resultados medibles. Cada agente tiene KPIs claros definidos antes de la implementación.",
  },
  {
    emoji: "🤝",
    title: "Transparencia total",
    desc: "Sin caja negra. Explicamos cómo funciona cada agente y damos visibilidad completa de lo que hace en tu operación.",
  },
  {
    emoji: "⚡",
    title: "Velocidad con calidad",
    desc: "Implementamos en 2–4 semanas sin sacrificar solidez. Probamos en condiciones reales antes del lanzamiento.",
  },
  {
    emoji: "🌎",
    title: "Construido para LATAM",
    desc: "Entendemos el contexto latinoamericano: idioma, cultura empresarial, herramientas y restricciones del mercado local.",
  },
];

const stats = [
  { value: "15+", label: "Empresas atendidas" },
  { value: "70%", label: "Reducción promedio en tiempos de respuesta" },
  { value: "3", label: "Países: Colombia, México, Chile" },
  { value: "30", label: "Días a primeros resultados" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vektora.lat" },
    { "@type": "ListItem", "position": 2, "name": "Nosotros", "item": "https://vektora.lat/nosotros" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Nosotros — Vektora",
  description:
    "Conoce al equipo de Vektora, agencia de automatización con IA en Pereira, Colombia.",
  url: "https://vektora.lat/nosotros",
  mainEntity: {
    "@type": "Organization",
    name: "Vektora",
    description:
      "Agencia de IA B2B especializada en automatización de procesos de negocio para empresas en Colombia y LATAM.",
    foundingLocation: "Pereira, Risaralda, Colombia",
    url: "https://vektora.lat",
    email: "info@vektora.lat",
    telephone: "+573105975861",
    areaServed: ["Colombia", "México", "Chile"],
  },
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Nosotros" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20 text-center">
        <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
          Nosotros
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Ingenieros que entienden tu negocio
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Somos un equipo de ingenieros y estrategas de IA con sede en Pereira, Colombia — construidos para el mercado latinoamericano.
        </p>
      </section>

      {/* Historia y misión */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
              Nuestra historia
            </p>
            <h2 style={{ color: "#1A1A2E" }} className="text-3xl font-bold mb-6">
              Nació de un problema real
            </h2>
            <p style={{ color: "#2D2D2D" }} className="leading-relaxed mb-4">
              Vimos cómo empresas colombianas perdían horas cada día en tareas repetitivas: responder mensajes, calificar leads, revisar documentos. Las soluciones de IA existían, pero eran caras, complejas y pensadas para mercados angloparlantes.
            </p>
            <p style={{ color: "#2D2D2D" }} className="leading-relaxed mb-4">
              Fundamos Vektora para cambiar eso. Construimos agentes de IA que funcionan en el contexto real de las empresas latinoamericanas: en español, integrados con las herramientas que ya usan, y con resultados medibles desde el día uno.
            </p>
            <p style={{ color: "#2D2D2D" }} className="leading-relaxed">
              Hoy operamos en Colombia, México y Chile, con más de 15 empresas que han automatizado sus operaciones con nosotros.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
              Misión y visión
            </p>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 style={{ color: "#1A1A2E" }} className="font-bold mb-2">
                  Misión
                </h3>
                <p style={{ color: "#2D2D2D" }} className="text-sm leading-relaxed">
                  Hacer accesible la automatización con IA para empresas latinoamericanas — con implementaciones concretas, resultados medibles y sin fricción técnica para el cliente.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <h3 style={{ color: "#1A1A2E" }} className="font-bold mb-2">
                  Visión
                </h3>
                <p style={{ color: "#2D2D2D" }} className="text-sm leading-relaxed">
                  Ser la agencia de IA de referencia en LATAM: la primera que llaman las empresas cuando quieren automatizar algo importante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-extrabold mb-2" style={{ color: "#6C63FF" }}>
                {value}
              </p>
              <p className="text-gray-400 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "#1A1A2E" }} className="text-3xl font-bold text-center mb-12">
            Cómo trabajamos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex gap-4"
              >
                <span className="text-2xl shrink-0">{emoji}</span>
                <div>
                  <h3 style={{ color: "#1A1A2E" }} className="font-bold mb-2">
                    {title}
                  </h3>
                  <p style={{ color: "#2D2D2D" }} className="text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo placeholder */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl font-bold mb-6">Nuestro equipo</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Somos un equipo pequeño y enfocado: ingenieros de software, especialistas en LLMs y estrategas de negocio. Cada proyecto lo lideramos con dedicación total — no somos una fábrica de software.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4">
            <span style={{ color: "#00D9A6" }} className="text-xl">📍</span>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Sede principal</p>
              <p className="text-gray-400 text-sm">Pereira, Risaralda, Colombia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: "linear-gradient(135deg, #6C63FF 0%, #00D9A6 100%)" }}
        className="px-6 py-16 text-center"
      >
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          ¿Listo para trabajar juntos?
        </h2>
        <p className="text-white/80 mb-8">
          Agenda una llamada y cuéntanos qué quieres automatizar.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white font-bold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
          style={{ color: "#6C63FF" }}
        >
          Habla con nosotros →
        </a>
      </section>
    </>
  );
}
