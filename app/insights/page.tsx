import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { insights } from "@/lib/data/insights";
export const metadata: Metadata = { title: "Insights", description: "Practical SEO thinking from the Evalunor team." };
export default function InsightsPage() { return <><Navbar /><main><section className="border-b border-border py-24 sm:py-32"><div className="container-page"><p className="kicker mb-5">Insights</p><h1 className="display max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">Useful thinking for <em className="font-normal text-primary">search teams.</em></h1></div></section><Section><div className="grid gap-5 md:grid-cols-2">{insights.map((post, index) => <Reveal key={post.slug} delay={(index % 2) * 70}><Link href={`/insights/${post.slug}`} className="block rounded-lg border border-border bg-card/40 p-7 transition hover:-translate-y-1 hover:border-primary/50"><span className="kicker text-primary">{post.category} · {post.readTime}</span><h2 className="mt-5 font-display text-2xl font-semibold tracking-tight">{post.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.description}</p><span className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read article <ArrowUpRight className="size-4" /></span></Link></Reveal>)}</div></Section></main><Footer /></>; }
