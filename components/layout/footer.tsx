import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { footerNav, legalLinks, site, socialLinks } from "@/lib/site";

export function Footer() {
  return <footer className="border-t border-border bg-card/40 pt-16">
    <div className="container-page grid gap-12 pb-16 md:grid-cols-[1.6fr_repeat(3,1fr)]">
      <div><Logo inverse /><p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">Search systems that compound. Built by senior operators.</p><a href={`mailto:${site.email}`} className="mt-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">{site.email} <ArrowUpRight className="size-3.5" /></a></div>
      {[footerNav.company, footerNav.services, footerNav.resources].map((column) => <div key={column.title}><h2 className="kicker mb-5">{column.title}</h2><nav className="grid gap-3">{column.links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>)}</nav></div>)}
    </div>
    <div className="container-page flex flex-col justify-between gap-3 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row"><p>© {new Date().getFullYear()} Evalunor. All rights reserved.</p><div className="flex flex-wrap gap-5">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-foreground">{link.label}</a>)}{legalLinks.map((link) => <Link key={link.href} href={link.href} className="hover:text-foreground">{link.label}</Link>)}</div></div>
  </footer>;
}
