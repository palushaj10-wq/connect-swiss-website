import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Icon, type IconName } from "@/components/Icon";
import { whyUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Über uns",
  description: "connect.swiss – FTTH-Spezialisten, schweizweit tätig. Lernen Sie unser Unternehmen kennen.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Über uns"
        title="Ihr Partner im Glasfaserausbau"
        subtitle="Spezialisiert auf FTTH-Begehungen, Planung und technische Projektunterstützung – in der ganzen Schweiz."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="h-section">Wer wir sind</h2>
            <div className="rule" />
            <p className="mt-6" style={{ color: "var(--fg-dim)" }}>
              connect.swiss ist ein spezialisiertes Schweizer Unternehmen im Bereich der leitungsgebundenen
              Telekommunikation. Unser Fokus liegt auf der Glasfasertechnik – von der ersten Begehung über die
              detaillierte Planung bis zur fachgerechten Umsetzung und Dokumentation.
            </p>
            <p className="mt-4" style={{ color: "var(--fg-dim)" }}>
              Wir unterstützen Elektrofirmen, Netzbetreiber und Generalunternehmer mit fundiertem Fachwissen und
              flexiblen Ressourcen. Qualität, Zuverlässigkeit und transparente Kommunikation stehen bei uns an
              erster Stelle.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-display text-3xl font-extrabold"><Counter value={100} suffix="+" /></div>
                <div className="mt-1 text-xs" style={{ color: "var(--fg-dim)" }}>Projekte</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-display text-3xl font-extrabold"><Counter value={100} suffix="%" /></div>
                <div className="mt-1 text-xs" style={{ color: "var(--fg-dim)" }}>Schweizweit</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="font-display text-3xl font-extrabold text-red">FTTH</div>
                <div className="mt-1 text-xs" style={{ color: "var(--fg-dim)" }}>Spezialisten</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-x">
          <Reveal className="mb-14 text-center">
            <span className="eyebrow justify-center">Warum connect.swiss</span>
            <h2 className="h-section mt-4">Was uns auszeichnet</h2>
            <div className="rule mx-auto" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div className="glass flex h-full items-start gap-4 rounded-2xl p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red/10">
                    <Icon name={w.icon as IconName} className="h-6 w-6 text-red" strokeWidth={1.9} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{w.title}</h3>
                    <p className="mt-1.5 text-sm" style={{ color: "var(--fg-dim)" }}>{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
