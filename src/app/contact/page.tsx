import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/UI";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Contact Us",
  description:
    "Submit your case details to be matched with a qualified forensic economist for future earnings and economic damages expert witness services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Connect with a forensic economist for civil, employment, or malpractice economic damages."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-12 sm:py-12 lg:grid-cols-2 lg:px-8">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-navy">Three Intake Paths</h2>
          <div className="mt-6 space-y-4 text-body">
            <p><strong>Plaintiff counsel:</strong> Quantifying future earnings or earning capacity for injury, death, or employment claims.</p>
            <p><strong>Defense counsel:</strong> Independent damages analysis or rebuttal of opposing economist reports.</p>
            <p><strong>In-house / insurers:</strong> Economic damages assessment for high-exposure litigation support.</p>
          </div>
          <dl className="mt-8 space-y-4">
            <div>
              <dt className="text-sm font-semibold text-navy">Email</dt>
              <dd>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all text-base font-semibold hover:text-gold sm:text-lg"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
          </dl>
          <ul className="mt-8 space-y-2 text-sm text-body">
            <li>✓ Personal injury, employment &amp; malpractice contexts</li>
            <li>✓ FRE 702 &amp; Daubert-aware methodology</li>
            <li>✓ Response within {siteConfig.responseTime}</li>
          </ul>
        </div>
        <div className="min-w-0 rounded-lg border border-border bg-white p-4 shadow-sm sm:p-6">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
