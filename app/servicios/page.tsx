import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Servicios de Inteligencia Artificial para Empresas | Vektora",
  description:
    "Chatbots empresariales, agentes IA personalizados y automatización de procesos. Soluciones de inteligencia artificial B2B para empresas colombianas. Conoce cómo trabajamos.",
  alternates: { canonical: "https://vektora.lat/servicios" },
  openGraph: {
    title: "Servicios de Inteligencia Artificial para Empresas | Vektora",
    description:
      "Chatbots empresariales, agentes IA personalizados y automatización de procesos. Soluciones de inteligencia artificial B2B para empresas colombianas.",
    url: "https://vektora.lat/servicios",
  },
};

const whatsappLeadBot =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20LeadBot";
const whatsappShopAssist =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20ShopAssist";
const whatsappDocReview =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20DocReview";
const whatsappCustom =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20automatizar%20mi%20proceso";
const whatsappOptimizacion =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20gratuito";

const services = [
  {
    id: "leadbot",
    emoji: "🤖",
    name: "LeadBot",
    tag: "Para agencias de marketing y ventas",
    color: "#6C63FF",
    bg: "#EEF0FF",
    headline: "Califica leads en 2 minutos, no en 4 horas",
    description:
      "LeadBot conecta con tus leads por WhatsApp o email de forma automática, hace las preguntas clave y clasifica a cada prospecto según tu criterio — todo sin que tu equipo comercial levante un dedo.",
    benefits: [
      "Calificación automática 24/7 por WhatsApp",
      "Reduce el tiempo de respuesta de horas a minutos",
      "Integración con HubSpot, Notion, Google Sheets",
      "Alertas al equipo comercial para leads calientes",
      "Personalizable con tu guión de ventas",
    ],
    metrics: [
      { value: "2 min", label: "Tiempo de calificación" },
      { value: "3x", label: "Más leads procesados" },
      { value: "24/7", label: "Operación continua" },
    ],
    whatsapp: whatsappLeadBot,
  },
  {
    id: "shopassist",
    emoji: "🛒",
    name: "ShopAssist",
    tag: "Para e-commerce y tiendas online",
    color: "#00D9A6",
    bg: "#E0FBF5",
    headline: "Resuelve el 70% de consultas sin intervención humana",
    description:
      "ShopAssist atiende a tus clientes en tiempo real: responde preguntas sobre productos, gestiona pedidos, procesa devoluciones y escala solo cuando necesita la aprobación de un humano.",
    benefits: [
      "Respuestas instantáneas sobre productos y stock",
      "Seguimiento de pedidos y notificaciones",
      "Gestión de devoluciones y reclamaciones",
      "Integración con WooCommerce, Shopify y MercadoLibre",
      "Escalada inteligente al equipo humano",
    ],
    metrics: [
      { value: "70%", label: "Consultas automatizadas" },
      { value: "-60%", label: "Carga al equipo" },
      { value: "+40%", label: "Satisfacción del cliente" },
    ],
    whatsapp: whatsappShopAssist,
  },
  {
    id: "docreview",
    emoji: "📄",
    name: "DocReview",
    tag: "Para firmas legales y contables",
    color: "#6C63FF",
    bg: "#EEF0FF",
    headline: "Analiza contratos y documentos en 5 minutos, no en 2 horas",
    description:
      "DocReview extrae cláusulas clave, detecta riesgos y genera resúmenes ejecutivos de contratos, pólizas y documentos legales — con precisión y en una fracción del tiempo habitual.",
    benefits: [
      "Extracción automática de cláusulas y fechas",
      "Detección de riesgos y alertas de revisión",
      "Resumen ejecutivo en lenguaje simple",
      "Compatible con PDF, Word y documentos escaneados",
      "Historial de revisiones y trazabilidad",
    ],
    metrics: [
      { value: "5 min", label: "Por documento" },
      { value: "90%", label: "Precisión en extracción" },
      { value: "10x", label: "Más rápido que revisión manual" },
    ],
    whatsapp: whatsappDocReview,
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vektora.lat" },
    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://vektora.lat/servicios" }
  ]
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      description: s.description,
      provider: { "@type": "Organization", name: "Vektora", url: "https://vektora.lat" },
      url: `https://vektora.lat/servicios#${s.id}`,
    },
  })),
};

