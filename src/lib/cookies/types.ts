/** Cookie consent categories aligned with GDPR / ePrivacy requirements. */
export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

export const CONSENT_VERSION = "1.0.0";
export const CONSENT_STORAGE_KEY = "fee_cookie_consent";
/** Consent expires after 365 days — user must reconfirm annually. */
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type ConsentPreferences = {
  /** Always true — required for site functionality and consent storage. */
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  /** Unix timestamp when consent was saved. */
  timestamp: number;
  /** Schema version for migration if categories change. */
  version: string;
};

export type ConsentChoice = "accept_all" | "reject_non_essential" | "custom";

export const DEFAULT_DENIED: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  timestamp: 0,
  version: CONSENT_VERSION,
};

export const CATEGORY_META: Record<
  CookieCategory,
  { label: string; description: string; required: boolean }
> = {
  necessary: {
    label: "Necessary Cookies",
    description:
      "Essential for the website to function, including security, consent storage, and form submission. Cannot be disabled.",
    required: true,
  },
  analytics: {
    label: "Analytics Cookies",
    description:
      "Help us understand how visitors use the site (e.g. Google Analytics) so we can improve content and performance.",
    required: false,
  },
  marketing: {
    label: "Marketing Cookies",
    description:
      "Used to measure advertising effectiveness and deliver relevant ads (e.g. Meta Pixel, LinkedIn Insight Tag).",
    required: false,
  },
  preferences: {
    label: "Preferences Cookies",
    description:
      "Remember your choices and personalise your experience (e.g. Hotjar session recordings, UI preferences).",
    required: false,
  },
};

export function acceptAllPreferences(): ConsentPreferences {
  return {
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
}

export function rejectNonEssentialPreferences(): ConsentPreferences {
  return {
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
}

export function isCategoryGranted(
  prefs: ConsentPreferences,
  category: CookieCategory
): boolean {
  if (category === "necessary") return true;
  return prefs[category];
}
