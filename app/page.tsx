import Script from "next/script";

const whatsappUrl =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";

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
      url: "https://vektora.lat/#que-hacemos",
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
      url: "https://vektora.lat/#que-hacemos",
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
      url: "https://vektora.lat/#que-hacemos",
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
          name: "¿Hay empresas de IA en Pereira?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Vektora es una empresa de agentes de IA con sede en Pereira, Risaralda, Colombia. Somos especialistas en automatización de procesos de negocio para empresas colombianas y latinoamericanas.",
          },
        },
        {
          "@type": "Question",
          name: "¿En cuánto tiempo ven resultados mis clientes?",
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
  },
  {
    q: "¿Hay empresas de IA en Pereira?",
    a: "Sí. Vektora tiene sede en Pereira, Risaralda, Colombia. Somos especialistas en automatización de procesos con IA para empresas colombianas y latinoamericanas.",
  },
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "Entre 2 y 4 semanas. La mayoría de nuestros clientes ven resultados medibles en los primeros 30 días de operación.",
  },
  {
    q: "¿Trabajan con empresas fuera de Pereira?",
    a: "Sí. Tenemos sede en Pereira pero trabajamos con empresas en toda Colombia, México y Chile. Operamos 100% remoto.",
  },
];

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
            AI Agents Studio · Pereira, Colombia
          </p>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto animate-fade-in-up-delay-1">
            Agentes de IA que trabajan por ti
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-in-up-delay-2">
            Diseñamos, implementamos y operamos agentes inteligentes que
            automatizan los procesos repetitivos de tu empresa.{" "}
            <span style={{ color: "#00D9A6" }} className="font-semibold">
              Resultados medibles en 30 días.
            </span>
          </p>
          <p className="text-gray-500 text-sm mb-10 animate-fade-in-up-delay-2">
            Empresa de automatización con IA en Pereira, Risaralda — atendemos toda Colombia, México y Chile
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#6C63FF" }}
            className="inline-block text-white text-lg font-semibold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150 shadow-lg animate-fade-in-up-delay-3"
          >
            Agenda tu demo gratuita →
          </a>
        </section>

        {/* ── QUÉ HACEMOS ── */}
        <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2
              style={{ color: "#1A1A2E" }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              ¿Qué hacemos?
            </h2>
            <p className="text-center text-gray-500 mb-14 max-w-xl mx-auto">
              Agentes de IA especializados para los retos más comunes de las
              empresas latinoamericanas.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
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
                <p style={{ color: "#2D2D2D" }}>
                  Califica leads por WhatsApp en{" "}
                  <strong>2 minutos</strong>, no en 4 horas.
                </p>
              </div>

              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
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
                <p style={{ color: "#2D2D2D" }}>
                  Resuelve el <strong>70% de consultas</strong> de tu e-commerce
                  sin intervención humana.
                </p>
              </div>

              <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
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
                <p style={{ color: "#2D2D2D" }}>
                  Analiza contratos y documentos en{" "}
                  <strong>5 minutos</strong>, no en 2 horas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section
          style={{ backgroundColor: "#1A1A2E" }}
          className="px-6 py-20"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-14">
              Cómo funciona
            </h2>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              {(
                [
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
                ] as const
              ).map(({ step, title, desc }) => (
                <div key={step}>
                  <p
                    style={{ color: "#6C63FF" }}
                    className="text-5xl font-extrabold mb-4 opacity-40"
                  >
                    {step}
                  </p>
                  <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QUIÉNES SOMOS ── */}
        <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              style={{ color: "#1A1A2E" }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Quiénes somos
            </h2>
            <p style={{ color: "#2D2D2D" }} className="text-lg leading-relaxed mb-6">
              Somos un equipo de ingenieros y estrategas de IA con sede en{" "}
              <strong>Pereira, Risaralda, Colombia</strong>. Creamos Vektora
              para acercar la inteligencia artificial a las empresas
              latinoamericanas que quieren crecer sin contratar más personal.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Nuestros agentes trabajan 24/7 en WhatsApp, email y sistemas
              internos. Hemos ayudado a empresas en Colombia, México y Chile a
              reducir tiempos de respuesta, aumentar conversiones y liberar a sus
              equipos para enfocarse en lo que realmente importa.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex flex-col items-center">
                <span style={{ color: "#6C63FF" }} className="text-3xl font-bold">30</span>
                <span className="text-gray-500">días a resultados</span>
              </div>
              <div className="flex flex-col items-center">
                <span style={{ color: "#00D9A6" }} className="text-3xl font-bold">70%</span>
                <span className="text-gray-500">consultas automatizadas</span>
              </div>
              <div className="flex flex-col items-center">
                <span style={{ color: "#6C63FF" }} className="text-3xl font-bold">2–4</span>
                <span className="text-gray-500">semanas de implementación</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }, i) => (
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
                  <p className="px-6 pb-5 text-gray-300 leading-relaxed">{a}</p>
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
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/company/vektora"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/vektora.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                WhatsApp
              </a>
            </div>

            <div className="text-right">
              <a
                href="mailto:info@vektora.lat"
                className="text-gray-400 hover:text-white transition-colors text-sm block"
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
