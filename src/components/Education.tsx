"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, certifications } from "@/data/portfolio";
import { SectionHeader } from "./About";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader num="05" title="Education & Certifications" />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="space-y-4">
            <p className="font-mono text-xs mb-5" style={{ color: "var(--text-dim)" }}>// academic background</p>
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = edu.color; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-dim)"; }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div
                      className="inline-block font-mono text-xs px-2.5 py-1 rounded-md mb-3"
                      style={{ background: `${edu.color}18`, color: edu.color, border: `1px solid ${edu.color}33` }}
                    >
                      {edu.period}
                    </div>
                    <h3 className="font-bold text-base">{edu.degree}</h3>
                    <p className="text-sm mt-1" style={{ color: "var(--text-dim)" }}>{edu.institution}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{edu.location}</p>
                    {edu.note && (
                      <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--muted)", borderTop: `1px solid ${edu.color}22`, paddingTop: "0.6rem" }}>
                        {edu.note}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-right shrink-0 font-bold font-mono text-sm px-3 py-1.5 rounded-lg"
                    style={{ background: `${edu.color}18`, color: edu.color }}
                  >
                    {edu.grade}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <p className="font-mono text-xs mb-5" style={{ color: "var(--text-dim)" }}>// certifications</p>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.12 }}
                  className="rounded-2xl p-6 flex items-center gap-4 transition-all duration-300"
                  style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = cert.color; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-dim)"; }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}33` }}
                  >
                    {i === 0 ? "☁️" : "🤖"}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{cert.name}</h3>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{cert.issuer}</p>
                    <p className="font-mono text-xs mt-0.5" style={{ color: "var(--muted)" }}>{cert.year}</p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: cert.color, boxShadow: `0 0 8px ${cert.color}` }}
                  />
                </motion.div>
              ))}

              {/* Fun fact card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 }}
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                  Currently deepening expertise in{" "}
                  <span style={{ color: "var(--blue)" }}>cloud data platforms</span> and{" "}
                  <span style={{ color: "var(--purple)" }}>LLM-based analytics workflows</span> to stay
                  ahead of the data engineering curve.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
