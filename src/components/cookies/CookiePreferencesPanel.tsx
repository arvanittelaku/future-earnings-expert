"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCookieConsent } from "./CookieConsentProvider";
import { CATEGORY_META, type CookieCategory } from "@/lib/cookies/types";

type Props = {
  onClose: () => void;
  mode: "modal" | "inline";
};

const OPTIONAL_CATEGORIES: CookieCategory[] = ["analytics", "marketing", "preferences"];

export function CookiePreferencesPanel({ onClose, mode }: Props) {
  const { preferences, saveCustom, acceptAll, rejectNonEssential } = useCookieConsent();
  const dialogRef = useRef<HTMLDivElement>(null);

  const [analytics, setAnalytics] = useState(preferences?.analytics ?? false);
  const [marketing, setMarketing] = useState(preferences?.marketing ?? false);
  const [prefs, setPrefs] = useState(preferences?.preferences ?? false);

  useEffect(() => {
    setAnalytics(preferences?.analytics ?? false);
    setMarketing(preferences?.marketing ?? false);
    setPrefs(preferences?.preferences ?? false);
  }, [preferences]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (mode === "modal") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mode]);

  function handleSave() {
    saveCustom({ analytics, marketing, preferences: prefs });
    onClose();
  }

  const panel = (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal={mode === "modal"}
      aria-labelledby="cookie-prefs-title"
      className={
        mode === "modal"
          ? "cookie-modal-enter mx-4 w-full max-w-lg rounded-xl border border-border bg-white shadow-2xl"
          : "w-full rounded-xl border border-border bg-white p-6 shadow-sm"
      }
    >
      <div className={mode === "modal" ? "p-6" : ""}>
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-prefs-title" className="text-xl font-bold text-navy">
            Cookie Preferences
          </h2>
          {mode === "modal" && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close cookie preferences"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-navy/60 hover:bg-section hover:text-navy"
            >
              ✕
            </button>
          )}
        </div>
        <p className="mt-2 text-sm text-body">
          Manage how we use cookies. Necessary cookies cannot be disabled.{" "}
          <Link href="/cookies" className="font-semibold text-gold hover:underline">
            Cookie Policy
          </Link>
        </p>

        <ul className="mt-6 space-y-4">
          <li className="rounded-lg border border-border bg-section p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-navy">{CATEGORY_META.necessary.label}</p>
                <p className="mt-1 text-xs text-body">{CATEGORY_META.necessary.description}</p>
              </div>
              <span className="shrink-0 rounded bg-navy/10 px-2 py-1 text-xs font-semibold text-navy">
                Always on
              </span>
            </div>
          </li>

          {OPTIONAL_CATEGORIES.map((cat) => {
            const meta = CATEGORY_META[cat];
            const checked =
              cat === "analytics" ? analytics : cat === "marketing" ? marketing : prefs;
            const setter =
              cat === "analytics" ? setAnalytics : cat === "marketing" ? setMarketing : setPrefs;

            return (
              <li key={cat} className="rounded-lg border border-border p-4">
                <label className="flex cursor-pointer items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-navy">{meta.label}</p>
                    <p className="mt-1 text-xs text-body">{meta.description}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setter(e.target.checked)}
                    className="mt-1 h-5 w-5 shrink-0 accent-gold"
                    aria-label={`Enable ${meta.label}`}
                  />
                </label>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={handleSave}
            className="min-h-[44px] flex-1 rounded bg-gold px-4 py-2.5 text-sm font-semibold text-white hover:bg-gold-light focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Save Preferences
          </button>
          <button
            type="button"
            onClick={() => {
              acceptAll();
              onClose();
            }}
            className="min-h-[44px] rounded border border-border px-4 py-2.5 text-sm font-semibold text-navy hover:bg-section"
          >
            Accept All
          </button>
          <button
            type="button"
            onClick={() => {
              rejectNonEssential();
              onClose();
            }}
            className="min-h-[44px] rounded border border-border px-4 py-2.5 text-sm font-semibold text-navy hover:bg-section"
          >
            Reject Non-Essential
          </button>
        </div>
      </div>
    </div>
  );

  if (mode === "inline") return panel;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="presentation"
    >
      {panel}
    </div>
  );
}
