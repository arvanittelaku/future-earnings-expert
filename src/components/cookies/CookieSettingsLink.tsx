"use client";

import { useCookieConsentOptional } from "./CookieConsentProvider";

/** Footer trigger to reopen cookie preferences anytime. */
export function CookieSettingsLink({ className = "" }: { className?: string }) {
  const ctx = useCookieConsentOptional();

  if (!ctx) return null;

  return (
    <button
      type="button"
      onClick={ctx.openPreferences}
      className={`text-left hover:text-white focus:outline-none focus:underline ${className}`}
    >
      Cookie Settings
    </button>
  );
}
