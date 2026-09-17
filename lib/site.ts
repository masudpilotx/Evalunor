export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://evalunor.com").replace(/\/$/, "");

export const site = {
  name: "Evalunor",
  legalName: "Evalunor",
  positioning: "SEO that turns search visibility into business growth.",
  description:
    "Evalunor is an SEO agency for ambitious businesses. We build search visibility, attract qualified traffic and turn organic search into a measurable acquisition channel.",
  /** TODO: replace with the real inbox before launch. */
  email: "hello@evalunor.com",
  locality: "Remote-first, serving North America, EMEA and APAC",
  founded: "2018",
  primaryCta: { label: "Get Your Free SEO Audit", href: "/contact" },
  secondaryCta: { label: "Explore Our Services", href: "/services" },
} as const;

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  company: {
    title: "Company",
    links: [
      { label: "About Evalunor", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Industries", href: "/industries" },
      { label: "Contact", href: "/contact" },
    ],
  },
  services: {
    title: "Services",
    links: [
      { label: "Technical SEO", href: "/services/technical-seo" },
      { label: "On-Page SEO", href: "/services/on-page-seo" },
      { label: "Local SEO", href: "/services/local-seo" },
      { label: "Enterprise SEO", href: "/services/enterprise-seo" },
      { label: "AI Search & GEO", href: "/services/ai-search-geo" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "SEO Audits", href: "/services/seo-audits" },
      { label: "Content Strategy", href: "/services/content-strategy" },
      { label: "SEO Consulting", href: "/services/seo-consulting" },
    ],
  },
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/evalunor" },
  { label: "X", href: "https://x.com/evalunor" },
  { label: "GitHub", href: "https://github.com/masudpilotx/Evalunor" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;
