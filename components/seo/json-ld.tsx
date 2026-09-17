type JsonLdProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

/**
 * Renders structured data server-side so it is present in the initial HTML.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // Serialised on the server; no user input reaches this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
