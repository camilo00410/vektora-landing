import Script from "next/script";
import { AnimatedStep } from "./components/AnimatedStep";

const whatsappUrl =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";

const whatsappLeadBot =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20LeadBot";

const whatsappShopAssist =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20ShopAssist";

const whatsappDocReview =
  "https://wa.me/573105975861?text=Hola%2C%20me%20interesa%20DocReview";

const whatsappCustom =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20automatizar%20mi%20proceso";

const whatsappPresupuesto =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20un%20presupuesto%20para%20mi%20empresa";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vektora.lat/#organization",
      name: "Vektora",
      url: "https://vektora.lat",
      logo: "https://vektora.lat/og-image.png",
      email: "info@vektora.lat",
      telephone: "+573105975861",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pereira",
        addressRegion: "Risaralda",
        addressCountry: "CO",
      },
      sameAs: [
        "https://linkedin.com/company/vektora",
        "https://instagram.com/vektora.lat",
      ],
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://vektora.lat/#localbusiness",
      name: "Vektora",
      description:
        "Empresa de agentes de IA especializada en automatización de procesos de negocio para empresas en Pereira, Colombia y LATAM.",
      url: "https://vektora.lat",
      telephone: "+573105975861",
      email: "info@vektora.lat",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pereira",
        addressRegion: "Risaralda",
        addressCountry: "CO",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 4.8133,
        longitude: -75.6961,
      },
      areaServed: ["Colombia", "México", "Chile", "LATAM"],
      image: "https://vektora.lat/og-image.png",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "Service",
      "@id": "https://vektora.lat/#leadbot",
      name: "LeadBot",
      description:
        "Agente de IA para calificación de leads por WhatsApp. Califica leads en 2 minutos, no en 4 horas.",
      provider: { "@id": "https://vektora.lat/#organization" },
      areaServed: "Colombia",
      serviceType: "Automatización de calificación de leads",
      url: "https://vektora.lat/#servicios",
    },
    {
      "@type": "Service",
      "@id": "https://vektora.lat/#shopassist",
      name: "ShopAssist",
      description:
        "Agente de IA para atención al cliente en e-commerce. Resuelve el 70% de consultas sin intervención humana.",
      provider: { "@id": "https://vektora.lat/#organization" },
      areaServed: "Colombia",
      serviceType: "Atención al cliente automatizada",
      url: "https://vektora.lat/#servicios",
    },
    {
      "@type": "Service",
      "@id": "https://vektora.lat/#docreview",
      name: "DocReview",
      description:
        "Agente de IA para análisis de contratos y documentos. Analiza documentos en 5 minutos, no en 2 horas.",
      provider: { "@id": "https://vektora.lat/#organization" },
      areaServed: "Colombia",
      serviceType: "Análisis documental automatizado",
      url: "https://vektora.lat/#servicios",
    },
    {
      "@type": "FAQPage",
      "@id": "https://vektora.lat/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un agente de IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un agente de IA es un sistema de software que percibe su entorno, toma decisiones y ejecuta tareas de forma autónoma para lograr objetivos específicos. En el contexto empresarial, automatiza procesos repetitivos como calificación de leads, atención al cliente o revisión de documentos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta automatizar mi empresa con IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuestros proyectos de implementación van desde $3,000 USD hasta $15,000 USD dependiendo de la complejidad. También ofrecemos retainers mensuales de mantenimiento y mejora continua desde $500 USD/mes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si el agente comete un error?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Todos nuestros agentes tienen supervisión humana configurable. Puedes establecer umbrales de confianza: si el agente no está seguro, escala automáticamente a tu equipo. Nunca actúa de forma autónoma en decisiones críticas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo tarda la implementación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La implementación tarda entre 2 y 4 semanas. Desde el primer día de operación del agente se observan métricas de mejora. La mayoría de nuestros clientes ven resultados medibles en los primeros 30 días.",
          },
        },
        {
          "@type": "Question",
          name: "¿Trabajan con empresas fuera de Pereira?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Aunque tenemos sede en Pereira, Colombia, trabajamos con empresas en toda Colombia, México y Chile. Operamos 100% remoto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito saber de tecnología para trabajar con ustedes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Nosotros gestionamos toda la implementación técnica. Tu equipo solo necesita revisar y aprobar los flujos antes del lanzamiento. La mayoría de nuestros clientes no tienen equipo de TI propio.",
          },
        },
        {
          "@type": "Question",
          name: "¿Con qué plataformas integran?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp Business, Gmail/Google Workspace, HubSpot, Notion, Google Sheets, y cualquier sistema con API. Si usas una plataforma específica, consulta — lo más probable es que ya tengamos conector.",
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "¿Qué es un agente de IA?",
    a: "Un agente de IA es un sistema que percibe su entorno, toma decisiones y ejecuta tareas de forma autónoma. En tu empresa, reemplaza procesos manuales repetitivos como responder mensajes, calificar leads o revisar documentos.",
  },
  {
    q: "¿Cuánto cuesta automatizar mi empresa?",
    a: "Los proyectos van desde $3,000 USD hasta $15,000 USD según la complejidad. También ofrecemos retainers mensuales de mantenimiento desde $500 USD/mes.",
    cta: true,
  },
  {
    q: "¿Qué pasa si el agente comete un error?",
    a: "Todos nuestros agentes tienen supervisión humana configurable. Puedes establecer umbrales de confianza: si el agente no está seguro, escala automáticamente a tu equipo. Nunca actúa de forma autónoma en decisiones críticas.",
  },
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "Entre 2 y 4 semanas. La mayoría de nuestros clientes ven resultados medibles en los primeros 30 días de operación.",
  },
  {
    q: "¿Trabajan con empresas fuera de Pereira?",
    a: "Sí. Tenemos sede en Pereira pero trabajamos con empresas en toda Colombia, México y Chile. Operamos 100% remoto.",
  },
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No. Nosotros gestionamos toda la implementación técnica. Tu equipo solo necesita revisar y aprobar los flujos antes del lanzamiento. La mayoría de nuestros clientes no tienen equipo de TI propio.",
  },
  {
    q: "¿Con qué plataformas integran?",
    a: "WhatsApp Business, Gmail/Google Workspace, HubSpot, Notion, Google Sheets, y cualquier sistema con API. Si usas una plataforma específica, consulta — lo más probable es que ya tengamos conector.",
  },
];

