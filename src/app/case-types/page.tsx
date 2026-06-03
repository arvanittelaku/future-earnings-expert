import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { caseTypes } from "@/lib/content/case-types";

export const metadata = {
  title: "Case Types Requiring a Future Earnings Expert Witness",
  description:
    "Which US cases need a forensic economist? Personal injury, wrongful death, employment, malpractice, workers comp crossover, and federal Daubert proceedings.",
};

export default function CaseTypesHub() {
  return (
    <>
      <PageHero
        title="Case Types Requiring a Future Earnings Expert Witness"
        subtitle="When economic damages drive exposure, expert quantification is essential."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Types" }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {caseTypes.map((p) => (
            <Link
              key={p.slug}
              href={`/case-types/${p.slug}`}
              className="rounded-lg border border-border p-6 shadow-sm hover:border-gold hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-navy">{p.h1}</h2>
              <p className="mt-2 text-sm text-body">{p.metaDescription}</p>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </>
  );
}
