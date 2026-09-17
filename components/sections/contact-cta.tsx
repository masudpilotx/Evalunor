import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site";
export function ContactCta() { return <Section id="contact" className="bg-primary text-primary-foreground"><Reveal><div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]"><div><p className="kicker text-primary-foreground/60">Let’s talk</p><h2 className="display mt-5 max-w-3xl text-[clamp(2.5rem,5vw,4.8rem)]">Tell us where you should be ranking.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75">Send the site and the terms you care about. You get a short, blunt teardown within two business days, whether or not we end up working together.</p></div><Button asChild variant="secondary" size="lg"><Link href="/contact">Get Your Free SEO Audit <ArrowRight className="size-4" /></Link></Button></div><a href={`mailto:${site.email}`} className="mt-10 inline-flex items-center gap-2 border-t border-primary-foreground/20 pt-5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"><Mail className="size-4" />{site.email}</a></Reveal></Section>; }