const steps = [
  {
    step: "01",
    title: "Analizamos",
    desc: "Analizamos tu operación e identificamos qué automatizar con mayor impacto.",
  },
  {
    step: "02",
    title: "Diseñamos",
    desc: "Diseñamos un agente de IA personalizado para tu flujo de trabajo específico.",
  },
  {
    step: "03",
    title: "Implementamos",
    desc: "Implementamos en 2–4 semanas con KPIs claros y métricas de éxito definidas.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main>
        {/* ── NAV ── */}
        <nav
          style={{ backgroundColor: "#1A1A2E" }}
          className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between"
        >
          <span className="text-white text-xl font-bold tracking-tight">
            <span style={{ color: "#6C63FF" }}>vek</span>tora
          </span>
          <div className="hidden md:flex items-center gap-6">
            <a href="#servicios" className="text-sm text-gray-300 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="text-sm text-gray-300 hover:text-white transition-colors">
              Proceso
            </a>
            <a href="#faq" className="text-sm text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#6C63FF" }}
            className="text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 active:scale-95 transition-all duration-150"
          >
            Agenda demo →
          </a>
        </nav>

        {/* ── HERO ── */}
        <section
          style={{ backgroundColor: "#1A1A2E" }}
          className="px-6 py-24 md:py-36 text-center"
        >
          <p
            style={{ color: "#00D9A6" }}
            className="text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up"
          >
            IA para empresas · Pereira · Colombia
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Automatiza lo que te quita tiempo.{" "}
            <span style={{ color: "#00D9A6" }}>Resultados en 30 días.</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up-delay-2">
            Diseñamos e implementamos agentes de IA que atienden leads, responden
            clientes y revisan documentos — sin contratar más personal.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-lg font-semibold px-8 py-4 rounded-xl active:scale-95 transition-all duration-200 shadow-lg animate-fade-in-up-delay-3"
            style={{
              backgroundColor: "#6C63FF",
              boxShadow: "0 8px 30px rgba(108,99,255,0.3)",
            }}
          >
            Solicita tu diagnóstico gratis
            <span aria-hidden>→</span>
          </a>
          <p className="text-sm text-gray-500 mt-4 flex flex-wrap gap-4 justify-center animate-fade-in-up-delay-3">
            <span>✓ Sin costo</span>
            <span>✓ Sin compromiso</span>
            <span>✓ Respuesta en 24h</span>
          </p>
        </section>

        {/* ── QUÉ HACEMOS / SERVICIOS ── */}
        <section id="servicios" style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2
              style={{ color: "#1A1A2E" }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Automatizamos lo que te quita tiempo
            </h2>
            <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
              Agentes especializados en los cuellos de botella más comunes: leads
              sin calificar, clientes sin respuesta, documentos acumulados.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* LeadBot */}
              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div
                  style={{ backgroundColor: "#EEF0FF", color: "#6C63FF" }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                >
                  🤖
                </div>
                <h3 style={{ color: "#6C63FF" }} className="text-xl font-bold mb-2">
                  LeadBot
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Para agencias de marketing
                </p>
                <p style={{ color: "#2D2D2D" }} className="flex-1">
                  Califica leads por WhatsApp en{" "}
                  <strong>2 minutos</strong>, no en 4 horas.
                </p>
                <a
                  href={whatsappLeadBot}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold transition-colors group"
                  style={{ color: "#6C63FF" }}
                >
                  Quiero este para mi empresa
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* ShopAssist */}
              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div
                  style={{ backgroundColor: "#E0FBF5", color: "#00D9A6" }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                >
                  🛒
                </div>
                <h3 style={{ color: "#00D9A6" }} className="text-xl font-bold mb-2">
                  ShopAssist
                </h3>
                <p className="text-gray-500 text-sm mb-4">Para e-commerce</p>
                <p style={{ color: "#2D2D2D" }} className="flex-1">
                  Resuelve el <strong>70% de consultas</strong> de tu e-commerce
                  sin intervención humana.
                </p>
                <a
                  href={whatsappShopAssist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold transition-colors group"
                  style={{ color: "#00D9A6" }}
                >
                  Quiero este para mi empresa
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* DocReview */}
              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
                <div
                  style={{ backgroundColor: "#EEF0FF", color: "#6C63FF" }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                >
                  📄
                </div>
                <h3 style={{ color: "#6C63FF" }} className="text-xl font-bold mb-2">
                  DocReview
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Para firmas legales y contables
                </p>
                <p style={{ color: "#2D2D2D" }} className="flex-1">
                  Analiza contratos y documentos en{" "}
                  <strong>5 minutos</strong>, no en 2 horas.
                </p>
                <a
                  href={whatsappDocReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold transition-colors group"
                  style={{ color: "#6C63FF" }}
                >
                  Quiero este para mi empresa
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Escape line */}
            <p className="text-center mt-10 text-gray-500">
              ¿Tu caso no está aquí?{" "}
              <a
                href={whatsappCustom}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
                style={{ color: "#00D9A6" }}
              >
                Cuéntanos tu proceso →
              </a>
            </p>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section
          id="proceso"
          style={{ backgroundColor: "#1A1A2E" }}
          className="px-6 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
              De cero a resultados en 2–4 semanas
            </h2>
            <p className="text-gray-400 text-center mb-14 max-w-xl mx-auto">
              Tres pasos. Sin fricción técnica de tu parte.
            </p>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              {steps.map(({ step, title, desc }, index) => (
                <AnimatedStep
                  key={step}
                  step={step}
                  title={title}
                  desc={desc}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── QUIÉNES SOMOS ── */}
        <section id="quienes-somos" style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left column: text */}
              <div>
                <p
                  className="text-sm font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#6C63FF" }}
                >
                  Quiénes somos
                </p>
                <h2
                  style={{ color: "#1A1A2E" }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Ingenieros que entienden tu negocio
                </h2>
                <p style={{ color: "#2D2D2D" }} className="leading-relaxed mb-4">
                  Somos un equipo de ingenieros y estrategas de IA con sede en{" "}
                  <strong>Pereira, Risaralda, Colombia</strong>. Fundamos Vektora
                  para que las empresas latinoamericanas accedan a automatización
                  real — no demos, no promesas: agentes que trabajan desde el día uno.
                </p>
                <p style={{ color: "#2D2D2D" }} className="leading-relaxed">
                  Nuestros agentes operan 24/7 en WhatsApp, email y sistemas
                  internos. Hemos implementado soluciones en más de 15 empresas
                  en Colombia, México y Chile, reduciendo tiempos de respuesta en
                  un 70% promedio.
                </p>
              </div>

              {/* Right column: stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-5xl font-extrabold" style={{ color: "#6C63FF" }}>
                    30
                  </p>
                  <p className="text-sm text-gray-500 mt-1">días a primeros resultados</p>
                </div>
                <div>
                  <p className="text-5xl font-extrabold" style={{ color: "#6C63FF" }}>
                    70%
                  </p>
                  <p className="text-sm text-gray-500 mt-1">consultas automatizadas</p>
                </div>
                <div>
                  <p className="text-5xl font-extrabold" style={{ color: "#6C63FF" }}>
                    15+
                  </p>
                  <p className="text-sm text-gray-500 mt-1">empresas en LATAM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a, cta }, i) => (
                <details
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 group"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 text-white font-semibold select-none">
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
                    {cta && (
                      <a
                        href={whatsappPresupuesto}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-sm font-semibold hover:underline"
                        style={{ color: "#00D9A6" }}
                      >
                        Agenda una llamada para tu presupuesto exacto →
                      </a>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section
          style={{
            background: "linear-gradient(135deg, #6C63FF 0%, #00D9A6 100%)",
          }}
          className="px-6 py-20 text-center"
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto">
            ¿Listo para que tu equipo se enfoque en lo que importa?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Hablemos. Una conversación puede cambiar cómo opera tu empresa.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#6C63FF] text-lg font-bold px-10 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 shadow-xl"
          >
            Habla con nosotros por WhatsApp →
          </a>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-white text-lg font-bold block mb-1">
                <span style={{ color: "#6C63FF" }}>vek</span>tora
              </span>
              <address className="text-gray-500 text-xs not-italic">
                Pereira, Risaralda, Colombia
              </address>
              <p className="text-gray-600 text-xs mt-1">
                Empresa de automatización con IA en Pereira — atendemos toda Colombia, México y Chile
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/company/vektora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2 px-1 min-h-[44px] inline-flex items-center"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/vektora.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2 px-1 min-h-[44px] inline-flex items-center"
              >
                Instagram
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2 px-1 min-h-[44px] inline-flex items-center"
              >
                WhatsApp
              </a>
            </div>

            <div className="text-right">
              <a
                href="mailto:info@vektora.lat"
                className="text-gray-400 hover:text-white transition-colors text-sm block py-1 min-h-[44px] inline-flex items-center"
              >
                info@vektora.lat
              </a>
              <a
                href="tel:+573105975861"
                className="text-gray-400 hover:text-white transition-colors text-sm block mt-1"
              >
                +57 310 597 5861
              </a>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-8">
            © {new Date().getFullYear()} Vektora. Todos los derechos reservados. · Pereira, Colombia
          </p>
        </footer>
      </main>
    </>
  );
}
