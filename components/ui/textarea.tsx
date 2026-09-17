import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 w-full resize-y rounded-md border border-input bg-background px-3.5 py-3 text-sm leading-relaxed text-foreground transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/25 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
