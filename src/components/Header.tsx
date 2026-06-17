import Link from "next/link";
import { DesktopNav } from "@/components/NavDropdown";
import { mainNav } from "@/lib/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-border bg-white shadow-sm">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 lg:px-8 xl:gap-4">
        <Link href="/" className="shrink-0 text-base font-bold leading-tight text-navy lg:text-lg">
          Future Earnings Expert
        </Link>

        <div className="hidden min-w-0 justify-center overflow-visible xl:flex">
          <DesktopNav items={mainNav} />
        </div>

        <Link
          href="/contact"
          className="relative z-10 inline-flex h-10 shrink-0 items-center justify-center rounded bg-gold px-3 text-xs font-semibold text-white transition hover:bg-gold-light xl:h-11 xl:px-4 xl:text-sm"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
