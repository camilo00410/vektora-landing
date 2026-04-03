import type { Metadata } from "next";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contacto — Habla con Nuestros Especialistas en IA | Vektora",
  description:
    "¿Listo para automatizar tu empresa con IA? Escríbenos o agenda una llamada con nuestro equipo. WhatsApp: +57 310 597 5861 | info@vektora.lat",
  alternates: { canonical: "https://vektora.lat/contacto" },
  openGraph: {
    title: "Contacto — Habla con Nuestros Especialistas en IA | Vektora",
    description:
      "¿Listo para automatizar tu empresa con IA? Escríbenos o agenda una llamada con nuestro equipo. WhatsApp: +57 310 597 5861 | info@vektora.lat",
    url: "https://vektora.lat/contacto",
    type: "website",
    locale: "es_CO",
    siteName: "Vektora",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto — Habla con Nuestros Especialistas en IA | Vektora",
    description:
      "¿Listo para automatizar tu empresa con IA? Escríbenos o agenda una llamada con nuestro equipo. WhatsApp: +57 310 597 5861 | info@vektora.lat",
    images: ["/og-image.png"],
  },
};

const whatsappGeneral =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";
const whatsappDiagnostico =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20un%20diagn%C3%B3stico%20gratuito%20de%20mi%20empresa";

const contactMethods = [
  {
    emoji: "💬",
    title: "WhatsApp",
    desc: "La forma más rápida. Respondemos en menos de 1 hora.",
    action: "Escribir por WhatsApp →",
    href: whatsappGeneral,
    color: "#00D9A6",
    bg: "#E0FBF5",
  },
  {
    emoji: "📧",
    title: "Email",
    desc: "Para propuestas formales y documentos.",
    action: "info@vektora.lat",
    href: "mailto:info@vektora.lat",
    color: "#6C63FF",
    bg: "#EEF0FF",
  },
  {
    emoji: "📞",
    title: "Teléfono / WhatsApp",
    desc: "Llama o escribe directamente.",
    action: "+57 310 597 5861",
    href: "tel:+573105975861",
    color: "#6C63FF",
    bg: "#EEF0FF",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vektora.lat" },
    { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://vektora.lat/contacto" }
  ]
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vektora",
  description: "Agencia de inteligencia artificial B2B en Pereira, Colombia. Especializados en agentes IA y automatización de procesos para empresas latinoamericanas.",
  url: "https://vektora.lat",
  telephone: "+573105975861",
  email: "info@vektora.lat",
  image: "https://vektora.lat/og-image.png",
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
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://linkedin.com/company/vektora",
    "https://instagram.com/vektora.lat",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto — Vektora",
  url: "https://vektora.lat/contacto",
  mainEntity: {
    "@type": "Organization",
    name: "Vektora",
    email: "info@vektora.lat",
    telephone: "+573105975861",
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Contacto" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20 text-center">
        <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
          Contacto
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Hablemos de tu proyecto
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          El primer paso es un diagnóstico gratuito. Sin compromiso — solo una conversación sobre qué quieres automatizar.
        </p>
      </section>

      {/* Contact methods */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
              >
                <div
                  style={{ backgroundColor: m.bg, color: m.color }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                >
                  {m.emoji}
                </div>
                <h2 style={{ color: "#1A1A2E" }} className="font-bold mb-2">
                  {m.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 flex-1">{m.desc}</p>
                <span style={{ color: m.color }} className="text-sm font-semibold">
                  {m.action}
                </span>
              </a>
            ))}
          </div>

          {/* Diagnostic CTA */}
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{ backgroundColor: "#1A1A2E" }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Diagnóstico gratuito en 30 minutos
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Analizamos tu operación, identificamos los procesos con mayor potencial de automatización y te damos una estimación de inversión y ROI. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappDiagnostico}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#6C63FF" }}
                className="inline-block text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
              >
                Agendar diagnóstico gratuito →
              </a>
              <a
                href="mailto:info@vektora.lat"
                className="inline-block font-semibold px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all duration-150"
              >
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#6C63FF" }}>
                  Ubicación
                </p>
                <h2 style={{ color: "#1A1A2E" }} className="text-2xl font-bold mb-4">
                  Pereira, Colombia
                </h2>
                <address className="not-italic text-sm space-y-2" style={{ color: "#2D2D2D" }}>
                  <p>📍 Pereira, Risaralda, Colombia</p>
                  <p>📧 info@vektora.lat</p>
                  <p>📞 +57 310 597 5861</p>
                  <p>🕐 Lunes a viernes, 9 AM – 6 PM (COT)</p>
                </address>
                <p className="text-sm text-gray-500 mt-4">
                  Atendemos clientes en Colombia, México y Chile — operamos 100% remoto.
                </p>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden h-48 md:h-64 bg-gray-100">
                <iframe
                  title="Vektora — Pereira, Colombia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253786.4220432!2d-75.86!3d4.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38868ddd2d7f91%3A0x3d0a9a0e93e1ddf5!2sPereira%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
