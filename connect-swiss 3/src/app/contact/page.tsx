"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    // Demo: in production connect to an email service (e.g. Formspree, Resend, or a /api route).
    setSent(true);
  };

  const details = [
    { icon: MapPin, label: "Adresse", value: `${company.address.street}, ${company.address.city}` },
    { icon: Phone, label: "Telefon", value: company.phone, href: company.phoneHref },
    { icon: Mail, label: "E-Mail", value: company.email, href: `mailto:${company.email}` },
    { icon: Globe, label: "Website", value: "connect.swiss", href: company.website },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Kontaktieren Sie uns"
        subtitle="Wir freuen uns auf Ihr Projekt. Schreiben Sie uns – wir melden uns umgehend."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="h-section">Sprechen wir über Ihr Projekt</h2>
            <div className="rule" />
            <p className="mt-6" style={{ color: "var(--fg-dim)" }}>
              Ob FTTH-Begehung, Glasfaserplanung oder technische Unterstützung – kontaktieren Sie uns für eine
              unverbindliche Beratung.
            </p>
            <div className="mt-8 space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red/10">
                    <d.icon className="h-5 w-5 text-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide" style={{ color: "var(--fg-dim)" }}>
                      {d.label}
                    </div>
                    {d.href ? (
                      <a href={d.href} className="font-display font-semibold transition-colors hover:text-red">
                        {d.value}
                      </a>
                    ) : (
                      <div className="font-display font-semibold">{d.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Vielen Dank!</h3>
                <p className="mt-2" style={{ color: "var(--fg-dim)" }}>
                  Ihre Nachricht wurde erfasst. Wir melden uns in Kürze bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" required value={form.name} onChange={(v) => update("name", v)} placeholder="Ihr Name" />
                  <Field label="Telefon" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+41 ..." />
                </div>
                <Field label="E-Mail" type="email" required value={form.email} onChange={(v) => update("email", v)} placeholder="sie@email.ch" />
                <div>
                  <label className="mb-2 block text-sm font-semibold">Dienstleistung</label>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-red"
                    style={{ background: "var(--bg-soft)", borderColor: "var(--line)", color: "var(--fg)" }}
                  >
                    <option value="">Bitte wählen…</option>
                    <option>FTTH & FTTB Planung</option>
                    <option>LWL-Begehungen</option>
                    <option>Technische Dokumentation</option>
                    <option>Unterstützung für Elektrofirmen</option>
                    <option>Projektmanagement</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold">Nachricht</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    placeholder="Beschreiben Sie kurz Ihr Projekt…"
                    className="w-full resize-y rounded-lg border px-4 py-3 outline-none transition focus:border-red"
                    style={{ background: "var(--bg-soft)", borderColor: "var(--line)", color: "var(--fg)" }}
                  />
                </div>
                <button type="submit" className="btn-red w-full">
                  Anfrage senden <Send className="h-4 w-4" />
                </button>
                <p className="text-center text-xs" style={{ color: "var(--fg-dim)" }}>
                  Wir antworten so schnell wie möglich · Unverbindlich
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border px-4 py-3 outline-none transition focus:border-red"
        style={{ background: "var(--bg-soft)", borderColor: "var(--line)", color: "var(--fg)" }}
      />
    </div>
  );
}
