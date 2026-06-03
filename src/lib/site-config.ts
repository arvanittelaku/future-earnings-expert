export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.futureearningsexpert.com";

export const siteConfig = {
  name: "Future Earnings Expert",
  shortName: "FutureEarningsExpert",
  domain: SITE_URL,
  email: "info@futureearningsexpert.com",
  tagline: "Defensible economic damages for litigation.",
  description:
    "Future Earnings Expert connects litigation attorneys with qualified forensic economists specializing in future earnings, earning capacity, and economic damages expert witness services nationwide.",
  responseTime: "1 business day",
  country: "US",
};

export type ContentSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type FAQ = { question: string; answer: string };

export type PageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle?: string;
  sections: ContentSection[];
  faqs?: FAQ[];
  relatedSlugs?: string[];
  relatedContextSlugs?: string[];
};
