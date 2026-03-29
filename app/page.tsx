export default function Home() {
  const whatsappUrl =
    "https://wa.me/573000000000?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";

  return (
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
          className="text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
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
          className="text-sm font-semibold uppercase tracking-widest mb-4"
        >
          AI Agents Studio
        </p>
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Agentes de IA que trabajan por ti
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Diseñamos, implementamos y operamos agentes inteligentes que
          automatizan los procesos repetitivos de tu empresa.{" "}
          <span style={{ color: "#00D9A6" }} className="font-semibold">
            Resultados medibles en 30 días.
          </span>
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#6C63FF" }}
          className="inline-block text-white text-lg font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
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
            <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
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

            <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
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

            <div className="rounded-2xl p-8 border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
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
          className="inline-block bg-white text-[#6C63FF] text-lg font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-xl"
        >
          Habla con nosotros por WhatsApp →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-white text-lg font-bold">
            <span style={{ color: "#6C63FF" }}>vek</span>tora
          </span>

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

          <a
            href="mailto:info@vektora.lat"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            info@vektora.lat
          </a>
        </div>

        <p className="text-center text-gray-600 text-xs mt-8">
          © {new Date().getFullYear()} Vektora. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
