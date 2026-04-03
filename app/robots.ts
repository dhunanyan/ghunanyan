import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ghunanyan.com/sitemap.xml",
    host: "https://ghunanyan.com",
  };
}
