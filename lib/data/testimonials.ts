export type Testimonial = {
  /** Service label shown above the quote, as on the reference site. */
  service: string;
  quote: string;
  author: string;
  meta: string;
  score: string;
  signals: readonly string[];
  initials: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    service: "Technical SEO & site migration",
    quote:
      "We had paid for SEO for two years and could not name a single thing that changed. Evalunor sent a prioritised audit in week one, fixed the crawl mess behind our booking flow, and traffic finally moved. This is our second engagement and I would sign a third tomorrow.",
    author: "Marcus Kelley",
    meta: "VP Marketing · Home services",
    score: "5.0",
    signals: ["2nd repeat engagement", "Reference on request"],
    initials: "MK",
  },
  {
    service: "Content strategy & digital PR",
    quote:
      "They write like people who actually understand our buyer. Eight months in we rank for the terms our sales team asked for by name, and two of our data pieces now get quoted by AI assistants. That last part was not even on my radar when we started.",
    author: "Amara Lindqvist",
    meta: "Head of Growth · B2B SaaS",
    score: "5.0",
    signals: ["18-month retainer", "Reference on request"],
    initials: "AL",
  },
];
