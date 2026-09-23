import type { ComponentType, SVGProps } from "react";

type MarkProps = SVGProps<SVGSVGElement>;

/**
 * Shared wrapper so every mark shares one viewBox, size and stroke weight.
 * Marks are drawn in `currentColor`, so they inherit whatever colour the
 * surrounding strip uses and need no light/dark variants.
 */
function Mark({ children, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" className="size-[22px] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

function AhrefsMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <path d="M4.5 19.5 12 4.5l7.5 15" />
      <path d="M8.4 13.4h7.2" />
    </Mark>
  );
}

function SemrushMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M14.7 9.3c0-1.3-1.2-2.2-2.7-2.2s-2.7 1-2.7 2.2c0 2.8 5.4 1.2 5.4 4 0 1.3-1.2 2.3-2.7 2.3s-2.7-1-2.7-2.3" />
    </Mark>
  );
}

function SearchConsoleMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 4.5 4.5" />
      <path d="M8.4 12.3V9.6M10.8 12.3V7.8M13.2 12.3v-1.8" />
    </Mark>
  );
}

function AnalyticsMark(props: MarkProps) {
  return (
    <Mark {...props} fill="currentColor" stroke="none">
      <rect x="4" y="14" width="3.6" height="6" rx="1.8" />
      <rect x="10.2" y="9" width="3.6" height="11" rx="1.8" />
      <rect x="16.4" y="4" width="3.6" height="16" rx="1.8" />
    </Mark>
  );
}

function ScreamingFrogMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <path d="M4.6 13.4a7.4 7.4 0 0 1 14.8 0c0 3.5-3.3 6.1-7.4 6.1s-7.4-2.6-7.4-6.1Z" />
      <path d="M8.1 8.2a2 2 0 1 1 3.1-2.4M15.9 8.2a2 2 0 1 0-3.1-2.4" />
      <path d="M9.6 12.4h.01M14.4 12.4h.01" strokeWidth={2.4} />
      <path d="M9.8 15.8a3.4 3.4 0 0 0 4.4 0" />
    </Mark>
  );
}

function LookerStudioMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 3.4V12l7.4 4.3" />
    </Mark>
  );
}

function BigQueryMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <path d="M12 3.2l7.6 4.4v8.8L12 20.8 4.4 16.4V7.6L12 3.2Z" />
      <circle cx="11.2" cy="11.2" r="3.1" />
      <path d="m13.6 13.6 3 3" />
    </Mark>
  );
}

function NextMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M9.1 16V8.4l7.1 9.2" />
      <path d="M15.2 8.4V14" />
    </Mark>
  );
}

function WebflowMark(props: MarkProps) {
  return (
    <Mark {...props} fill="currentColor" stroke="none">
      <path d="M21.3 7.6c-1.4 3.5-3 7-4.4 10.5h-3.1l1.9-6.1h-.1c-1 2.3-2.5 4.3-4.4 6.1H8.2l1.8-6h-.1a17.7 17.7 0 0 1-4.4 6H2.7c1.4-3.5 3-7 4.4-10.5h3.1l-1.8 6h.1c1-2.3 2.5-4.4 4.4-6h3l-1.9 6h.1c1.1-2.3 2.6-4.3 4.4-6h2.8Z" />
    </Mark>
  );
}

function ShopifyMark(props: MarkProps) {
  return (
    <Mark {...props}>
      <path d="M5.4 8.2h13.2l1 11.6H4.4l1-11.6Z" />
      <path d="M9 8.2V6.6a3 3 0 0 1 6 0v1.6" />
    </Mark>
  );
}

export type ToolLogo = {
  name: string;
  Logo: ComponentType<MarkProps>;
};

export const toolLogos: readonly ToolLogo[] = [
  { name: "Ahrefs", Logo: AhrefsMark },
  { name: "Semrush", Logo: SemrushMark },
  { name: "Search Console", Logo: SearchConsoleMark },
  { name: "GA4", Logo: AnalyticsMark },
  { name: "Screaming Frog", Logo: ScreamingFrogMark },
  { name: "Looker Studio", Logo: LookerStudioMark },
  { name: "BigQuery", Logo: BigQueryMark },
  { name: "Next.js", Logo: NextMark },
  { name: "Webflow", Logo: WebflowMark },
  { name: "Shopify", Logo: ShopifyMark },
];
