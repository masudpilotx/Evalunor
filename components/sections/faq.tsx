import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/data/faq";
export function Faq() { return <Section id="faq" bordered><div className="grid gap-12 lg:grid-cols-[.8fr_1fr] lg:gap-24"><SectionHeading kicker="Questions" title={<>Answered before you <em className="font-normal text-primary">ask.</em></>} description={<span>Still stuck on something? <Link href="/contact" className="text-primary underline underline-offset-4">Ask us directly.</Link></span>} /><Reveal delay={80}><div>{faqs.slice(0, 5).map((item) => <details key={item.question} className="group border-b border-border"><summary className="cursor-pointer list-none py-6 pr-10 text-base font-medium tracking-tight marker:hidden">{item.question}<span className="float-right text-xl font-light text-muted-foreground transition group-open:rotate-45">+</span></summary><p className="pb-6 pr-8 text-sm leading-relaxed text-muted-foreground">{item.answer}</p></details>)}</div></Reveal></div></Section>; }
