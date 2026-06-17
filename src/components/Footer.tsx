import Link from "next/link";
import { CookieSettingsLink } from "@/components/cookies/CookieSettingsLink";
import { damagesContexts } from "@/lib/content/damages-contexts";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold">Future Earnings Expert</p>
          <p className="mt-2 text-sm text-white/70">{siteConfig.tagline}</p>
          <p className="mt-4 text-xs text-white/60">
            Forensic economics and expert witness services for UK litigation solicitors and counsel—not
            consumer finance, cryptocurrency, or investment coaching.
          </p>
          <p className="mt-3 rounded border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
            <strong className="text-gold">{siteConfig.regionLabel} only.</strong>{" "}
            {siteConfig.regionNotice}
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-gold">Services</p>
          <ul className="space-y-2 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-gold">Damages Contexts</p>
          <ul className="space-y-2 text-sm text-white/70">
            {damagesContexts.map((c) => (
              <li key={c.slug}>
                <Link href={`/damages-contexts/${c.slug}`} className="hover:text-white">
                  {c.h1.split("—")[0].trim()}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/earnings-damages-types" className="text-gold hover:text-gold-light">
                All Earnings Damages Types →
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-gold">Resources</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/guides" className="hover:text-white">Guides</Link></li>
            <li><Link href="/how-to-retain" className="hover:text-white">How to Retain</Link></li>
            <li><Link href="/qualifications" className="hover:text-white">Qualifications</Link></li>
            <li><Link href="/glossary" className="hover:text-white">Glossary</Link></li>
            <li><Link href="/how-future-earnings-are-calculated" className="hover:text-white">How Earnings Are Calculated</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50">
        <p>
          FutureEarningsExpert.com connects UK litigation solicitors with forensic economists. We are not a law
          firm and do not provide legal advice. Services are limited to the {siteConfig.regionLabel}.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>© {new Date().getFullYear()} {siteConfig.name}.</span>
          <Link href="/privacy" className="hover:text-white">Privacy</Link>
          <Link href="/cookies" className="hover:text-white">Cookie Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <CookieSettingsLink />
        </p>
      </div>
    </footer>
  );
}
