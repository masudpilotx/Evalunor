import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { getCaseStudy, caseStudies } from "@/lib/data/case-studies";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudies.map((study) => ({ slug: study.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const study = getCaseStudy((await params).slug); return study ? { title: `${study.client} Case Study`, description: study.caption } : {}; }
export default async function CaseStudyPage({ params }: Props) { const study = getCaseStudy((await params).slug); if (!study) notFound(); return <><Navbar /><main><section className="border-b border-border py-24 sm:py-32"><div className="container-page"><Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> All case studies</Link><p className="kicker mt-12">{study.sector}</p><h1 className="display mt-5 max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">{study.client}</h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">{study.caption}</p></div></section><Section><div className="grid gap-12 lg:grid-cols-[.7fr_1fr]"><div><p className="kicker mb-5">The challenge</p><h2 className="display text-4xl">From invisible constraint to <em className="font-normal text-primary">compounding growth.</em></h2></div><div><p className="text-lg leading-relaxed text-muted-foreground">{study.challenge}</p><p className="kicker mt-12 mb-5">The approach</p><ul className="grid gap-4">{study.approach.map((item) => <li key={item} className="flex gap-3 border-b border-border pb-4 text-sm leading-relaxed"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}</ul></div></div></Section><section className="border-y border-border bg-card/40 py-16"><div className="container-page grid gap-8 sm:grid-cols-3">{study.metrics.map((metric) => <div key={metric.label}><strong className="display text-5xl text-primary">{metric.value}</strong><span className="mt-3 block text-sm text-muted-foreground">{metric.label}</span></div>)}</div></section><Section><div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><h2 className="display text-4xl">Want your own search story?</h2><Button asChild size="lg"><Link href="/contact">Get Your Free SEO Audit <ArrowRight className="size-4" /></Link></Button></div></Section></main><Footer /></>; }
