"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Counter } from "./Counter";
import { company, heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden">
      {/* animated fiber-optic background */}
      <div className="fiber-bg">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="fiber-line"
            style={{ top: `${12 + i * 13}%`, animationDelay: `${i * 0.4}s`, opacity: 0.4 + (i % 3) * 0.2 }}
          />
        ))}
        <div
          className="absolute right-0 top-0 h-full w-2/3"
          style={{ background: "radial-gradient(ellipse 60% 50% at 80% 35%, rgba(226,0,26,0.12), transparent 60%)" }}
        />
      </div>

      <div className="container-x relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {company.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl"
          >
            Swiss Telecom <span className="text-red">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg md:text-xl"
            style={{ color: "var(--fg-dim)" }}
          >
            Ihr Partner für FTTH-Begehungen, Glasfaserplanung und technische Projektunterstützung.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-red">
              Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="btn-outline">
              Dienstleistungen ansehen
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-14 flex flex-wrap gap-12"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-extrabold tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm" style={{ color: "var(--fg-dim)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
