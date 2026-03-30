import type { MetadataRoute } from "next";
import { blogPosts } from "./blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://vektora.lat",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://vektora.lat/servicios",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://vektora.lat/precios",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://vektora.lat/nosotros",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://vektora.lat/blog",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://vektora.lat/contacto",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://vektora.lat/casos-de-estudio",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `https://vektora.lat/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...blogEntries];
}
