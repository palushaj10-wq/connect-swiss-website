import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von connect.swiss – Swiss Telecom Solutions.",
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="section">
        <div className="container-x max-w-3xl space-y-8 leading-relaxed" style={{ color: "var(--fg-dim)" }}>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>1. Überblick</h2>
            <p className="mt-3">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
              sowie dieser Datenschutzerklärung.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>2. Verantwortliche Stelle</h2>
            <p className="mt-3">
              connect.swiss<br />
              {company.address.street}, {company.address.city}<br />
              E-Mail: {company.email}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>3. Erhebung von Daten</h2>
            <p className="mt-3">
              Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>4. Cookies</h2>
            <p className="mt-3">
              Diese Website verwendet nur technisch notwendige Cookies, um die Grundfunktionen sicherzustellen.
              Es werden keine Tracking-Cookies ohne Ihre Einwilligung gesetzt.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold" style={{ color: "var(--fg)" }}>5. Ihre Rechte</h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der
              Verarbeitung Ihrer gespeicherten Daten. Kontaktieren Sie uns hierzu unter {company.email}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
