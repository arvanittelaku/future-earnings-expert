"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  applyTrackingScripts,
  getTrackingConfigFromEnv,
  initGoogleConsentModeDefaults,
} from "@/lib/cookies/tracking";
import {
  readConsentFromStorage,
  writeConsentToStorage,
} from "@/lib/cookies/storage";
import {
  acceptAllPreferences,
  rejectNonEssentialPreferences,
  CONSENT_VERSION,
  type ConsentPreferences,
} from "@/lib/cookies/types";

type CookieConsentContextValue = {
  /** null = not yet loaded from storage; false = no consent; true = has consent */
  isReady: boolean;
  showBanner: boolean;
  preferences: ConsentPreferences | null;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  saveCustom: (prefs: Omit<ConsentPreferences, "necessary" | "timestamp" | "version">) => void;
  openPreferences: () => void;
  closePreferences: () => void;
  preferencesOpen: boolean;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return ctx;
}

/** Safe hook for footer — returns null outside provider. */
export function useCookieConsentOptional(): CookieConsentContextValue | null {
  return useContext(CookieConsentContext);
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const trackingConfig = useMemo(() => getTrackingConfigFromEnv(), []);

  const applyConsent = useCallback(
    (prefs: ConsentPreferences) => {
      writeConsentToStorage(prefs);
      setPreferences(prefs);
      setShowBanner(false);
      applyTrackingScripts(prefs, trackingConfig);
    },
    [trackingConfig]
  );

  useEffect(() => {
    initGoogleConsentModeDefaults();
    const stored = readConsentFromStorage();
    if (stored) {
      setPreferences(stored);
      setShowBanner(false);
      applyTrackingScripts(stored, trackingConfig);
    } else {
      setShowBanner(true);
    }
    setIsReady(true);
  }, [trackingConfig]);

  const acceptAll = useCallback(() => {
    applyConsent(acceptAllPreferences());
    setPreferencesOpen(false);
  }, [applyConsent]);

  const rejectNonEssential = useCallback(() => {
    applyConsent(rejectNonEssentialPreferences());
    setPreferencesOpen(false);
  }, [applyConsent]);

  const saveCustom = useCallback(
    (partial: Omit<ConsentPreferences, "necessary" | "timestamp" | "version">) => {
      applyConsent({
        necessary: true,
        analytics: partial.analytics,
        marketing: partial.marketing,
        preferences: partial.preferences,
        timestamp: Date.now(),
        version: CONSENT_VERSION,
      });
      setPreferencesOpen(false);
    },
    [applyConsent]
  );

  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const value = useMemo(
    () => ({
      isReady,
      showBanner,
      preferences,
      acceptAll,
      rejectNonEssential,
      saveCustom,
      openPreferences,
      closePreferences,
      preferencesOpen,
    }),
    [
      isReady,
      showBanner,
      preferences,
      acceptAll,
      rejectNonEssential,
      saveCustom,
      openPreferences,
      closePreferences,
      preferencesOpen,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}
