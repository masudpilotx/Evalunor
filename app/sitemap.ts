import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { services } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/case-studies";
import { insights } from "@/lib/data/insights";
export default function sitemap(): MetadataRoute.Sitemap { const fixed = ["", "/services", "/industries", "/case-studies", "/about", "/insights", "/contact"]; return [...fixed.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date() })), ...services.map((item) => ({ url: `${siteUrl}/services/${item.slug}`, lastModified: new Date() })), ...caseStudies.map((item) => ({ url: `${siteUrl}/case-studies/${item.slug}`, lastModified: new Date() })), ...insights.map((item) => ({ url: `${siteUrl}/insights/${item.slug}`, lastModified: new Date(item.publishedAt) }))]; }
