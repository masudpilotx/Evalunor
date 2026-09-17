import Link from "next/link";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="Evalunor home" className={`group inline-flex items-center gap-2.5 font-display text-[19px] font-semibold tracking-[-0.055em] ${inverse ? "text-white" : "text-foreground"}`}>
      <svg viewBox="0 0 32 32" className="size-7 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">
        <path d="M16 2 30 16 16 30 2 16Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="m16 9.5 6.5 6.5-6.5 6.5L9.5 16 16 9.5Z" fill="currentColor" />
      </svg>
      Evalunor
    </Link>
  );
}
