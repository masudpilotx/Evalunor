import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-tight",
  {
    variants: {
      variant: {
        default: "border-border bg-card/70 text-muted-foreground",
        primary: "border-primary/30 bg-primary/10 text-primary",
        solid: "border-transparent bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type BadgeProps = React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
