"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";
import { SectionHeader } from "./About";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader num="04" title="Experience" />

        <div className="mt-14 relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-7 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--blue), var(--border-dim), transparent)" }}
          />

          <div className="space-y-8 md:pl-20">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute hidden md:block w-3.5 h-3.5 rounded-full border-2 border-[var(--bg)]"
                  style={{
                    background: job.color,
                    left: "-56px",
                    top: "22px",
                    boxShadow: `0 0 12px ${job.color}66`,
                  }}
                />

                <div
                  className="rounded-2xl p-6 transition-all duration-300"
                  style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = job.color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-dim)";
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold">
                        {job.role}
                      </h3>
                      <p className="font-semibold mt-0.5" style={{ color: job.color }}>
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs px-2.5 py-1 rounded-lg" style={{ background: `${job.color}15`, color: job.color }}>
                        {job.period}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, bi) => (
                      <motion.li
                        key={bi}
                        initial={{ opacity: 0, x: 8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.15 + bi * 0.06 + 0.1 }}
                        className="flex gap-2.5 text-sm"
                        style={{ color: "var(--text-dim)" }}
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: job.color }} />
                        {b}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: "1px solid var(--border-dim)" }}>
                    {job.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
