"use client";

import { motion } from "framer-motion";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b" style={{ borderColor: "var(--line)", background: "var(--bg-soft)" }}>
      <div className="fiber-bg">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="fiber-line" style={{ top: `${20 + i * 18}%`, animationDelay: `${i * 0.5}s` }} />
        ))}
      </div>
      <div className="container-x relative z-10 py-20 text-center md:py-28">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow justify-center"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg"
            style={{ color: "var(--fg-dim)" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
