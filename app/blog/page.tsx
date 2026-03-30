import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Vektora — Automatización con IA para Empresas",
  description:
    "Artículos sobre automatización con IA, agentes de IA, estrategia empresarial y casos de uso para empresas en Colombia y LATAM.",
  alternates: { canonical: "https://vektora.lat/blog" },
  openGraph: {
    title: "Blog | Vektora",
    description:
      "Artículos sobre automatización con IA para empresas en Colombia y LATAM.",
    url: "https://vektora.lat/blog",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-20 text-center">
        <p style={{ color: "#00D9A6" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
          Blog
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Recursos sobre IA para empresas en LATAM
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Artículos prácticos sobre automatización, agentes de IA y estrategia para empresas colombianas.
        </p>
      </section>

      {/* Posts grid */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{ backgroundColor: "#EEF0FF", color: "#6C63FF" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime} lectura</span>
                  </div>
                  <h2
                    style={{ color: "#1A1A2E" }}
                    className="text-lg font-bold mb-3 leading-snug line-clamp-3"
                  >
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <time className="text-xs text-gray-400" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "#6C63FF" }}
                    >
                      Leer →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-16 text-center">
        <h2 className="text-white text-2xl font-bold mb-4">
          ¿Quieres automatizar tu empresa?
        </h2>
        <p className="text-gray-400 mb-8">
          Agenda un diagnóstico gratuito y te mostramos qué procesos tienen mayor potencial de automatización.
        </p>
        <a
          href="https://wa.me/573105975861?text=Hola%2C%20quiero%20agendar%20una%20demo%20de%20Vektora"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#6C63FF" }}
          className="inline-block text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
        >
          Agendar diagnóstico gratuito →
        </a>
      </section>
    </>
  );
}
