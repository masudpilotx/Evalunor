import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { getService, services } from "@/lib/data/services";
import { serviceSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const service = getService((await params).slug); return service ? { title: service.name, description: service.summary } : {}; }
export default async function ServicePage({ params }: Props) { const service = getService((await params).slug); if (!service) notFound(); return <><JsonLd data={serviceSchema({ name: service.name, description: service.summary, slug: service.slug })} /><Navbar /><main><section className="border-b border-border py-24 sm:py-32"><div className="container-page"><p className="kicker mb-5">{service.kicker}</p><h1 className="display max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">{service.name}</h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">{service.intro}</p><Button asChild size="lg" className="mt-8"><Link href="/contact">Get Your Free SEO Audit <ArrowRight className="size-4" /></Link></Button></div></section><Section><div className="grid gap-12 lg:grid-cols-[.8fr_1fr]"><div><p className="kicker mb-5">What we deliver</p><h2 className="display text-4xl sm:text-5xl">Work that moves the <em className="font-normal text-primary">needle.</em></h2></div><div><ul className="grid gap-4">{service.deliverables.map((item) => <li key={item} className="flex gap-3 border-b border-border pb-4 text-base"><Check className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}</ul><div className="mt-10 rounded-lg border border-primary/25 bg-primary/5 p-6"><p className="kicker text-primary">Expected outcome</p><p className="mt-3 text-lg leading-relaxed">{service.outcome}</p></div></div></div></Section><section className="bg-primary py-20 text-primary-foreground"><div className="container-page flex flex-col justify-between gap-8 sm:flex-row sm:items-center"><h2 className="display max-w-2xl text-4xl">Ready to find the constraint?</h2><Button asChild variant="secondary" size="lg"><Link href="/contact">Talk to Evalunor <ArrowRight className="size-4" /></Link></Button></div></section></main><Footer /></>; }
