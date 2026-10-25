import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isIndexingEnabled = process.env.ENABLE_INDEXING === "true";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Protect client preview from automated search engine indexing until business owner launch
  if (!isIndexingEnabled) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: baseUrl ? `${baseUrl}/sitemap.xml` : undefined,
  };
}
