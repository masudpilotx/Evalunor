import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Team } from "@/components/sections/team";
import { ContactCta } from "@/components/sections/contact-cta";
export const metadata: Metadata = { title: "About Evalunor", description: "Meet the senior SEO strategists behind Evalunor." };
export default function AboutPage() { return <><Navbar /><main><section className="border-b border-border py-24 sm:py-32"><div className="container-page"><p className="kicker mb-5">About Evalunor</p><h1 className="display max-w-4xl text-[clamp(3rem,7vw,6.5rem)]">Senior minds.<br /><em className="font-normal text-primary">Serious search.</em></h1><p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">Evalunor is a focused team of SEO strategists, analysts and storytellers. We bring deep specialism to one shared goal: making your expertise impossible to miss.</p></div></section><Team /><ContactCta /></main><Footer /></>; }
