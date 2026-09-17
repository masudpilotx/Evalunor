export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  /** One-line positioning, mirroring the reference card captions. */
  caption: string;
  challenge: string;
  approach: readonly string[];
  metrics: readonly { value: string; label: string }[];
  /** Drives the CSS-generated screenshot mock. */
  palette: "lime" | "steel" | "sand";
  featured: boolean;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "meridian-climate",
    client: "Meridian Climate",
    sector: "HVAC · Local SEO",
    caption: "Meridian Climate delivers precision climate control with expert installation, repair and maintenance.",
    challenge:
      "Forty-one service-area pages were near-duplicates of each other, three Business Profiles competed for the same postcode, and nothing ranked outside the head office suburb.",
    approach: [
      "Rebuilt every service-area page around genuinely local proof and pricing",
      "Consolidated duplicate Business Profiles and fixed NAP conflicts",
      "Shipped a booking-intent content set targeting emergency queries",
      "Added review capture at job completion, lifting velocity year round",
    ],
    metrics: [
      { value: "+312%", label: "non-brand organic clicks" },
      { value: "68", label: "local terms in the top three" },
      { value: "7 mo", label: "to full payback" },
    ],
    palette: "lime",
    featured: true,
  },
  {
    slug: "northline-home",
    client: "Northline Home",
    sector: "Home services · Technical",
    caption: "Northline Home provides reliable home services built for lasting, year-round comfort.",
    challenge:
      "A faceted booking flow generated more than nine thousand thin URLs. Googlebot spent its budget on filters while the service pages went weeks between crawls.",
    approach: [
      "Removed 9,400 crawlable filter permutations behind proper parameter rules",
      "Restructured internal linking to bring money pages three clicks closer to the root",
      "Rebuilt the page shell to cut render-blocking work",
      "Set up log-file monitoring so regressions surface within a day",
    ],
    metrics: [
      { value: "−82%", label: "crawl waste" },
      { value: "2.1s", label: "LCP, down from 6.4s" },
      { value: "+64%", label: "qualified inbound leads" },
    ],
    palette: "steel",
    featured: true,
  },
  {
    slug: "rentfinder",
    client: "RentFinder",
    sector: "Marketplace · Programmatic",
    caption: "RentFinder helps renters discover the right home with a fast, genuinely useful search experience.",
    challenge:
      "Programmatic city pages had been penalised in a previous core update. Templates repeated the same paragraph across two thousand URLs with no unique data.",
    approach: [
      "Rewrote the template to surface real listing data per city and neighbourhood",
      "Introduced tiered indexation so only pages with enough inventory were crawlable",
      "Implemented ItemList and Place schema that validates cleanly at scale",
      "Built a decay dashboard tracking every template variant separately",
    ],
    metrics: [
      { value: "18k", label: "pages indexed and holding" },
      { value: "+1.9M", label: "annual organic sessions" },
      { value: "0", label: "manual actions since launch" },
    ],
    palette: "sand",
    featured: true,
  },
  {
    slug: "aperture-legal",
    client: "Aperture Legal",
    sector: "Professional services · Content",
    caption: "Aperture Legal advises founders on the commercial decisions that decide an exit.",
    challenge:
      "High authority, almost no commercial rankings. The blog answered questions nobody was paying to have answered.",
    approach: [
      "Remapped the content library against genuine buying intent",
      "Retired or merged 140 posts with no commercial or link value",
      "Built practice-area hubs with partner-authored depth",
      "Introduced an expert review byline system for credibility signals",
    ],
    metrics: [
      { value: "+228%", label: "consultation requests" },
      { value: "−140", label: "low-value URLs retired" },
      { value: "4.1x", label: "organic pipeline contribution" },
    ],
    palette: "steel",
    featured: false,
  },
  {
    slug: "volten-industrial",
    client: "Volten Industrial",
    sector: "Manufacturing · Enterprise",
    caption: "Volten Industrial supplies precision components to regulated manufacturing lines.",
    challenge:
      "Nineteen country sites, no hreflang discipline, and a release process where SEO requirements were dropped from every sprint.",
    approach: [
      "Rebuilt hreflang and canonical logic across all nineteen locales",
      "Wrote SEO acceptance criteria into the definition of done",
      "Trained four product squads on template-level requirements",
      "Set up per-locale monitoring with alerting on index drops",
    ],
    metrics: [
      { value: "19", label: "locales corrected" },
      { value: "+91%", label: "international organic revenue" },
      { value: "3 wk", label: "average fix ship time, was 5 months" },
    ],
    palette: "lime",
    featured: false,
  },
  {
    slug: "harbourpoint-health",
    client: "Harbourpoint Health",
    sector: "Healthcare · AI search",
    caption: "Harbourpoint Health runs multi-site clinics with a nationally recognised specialist team.",
    challenge:
      "AI assistants were describing their treatment options inaccurately and citing competitors for conditions Harbourpoint actually specialises in.",
    approach: [
      "Restructured clinical content into extractable, clearly attributed answers",
      "Unified entity data across the site, directories and professional bodies",
      "Added MedicalWebPage and FAQ markup reviewed by clinicians",
      "Built share-of-answer tracking across 240 category prompts",
    ],
    metrics: [
      { value: "3.6x", label: "AI answer citations" },
      { value: "+118%", label: "non-brand organic clicks" },
      { value: "240", label: "prompts tracked monthly" },
    ],
    palette: "sand",
    featured: false,
  },
];

export const featuredCaseStudies = caseStudies.filter((study) => study.featured);

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
