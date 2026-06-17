import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConsentModeDefaultsScript } from "@/components/cookies/ConsentModeDefaultsScript";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentProvider";
import { CookieConsentUI } from "@/components/cookies/CookieConsentUI";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { StickyMobileCTA } from "@/components/UI";
import { SITE_URL, siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Future Earnings Expert Witness | Economic Damages",
    template: "%s | Future Earnings Expert",
  },
  description: siteConfig.description,
  openGraph: { type: "website", locale: "en_GB", siteName: siteConfig.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ConsentModeDefaultsScript />
        <CookieConsentProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-gold focus:p-4"
          >
            Skip to main content
          </a>
          <Header />
          <MobileNav />
          <main id="main" className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <StickyMobileCTA />
          <CookieConsentUI />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
