import * as React from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  kicker?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  kicker,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  className,
  titleClassName,
  children,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker ? <p className="kicker mb-5">{kicker}</p> : null}
      <Tag
        className={cn(
          "display text-balance text-[clamp(2.125rem,5vw,3.9rem)]",
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
          {description}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
