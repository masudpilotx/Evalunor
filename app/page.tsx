import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Authority } from "@/components/sections/authority";
import { Work } from "@/components/sections/work";
import { Testimonials } from "@/components/sections/testimonials";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return <><Navbar /><main><Hero /><Authority /><Work /><Testimonials /><Services limit={6} /><Team /><section className="border-y border-border bg-card/40 py-16"><div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">{[["120+", "brands scaled since 2018"], ["2.4M", "monthly organic sessions managed"], ["94%", "clients renew past month six"], ["0", "penalties, ever"]].map(([value, label]) => <div key={label}><strong className="display text-4xl text-primary sm:text-5xl">{value}</strong><span className="mt-3 block max-w-[14ch] text-xs leading-relaxed text-muted-foreground">{label}</span></div>)}</div></section><Faq /><ContactCta /></main><Footer /></>;
}
