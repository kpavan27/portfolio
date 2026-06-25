"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeader } from "./About";

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm" style={{ color: "var(--text-dim)" }}>{name}</span>
        <motion.span
          className="font-mono text-xs"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.4 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--surface2)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}bb, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

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

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1 }}
              className="rounded-2xl p-6 space-y-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border-dim)",
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
                  style={{ background: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.color}33` }}
                >
                  {cat.label.slice(0, 2).toUpperCase()}
                </div>
                <span className="font-semibold text-sm" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              {/* Skill bars */}
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={0.15 + ci * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className="mt-6 rounded-2xl p-5"
          style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
        >
          <p className="text-xs font-mono mb-3" style={{ color: "var(--text-dim)" }}>
            // soft skills & working style
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Cross-team collaboration",
              "Requirement gathering",
              "Clear documentation",
              "Stakeholder communication",
              "Fast learner",
              "Detail oriented",
            ].map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1.5 rounded-lg transition-all duration-200"
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
