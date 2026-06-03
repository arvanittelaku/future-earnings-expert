import Link from "next/link";
import { CTASection, PageHero } from "@/components/UI";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Thank You",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Thank You — Request Received"
        subtitle="Your consultation request has been submitted successfully."
      />
      <div className="mx-auto max-w-2xl px-4 py-12 lg:px-8">
        <div className="rounded-lg border border-border bg-section p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-2xl text-gold">
            ✓
          </div>
          <p className="text-lg text-body">
            A member of our team will review your case details and respond within{" "}
            <strong>{siteConfig.responseTime}</strong> during business hours.
          </p>
          <p className="mt-4 text-sm text-body">
            If your matter is urgent, email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-navy hover:text-gold">
              {siteConfig.email}
            </a>{" "}
            with your firm name and deadline.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-center text-lg font-semibold text-navy">What to prepare</h2>
          <ul className="mt-4 space-y-2 text-sm text-body">
            <li>• Pleadings and damages-related discovery</li>
            <li>• Tax returns and W-2s (pre- and post-event)</li>
            <li>• Vocational or IME reports, if available</li>
            <li>• Opposing economist report, if disclosed</li>
          </ul>
          <p className="mt-4 text-center text-sm">
            <Link href="/how-to-retain" className="font-semibold text-navy hover:text-gold">
              Full retention checklist →
            </Link>
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-light"
          >
            Return to Homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex min-h-[44px] items-center rounded border border-border px-6 py-3 font-semibold text-navy hover:bg-section"
          >
            Browse Services
          </Link>
        </div>
      </div>
      <CTASection title="Need to discuss another case?" description="Submit a separate request for each matter." />
    </>
  );
}
