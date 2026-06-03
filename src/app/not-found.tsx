import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="404 — Page Not Found"
        subtitle="The page you requested does not exist or may have moved."
      />
      <div className="mx-auto max-w-2xl px-4 py-12 lg:px-8">
        <div className="rounded-lg border border-border bg-section p-8 text-center">
          <p className="text-6xl font-bold text-gold">404</p>
          <p className="mt-4 text-body">
            Future Earnings Expert provides <strong>forensic economics and expert witness services</strong>{" "}
            for litigation attorneys—future earnings, earning capacity, and economic damages. This is not a
            consumer finance or investment site.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-center text-lg font-semibold text-navy">Popular destinations</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              { href: "/services", label: "Services" },
              { href: "/damages-contexts", label: "Damages Contexts" },
              { href: "/earnings-damages-types", label: "Earnings Damages Types" },
              { href: "/case-types", label: "Case Types" },
              { href: "/how-future-earnings-are-calculated", label: "How Earnings Are Calculated" },
              { href: "/guides", label: "Attorney Guides" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-[44px] rounded-lg border border-border px-4 py-3 text-center text-sm font-medium text-navy hover:border-gold hover:bg-section"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded bg-gold px-8 py-3 font-semibold text-white hover:bg-gold-light"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center rounded border border-border px-8 py-3 font-semibold text-navy hover:bg-section"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <CTASection />
    </>
  );
}
