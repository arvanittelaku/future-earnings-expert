import Link from "next/link";
import { ContentSections, CTASection, JsonLd, PageHero } from "@/components/UI";
import { damagesContexts } from "@/lib/content/damages-contexts";
import { services } from "@/lib/content/services";
import { guides } from "@/lib/content/guides";
import { SITE_URL, siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Future Earnings Expert Witness | Quantifying Economic Damages (UK)",
  description:
    "Find a qualified future earnings expert witness in the UK. Forensic economists quantifying loss of future earnings, earning capacity, and economic damages for solicitors and counsel across England, Wales, Scotland, and Northern Ireland.",
};

const stats = [
  ["Economic damages in PI verdicts", "Often largest recoverable head", "Insurance Research Council"],
  ["Expert economist usage", "Standard in high-exposure injury & employment cases", "Litigation practice surveys"],
  ["Civil framework — expert testimony", "Federal Rule of Evidence 702", "Federal Rules of Evidence"],
  ["State framework", "Daubert / Frye (jurisdiction-specific)", "State evidence rules"],
  ["Occupational wage data", "BLS/OEWS benchmarks", "Bureau of Labor Statistics"],
  ["Brand focus", "Litigation forensic economics only", "FutureEarningsExpert.com"],
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: siteConfig.name,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/glossary?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: siteConfig.name,
        url: SITE_URL,
        email: siteConfig.email,
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        description: siteConfig.description,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Future Earnings Expert Witness Services",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        serviceType: "Forensic Economics Expert Witness",
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-navy px-4 py-14 md:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            Forensic Economics · Expert Witness · UK Litigation Only
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Future Earnings Expert Witness Services for UK Litigation
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Personal injury, employment, and clinical negligence matters turn on defensible quantification
            of future earnings, earning capacity, and economic damages. FutureEarningsExpert.com connects
            UK solicitors and counsel with qualified forensic economists who produce court-ready expert
            reports for matters in England, Wales, Scotland, and Northern Ireland.
          </p>
          <p className="mx-auto mt-4 max-w-2xl rounded border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/90">
            <strong className="text-gold">United Kingdom only.</strong> This service is not available to
            visitors or legal professionals outside the UK.
          </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] items-center rounded bg-gold px-8 py-3 font-semibold text-white hover:bg-gold-light"
        >
          Contact Us
        </Link>
        </div>
      </section>

      <div className="bg-gold px-4 py-4 text-center text-sm font-medium text-white lg:px-8">
        ⚠ Economic damages often exceed special damages in high-exposure injury and wrongful death cases.
        Precision in future earnings and earning capacity quantification is essential to settlement and trial
        strategy.{" "}
        <Link href="/guides/future-earnings-vs-earning-capacity-guide" className="underline hover:text-white/90">
          Read the capacity vs. earnings guide →
        </Link>
      </div>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl md:text-3xl">What Our Expert Witness Network Covers</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-lg border border-border bg-white p-6 shadow-sm transition hover:border-gold hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-body">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/services" className="font-semibold text-navy hover:text-gold">
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-section px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl md:text-3xl">Economic Damages in Litigation: Key Facts</h2>
          <div className="mt-8 overflow-x-auto rounded-lg border border-border bg-white">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-border bg-section">
                  <th className="px-4 py-3 text-left font-semibold text-navy">Fact</th>
                  <th className="px-4 py-3 text-left font-semibold text-navy">Detail</th>
                  <th className="px-4 py-3 text-left font-semibold text-navy">Source</th>
                </tr>
              </thead>
              <tbody>
                {stats.map(([fact, detail, source]) => (
                  <tr key={fact} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-navy">{fact}</td>
                    <td className="px-4 py-3 text-body">{detail}</td>
                    <td className="px-4 py-3 text-body">{source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl md:text-3xl">Three Damages Contexts — Different Methodology</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {damagesContexts.map((ctx) => (
              <Link
                key={ctx.slug}
                href={`/damages-contexts/${ctx.slug}`}
                className="rounded-lg border border-border p-6 hover:border-gold hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-navy">{ctx.h1}</h3>
                <p className="mt-3 text-sm text-body">{ctx.subtitle}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-gold">Learn more →</span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-body">
            New to forensic economics?{" "}
            <Link href="/what-is-a-future-earnings-expert" className="font-semibold text-navy hover:text-gold">
              What is a future earnings expert witness? →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-section px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl md:text-3xl">Attorney Guides</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {guides.slice(0, 3).map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} className="rounded-lg border border-border bg-white p-6 hover:border-gold">
                <h3 className="font-semibold text-navy">{g.h1}</h3>
                <p className="mt-2 text-sm text-body">{g.metaDescription.slice(0, 120)}…</p>
              </Link>
            ))}
          </div>
          <Link href="/guides" className="mt-6 inline-block font-semibold text-navy hover:text-gold">
            All guides →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
