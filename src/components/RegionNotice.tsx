import { siteConfig } from "@/lib/site-config";

/** Persistent UK-only service area notice — shown site-wide. */
export function RegionBanner() {
  return (
    <div
      role="note"
      aria-label="Service area notice"
      className="border-b border-gold/30 bg-navy-dark px-4 py-2 text-center text-xs text-white/90 sm:text-sm"
    >
      <span className="font-semibold text-gold">{siteConfig.regionLabel} only.</span>{" "}
      {siteConfig.regionNotice}
    </div>
  );
}
