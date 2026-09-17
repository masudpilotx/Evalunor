import { site, siteUrl, socialLinks } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: `${siteUrl}/`,
    description: site.description,
    email: site.email,
    foundingDate: site.founded,
    sameAs: socialLinks.map((link) => link.href),
    knowsAbout: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Enterprise SEO",
      "SEO Audits",
      "Content Strategy",
      "Link Building",
      "SEO Consulting",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: site.name,
    url: `${siteUrl}/`,
    description: site.description,
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

export function serviceSchema(input: { name: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.name,
    url: `${siteUrl}/services/${input.slug}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: "Worldwide",
  };
}

export function faqSchema(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(trail: ReadonlyArray<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.href}`,
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: `${siteUrl}/insights/${input.slug}`,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: { "@type": "Person", name: input.author },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/insights/${input.slug}` },
  };
}
