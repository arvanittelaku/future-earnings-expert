"use client";

import Link from "next/link";
import type { NavDropdown, NavEntry } from "@/lib/navigation";

function DesktopDropdown({ dropdown }: { dropdown: NavDropdown }) {
  return (
    <div className="group relative">
      <Link
        href={dropdown.href}
        className="inline-flex h-11 items-center gap-0.5 whitespace-nowrap px-1.5 text-[13px] font-medium text-navy/80 transition hover:text-navy 2xl:px-2 2xl:text-sm"
        aria-haspopup="true"
      >
        {dropdown.label}
        <span aria-hidden className="text-[10px] opacity-70">
          ▾
        </span>
      </Link>
      {/* pt-1 bridges hover gap between trigger and menu */}
      <div className="pointer-events-none absolute left-0 top-full z-50 hidden pt-1 group-hover:pointer-events-auto group-hover:block group-focus-within:pointer-events-auto group-focus-within:block">
        <div className="max-h-[70vh] min-w-[240px] overflow-y-auto rounded-lg border border-border bg-white py-2 shadow-lg">
          {dropdown.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-navy/80 hover:bg-section hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function DesktopNav({ items }: { items: NavEntry[] }) {
  return (
    <nav aria-label="Main navigation" className="flex items-center gap-0.5 2xl:gap-1">
      {items.map((entry) =>
        entry.type === "link" ? (
          <Link
            key={entry.href}
            href={entry.href}
            className="inline-flex h-11 items-center whitespace-nowrap px-1.5 text-[13px] font-medium text-navy/80 transition hover:text-navy 2xl:px-2 2xl:text-sm"
          >
            {entry.label}
          </Link>
        ) : (
          <DesktopDropdown key={entry.dropdown.label} dropdown={entry.dropdown} />
        )
      )}
    </nav>
  );
}
