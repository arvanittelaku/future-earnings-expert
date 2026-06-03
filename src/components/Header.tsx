import Link from "next/link";
import { DesktopNav } from "@/components/NavDropdown";
import { mainNav } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 lg:h-[4.75rem] lg:px-8">
        {/* Logo — vertically centred in row */}
        <Link href="/" className="flex shrink-0 flex-col justify-center leading-tight">
          <span className="text-base font-bold text-navy lg:text-lg">Future Earnings Expert</span>
          <span className="hidden text-[11px] text-body sm:block">Forensic Economics · Expert Witness</span>
        </Link>

        {/* Nav — centred in remaining space, hidden below xl */}
        <div className="hidden min-w-0 justify-center xl:flex">
          <DesktopNav items={mainNav} />
        </div>

        {/* CTA — right-aligned, same vertical centre as nav */}
        <Link
          href="/contact"
          className="inline-flex h-11 shrink-0 items-center justify-center rounded bg-gold px-4 text-sm font-semibold text-white transition hover:bg-gold-light"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
