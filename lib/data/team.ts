import { teamPhotos } from "@/lib/data/team-photos";

export type TeamMember = {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  focus: readonly string[];
  photo: string;
  /** Focal point for the portrait crop. */
  objectPosition: string;
};

export const team: readonly TeamMember[] = [
  {
    name: "Nur Mohammad Hossain Rony",
    role: "Lead SEO Strategist & Technical SEO",
    discipline: "Strategy",
    bio: "Owns the search architecture behind every engagement: crawl and log analysis, migrations, information architecture, and the prioritisation calls that decide what ships first.",
    focus: ["Technical audits", "Migrations", "Roadmap ownership"],
    photo: teamPhotos.rony,
    objectPosition: "center 12%",
  },
  {
    name: "Rafayat Hossain",
    role: "Keyword Research & Content SEO",
    discipline: "Content",
    bio: "Maps the questions buyers actually ask, then turns them into clusters, briefs and refresh cycles that rank with clarity instead of volume for its own sake.",
    focus: ["Intent mapping", "Editorial briefs", "Content decay"],
    photo: teamPhotos.rafayat,
    objectPosition: "center 8%",
  },
  {
    name: "Atick Shahariar Tusar",
    role: "Off-Page SEO, Link Building & Digital PR",
    discipline: "Authority",
    bio: "Builds the authority layer: data-led campaigns, journalist relationships and reclamation work that make a brand more credible to people and to search engines.",
    focus: ["Digital PR", "Link acquisition", "Profile risk review"],
    photo: teamPhotos.tusar,
    objectPosition: "center 18%",
  },
];
