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
      name: "Camilo Loaiza",
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
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
              {/* WhatsApp Business */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#25D366" aria-label="WhatsApp Business">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>WhatsApp</span>
              </div>

              {/* HubSpot */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#FF7A59" aria-label="HubSpot">
                  <path d="M22.222 18.316l-2.845-2.845a4.505 4.505 0 0 0 .908-2.709 4.545 4.545 0 1 0-4.545 4.545 4.505 4.505 0 0 0 2.709-.908l2.845 2.845a.568.568 0 0 0 .928-.207.568.568 0 0 0-.124-.607zm-6.482-2.162a3.39 3.39 0 1 1 0-6.78 3.39 3.39 0 0 1 0 6.78zM9.07 8.023V5.31a2.302 2.302 0 1 0-2.302-2.302v.155H4.444A2.302 2.302 0 1 0 4.3 5.31h.155v2.713a6.836 6.836 0 0 0-2.926 5.523 6.862 6.862 0 0 0 6.862 6.862 6.862 6.862 0 0 0 4.802-11.688 6.836 6.836 0 0 0-4.123-2.697z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>HubSpot</span>
              </div>

              {/* Shopify */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#96BF48" aria-label="Shopify">
                  <path d="M15.337 23.979l7.216-1.561S19.674 5.775 19.655 5.633c-.019-.141-.14-.235-.264-.235s-2.42-.165-2.42-.165-.47-.47-.639-.494c0 0-.262-.041-.474 0l-.521-3.74S15.173.832 14.996 1c-.066.062-.116.068-.154.06C13.42.444 12.195.303 12 .303h-.02C10.57.303 9.32 1.39 8.326 3.465c-.694 1.43-1.045 3.082-1.175 4.513L4.89 8.666S4.015 8.932 3.98 9c-.013.03-1.308 10.012-1.308 10.012L15.337 23.98zM13.388 2.367c-.26.086-.553.195-.87.328V2.21c0-.523-.072-.928-.185-1.236.457.07.804.527 1.055 1.393zm-1.917-.23v.147c-.287.1-.578.202-.855.271V2.21c0-.523-.083-.936-.205-1.247.484.088.839.558 1.06 1.174z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>Shopify</span>
              </div>

              {/* Stripe */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#635BFF" aria-label="Stripe">
                  <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>Stripe</span>
              </div>

              {/* Google Workspace */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#4285F4" aria-label="Google Workspace">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>Google</span>
              </div>

              {/* Slack */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#4A154B" aria-label="Slack">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>Slack</span>
              </div>

              {/* n8n */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#EA4B71" aria-label="n8n">
                  <path d="M21 7a3 3 0 0 0-2.83 2H13.1A5.002 5.002 0 0 0 3 10a5 5 0 0 0 10.1 1h5.07A3 3 0 1 0 21 7zm-13 5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm13 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>n8n</span>
              </div>

              {/* Vercel */}
              <div className="integration-logo group flex flex-col items-center gap-2">
                <svg className="integration-logo-img" style={{ height: "40px", width: "auto" }} viewBox="0 0 24 24" fill="#ffffff" aria-label="Vercel">
                  <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
                <span className="text-xs font-medium" style={{ color: "rgba(248,249,250,0.45)" }}>Vercel</span>
              </div>
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
              <Image
                src="/camilo-loaiza.jpg"
                alt="Camilo Loaiza — Fundador y CEO de Vektora"
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover shrink-0"
                style={{
                  border: "3px solid #6C63FF",
                  boxShadow: "0 0 32px rgba(108,99,255,0.25)",
                }}
              />
              <div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#F8F9FA" }}
                >
                  Camilo Loaiza
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
