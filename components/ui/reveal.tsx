"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = React.ComponentProps<"div"> & {
  /** Stagger in milliseconds. */
  delay?: number;
};

/**
 * Progressive-enhancement scroll reveal. The markup ships in the initial HTML,
 * so content stays crawlable; only the transition is client-side.
 */
export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("reveal-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ ...style, "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
}
