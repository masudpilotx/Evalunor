"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { toolLogos } from "@/components/ui/tool-logos";
import { site } from "@/lib/site";

const rotating = ["search that compounds", "rankings you keep", "answers AI cites", "demand, not luck"];

export function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setIndex((current) => (current + 1) % rotating.length), 2600); return () => window.clearInterval(timer); }, []);
  return <section className="relative overflow-hidden pb-0 pt-20 sm:pt-28 lg:pt-32">
    <div className="pointer-events-none absolute -right-64 -top-80 size-[760px] rounded-full bg-[radial-gradient(circle,rgba(198,242,78,.23),transparent_64%)]" />
    <div className="container-page relative">
      <Reveal><Badge variant="default"><span className="size-1.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(198,242,78,.15)]" /> Taking 2 new partners for October 2026</Badge></Reveal>
      <Reveal delay={60}><h1 className="display mt-7 max-w-5xl text-[clamp(3.25rem,8vw,7.3rem)]">Turn search visibility into{" "}
        {/* Every phrase shares one grid cell, so the slot is always as tall as the
            tallest phrase and a two-line phrase can never overlap the copy below. */}
        <span className="grid text-primary">
          {rotating.map((word, itemIndex) => <span key={word} aria-hidden={itemIndex === index ? undefined : "true"} className={`col-start-1 row-start-1 transition-all duration-500 ${itemIndex === index ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}>{word}</span>)}
        </span>
      </h1></Reveal>
      <Reveal delay={120}><p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">Evalunor is the senior SEO team for brands tired of being invisible for the quality of their work. Technical foundation, editorial demand, authority and measurement, built as one system.</p></Reveal>
      <Reveal delay={180}><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href={site.primaryCta.href}>{site.primaryCta.label}<ArrowRight className="size-4" /></Link></Button><Button asChild variant="outline" size="lg"><Link href="#work">See the work</Link></Button></div></Reveal>
      <Reveal delay={240}><div className="flex items-center gap-4 pb-16 pt-10"><div className="flex -space-x-3" aria-hidden="true">{["MK", "AL", "RD", "SV"].map((initials, itemIndex) => <span key={initials} className={`grid size-10 place-items-center rounded-full border-2 border-background text-[11px] font-semibold text-white ${["bg-slate-700", "bg-lime-800", "bg-amber-800", "bg-cyan-900"][itemIndex]}`}>{initials}</span>)}</div><div className="text-sm text-muted-foreground"><strong className="text-foreground">120+</strong> brands scaled <span className="ml-2 text-amber-400">★★★★★</span><span className="ml-1 text-xs">5.0 average</span></div></div></Reveal>
    </div>
    {/* Logo strip. The set is rendered twice so the marquee loops seamlessly;
        the duplicate pass is hidden from assistive tech. */}
    <div className="overflow-hidden border-y border-border bg-card/40 py-6">
      <h2 className="sr-only">Platforms and tools the Evalunor team works in</h2>
      <div className="flex w-max animate-marquee items-center gap-14">
        {[...toolLogos, ...toolLogos].map(({ name, Logo }, itemIndex) => <span key={`${name}-${itemIndex}`} aria-hidden={itemIndex >= toolLogos.length ? "true" : undefined} className="flex items-center gap-2.5 text-muted-foreground/70 transition-colors hover:text-foreground"><Logo /><span className="font-display text-sm font-semibold tracking-tight">{name}</span></span>)}
      </div>
    </div>
  </section>;
}
