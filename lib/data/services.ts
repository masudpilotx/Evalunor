export type ServiceIcon =
  | "technical"
  | "onPage"
  | "local"
  | "enterprise"
  | "audit"
  | "content"
  | "links"
  | "consulting"
  | "ai";

export type Service = {
  slug: string;
  /** Small theme label shown above the heading, mirroring the reference grid. */
  kicker: string;
  name: string;
  summary: string;
  /** Longer copy for the service detail page. */
  intro: string;
  deliverables: readonly string[];
  outcome: string;
  icon: ServiceIcon;
};

export const services: readonly Service[] = [
  {
    slug: "technical-seo",
    kicker: "Foundations",
    name: "Technical SEO",
    summary:
      "Crawl architecture, indexation control and Core Web Vitals work that lets search engines reach the pages that actually earn revenue.",
    intro:
      "Most sites do not have a content problem, they have an access problem. Crawl budget drains into faceted URLs, templates block rendering, and the pages you care about sit five clicks from the homepage. We fix the plumbing first, because every other investment compounds on top of it.",
    deliverables: [
      "Log-file and crawl analysis across the full URL set",
      "Index bloat, canonical and pagination cleanup",
      "JavaScript rendering and hydration review",
      "Core Web Vitals remediation with engineering-ready tickets",
      "Migration planning and post-launch ranking protection",
      "Internal link architecture and depth reduction",
    ],
    outcome: "A site that search engines can crawl completely and cheaply, with your money pages closest to the root.",
    icon: "technical",
  },
  {
    slug: "on-page-seo",
    kicker: "Relevance",
    name: "On-Page SEO",
    summary:
      "Templates, headings, internal links and entity markup tuned so each page makes an unmistakable case for the query it targets.",
    intro:
      "On-page work is where relevance is won or lost. We map every important URL to a single dominant intent, then rebuild the page so the title, heading hierarchy, supporting copy and structured data all point the same direction.",
    deliverables: [
      "Intent mapping for every commercial URL",
      "Title, meta and heading hierarchy rewrites",
      "Schema and entity markup implementation",
      "Internal linking rules baked into templates",
      "Cannibalisation resolution across overlapping pages",
      "Conversion-path review on ranking pages",
    ],
    outcome: "Higher click-through from the same positions, and pages that stop competing with each other.",
    icon: "onPage",
  },
  {
    slug: "local-seo",
    kicker: "Proximity",
    name: "Local SEO",
    summary:
      "Service-area pages, Business Profile optimisation and review velocity that hold up in the map pack under real competition.",
    intro:
      "Local search rewards consistency and proof. We build location pages that deserve to rank instead of spun duplicates, tighten your Business Profile signals, and put a review engine in place that keeps working after the engagement ends.",
    deliverables: [
      "Google Business Profile audit and optimisation",
      "Service-area page systems with genuinely unique content",
      "Citation and NAP consistency cleanup",
      "Review generation workflow and response templates",
      "Local link and sponsorship prospecting",
      "Map pack rank tracking by grid point",
    ],
    outcome: "Sustained map pack presence across every location you serve, not just the one nearest your office.",
    icon: "local",
  },
  {
    slug: "enterprise-seo",
    kicker: "Scale",
    name: "Enterprise SEO",
    summary:
      "Programmatic templates, governance and stakeholder alignment for sites where a single template change moves thousands of URLs.",
    intro:
      "At enterprise scale the hard part is not knowing what to do, it is shipping it. We work inside your release process, write specs your engineers can accept, and build the governance that stops six months of gains being undone by one deploy.",
    deliverables: [
      "Programmatic template design and QA",
      "SEO governance model and release checklists",
      "Cross-team enablement and documentation",
      "Large-scale internationalisation and hreflang",
      "Forecast modelling tied to pipeline",
      "Executive reporting cadence",
    ],
    outcome: "An organisation that ships SEO work continuously instead of in one-off projects.",
    icon: "enterprise",
  },
  {
    slug: "seo-audits",
    kicker: "Diagnosis",
    name: "SEO Audits",
    summary:
      "A prioritised, effort-scored roadmap that tells you what to fix, in what order, and what each fix is worth.",
    intro:
      "An audit that lists two hundred issues is a document, not a plan. Ours ranks every finding by expected impact against implementation cost, so the first sprint is obvious and the last one is still justified.",
    deliverables: [
      "Full technical, content and authority review",
      "Competitor gap analysis on shared keyword sets",
      "Effort and impact scoring for every finding",
      "90-day prioritised roadmap",
      "Analytics and tracking validation",
      "Walkthrough session with your team",
    ],
    outcome: "Clarity on the highest-value work, with a roadmap your engineers and writers can start on Monday.",
    icon: "audit",
  },
  {
    slug: "content-strategy",
    kicker: "Demand",
    name: "Content Strategy",
    summary:
      "Topic maps built from real buying intent, briefs your writers can follow, and refresh cycles that keep winners winning.",
    intro:
      "We start from the questions your buyers actually ask, not a keyword export sorted by volume. Every cluster has an owner, a commercial reason to exist, and a refresh schedule so it does not quietly decay in month nine.",
    deliverables: [
      "Intent-mapped topic clusters with commercial scoring",
      "Editorial briefs including structure and sources",
      "Senior editing against a published quality bar",
      "Content decay monitoring and refresh queue",
      "Subject-matter-expert interview workflow",
      "Internal linking plan per cluster",
    ],
    outcome: "An editorial engine that produces pages worth ranking, on a cadence you can sustain.",
    icon: "content",
  },
  {
    slug: "link-building",
    kicker: "Authority",
    name: "Link Building",
    summary:
      "Links earned with data stories and expert commentary. No networks, no footprints, nothing you would hide from Google.",
    intro:
      "We do not buy links. We build assets journalists and operators want to cite, then do the unglamorous outreach work to get them in front of the right people. Slower to start, considerably harder to lose.",
    deliverables: [
      "Data-led campaign concepting and production",
      "Journalist and newsletter outreach",
      "Digital PR angle development",
      "Unlinked mention and broken link reclamation",
      "Backlink profile risk review",
      "Placement reporting with traffic and authority context",
    ],
    outcome: "An authority profile that survives core updates because none of it was rented.",
    icon: "links",
  },
  {
    slug: "seo-consulting",
    kicker: "Leverage",
    name: "SEO Consulting",
    summary:
      "Senior strategic direction for teams that have the people to execute and need someone accountable for the plan.",
    intro:
      "Some teams do not need an agency, they need a sharper strategy and someone senior to pressure-test it. We embed with your marketing and engineering leads, set the roadmap, and stay on the hook for the outcome.",
    deliverables: [
      "Quarterly strategy definition and prioritisation",
      "Weekly working sessions with your team",
      "Roadmap and backlog ownership",
      "Hiring and vendor evaluation support",
      "Team training and internal enablement",
      "Board-ready performance narrative",
    ],
    outcome: "Your in-house team moving faster, with a strategy that survives contact with reality.",
    icon: "consulting",
  },
  {
    slug: "ai-search-geo",
    kicker: "Advanced Tech",
    name: "AI Search, AEO & GEO",
    summary:
      "Get named in AI Overviews, ChatGPT and Perplexity answers, not just the ten blue links underneath them.",
    intro:
      "Answer engines cite sources differently to classic search. They favour clear claims, consistent entities and content structured to be extracted. We optimise for being the citation, and we track it so the work is measurable rather than theoretical.",
    deliverables: [
      "Answer-shaped content architecture",
      "Entity consistency across the web and your own site",
      "Structured data built for extraction",
      "AI citation and share-of-answer tracking",
      "Prompt-set monitoring for your category",
      "Brand accuracy correction in generated answers",
    ],
    outcome: "Visibility inside generated answers, measured with the same rigour as your organic rankings.",
    icon: "ai",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** The four capabilities featured on the homepage grid. */
export const featuredServiceSlugs = ["technical-seo", "content-strategy", "link-building", "ai-search-geo"] as const;

export const techStack = [
  "Google Search Console",
  "GA4",
  "Ahrefs",
  "Semrush",
  "Screaming Frog",
  "Looker Studio",
  "BigQuery",
  "Sitebulb",
  "Cloudflare",
  "Next.js",
  "Shopify",
  "Webflow",
] as const;
