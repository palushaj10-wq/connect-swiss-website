import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Icon, type IconName } from "@/components/Icon";
import { services, whyUs, company } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-x">
          <Reveal className="mb-14 text-center">
            <span className="eyebrow">Dienstleistungen</span>
            <h2 className="h-section mt-4">Was wir für Sie tun</h2>
            <div className="rule mx-auto" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT teaser */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Über uns</span>
            <h2 className="h-section mt-4">Ihr Spezialist für Glasfaser in der Schweiz</h2>
            <div className="rule" />
            <p className="mt-6 text-lg" style={{ color: "var(--fg-dim)" }}>
              connect.swiss steht für ganzheitliche Lösungen im Schweizer Telekommunikationsnetzbau. Als
              FTTH-Spezialisten begleiten wir Projekte von der Begehung über die Planung bis zur Übergabe.
            </p>
            <Link href="/about" className="btn-red mt-8">
              Mehr über uns <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "100+", l: "Projekte" },
                { n: "100%", l: "Schweizweit" },
                { n: "FTTH", l: "Spezialisten" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-6 text-center">
                  <div className="font-display text-2xl font-extrabold text-red md:text-3xl">{s.n}</div>
                  <div className="mt-1 text-xs" style={{ color: "var(--fg-dim)" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container-x">
          <Reveal className="text-center">
            <span className="eyebrow">Ablauf</span>
            <h2 className="h-section mt-4">So arbeiten wir</h2>
            <div className="rule mx-auto" />
          </Reveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container-x">
          <Reveal className="mb-14 text-center">
            <span className="eyebrow">Warum connect.swiss</span>
            <h2 className="h-section mt-4">Ihre Vorteile auf einen Blick</h2>
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
                    <p className="mt-1.5 text-sm" style={{ color: "var(--fg-dim)" }}>
                      {w.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink-900 text-white">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold md:text-5xl">
              Bereit für Ihr <span className="text-red-400">Glasfaserprojekt</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns auf Ihr Projekt.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-red">
                Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={`mailto:${company.email}`} className="btn inline-flex border border-white/20 text-white hover:border-white/50">
                {company.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
