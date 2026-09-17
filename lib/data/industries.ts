export type Industry = {
  name: string;
  summary: string;
  focus: readonly string[];
};

export const industries: readonly Industry[] = [
  {
    name: "B2B SaaS",
    summary:
      "Long sales cycles reward content that survives a committee. We build category, comparison and integration coverage that sales can actually forward to a prospect.",
    focus: ["Category and comparison pages", "Integration and use-case hubs", "Product-led content loops"],
  },
  {
    name: "Home & Field Services",
    summary:
      "Local intent converts fast and competition is close. Service-area architecture and map pack presence decide who gets the call.",
    focus: ["Multi-location page systems", "Business Profile and review velocity", "Emergency-intent capture"],
  },
  {
    name: "Ecommerce & Marketplaces",
    summary:
      "Scale creates crawl waste. We control indexation, make programmatic templates genuinely useful, and protect category pages through core updates.",
    focus: ["Faceted navigation control", "Programmatic template design", "Product and ItemList schema"],
  },
  {
    name: "Professional Services",
    summary:
      "Expertise is the product. We turn partner knowledge into practice-area depth that ranks and holds up to scrutiny.",
    focus: ["Practice-area hubs", "Expert authorship signals", "Consultation-intent funnels"],
  },
  {
    name: "Healthcare & Clinics",
    summary:
      "Accuracy and trust are ranking factors here. Clinician-reviewed content and clean entity data protect visibility in both search and AI answers.",
    focus: ["Clinically reviewed content", "Entity and directory consistency", "Multi-site clinic architecture"],
  },
  {
    name: "Manufacturing & Industrial",
    summary:
      "Technical buyers search in specifications. We build spec-level coverage and get international locales working properly.",
    focus: ["Spec and part-level pages", "International hreflang", "Distributor conflict resolution"],
  },
];
