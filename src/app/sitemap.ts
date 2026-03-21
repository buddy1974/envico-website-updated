import type { MetadataRoute } from "next";
import { articles } from "@/data/news";

const base = "https://envico.maxpromo.digital";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/", "/about", "/services", "/bishops-house", "/funding",
    "/gallery", "/careers", "/resources", "/contact",
    "/team", "/news", "/portal",
    "/privacy", "/cookies", "/complaints", "/easy-read", "/accessibility",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-03-21"),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const newsRoutes = articles.map((a) => ({
    url: `${base}/news/${a.slug}`,
    lastModified: new Date("2026-03-21"),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
