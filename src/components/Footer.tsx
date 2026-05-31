import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { company, navLinks, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          <div>
            <Logo className="[&_.font-display]:!text-white" />
            <p className="mt-5 max-w-xs text-sm text-white/55">
              Ihr Partner für FTTH-Begehungen, Glasfaserplanung und technische Projektunterstützung – schweizweit.
            </p>
          </div>

          <div>
            <h5 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              Menu
            </h5>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 transition-colors hover:text-red-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              Dienstleistungen
            </h5>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-sm text-white/70 transition-colors hover:text-red-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.1em] text-white/40">
              Kontakt
            </h5>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <span>{company.address.street}<br />{company.address.city}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <a href={company.phoneHref} className="hover:text-red-400">{company.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <a href={`mailto:${company.email}`} className="hover:text-red-400">{company.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} connect.swiss · Swiss Telecom Solutions</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-sm text-white/40 transition-colors hover:text-white/70">Impressum</Link>
            <Link href="/datenschutz" className="text-sm text-white/40 transition-colors hover:text-white/70">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
