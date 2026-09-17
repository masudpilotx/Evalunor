import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";
import { ContactCta } from "@/components/sections/contact-cta";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "SEO Services", description: `Technical SEO, content, authority and AI search services from ${site.name}.` };
export default function ServicesPage() { return <><Navbar /><main><section className="border-b border-border py-24 sm:py-32"><div className="container-page"><p className="kicker mb-5">Services</p><h1 className="display max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">One search system.<br /><em className="font-normal text-primary">Nine ways in.</em></h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">From technical foundations to AI answer visibility, Evalunor connects the disciplines that make organic growth compound.</p></div></section><Services /><ContactCta /></main><Footer /></>; }
