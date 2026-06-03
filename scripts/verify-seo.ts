import fs from "fs";
import path from "path";
import { buildPublicUrlInventory } from "../src/lib/seo/publicUrlInventory";

const ROOT = path.resolve(__dirname, "..");
const SITEMAP_PATH = path.join(ROOT, "public", "sitemap.xml");

function extractLocs(xml: string): string[] {
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]).sort();
}

function main() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error("Missing public/sitemap.xml — run npm run seo:generate first");
    process.exit(1);
  }

  const xml = fs.readFileSync(SITEMAP_PATH, "utf8");
  const sitemapUrls = extractLocs(xml);
  const inventory = buildPublicUrlInventory();
  const expected = [...inventory.allUrls].sort();

  const missing = expected.filter((u) => !sitemapUrls.includes(u));
  const extra = sitemapUrls.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    console.error("Sitemap missing URLs:");
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    console.error("Sitemap has unexpected URLs:");
    extra.forEach((u) => console.error(`  - ${u}`));
  }

  if (missing.length > 0 || extra.length > 0) {
    process.exit(1);
  }

  console.log(`seo:verify OK — ${sitemapUrls.length} URLs match inventory`);
}

main();
