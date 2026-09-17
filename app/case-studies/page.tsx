import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { caseStudies } from "@/lib/data/case-studies";
export const metadata: Metadata = { title: "Case Studies", description: "SEO case studies from Evalunor across local, enterprise, content and AI search." };
export default function CaseStudiesPage() { return <><Navbar /><main><section className="border-b border-border py-24 sm:py-32"><div className="container-page"><p className="kicker mb-5">Selected work</p><h1 className="display max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">Search work with<br /><em className="font-normal text-primary">a business case.</em></h1></div></section><Section><div className="grid gap-5 md:grid-cols-2">{caseStudies.map((study, index) => <Reveal key={study.slug} delay={(index % 2) * 70}><Link href={`/case-studies/${study.slug}`} className="block rounded-lg border border-border bg-card/40 p-7 transition hover:-translate-y-1 hover:border-primary/50"><span className="kicker">{study.sector}</span><h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">{study.client}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.caption}</p><div className="mt-7 flex items-center justify-between border-t border-border pt-5"><span className="text-sm font-semibold text-primary">Read case study</span><ArrowUpRight className="size-4 text-primary" /></div></Link></Reveal>)}</div></Section></main><Footer /></>; }
