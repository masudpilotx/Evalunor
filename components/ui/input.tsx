import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full rounded-md border border-input bg-background px-3.5 text-sm text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
