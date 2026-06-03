import type { ConsentPreferences } from "./types";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _linkedin_data_partner_ids?: string[];
    hj?: (...args: unknown[]) => void;
    _hjSettings?: { hjid: number; hjsv: number };
  }
}

/** Google Consent Mode v2 — default denied until user grants categories. */
export function initGoogleConsentModeDefaults(): void {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

/** Update Google Consent Mode when preferences change. */
export function updateGoogleConsentMode(prefs: ConsentPreferences): void {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: prefs.analytics ? "granted" : "denied",
    ad_storage: prefs.marketing ? "granted" : "denied",
    ad_user_data: prefs.marketing ? "granted" : "denied",
    ad_personalization: prefs.marketing ? "granted" : "denied",
    functionality_storage: prefs.preferences ? "granted" : "denied",
    personalization_storage: prefs.preferences ? "granted" : "denied",
  });
}

const loadedScripts = new Set<string>();

function injectScript(id: string, src: string, async = true): void {
  if (loadedScripts.has(id) || document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = async;
  document.head.appendChild(script);
  loadedScripts.add(id);
}

function removeScript(id: string): void {
  document.getElementById(id)?.remove();
  loadedScripts.delete(id);
}

/** Load Google Analytics 4 — only after analytics consent. */
export function loadGoogleAnalytics(measurementId: string): void {
  if (!measurementId || loadedScripts.has("fee-ga4")) return;
  injectScript("fee-ga4-src", `https://www.googletagmanager.com/gtag/js?id=${measurementId}`);
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, { anonymize_ip: true });
  loadedScripts.add("fee-ga4");
}

/** Load Google Tag Manager container — analytics + marketing tags inside GTM respect consent mode. */
export function loadGoogleTagManager(containerId: string): void {
  if (!containerId || loadedScripts.has("fee-gtm")) return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  injectScript("fee-gtm", `https://www.googletagmanager.com/gtm.js?id=${containerId}`);
  loadedScripts.add("fee-gtm");
}

/** Meta (Facebook) Pixel — marketing consent required. */
export function loadMetaPixel(pixelId: string): void {
  if (!pixelId || loadedScripts.has("fee-meta-pixel")) return;
  const n = window.fbq;
  if (!n) {
    const fbq = function (...args: unknown[]) {
      (fbq as unknown as { callMethod?: (...a: unknown[]) => void; queue: unknown[] }).queue.push(args);
    } as unknown as typeof window.fbq;
    (fbq as unknown as { queue: unknown[]; loaded: boolean; version: string }).queue = [];
    (fbq as unknown as { loaded: boolean }).loaded = true;
    (fbq as unknown as { version: string }).version = "2.0";
    window.fbq = fbq;
    injectScript("fee-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
  }
  window.fbq!("init", pixelId);
  window.fbq!("track", "PageView");
  loadedScripts.add("fee-meta-pixel");
}

export function unloadMetaPixel(): void {
  removeScript("fee-meta-pixel");
  delete window.fbq;
}

/** LinkedIn Insight Tag — marketing consent required. */
export function loadLinkedInInsight(partnerId: string): void {
  if (!partnerId || loadedScripts.has("fee-linkedin")) return;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids ?? [];
  if (!window._linkedin_data_partner_ids.includes(partnerId)) {
    window._linkedin_data_partner_ids.push(partnerId);
  }
  injectScript("fee-linkedin", "https://snap.licdn.com/li.lms-analytics/insight.min.js");
  loadedScripts.add("fee-linkedin");
}

export function unloadLinkedInInsight(): void {
  removeScript("fee-linkedin");
  window._linkedin_data_partner_ids = [];
}

/** Hotjar — preferences consent (session analytics / UX). */
export function loadHotjar(siteId: string): void {
  if (!siteId || loadedScripts.has("fee-hotjar")) return;
  const hjid = parseInt(siteId, 10);
  if (Number.isNaN(hjid)) return;
  window.hj =
    window.hj ??
    function (...args: unknown[]) {
      (window.hj as unknown as { q: unknown[] }).q = (window.hj as unknown as { q: unknown[] }).q ?? [];
      (window.hj as unknown as { q: unknown[] }).q.push(args);
    };
  window._hjSettings = { hjid, hjsv: 6 };
  injectScript("fee-hotjar", `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=6`);
  loadedScripts.add("fee-hotjar");
}

export function unloadHotjar(): void {
  removeScript("fee-hotjar");
  delete window.hj;
  delete window._hjSettings;
}

export type TrackingConfig = {
  gaMeasurementId?: string;
  gtmContainerId?: string;
  metaPixelId?: string;
  linkedInPartnerId?: string;
  hotjarSiteId?: string;
};

/** Apply script loading/unloading based on current consent — call on every preference change. */
export function applyTrackingScripts(
  prefs: ConsentPreferences,
  config: TrackingConfig
): void {
  updateGoogleConsentMode(prefs);

  if (prefs.analytics) {
    if (config.gaMeasurementId) loadGoogleAnalytics(config.gaMeasurementId);
    if (config.gtmContainerId) loadGoogleTagManager(config.gtmContainerId);
  }

  if (prefs.marketing) {
    if (config.metaPixelId) loadMetaPixel(config.metaPixelId);
    if (config.linkedInPartnerId) loadLinkedInInsight(config.linkedInPartnerId);
  } else {
    unloadMetaPixel();
    unloadLinkedInInsight();
  }

  if (prefs.preferences) {
    if (config.hotjarSiteId) loadHotjar(config.hotjarSiteId);
  } else {
    unloadHotjar();
  }
}

export function getTrackingConfigFromEnv(): TrackingConfig {
  return {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    gtmContainerId: process.env.NEXT_PUBLIC_GTM_CONTAINER_ID,
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    linkedInPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
    hotjarSiteId: process.env.NEXT_PUBLIC_HOTJAR_SITE_ID,
  };
}
