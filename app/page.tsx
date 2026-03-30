import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "./components/ScrollReveal";

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

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "+80%", label: "tareas automatizadas", icon: "⚡", ariaLabel: "Más del 80% de tareas automatizadas" },
  { value: "99.9%", label: "uptime garantizado", icon: "🛡️", ariaLabel: "99.9% de uptime garantizado" },
  { value: "<2 min", label: "tiempo de diagnóstico", icon: "🔍", ariaLabel: "Menos de 2 minutos de tiempo de diagnóstico" },
  { value: "24/7", label: "soporte activo", icon: "💬", ariaLabel: "Soporte activo 24 horas, 7 días a la semana" },
];

const painPoints = [
  {
    icon: "📢",
    h3: "Para agencias digitales",
    question: "¿Eres agencia de marketing?",
    body: "Pierdes horas en reportes manuales y briefs repetitivos para cada cliente.",
    href: "/servicios",
  },
  {
    icon: "🛍️",
    h3: "Para tiendas e-commerce",
    question: "¿Tienes una tienda en línea?",
    body: "Órdenes perdidas, respuestas lentas y carritos abandonados sin seguimiento automatizado.",
    href: "/servicios",
  },
  {
    icon: "⚖️",
    h3: "Para firmas legales",
    question: "¿Diriges una firma legal?",
    body: "Contratos, calendarios y seguimientos que consumen tiempo de tus abogados.",
    href: "/servicios",
  },
  {
    icon: "🔄",
    h3: "Para equipos con procesos manuales",
    question: "¿Aún corres procesos en hojas de cálculo?",
    body: "Errores humanos, datos desincronizados y cuellos de botella que frenan tu crecimiento.",
    href: "/servicios",
  },
];

const methodologySteps = [
  {
    step: "01",
    icon: "🔍",
    title: "Diagnóstico de procesos",
    desc: "Analizamos tus procesos y detectamos los flujos con mayor potencial de automatización.",
  },
  {
    step: "02",
    icon: "🎨",
    title: "Diseño de solución IA",
    desc: "Construimos la arquitectura del agente y los flujos de integración con tus herramientas.",
  },
  {
    step: "03",
    icon: "🚀",
    title: "Implementación de agentes",
    desc: "Desplegamos en producción en 2–4 semanas con pruebas en tiempo real.",
  },
  {
    step: "04",
    icon: "📈",
    title: "Optimización continua",
    desc: "Monitoreamos, ajustamos y escalamos los agentes según los resultados.",
  },
];

const integrations = [
  { slug: "whatsapp", name: "WhatsApp Business", alt: "Integración con WhatsApp Business" },
  { slug: "hubspot", name: "HubSpot", alt: "Integración con HubSpot CRM" },
  { slug: "shopify", name: "Shopify", alt: "Integración con Shopify" },
  { slug: "stripe", name: "Stripe", alt: "Integración con Stripe" },
  { slug: "googleworkspace", name: "Google Workspace", alt: "Integración con Google Workspace" },
  { slug: "slack", name: "Slack", alt: "Integración con Slack" },
  { slug: "n8n", name: "n8n", alt: "Integración con n8n" },
  { slug: "vercel", name: "Vercel", alt: "Integración con Vercel" },
];

