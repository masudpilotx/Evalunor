import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  /** Adds a hairline divider above the section. */
  bordered?: boolean;
  tone?: "default" | "raised";
};

export function Section({ className, bordered = false, tone = "default", children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-20 sm:py-24 lg:py-28",
        bordered && "border-t border-border",
        tone === "raised" && "bg-card/40",
        className,
      )}
      {...props}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
