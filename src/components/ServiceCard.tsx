"use client";

import { motion } from "framer-motion";
import { Icon, type IconName } from "./Icon";
import type { Service } from "@/lib/data";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass group relative overflow-hidden rounded-2xl p-7"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-red/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
      <div className="relative">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-red/10 transition-colors group-hover:bg-red">
          <Icon
            name={service.icon as IconName}
            className="h-7 w-7 text-red transition-colors group-hover:text-white"
            strokeWidth={1.8}
          />
        </div>
        <h3 className="font-display text-xl font-bold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-dim)" }}>
          {service.short}
        </p>
        <ul className="mt-5 space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
