import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navLinks } from "../data/profile";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [router.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-ink"
          aria-label="Maria Ayaz, home"
        >
          Maria Ayaz
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-active={isActive}
                  className={`underline-grow text-[15px] transition-colors ${
                    isActive ? "text-ink font-medium" : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-sm border border-ink/20 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-teal hover:text-teal md:inline-block"
        >
          Get in touch
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <HiOutlineX size={26} /> : <HiOutlineMenu size={26} />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-line/70 bg-panel px-6 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block rounded-sm px-2 py-3 text-base ${
                    isActive ? "font-medium text-teal" : "text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
