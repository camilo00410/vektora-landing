import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "../posts";
import { Breadcrumbs } from "../../components/Breadcrumbs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Vektora Blog`,
    description: post.description,
    alternates: { canonical: `https://vektora.lat/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://vektora.lat/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Minimal markdown-to-HTML: handles ## headings, **bold**, bullet lists, links, paragraphs
function renderMarkdown(text: string): string {
  const lines = text.split("\n");
  const html: string[] = [];
  let inList = false;

  const inline = (s: string) =>
    s
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline" style="color:#6C63FF">$1</a>');

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith("## ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      html.push(`<h2 style="color:#1A1A2E" class="text-2xl font-bold mt-10 mb-4">${inline(line.slice(3))}</h2>`);
    } else if (line.startsWith("### ")) {
      if (inList) { html.push("</ul>"); inList = false; }
      html.push(`<h3 style="color:#1A1A2E" class="text-xl font-bold mt-8 mb-3">${inline(line.slice(4))}</h3>`);
    } else if (line.startsWith("- ")) {
      if (!inList) { html.push('<ul class="list-none space-y-2 my-4">'); inList = true; }
      html.push(`<li class="flex items-start gap-2 text-gray-700"><span style="color:#6C63FF" class="mt-1 shrink-0">•</span><span>${inline(line.slice(2))}</span></li>`);
    } else if (line.startsWith("✅ ")) {
      if (!inList) { html.push('<ul class="list-none space-y-2 my-4">'); inList = true; }
      html.push(`<li class="flex items-start gap-2 text-gray-700"><span style="color:#00D9A6" class="mt-1 shrink-0">✓</span><span>${inline(line.slice(3))}</span></li>`);
    } else if (line === "") {
      if (inList) { html.push("</ul>"); inList = false; }
      html.push("");
    } else {
      if (inList) { html.push("</ul>"); inList = false; }
      if (line.startsWith("**") && line.endsWith("**")) {
        html.push(`<p class="font-bold text-gray-800 mt-6 mb-2">${inline(line)}</p>`);
      } else {
        html.push(`<p class="text-gray-700 leading-relaxed my-3">${inline(line)}</p>`);
      }
    }
  }
  if (inList) html.push("</ul>");
  return html.join("\n");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Vektora", url: "https://vektora.lat" },
    publisher: { "@type": "Organization", name: "Vektora", url: "https://vektora.lat" },
    url: `https://vektora.lat/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      {/* Article header */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: "#6C63FF", color: "#fff" }}
            >
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.readTime} de lectura</span>
            <time className="text-gray-400 text-sm" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">{post.description}</p>
        </div>
      </section>

      {/* Article body */}
      <article className="px-6 py-16" style={{ backgroundColor: "#F8F9FA" }}>
        <div
          className="max-w-3xl mx-auto prose-sm"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
        />
      </article>

      {/* CTA mid-article */}
      <section
        style={{ backgroundColor: "#1A1A2E" }}
        className="px-6 py-12 text-center"
      >
        <p className="text-gray-400 text-sm mb-3">¿Listo para automatizar tu empresa?</p>
        <a
          href="https://wa.me/573105975861?text=Hola%2C%20le%C3%AD%20el%20blog%20y%20quiero%20agendar%20un%20diagn%C3%B3stico"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#6C63FF" }}
          className="inline-block text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all duration-150"
        >
          Agendar diagnóstico gratuito →
        </a>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section style={{ backgroundColor: "#F8F9FA" }} className="px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ color: "#1A1A2E" }} className="text-xl font-bold mb-8">
              Más artículos
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <article
                  key={p.slug}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block"
                    style={{ backgroundColor: "#EEF0FF", color: "#6C63FF" }}
                  >
                    {p.category}
                  </span>
                  <h3 style={{ color: "#1A1A2E" }} className="font-bold mb-2 leading-snug">
                    <Link href={`/blog/${p.slug}`} className="hover:underline">
                      {p.title}
                    </Link>
                  </h3>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="text-sm font-semibold"
                    style={{ color: "#6C63FF" }}
                  >
                    Leer →
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                style={{ color: "#6C63FF" }}
                className="text-sm font-semibold hover:underline"
              >
                ← Ver todos los artículos
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
