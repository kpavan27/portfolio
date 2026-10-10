"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "./About";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader num="02" title="Skills & Tools" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.08 }}
              className="rounded-2xl p-6 transition-colors duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}88`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-dim)";
              }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                <span className="font-semibold text-sm" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{
                      background: "var(--surface2)",
                      border: "1px solid var(--border-dim)",
                      color: "var(--text-dim)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-5 rounded-2xl p-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
        >
          <p className="text-xs font-mono mb-3" style={{ color: "var(--text-dim)" }}>
            {"// ways of working"}
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Stakeholder communication",
              "Requirements gathering",
              "Written documentation",
              "Cross-team delivery",
              "Regulated data (GDPR)",
              "Escalating issues early",
            ].map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  color: "var(--text-dim)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
