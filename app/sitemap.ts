import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vektora.lat",
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
