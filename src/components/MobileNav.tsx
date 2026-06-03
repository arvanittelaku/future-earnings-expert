"use client";

import Link from "next/link";
import { useState } from "react";
import { mobileNavGroups } from "@/lib/navigation";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border bg-section xl:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex min-h-[44px] w-full items-center justify-between px-4 py-3 text-sm font-semibold text-navy"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        Menu
        <span aria-hidden>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <nav id="mobile-menu" className="max-h-[70vh] space-y-4 overflow-y-auto border-t border-border px-4 pb-4 pt-2">
          {mobileNavGroups.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gold">{group.label}</p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block min-h-[44px] py-2 text-sm text-navy/80 hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block min-h-[44px] rounded bg-gold py-3 text-center text-sm font-semibold text-white"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </div>
  );
}
