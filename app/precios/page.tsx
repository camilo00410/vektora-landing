import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Planes y Precios — Agencia de IA para Empresas | Vektora",
  description:
    "Proyectos de IA desde $3K hasta $15K y retainers mensuales desde $500. Conoce nuestros planes de automatización con inteligencia artificial para empresas colombianas.",
  alternates: { canonical: "https://vektora.lat/precios" },
  openGraph: {
    title: "Planes y Precios — Agencia de IA para Empresas | Vektora",
    description:
      "Proyectos de IA desde $3K hasta $15K y retainers mensuales desde $500. Conoce nuestros planes de automatización con inteligencia artificial para empresas colombianas.",
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
const whatsappDiagnostico =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20mi%20diagn%C3%B3stico%20gratuito";

const plans = [
  {
    name: "Starter",
    price: "$800",
    currency: "USD · implementación única",
    priceCOP: "$3.400.000 COP",
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
    retainerUsd: "$250/mes USD",
    retainerCop: "$1.050.000/mes COP",
    retainerItems: [
      "Mantenimiento del agente",
      "Soporte WhatsApp",
      "2 ajustes menores/mes",
    ],
    whatsapp: whatsappStarter,
  },
  {
    name: "Growth",
    price: "$2.000",
    currency: "USD · implementación única",
    priceCOP: "$8.400.000 COP",
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
      "Integración con CRM existente",
    ],
    retainerUsd: "$500/mes USD",
    retainerCop: "$2.100.000/mes COP",
    retainerItems: [
      "Todo Starter +",
      "Dashboard de métricas",
      "Optimización mensual",
      "5 ajustes/mes",
      "Soporte prioritario",
    ],
    whatsapp: whatsappGrowth,
  },
  {
    name: "Enterprise",
    price: "$4.000",
    currency: "USD · implementación única",
    priceCOP: "$16.800.000 COP",
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
    retainerUsd: "$800/mes USD",
    retainerCop: "$3.360.000/mes COP",
    retainerItems: [
      "Todo Growth +",
      "Reportes ejecutivos",
      "SLA 24 horas",
      "Ajustes ilimitados",
      "Mejoras continuas",
    ],
    whatsapp: whatsappEnterprise,
  },
];

const faqs = [
  {
    q: "¿El retainer mensual es obligatorio?",
    a: "Sí. El retainer mensual es obligatorio en todos los paquetes. Incluye actualizaciones, mejoras continuas, soporte y mantenimiento del agente. Esto garantiza que tu agente funcione perfectamente y mejore con el tiempo.",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vektora.lat" },
    { "@type": "ListItem", "position": 2, "name": "Precios", "item": "https://vektora.lat/precios" }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta implementar inteligencia artificial en una empresa colombiana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo de implementación varía entre $800 USD ($3.400.000 COP) y $4.000 USD ($16.800.000 COP) dependiendo del alcance. Para soporte continuo, ofrecemos retainers desde $250 USD/mes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye un proyecto de automatización con IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Incluye diagnóstico de procesos, diseño del agente IA, desarrollo e integración con tus sistemas, pruebas y capacitación del equipo."
      }
    },
    {
      "@type": "Question",
      "name": "¿El precio incluye el costo de las APIs como OpenAI o WhatsApp?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Los costos de APIs de terceros (OpenAI, WhatsApp Business API) se cobran por separado según el uso real. En el diagnóstico gratuito estimamos estos costos para tu caso específico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo empezar con Starter y hacer upgrade después?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Muchos de nuestros clientes empiezan con Starter para validar el impacto y luego escalan a Growth o Enterprise. El retainer mensual cubre actualizaciones y el upgrade es flexible."
      }
    }
  ]
};

