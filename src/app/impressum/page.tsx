import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von connect.swiss – Swiss Telecom Solutions.",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Impressum" />
      <section className="section">
        <div className="container-x max-w-3xl space-y-8 leading-relaxed" style={{ color: "var(--fg-dim)" }}>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>Angaben gemäss Gesetz</h2>
            <p className="mt-3">
              connect.swiss – Swiss Telecom Solutions<br />
              {company.address.street}<br />
              {company.address.city}<br />
              {company.address.region}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>Kontakt</h2>
            <p className="mt-3">
              Telefon: {company.phone}<br />
              E-Mail: {company.email}<br />
              Web: {company.website}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>Haftungsausschluss</h2>
            <p className="mt-3">
              Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Die Nutzung der
              Inhalte erfolgt auf eigene Gefahr.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>Urheberrecht</h2>
            <p className="mt-3">
              Die durch den Betreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem
              schweizerischen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung bedürfen der
              schriftlichen Zustimmung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
