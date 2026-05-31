import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icon";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Dienstleistungen",
  description: "FTTH & FTTB Planung, LWL-Begehungen, technische Dokumentation, Unterstützung für Elektrofirmen und Projektmanagement.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dienstleistungen"
        title="Unsere Leistungen"
        subtitle="Von der Begehung über die Planung bis zur Übergabe – alles aus einer Hand."
      />
      <section className="section">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <div className="glass grid items-center gap-8 rounded-2xl p-8 md:grid-cols-[auto_1fr_auto]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red/10">
                  <Icon name={s.icon as IconName} className="h-8 w-8 text-red" strokeWidth={1.7} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 max-w-2xl" style={{ color: "var(--fg-dim)" }}>{s.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.features.map((f) => (
                      <span key={f} className="rounded-full border px-3 py-1.5 text-xs font-semibold" style={{ borderColor: "var(--line)" }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="btn-outline shrink-0">
                  Anfragen <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
