"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/layout/logo";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-page flex h-[74px] items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {mainNav.map((item) => <Link key={item.href} href={item.href} className="text-[13px] text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>)}
          <Button asChild size="sm"><Link href={site.primaryCta.href}>{site.primaryCta.label}</Link></Button>
        </nav>
        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? <nav className="border-t border-border bg-background px-5 pb-5 pt-2 lg:hidden" aria-label="Mobile navigation">
        {mainNav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-base text-muted-foreground">{item.label}</Link>)}
        <Button asChild className="mt-5 w-full"><Link href={site.primaryCta.href} onClick={() => setOpen(false)}>{site.primaryCta.label}</Link></Button>
      </nav> : null}
    </header>
  );
}
