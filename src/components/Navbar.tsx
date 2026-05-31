"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { company, navLinks } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : ""
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Link href="/" aria-label="connect.swiss Startseite">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative font-display text-sm font-semibold transition-colors hover:text-red ${
                  active ? "text-red" : ""
                }`}
                style={{ color: active ? undefined : "var(--fg)" }}
              >
                {l.label}
                {active && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded bg-red" />}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={company.phoneHref}
            className="hidden items-center gap-2 rounded-lg border px-4 py-2.5 font-display text-sm font-bold transition-colors hover:border-red md:flex"
            style={{ borderColor: "var(--line)", color: "var(--fg)" }}
          >
            <Phone className="h-4 w-4 text-red" />
            {company.phone}
          </a>
          <ThemeToggle />
          <Link href="/contact" className="btn-red hidden sm:inline-flex">
            Kontakt
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass border-t lg:hidden" style={{ borderColor: "var(--line)" }}>
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 font-display font-semibold transition-colors hover:bg-red/5 hover:text-red"
              >
                {l.label}
              </Link>
            ))}
            <a href={company.phoneHref} className="btn-red mt-2">
              <Phone className="h-4 w-4" />
              {company.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
