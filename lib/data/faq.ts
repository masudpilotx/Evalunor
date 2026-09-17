export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: readonly FaqItem[] = [
  {
    question: "How long before we see results from SEO?",
    answer:
      "Technical fixes can move rankings within two to four weeks. Content and authority compound over three to six months. We report leading indicators from week one, so you can see whether the strategy is working long before revenue confirms it.",
  },
  {
    question: "Can you work with our existing site and brand?",
    answer:
      "Yes. We audit what you already own, keep the equity you have built, and rebuild only what is actively holding rankings back. A replatform is sometimes a recommendation, it is never a requirement to start.",
  },
  {
    question: "What makes your process different?",
    answer:
      "We run one search system instead of four disconnected tactics. Crawl architecture, editorial, authority and measurement ship against a single prioritised roadmap, owned by the senior people who wrote it rather than juniors learning on your budget.",
  },
  {
    question: "Do you offer ongoing support after the engagement?",
    answer:
      "Every engagement ends with documentation, live dashboards and a thirty-day handover. Most clients continue on a lighter retainer covering monitoring, content velocity and quarterly strategy reviews.",
  },
  {
    question: "How do you handle confidentiality and intellectual property?",
    answer:
      "We sign your NDA before kickoff. Every piece of research, content, dashboard and line of code produced during the engagement belongs to you outright on final payment, with no licensing conditions attached.",
  },
  {
    question: "How do you report on performance?",
    answer:
      "One live dashboard connects Search Console and GA4 to the outcomes your leadership already tracks. You get a monthly written read on what shipped, what moved, and what we are changing as a result.",
  },
];
