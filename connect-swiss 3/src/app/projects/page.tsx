"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { projects, projectCategories } from "@/lib/data";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("Alle");
  const shown = filter === "Alle" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Projekte"
        title="Realisierte Projekte"
        subtitle="Eine Auswahl unserer Arbeiten im Glasfaser- und Telekommunikationsbereich."
      />

      <section className="section">
        <div className="container-x">
          {/* filters */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {projectCategories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all ${
                  filter === c ? "bg-red text-white shadow-lg shadow-red/25" : "glass hover:border-red"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* grid */}
          <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {shown.map((p) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="glass group overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-red px-3 py-1 text-xs font-bold text-white">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wide text-red">
                      {p.location} · {p.year}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm" style={{ color: "var(--fg-dim)" }}>
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
