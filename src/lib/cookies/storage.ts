import {
  CONSENT_MAX_AGE_MS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  type ConsentPreferences,
  DEFAULT_DENIED,
} from "./types";

function isValidPreferences(value: unknown): value is ConsentPreferences {
  if (!value || typeof value !== "object") return false;
  const v = value as ConsentPreferences;
  return (
    v.necessary === true &&
    typeof v.analytics === "boolean" &&
    typeof v.marketing === "boolean" &&
    typeof v.preferences === "boolean" &&
    typeof v.timestamp === "number" &&
    v.version === CONSENT_VERSION
  );
}

function isExpired(timestamp: number): boolean {
  return Date.now() - timestamp > CONSENT_MAX_AGE_MS;
}

/** Read stored consent from localStorage. Returns null if missing or expired. */
export function readConsentFromStorage(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    if (!isValidPreferences(parsed)) return null;
    if (isExpired(parsed.timestamp)) {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/** Persist consent to localStorage with timestamp. */
export function writeConsentToStorage(prefs: ConsentPreferences): void {
  if (typeof window === "undefined") return;
  const payload: ConsentPreferences = {
    ...prefs,
    necessary: true,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
}

/** Clear consent — banner will reappear on next visit. */
export function clearConsentStorage(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CONSENT_STORAGE_KEY);
}

export function hasValidConsent(): boolean {
  return readConsentFromStorage() !== null;
}

export { DEFAULT_DENIED };
