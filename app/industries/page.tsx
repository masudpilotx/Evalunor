import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { industries } from "@/lib/data/industries";
export const metadata: Metadata = { title: "Industries", description: "Industry-specific SEO strategy from Evalunor." };
export default function IndustriesPage() { return <><Navbar /><main><section className="border-b border-border py-24 sm:py-32"><div className="container-page"><p className="kicker mb-5">Industries</p><h1 className="display max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">Context changes<br /><em className="font-normal text-primary">the strategy.</em></h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">Search behaves differently in a marketplace, a clinic and a manufacturing catalogue. The fundamentals stay clean. The priorities do not.</p></div></section><Section><div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">{industries.map((industry, index) => <Reveal key={industry.name} delay={(index % 2) * 60}><article className="h-full bg-background p-8"><span className="kicker text-primary">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-7 font-display text-2xl font-semibold tracking-tight">{industry.name}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{industry.summary}</p><ul className="mt-6 grid gap-2">{industry.focus.map((item) => <li key={item} className="text-sm text-foreground/80">↳ {item}</li>)}</ul></article></Reveal>)}</div><div className="mt-12"><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Talk through your market <ArrowUpRight className="size-4" /></Link></div></Section></main><Footer /></>; }