export default function ServiciosPage() {
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

      <Breadcrumbs items={[{ label: "Servicios" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20 text-center">
        <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
          Servicios
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Agentes de IA para los procesos que más tiempo te cuestan
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Tres agentes especializados listos para automatizar los cuellos de botella más comunes en empresas de Colombia y LATAM.
        </p>
      </section>

      {/* Services detail */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-24">
          {services.map((service, idx) => (
            <article
              key={service.id}
              id={service.id}
              className={`grid md:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text */}
              <div>
                <div
                  style={{ backgroundColor: service.bg, color: service.color }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                >
                  {service.emoji}
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: service.color }}>
                  {service.tag}
                </p>
                <h2 style={{ color: "#1A1A2E" }} className="text-3xl font-bold mb-3">
                  {service.name}
                </h2>
                <p className="text-xl font-semibold mb-4" style={{ color: service.color }}>
                  {service.headline}
                </p>
                <p style={{ color: "#2D2D2D" }} className="leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: service.color }}
                  className="inline-block text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
                >
                  Quiero {service.name} para mi empresa →
                </a>
              </div>

              {/* Benefits + metrics */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <h3 style={{ color: "#1A1A2E" }} className="font-bold mb-4">
                    ¿Qué incluye?
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#2D2D2D" }}>
                        <span style={{ color: service.color }} className="mt-0.5 shrink-0">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {service.metrics.map((m) => (
                    <div key={m.label} className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                      <p className="text-2xl font-extrabold" style={{ color: service.color }}>
                        {m.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Optimización Personalizada */}
      <section id="optimizacion" style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
              Optimización Personalizada
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
              ¿Cuántas horas pierde tu equipo en tareas que debería hacer una máquina?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              En Vektora analizamos tu operación, identificamos los cuellos de botella y diseñamos agentes de IA a medida que trabajan 24/7 sin errores y sin excusas.
            </p>
          </div>

          {/* 3-step flow */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                num: "01",
                title: "Diagnóstico gratuito",
                desc: "Agendamos una sesión de 45 minutos contigo. Mapeamos tus procesos y te decimos exactamente qué se puede automatizar — sin compromiso.",
              },
              {
                num: "02",
                title: "Diseño de la solución",
                desc: "Nuestro equipo construye el agente o suite de agentes pensados para tu negocio: integraciones con tus sistemas, flujos a tu medida, pruebas reales antes del lanzamiento.",
              },
              {
                num: "03",
                title: "Implementación y soporte",
                desc: "Desplegamos, entrenamos a tu equipo y te acompañamos mes a mes. Tú te enfocas en crecer, nosotros mantenemos que todo funcione.",
              },
            ].map(({ num, title, desc }) => (
              <div key={num} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p style={{ color: "#6C63FF" }} className="text-4xl font-extrabold mb-4">{num}</p>
                <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Automatable processes */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
            <h3 className="text-white text-xl font-bold mb-6 text-center">Procesos que automatizamos</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🧾", text: "Facturación y cobro manual — generación automática, recordatorios y conciliación." },
                { icon: "💬", text: "Atención a clientes por múltiples canales — WhatsApp, email y web unificados." },
                { icon: "📊", text: "Entrada de datos en hojas de cálculo — captura, validación y carga automática." },
                { icon: "📦", text: "Seguimiento de pedidos e inventario — alertas en tiempo real y reposición automática." },
                { icon: "📈", text: "Generación de reportes repetitivos — informes semanales/mensuales sin tocar una celda." },
                { icon: "🚀", text: "Onboarding de clientes y empleados — flujo guiado y activación automática." },
                { icon: "📅", text: "Programación de citas — agendamiento 24/7 con confirmaciones y recordatorios." },
                { icon: "📧", text: "Clasificación de emails y mensajes — priorización, etiquetado y respuestas automáticas." },
                { icon: "✅", text: "Aprobaciones y flujos internos — notificaciones, escalado y registro de decisiones." },
                { icon: "🔄", text: "Seguimiento postventa y renovaciones — alertas de vencimiento y upsell automatizado." },
              ].map(({ icon, text }) => (
                <div key={icon} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-xl shrink-0">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={whatsappOptimizacion}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#00D9A6", color: "#1A1A2E" }}
              className="inline-block font-bold text-lg px-10 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 shadow-lg"
            >
              Agenda tu diagnóstico gratuito →
            </a>
            <p className="text-gray-500 text-sm mt-3">Disponible por WhatsApp. Sin costo, sin compromiso.</p>
          </div>
        </div>
      </section>
    </>
  );
}
