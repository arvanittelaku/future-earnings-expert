"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const PHONE_COUNTRY_CODES = [
  { label: "US +1", value: "+1" },
  { label: "UK +44", value: "+44" },
  { label: "CA +1", value: "+1" },
  { label: "AU +61", value: "+61" },
  { label: "Other", value: "" },
] as const;

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [phoneCountry, setPhoneCountry] = useState<string>(PHONE_COUNTRY_CODES[0].value);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    const fullName = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phoneNational = String(data.get("phone") ?? "").trim();
    const phone =
      phoneNational && phoneCountry
        ? `${phoneCountry} ${phoneNational.replace(/\s+/g, " ")}`.trim()
        : phoneNational;

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          organisation: String(data.get("organisation") ?? "").trim(),
          role: String(data.get("role") ?? "").trim(),
          context: String(data.get("context") ?? "").trim(),
          damagesType: String(data.get("damages_type") ?? "").trim(),
          exposure: String(data.get("exposure") ?? "").trim(),
          urgency: String(data.get("urgency") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        }),
      });

      const result = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !result.success) {
        throw new Error(result.error ?? "submit failed");
      }

      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <p className="rounded border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          Submission failed. Please email{" "}
          <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
            {siteConfig.email}
          </a>{" "}
          directly.
        </p>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Law firm / organisation" name="organisation" required autoComplete="organization" />
        <Field label="Email" name="email" type="email" required autoComplete="email" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-navy">Phone</span>
          <div className="flex flex-col gap-2 sm:flex-row">
            <select
              aria-label="Phone country code"
              value={phoneCountry}
              onChange={(e) => setPhoneCountry(e.target.value)}
              className="min-h-[44px] w-full rounded border border-border px-3 py-2 text-body focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy sm:max-w-[8.5rem]"
            >
              {PHONE_COUNTRY_CODES.map((c) => (
                <option key={c.label} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel-national"
              placeholder="National number (optional)"
              className="min-h-[44px] min-w-0 flex-1 rounded border border-border px-4 py-2 text-body focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
            />
          </div>
        </div>
      </div>

      <SelectField
        label="You are"
        name="role"
        required
        options={[
          "Plaintiff attorney",
          "Defense attorney",
          "In-house counsel",
          "Insurance / claims professional",
          "Other legal professional",
        ]}
      />

      <SelectField
        label="Damages context"
        name="context"
        required
        options={[
          "Personal injury / wrongful death",
          "Employment / wrongful termination",
          "Medical malpractice",
          "Commercial / business damages",
          "Multiple / not sure",
        ]}
      />

      <SelectField
        label="Primary damages issue"
        name="damages_type"
        required
        options={[
          "Loss of future earnings",
          "Loss of earning capacity",
          "Present value / discount rate dispute",
          "Rebuttal of opposing economist",
          "Wrongful death economic loss",
          "Front pay / back pay",
          "Other / not sure",
        ]}
      />

      <SelectField
        label="Approximate exposure"
        name="exposure"
        options={["Unknown", "Under $250,000", "$250,000 – $1M", "$1M – $5M", "Over $5M"]}
      />

      <SelectField
        label="Urgency"
        name="urgency"
        required
        options={[
          "Standard — no imminent deadline",
          "Discovery deadline within 30 days",
          "Expert disclosure / trial within 60 days",
          "Other urgent",
        ]}
      />

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-navy">
          Brief case description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full min-w-0 rounded border border-border px-4 py-3 text-body focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
          placeholder="Jurisdiction, party side, key dates, and whether an opposing economist report exists."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-body">
        <input type="checkbox" required className="mt-1 min-h-[16px] min-w-[16px] shrink-0" />
        <span>
          I understand submitting this form does not create an attorney-client or expert retention
          relationship.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="min-h-[44px] w-full rounded bg-gold px-6 py-3 font-semibold text-white hover:bg-gold-light disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Contact Us"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-navy">
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="min-h-[44px] w-full min-w-0 rounded border border-border px-4 py-2 text-body focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-navy">
        {label} {required && "*"}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="min-h-[44px] w-full min-w-0 rounded border border-border px-4 py-2 text-body focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
