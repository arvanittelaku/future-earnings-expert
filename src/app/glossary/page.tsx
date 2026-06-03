import Link from "next/link";
import { CTASection, JsonLd, PageHero } from "@/components/UI";
import { glossaryTerms } from "@/lib/content/glossary";

export const metadata = {
  title: "Future Earnings Expert Witness Glossary",
  description:
    "Definitions of key forensic economics terms: but-for analysis, earning capacity, present value, FRE 702, work-life expectancy, and more.",
};

export default function GlossaryPage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sorted.map((g) => ({
            "@type": "Question",
            name: g.term,
            acceptedAnswer: { "@type": "Answer", text: g.definition },
          })),
        }}
      />
      <PageHero
        title="Forensic Economics Glossary"
        subtitle="Key terms for litigation attorneys and economic damages experts."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Glossary" }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        <dl className="space-y-6">
          {sorted.map((g) => (
            <div key={g.term} id={g.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="border-b border-border pb-6">
              <dt className="text-lg font-semibold text-navy">{g.term}</dt>
              <dd className="mt-2 text-body">{g.definition}</dd>
            </div>
          ))}
        </dl>
        <Link href="/how-future-earnings-are-calculated" className="mt-8 inline-block font-semibold text-navy hover:text-gold">
          How future earnings are calculated →
        </Link>
      </div>
      <CTASection />
    </>
  );
}
