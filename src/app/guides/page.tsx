import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { guides } from "@/lib/content/guides";

export const metadata = {
  title: "Guides: Future Earnings Expert Witnesses",
  description:
    "In-depth guides for litigation attorneys on future earnings, earning capacity, present value, Daubert, and vocational coordination.",
};

export default function GuidesHub() {
  return (
    <>
      <PageHero
        title="Guides for Litigation Attorneys"
        subtitle="Forensic economics and expert witness practice—written for counsel under deadline."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Guides" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-lg border border-border p-6 shadow-sm hover:border-gold"
            >
              <h2 className="text-xl font-semibold text-navy">{g.h1}</h2>
              <p className="mt-2 text-sm text-body">{g.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
