# Evalunor

Evalunor is a Next.js SEO agency website recreated from the visual structure and interaction language of the Smart Digital Idea reference, with original SEO-agency positioning, copy and supplied team portraits.

## Stack

- Next.js 15 App Router
- TypeScript, React 19
- Tailwind CSS v4
- shadcn-style primitives with class-variance-authority
- Lucide icons
- Server-rendered content and metadata
- Native `<details>` FAQ for crawlable, zero-JS expansion

## Run locally

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
npm run start
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` before deploying. The default is `https://evalunor.com`.

## Routes

- `/` homepage with hero, authority section, case studies, testimonials, services, stats, integrated About/Team section, FAQ and CTA
- `/services` and `/services/[slug]`
- `/industries`
- `/case-studies` and `/case-studies/[slug]`
- `/about`
- `/insights` and `/insights/[slug]`
- `/contact`
- `/robots.txt` and `/sitemap.xml`

## Reusable components

`Navbar`, `Footer`, `Logo`, `Section`, `SectionHeading`, `Reveal`, `Button`, `Badge`, `Card`, `Input`, `Textarea`, `Marquee`, `JsonLd`, plus homepage section components.

## Team photos

The three supplied portraits are optimized WebP data assets in `lib/data/team-photos.ts` and are used directly in both the homepage team section and `/about`. This avoids broken image URLs while the repo is deployed. For the leanest production payload, move them to `public/images/team/` and replace the data URIs with `next/image` paths during final asset hardening.

## Reference and content notes

The site preserves the observed reference structure: availability badge, oversized rotating hero, proof stack, authority copy, hover-to-scroll work cards, testimonial block, capability grid, tech stack treatment, numbered FAQ and contact/footer flow. All Evalunor copy is original; no reference text or remote reference assets are hotlinked.

## Launch checklist

- Replace `hello@evalunor.com` and social profile placeholders in `lib/site.ts`.
- Connect `/contact` to a real form endpoint or CRM instead of the temporary mailto form.
- Replace the example case-study metrics with verified client data before publishing.
- Set the final canonical domain in `NEXT_PUBLIC_SITE_URL`.
- Add a real OG image under `public/` if social cards are required.
