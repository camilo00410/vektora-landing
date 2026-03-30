import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Casos de Estudio | Vektora — Automatización con IA en Colombia",
  description:
    "Casos de estudio de automatización con IA en empresas colombianas. Próximamente: resultados reales de LeadBot, ShopAssist y DocReview en producción.",
  alternates: { canonical: "https://vektora.lat/casos-de-estudio" },
};

const whatsappUrl =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";

export default function CasosDeEstudioPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Casos de estudio" }]} />

      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-24 text-center">
        <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
          Casos de estudio
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Próximamente
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
          Estamos documentando los resultados de nuestros clientes actuales. Muy pronto publicaremos casos de estudio detallados con métricas reales de automatización con IA en empresas colombianas.
        </p>

        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-4 mb-12">
          <span style={{ color: "#00D9A6" }} className="text-xl">🔔</span>
          <p className="text-gray-300 text-sm text-left">
            <strong className="text-white block">¿Quieres ser uno de nuestros casos de estudio?</strong>
            Implementa con nosotros y documentamos tus resultados.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#6C63FF" }}
            className="inline-block text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
          >
            Habla con nosotros →
          </a>
          <Link
            href="/servicios"
            className="inline-block font-semibold px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-150"
          >
            Ver nuestros servicios
          </Link>
        </div>
      </section>

      {/* Stats preview */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
            Resultados que estamos documentando
          </p>
          <h2 style={{ color: "#1A1A2E" }} className="text-3xl font-bold mb-12">
            Lo que nuestros clientes reportan
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "70%", label: "Consultas automatizadas", color: "#6C63FF" },
              { value: "2 min", label: "Tiempo de calificación de leads", color: "#00D9A6" },
              { value: "30 días", label: "A primeros resultados medibles", color: "#6C63FF" },
              { value: "15+", label: "Empresas en LATAM", color: "#00D9A6" },
            ].map(({ value, label, color }) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <p className="text-3xl font-extrabold mb-2" style={{ color }}>
                  {value}
                </p>
                <p className="text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
