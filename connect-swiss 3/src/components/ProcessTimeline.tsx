"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function ProcessTimeline() {
  return (
    <div className="relative mt-16">
      {/* center line (desktop) */}
      <div
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
        style={{ background: "var(--line)" }}
      />
      <div className="space-y-8 md:space-y-0">
        {processSteps.map((step, i) => {
          const left = i % 2 === 0;
          return (
            <div key={step.n} className={`md:flex md:items-center md:gap-8 ${left ? "" : "md:flex-row-reverse"}`}>
              <motion.div
                initial={{ opacity: 0, x: left ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="md:w-1/2"
              >
                <div className={`glass rounded-2xl p-6 ${left ? "md:text-right" : "md:text-left"}`}>
                  <span className="font-display text-3xl font-extrabold text-red/30">{step.n}</span>
                  <h3 className="mt-1 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: "var(--fg-dim)" }}>
                    {step.text}
                  </p>
                </div>
              </motion.div>

              {/* node */}
              <div className="relative z-10 hidden h-4 w-4 shrink-0 md:block">
                <span className="absolute inset-0 rounded-full bg-red" />
                <span className="absolute inset-0 animate-ping rounded-full bg-red/40" />
              </div>

              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
