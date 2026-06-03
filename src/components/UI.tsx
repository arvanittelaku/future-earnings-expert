import Link from "next/link";
import type { ContentSection, FAQ } from "@/lib/site-config";
import type { PillarTable } from "@/lib/content/pillar";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-navy px-4 py-12 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl min-w-0">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/60">
            {breadcrumbs.map((c, i) => (
              <span key={c.label}>
                {i > 0 && " / "}
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-base text-white/80 sm:text-lg md:text-xl">{subtitle}</p>}
      </div>
    </section>
  );
}

export function CTASection({
  title = "Quantify your economic damages — contact us today.",
  description = "Connect with a qualified forensic economist for future earnings, earning capacity, and expert witness support.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-gold px-4 py-14 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <p className="mt-4 text-white/90">{description}</p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded bg-navy px-8 py-3 text-sm font-semibold text-white hover:bg-navy-dark"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export function ContentSections({ sections }: { sections: ContentSection[] }) {
  return (
    <div className="space-y-8">
      {sections.map((s, i) => (
        <div key={i}>
          {s.heading && <h2 className="mb-4 text-2xl text-navy">{s.heading}</h2>}
          {s.paragraphs?.map((p, j) => (
            <p key={j} className="mb-4 leading-relaxed text-body">
              {p}
            </p>
          ))}
          {s.list && (
            <ul className="mb-4 list-disc space-y-2 pl-6 text-body">
              {s.list.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export function DataTable({ table }: { table: PillarTable }) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-border">
      {table.heading && (
        <p className="border-b border-border bg-section px-4 py-3 text-sm font-semibold text-navy">
          {table.heading}
        </p>
      )}
      <table className="w-full min-w-[480px] text-sm">
        <thead>
          <tr className="border-b border-border bg-section">
            {table.columns.map((col) => (
              <th key={col} className="px-4 py-3 text-left font-semibold text-navy">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-body">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQBlock({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQ[]; title?: string }) {
  return (
    <div className="mt-12 border-t border-border pt-8">
      <h2 className="mb-6 text-2xl text-navy">{title}</h2>
      <dl className="space-y-6">
        {faqs.map((f) => (
          <div key={f.question} className="rounded-lg border border-border bg-section p-5">
            <dt className="font-semibold text-navy">{f.question}</dt>
            <dd className="mt-2 text-body">{f.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-white p-2 shadow-lg lg:hidden">
      <Link
        href="/contact"
        className="flex min-h-[44px] flex-1 items-center justify-center rounded bg-gold text-sm font-semibold text-white"
      >
        Contact Us
      </Link>
    </div>
  );
}
