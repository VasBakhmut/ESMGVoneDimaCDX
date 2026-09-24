import type { MetadataRoute } from "next";
import { business, services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/who-we-help", "/resources", "/resources/what-is-an-aesmr", "/about", "/contact", "/get-a-quote", ...services.map((service) => `/services/${service.slug}`)];
  return routes.map((route, index) => ({
    url: `${business.url}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route.startsWith("/services/") ? 0.85 : 0.7,
  }));
}
