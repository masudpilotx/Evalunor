import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/ui/section";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema } from "@/lib/schema";
import { getInsight, insights } from "@/lib/data/insights";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return insights.map((post) => ({ slug: post.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const post = getInsight((await params).slug); return post ? { title: post.title, description: post.description } : {}; }
export default async function InsightPage({ params }: Props) { const post = getInsight((await params).slug); if (!post) notFound(); return <><JsonLd data={articleSchema({ title: post.title, description: post.description, slug: post.slug, publishedAt: post.publishedAt, author: "Evalunor" })} /><Navbar /><main><Section><div className="mx-auto max-w-3xl"><Link href="/insights" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> All insights</Link><p className="kicker mt-14 text-primary">{post.category} · {post.readTime}</p><h1 className="display mt-5 text-[clamp(2.8rem,6vw,5.5rem)]">{post.title}</h1><p className="mt-7 text-xl leading-relaxed text-muted-foreground">{post.description}</p><div className="mt-14 grid gap-7 text-lg leading-relaxed text-foreground/80">{post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></Section></main><Footer /></>; }
