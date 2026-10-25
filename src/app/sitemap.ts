import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Do not output unverified domain in production sitemap if unconfigured
  if (!baseUrl) {
    return [];
  }

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-25T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: new Date("2026-10-25T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#approach`,
      lastModified: new Date("2026-10-25T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#service-areas`,
      lastModified: new Date("2026-10-25T00:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#faqs`,
      lastModified: new Date("2026-10-25T00:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