const faqs = [
  {
    q: "¿Qué es un agente de IA?",
    a: "Un agente de IA es un sistema que percibe su entorno, toma decisiones y ejecuta tareas de forma autónoma. En tu empresa, reemplaza procesos manuales repetitivos como responder mensajes, calificar leads o revisar documentos.",
  },
  {
    q: "¿Cuánto cuesta automatizar mi empresa?",
    a: "Los proyectos van desde $800 USD ($3.400.000 COP) hasta $4.000 USD ($16.800.000 COP) según la complejidad. Todos los paquetes incluyen retainer mensual obligatorio desde $250 USD/mes ($1.050.000/mes COP), que cubre actualizaciones, soporte y mejoras continuas.",
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
  // 8 new questions (SEO-optimized)
  {
    q: "¿Cuánto cuesta implementar un agente de IA en mi empresa?",
    a: "Los proyectos con Vektora inician desde $3,000 USD según complejidad, con retainers mensuales desde $500 USD para optimización continua.",
  },
  {
    q: "¿En cuánto tiempo veré resultados reales?",
    a: "La mayoría de nuestros clientes ven automatización funcional en 2 a 4 semanas. El ROI medible llega en los primeros 60 días.",
  },
  {
    q: "¿Funciona para empresas pequeñas o medianas?",
    a: "Sí. Nuestros agentes están diseñados para PYMES y empresas B2B que no tienen equipos de tecnología grandes pero sí procesos repetitivos que optimizar.",
  },
  {
    q: "¿Es seguro automatizar procesos sensibles con IA?",
    a: "Todos los agentes se configuran con permisos explícitos. Nunca actúan fuera del alcance definido y toda acción queda registrada en logs auditables.",
  },
  {
    q: "¿Necesito equipo técnico interno para usar los agentes?",
    a: "No. Vektora se encarga de la implementación completa. Tu equipo solo interactúa con interfaces simples, sin código.",
  },
  {
    q: "¿Qué pasa si la IA comete un error en mis procesos?",
    a: "Incluimos revisión humana configurable en puntos críticos. Los agentes tienen límites de acción y alertan al equipo si encuentran situaciones inusuales.",
  },
  {
    q: "¿Puedo integrar sus soluciones con mis herramientas actuales?",
    a: "Sí. Trabajamos nativamente con WhatsApp Business, HubSpot, Shopify, Stripe, Google Workspace, Notion y más de 50 herramientas vía API.",
  },
  {
    q: "¿Ofrecen soporte después de la implementación?",
    a: "Sí. Todos los proyectos incluyen 30 días de soporte post-lanzamiento. Los retainers mensuales incluyen monitoreo continuo y optimización proactiva.",
  },
];

// ── JSON-LD Schema ─────────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://vektora.lat/#organization",
      name: "Vektora",
      url: "https://vektora.lat",
      logo: "https://vektora.lat/logo/vektora-icon.png",
      description:
        "Agencia de IA B2B especializada en agentes de automatización para empresas latinoamericanas.",
      foundingDate: "2025",
      email: "info@vektora.lat",
      telephone: "+573105975861",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pereira",
        addressRegion: "Risaralda",
        addressCountry: "CO",
      },
      areaServed: ["CO", "MX", "CL"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: "Spanish",
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
      "@type": "Person",
      "@id": "https://vektora.lat/#founder",
      name: "[Founder Name]",
      jobTitle: "Fundador y CEO de Vektora",
      worksFor: { "@id": "https://vektora.lat/#organization" },
      description:
        "Especialista en automatización con IA para empresas B2B en Latinoamérica.",
      url: "https://vektora.lat",
    },
    {
      "@type": "FAQPage",
      "@id": "https://vektora.lat/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta implementar un agente de IA en mi empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los proyectos con Vektora inician desde $3,000 USD según complejidad, con retainers mensuales desde $500 USD para optimización continua.",
          },
        },
        {
          "@type": "Question",
          name: "¿En cuánto tiempo veré resultados reales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La mayoría de nuestros clientes ven automatización funcional en 2 a 4 semanas. El ROI medible llega en los primeros 60 días.",
          },
        },
        {
          "@type": "Question",
          name: "¿Funciona para empresas pequeñas o medianas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Nuestros agentes están diseñados para PYMES y empresas B2B que no tienen equipos de tecnología grandes pero sí procesos repetitivos que optimizar.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es seguro automatizar procesos sensibles con IA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Todos los agentes se configuran con permisos explícitos. Nunca actúan fuera del alcance definido y toda acción queda registrada en logs auditables.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito equipo técnico interno para usar los agentes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Vektora se encarga de la implementación completa. Tu equipo solo interactúa con interfaces simples, sin código.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si la IA comete un error en mis procesos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Incluimos revisión humana configurable en puntos críticos. Los agentes tienen límites de acción y alertan al equipo si encuentran situaciones inusuales.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo integrar sus soluciones con mis herramientas actuales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Trabajamos nativamente con WhatsApp Business, HubSpot, Shopify, Stripe, Google Workspace, Notion y más de 50 herramientas vía API.",
          },
        },
        {
          "@type": "Question",
          name: "¿Ofrecen soporte después de la implementación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Todos los proyectos incluyen 30 días de soporte post-lanzamiento. Los retainers mensuales incluyen monitoreo continuo y optimización proactiva.",
          },
        },
      ],
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section
        style={{ backgroundColor: "#1A1A2E" }}
        className="px-6 pt-24 md:pt-36 pb-0 text-center"
      >
        <p
          style={{ color: "#00D9A6" }}
          className="text-sm font-semibold uppercase tracking-widest mb-4 animate-fade-in-up"
        >
          IA para empresas · Pereira · Colombia
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto animate-fade-in-up-delay-1">
          Agencia de Inteligencia Artificial para{" "}
          <span style={{ color: "#00D9A6" }}>Empresas en Colombia</span>
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
        <div className="flex flex-wrap gap-3 justify-center mt-6 pb-10">
          {[
            "Resultados medibles en 30 días",
            "Implementación en 2–4 semanas",
            "Sin contratos de largo plazo",
          ].map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border"
              style={{
                backgroundColor: "rgba(0,217,166,0.1)",
                borderColor: "rgba(0,217,166,0.3)",
                color: "#00D9A6",
              }}
            >
              <span>✓</span> {pill}
            </span>
          ))}
        </div>

        {/* ── STATS BAR ── */}
        <div
          className="border-t"
          style={{
            borderColor: "rgba(108,99,255,0.2)",
            backgroundColor: "#252540",
          }}
        >
          <h2 className="sr-only">
            Resultados reales con IA: automatización, disponibilidad y soporte 24/7
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className="flex items-center gap-3 px-6 py-5"
                style={{
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(108,99,255,0.2)"
                      : undefined,
                  borderBottom:
                    i < 2 ? "1px solid rgba(108,99,255,0.2)" : undefined,
                }}
                aria-label={stat.ariaLabel}
              >
                <span className="text-2xl shrink-0" aria-hidden>
                  {stat.icon}
                </span>
                <div>
                  <p
                    className="text-lg font-bold leading-tight"
                    style={{ color: "#00D9A6" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: "rgba(248,249,250,0.55)" }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINT CARDS ── */}
      <section
        style={{ backgroundColor: "#1A1A2E" }}
        className="px-6 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-white text-3xl md:text-4xl font-bold text-center mb-4"
            >
              ¿Qué problema resuelve Vektora en tu negocio?
            </h2>
            <p
              className="text-center mb-14 max-w-xl mx-auto"
              style={{ color: "rgba(248,249,250,0.55)" }}
            >
              Automatización de IA para agencias digitales, e-commerce, firmas legales y equipos con procesos manuales.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((card, i) => (
              <ScrollReveal key={card.h3} delay={i % 3 as 0 | 1 | 2}>
                <article
                  className="rounded-2xl border p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#2D2D2D",
                    borderColor: "rgba(108,99,255,0.2)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 shrink-0"
                    style={{ backgroundColor: "rgba(108,99,255,0.12)", color: "#6C63FF" }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontSize: "1.15rem", color: "#F8F9FA" }}
                  >
                    {card.question}
                  </h3>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: "rgba(248,249,250,0.55)" }}
                  >
                    {card.body}
                  </p>
                  <Link
                    href={card.href}
                    className="text-sm font-medium hover:underline"
                    style={{ color: "#00D9A6" }}
                  >
                    Automatiza tu {card.h3.replace("Para ", "").toLowerCase()} con IA →
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE METODOLOGÍA ── */}
      <section
        id="proceso"
        style={{ backgroundColor: "#0F0F23" }}
        className="px-6 py-20"
      >
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-4">
              Nuestra metodología: de diagnóstico a optimización en 4 pasos
            </h2>
            <p
              className="text-center mb-16 max-w-xl mx-auto"
              style={{ color: "rgba(248,249,250,0.55)" }}
            >
              Un proceso probado que lleva tu empresa de procesos manuales a automatización total.
            </p>
          </ScrollReveal>

          {/* Desktop horizontal / Mobile vertical */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden md:block absolute top-7 left-0 right-0 h-0.5 mx-24"
              style={{
                background: "linear-gradient(90deg, #6C63FF, #00D9A6)",
                zIndex: 0,
              }}
            />

            <div className="grid md:grid-cols-4 gap-10 relative z-10">
              {methodologySteps.map((s, i) => (
                <ScrollReveal key={s.step} delay={i === 0 ? 0 : i === 1 ? 1 : 2}>
                  <article className="text-center flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #6C63FF, #4a43e0)",
                        boxShadow: "0 0 32px rgba(108,99,255,0.25)",
                        zIndex: 1,
                      }}
                    >
                      {s.step}
                    </div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: "#F8F9FA", fontSize: "1rem" }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="text-sm leading-snug"
                      style={{ color: "rgba(248,249,250,0.55)" }}
                    >
                      {s.desc}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS LOGOS BAR ── */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="text-center mb-10 uppercase tracking-widest text-xs font-semibold"
              style={{ color: "rgba(248,249,250,0.55)" }}
            >
              Integraciones nativas con las herramientas que ya usas
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {integrations.map((tool) => (
                <div key={tool.slug} className="integration-logo group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${tool.slug}`}
                    alt={tool.alt}
                    width={80}
                    height={32}
                    loading="lazy"
                    className="integration-logo-img"
                    style={{ maxHeight: "32px", width: "auto" }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── QUÉ HACEMOS / SERVICIOS ── */}
      <section id="servicios" style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              style={{ color: "#1A1A2E" }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Automatiza tu empresa con agentes IA a medida
            </h2>
            <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
              Agentes especializados en los cuellos de botella más comunes: leads
              sin calificar, clientes sin respuesta, documentos acumulados.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* LeadBot */}
            <ScrollReveal delay={0}>
              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
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
            </ScrollReveal>

            {/* ShopAssist */}
            <ScrollReveal delay={1}>
              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
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
            </ScrollReveal>

            {/* DocReview */}
            <ScrollReveal delay={2}>
              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col h-full">
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
            </ScrollReveal>
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

      {/* ── OPTIMIZACIÓN PERSONALIZADA ── */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-3">
              Nuevo servicio
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              ¿Tu operación depende demasiado de personas haciendo lo mismo una y otra vez?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Diseñamos agentes de IA a medida para automatizar los procesos manuales que frenan tu crecimiento. Empieza con un diagnóstico gratuito.
            </p>
            <Link
              href="/servicios#optimizacion"
              style={{ backgroundColor: "#6C63FF" }}
              className="inline-block text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
            >
              Conoce el servicio →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section id="quienes-somos" style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
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
            </ScrollReveal>

            <ScrollReveal delay={1}>
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ── */}
      <section
        id="fundador"
        style={{ backgroundColor: "#1A1A2E" }}
        className="px-6 py-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
              Conoce al fundador de Vektora
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="flex flex-col items-center gap-6">
              {/* Avatar placeholder */}
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0"
                style={{
                  border: "3px solid #6C63FF",
                  boxShadow: "0 0 32px rgba(108,99,255,0.25)",
                  background: "linear-gradient(135deg, #252540, #2D2D2D)",
                }}
                aria-label="Foto del fundador (placeholder)"
              >
                {/* Board: replace with <Image> of real founder photo */}
                VK
              </div>
              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#F8F9FA" }}
                >
                  {/* Board: replace with real founder name */}
                  [Founder Name]
                </h3>
                <p
                  className="text-sm font-medium mb-4"
                  style={{ color: "#00D9A6" }}
                >
                  Fundador &amp; CEO, Vektora
                </p>
                <p
                  className="leading-relaxed mb-6 max-w-md mx-auto"
                  style={{ fontSize: "0.95rem", color: "rgba(248,249,250,0.55)" }}
                >
                  {/* Board: replace with real bio (2–3 lines) */}
                  Especialista en automatización con IA para empresas B2B en Latinoamérica. Apasionado por construir soluciones que resuelven problemas reales de negocio con tecnología de vanguardia.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-sm transition-all duration-200 px-5 py-2 rounded-full border"
                  style={{
                    color: "#6C63FF",
                    borderColor: "#6C63FF",
                  }}
                >
                  {/* Board: replace # with real LinkedIn URL */}
                  Conectar en LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ backgroundColor: "#0F0F23" }} className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
              Preguntas frecuentes sobre automatización con IA
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map(({ q, a, cta }, i) => (
              <ScrollReveal key={i}>
                <details
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
              </ScrollReveal>
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
    </>
  );
}