export default function PreciosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-4">
          Sin costos ocultos. Sin sorpresas. Elige el plan que se adapta al tamaño de tu operación.
        </p>
        <p style={{ color: "#00D9A6" }} className="text-sm font-semibold max-w-xl mx-auto">
          ⚡ Todos los paquetes incluyen retainer mensual obligatorio — actualizaciones, mejoras y soporte continuo garantizados.
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
                className="text-2xl font-bold mb-3"
                style={{ color: plan.featured ? "#fff" : "#1A1A2E" }}
              >
                {plan.name}
              </h2>

              {/* Implementation fee */}
              <div className={`pb-4 mb-4 border-b ${plan.featured ? "border-white/10" : "border-gray-100"}`}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: plan.featured ? "#aaa" : "#999" }}>
                  Implementación única
                </p>
                <p
                  className="text-4xl font-extrabold mb-1"
                  style={{ color: plan.featured ? "#fff" : plan.color }}
                >
                  {plan.price}
                  <span className="text-base font-semibold" style={{ color: plan.featured ? "#aaa" : "#999" }}> USD</span>
                </p>
                <p className="text-sm font-medium" style={{ color: plan.featured ? "#00D9A6" : "#6C63FF" }}>
                  {plan.priceCOP}
                </p>
              </div>

              {/* Retainer (mandatory) */}
              <div className={`pb-4 mb-4 border-b ${plan.featured ? "border-white/10" : "border-gray-100"}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: plan.featured ? "#00D9A6" : "#6C63FF" }}>
                  Retainer mensual (obligatorio)
                </p>
                <p
                  className="text-2xl font-extrabold mb-1"
                  style={{ color: plan.featured ? "#fff" : "#1A1A2E" }}
                >
                  {plan.retainerUsd}
                </p>
                <p className="text-sm" style={{ color: plan.featured ? "#aaa" : "#999" }}>
                  {plan.retainerCop}
                </p>
                <ul className="mt-3 space-y-1">
                  {plan.retainerItems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs" style={{ color: plan.featured ? "#ccc" : "#555" }}>
                      <span style={{ color: plan.featured ? "#00D9A6" : plan.color }} className="shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Implementation includes */}
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: plan.featured ? "#aaa" : "#999" }}>
                Incluye en implementación
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
          Precios en USD y COP (TRM referencia). ·{" "}
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

      {/* Servicios personalizados */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-3 text-center">
            Servicios personalizados
          </p>
          <h2 className="text-white text-3xl font-bold text-center mb-4">
            Automatización hecha para tu empresa, no para cualquiera
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            No todos los procesos son iguales. Por eso cobramos según la complejidad real de la solución — y empezamos siempre con un diagnóstico gratuito para que sepas exactamente qué necesitas antes de invertir un peso.
          </p>

          {/* Custom pricing table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#6C63FF" }}>
                  <th className="px-6 py-4 text-left text-white font-bold">Servicio</th>
                  <th className="px-6 py-4 text-left text-white font-bold">Inversión</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    service: "Diagnóstico de automatización",
                    price: "Gratis",
                    highlight: true,
                  },
                  {
                    service: "Agente personalizado — Simple",
                    price: "$1,000–$1,500 USD ($4.2M–$6.3M COP) + retainer $300 USD/mes",
                    highlight: false,
                  },
                  {
                    service: "Agente personalizado — Complejo",
                    price: "$2,500–$4,000 USD ($10.5M–$16.8M COP) + retainer $500–$800 USD/mes",
                    highlight: false,
                  },
                  {
                    service: "Suite personalizada (3+ agentes)",
                    price: "Cotización según alcance",
                    highlight: false,
                  },
                ].map(({ service, price, highlight }, i) => (
                  <tr
                    key={i}
                    className="border-t border-white/10"
                    style={{ backgroundColor: highlight ? "rgba(0,217,166,0.08)" : "rgba(255,255,255,0.03)" }}
                  >
                    <td className="px-6 py-4 font-semibold" style={{ color: highlight ? "#00D9A6" : "#fff" }}>
                      {service}
                    </td>
                    <td className="px-6 py-4" style={{ color: highlight ? "#00D9A6" : "#ccc" }}>
                      {highlight ? <strong>{price}</strong> : price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm text-center mb-8">
            Todos los precios incluyen diseño, desarrollo, integración y acompañamiento en lanzamiento. ·{" "}
            ¿No sabes qué nivel necesitas? La mayoría de nuestros clientes recupera la inversión en menos de 3 meses.
          </p>

          <div className="text-center">
            <a
              href={whatsappDiagnostico}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: "#00D9A6", color: "#1A1A2E" }}
              className="inline-block font-bold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
            >
              Agenda tu diagnóstico gratuito →
            </a>
          </div>
        </div>
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
