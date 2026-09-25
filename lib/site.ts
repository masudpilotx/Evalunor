/** Canonical production origin, used when nothing is configured. */
const fallbackSiteUrl = "https://evalunor.com";

/**
 * Resolve the absolute origin used for metadataBase, canonicals, robots and
 * the sitemap.
 *
 * This has to be bulletproof: `metadataBase: new URL(siteUrl)` runs while Next
 * collects page data, so a single bad value fails the whole production build
 * (an env var set to an empty string used to slip past a `??` fallback and
 * throw ERR_INVALID_URL). Every candidate is therefore trimmed, given a
 * protocol if it lacks one, and validated before use.
 */
function resolveSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    // Vercel exposes these automatically, so preview and production deploys
    // still emit correct absolute URLs when nothing is configured by hand.
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
    fallbackSiteUrl,
  ];

  for (const candidate of candidates) {
    const value = candidate?.trim();
    if (!value) continue;
    const absolute = /^https?:\/\//i.test(value) ? value : `https://${value}`;
    try {
      // .origin drops any path, query and trailing slash.
      return new URL(absolute).origin;
    } catch {
      // Malformed value: ignore it and try the next candidate.
    }
  }

  return fallbackSiteUrl;
}

export const siteUrl = resolveSiteUrl();

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
