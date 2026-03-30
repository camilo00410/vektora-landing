import Link from "next/link";

const whatsappUrl =
  "https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        <div>
          <Link href="/" className="text-white text-lg font-bold block mb-1">
            <span style={{ color: "#6C63FF" }}>vek</span>tora
          </Link>
          <address className="text-gray-500 text-xs not-italic">
            Pereira, Risaralda, Colombia
          </address>
          <p className="text-gray-600 text-xs mt-1 max-w-xs">
            Empresa de automatización con IA en Pereira — atendemos toda Colombia, México y Chile
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Páginas</p>
          {[
            { href: "/servicios", label: "Servicios" },
            { href: "/precios", label: "Precios" },
            { href: "/nosotros", label: "Nosotros" },
            { href: "/blog", label: "Blog" },
            { href: "/contacto", label: "Contacto" },
            { href: "/casos-de-estudio", label: "Casos de estudio" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">Contacto</p>
          <a
            href="mailto:info@vektora.lat"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            info@vektora.lat
          </a>
          <a
            href="tel:+573105975861"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            +57 310 597 5861
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            WhatsApp
          </a>
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
        </div>
      </div>

      <p className="text-center text-gray-600 text-xs mt-8">
        © {new Date().getFullYear()} Vektora. Todos los derechos reservados. · Pereira, Colombia
      </p>
    </footer>
  );
}
