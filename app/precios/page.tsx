import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Precios de Agentes IA | Vektora — Planes y Paquetes",
  description:
    "Planes de implementación de agentes IA desde $3,000 USD. Paquete Starter, Growth y Enterprise con retainer mensual. Sin costos ocultos. Pereira, Colombia.",
  alternates: { canonical: "https://vektora.lat/precios" },
  openGraph: {
    title: "Precios | Vektora — Automatización con IA",
    description:
      "Implementación de agentes IA desde $3,000 USD. Elige el plan que se adapta a tu empresa.",
    url: "https://vektora.lat/precios",
  },
};

const whatsappStarter =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20el%20paquete%20Starter";
const whatsappGrowth =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20el%20paquete%20Growth";
const whatsappEnterprise =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Enterprise";
const whatsappGeneral =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20un%20presupuesto%20para%20mi%20empresa";

const plans = [
  {
    name: "Starter",
    price: "$3,000",
    currency: "USD · pago único",
    tag: "Para empresas que empiezan con IA",
    color: "#6C63FF",
    featured: false,
    includes: [
      "1 agente de IA implementado",
      "1 canal de integración (WhatsApp o email)",
      "Configuración y pruebas (2 semanas)",
      "Capacitación al equipo (2 horas)",
      "Soporte 30 días post-lanzamiento",
      "Dashboard de métricas básico",
    ],
    retainer: "Mantenimiento: $500 USD/mes (opcional)",
    whatsapp: whatsappStarter,
  },
  {
    name: "Growth",
    price: "$7,500",
    currency: "USD · pago único",
    tag: "El más elegido por medianas empresas",
    color: "#6C63FF",
    featured: true,
    includes: [
      "2 agentes de IA implementados",
      "Hasta 3 canales de integración",
      "Configuración y pruebas (3–4 semanas)",
      "Capacitación al equipo (4 horas)",
      "Soporte 60 días post-lanzamiento",
      "Dashboard de métricas avanzado",
      "Optimización mensual incluida (3 meses)",
      "Integración con CRM existente",
    ],
    retainer: "Mantenimiento: $1,000 USD/mes (incluye mejoras)",
    whatsapp: whatsappGrowth,
  },
  {
    name: "Enterprise",
    price: "Desde $12,000",
    currency: "USD · a medida",
    tag: "Para operaciones complejas y equipos grandes",
    color: "#00D9A6",
    featured: false,
    includes: [
      "Agentes ilimitados a medida",
      "Integraciones con todos tus sistemas",
      "Implementación en 4–8 semanas",
      "Capacitación completa al equipo",
      "SLA de soporte garantizado",
      "Reportes ejecutivos mensuales",
      "Gerente de cuenta dedicado",
      "Personalización completa de flujos",
    ],
    retainer: "Retainer mensual desde $2,000 USD",
    whatsapp: whatsappEnterprise,
  },
];

const faqs = [
  {
    q: "¿El precio incluye el mantenimiento?",
    a: "El precio de implementación es un pago único. El mantenimiento y la mejora continua son opcionales y se contratan como retainer mensual. Los primeros 30–60 días de soporte siempre están incluidos.",
  },
  {
    q: "¿Qué pasa si necesito más de lo que incluye mi plan?",
    a: "Podemos ampliar cualquier plan. Si empezaste con Starter y tu empresa crece, hacemos una transición a Growth sin que pierdas la inversión inicial.",
  },
  {
    q: "¿Puedo pagar en pesos colombianos?",
    a: "Sí. Los precios son de referencia en USD. Podemos facturar en pesos colombianos a la TRM del día de la firma del contrato.",
  },
  {
    q: "¿Hay contrato mínimo para el retainer?",
    a: "El retainer mínimo es de 3 meses. Después puedes cancelar con 30 días de aviso.",
  },
  {
    q: "¿Ofrecen prueba gratuita?",
    a: "Ofrecemos un diagnóstico gratuito de tu operación antes de cualquier compromiso. En esa sesión definimos qué automatizar y te damos un estimado detallado.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  name: "Planes de implementación de agentes IA — Vektora",
  description: "Paquetes de implementación de agentes de IA para empresas en Colombia y LATAM.",
  url: "https://vektora.lat/precios",
};

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Precios" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20 text-center">
        <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
          Precios
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Inversión clara, resultados medibles
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Sin costos ocultos. Sin sorpresas. Elige el plan que se adapta al tamaño de tu operación.
        </p>
      </section>

      {/* Pricing table */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? "border-2 shadow-xl relative"
                  : "border border-gray-200 bg-white shadow-sm"
              }`}
              style={
                plan.featured
                  ? { borderColor: "#6C63FF", backgroundColor: "#1A1A2E" }
                  : {}
              }
            >
              {plan.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full"
                  style={{ backgroundColor: "#6C63FF" }}
                >
                  MÁS POPULAR
                </div>
              )}
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: plan.featured ? "#00D9A6" : plan.color }}
              >
                {plan.tag}
              </p>
              <h2
                className="text-2xl font-bold mb-1"
                style={{ color: plan.featured ? "#fff" : "#1A1A2E" }}
              >
                {plan.name}
              </h2>
              <p
                className="text-4xl font-extrabold mb-1"
                style={{ color: plan.featured ? "#fff" : plan.color }}
              >
                {plan.price}
              </p>
              <p className="text-sm mb-6" style={{ color: plan.featured ? "#aaa" : "#999" }}>
                {plan.currency}
              </p>

              <ul className="space-y-2 flex-1 mb-6">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span style={{ color: plan.featured ? "#00D9A6" : plan.color }} className="mt-0.5 shrink-0">
                      ✓
                    </span>
                    <span style={{ color: plan.featured ? "#ddd" : "#2D2D2D" }}>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs mb-6" style={{ color: plan.featured ? "#888" : "#999" }}>
                {plan.retainer}
              </p>

              <a
                href={plan.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-semibold py-3 px-6 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
                style={
                  plan.featured
                    ? { backgroundColor: "#6C63FF", color: "#fff" }
                    : { backgroundColor: plan.color, color: "#fff" }
                }
              >
                Empezar con {plan.name} →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          ¿No estás seguro qué plan necesitas?{" "}
          <a
            href={whatsappGeneral}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
            style={{ color: "#6C63FF" }}
          >
            Agenda un diagnóstico gratuito →
          </a>
        </p>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-white text-3xl font-bold text-center mb-12">
            Preguntas sobre precios
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <details
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 group"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 text-white font-semibold select-none cursor-pointer">
                  <span>{q}</span>
                  <span
                    style={{ color: "#6C63FF" }}
                    className="text-2xl shrink-0 group-open:rotate-45 transition-transform duration-200"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ background: "linear-gradient(135deg, #6C63FF 0%, #00D9A6 100%)" }}
        className="px-6 py-16 text-center"
      >
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Diagnóstico gratuito — sin compromiso
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          En una llamada de 30 minutos analizamos tu operación y te decimos exactamente qué automatizar y cuánto costaría.
        </p>
        <a
          href={whatsappGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white font-bold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
          style={{ color: "#6C63FF" }}
        >
          Agendar diagnóstico gratuito →
        </a>
      </section>
    </>
  );
}
