import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[];
  className?: string;
};

/**
 * CSS-only infinite marquee. The list is duplicated so the -50% translate loops
 * seamlessly; the duplicate is hidden from assistive tech.
 */
export function Marquee({ items, className }: MarqueeProps) {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-14 group-hover:[animation-play-state:paused]">
        {items.map((item) => (
          <span key={item} className="font-display text-sm font-semibold tracking-tight text-muted-foreground/70">
            {item}
          </span>
        ))}
        {items.map((item) => (
          <span
            key={`${item}-duplicate`}
            aria-hidden="true"
            className="font-display text-sm font-semibold tracking-tight text-muted-foreground/70"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
