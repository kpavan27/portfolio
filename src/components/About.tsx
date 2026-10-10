"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { config, experience, projects } from "@/data/portfolio";

function CountUp({ target, suffix = "", delay = 0 }: { target: number; suffix?: string; delay?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => {
      const step = target / 40;
      let current = 0;
      const interval = setInterval(() => {
        current = Math.min(current + step, target);
        setVal(Math.round(current));
        if (current >= target) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [inView, target, delay]);

  return <span ref={ref}>{val}{suffix}</span>;
}

const stats: { label: string; value: number; suffix: string; display?: string; color: string }[] = [
  { label: "Projects on GitHub", value: projects.length, suffix: "", color: "var(--blue)" },
  { label: "Data roles", value: experience.length, suffix: "", color: "var(--amber)" },
  { label: "MSc Data Science", value: 0, suffix: "", display: "1st Class", color: "var(--green)" },
  { label: "AWS certifications", value: 2, suffix: "", color: "var(--purple)" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader num="01" title="About Me" />

        <div className="grid md:grid-cols-5 gap-12 items-start mt-14">
          {/* Bio — 3 cols */}
          <motion.div
            className="md:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold leading-snug">
              Data that{" "}
              <span style={{ color: "var(--blue)" }}>reconciles</span>, models that{" "}
              <span style={{ color: "var(--amber)" }}>hold up</span>.
            </h2>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              {config.bio}
            </p>
            <p style={{ color: "var(--text-dim)", lineHeight: "1.8" }}>
              Outside work I build machine learning and analytics projects the way they would be
              reviewed in production: checking for leakage, choosing thresholds from real costs, reporting
              uncertainty, and testing for drift. Recent work focuses on abuse detection and on how well
              content moderation covers a written GenAI usage policy.
            </p>

            {/* Quick facts */}
            <div
              className="rounded-xl p-4 mt-2 font-mono text-xs space-y-2"
              style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
            >
              {[
                ["now", config.current],
                ["location", config.location],
                ["education", "MSc Data Science · TU Dublin (2025)"],
                ["focus", "Data engineering · ML evaluation · Trust & safety analytics"],
                ["tools", "SQL · Python · AWS · scikit-learn · Power BI"],
                ["status", "Open to permanent roles"],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3">
                  <span style={{ color: "var(--blue)", minWidth: "80px" }}>{k}:</span>
                  <span style={{ color: k === "status" ? "var(--green)" : "var(--text-dim)" }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats — 2 cols */}
          <motion.div
            className="md:col-span-2 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 cursor-default"
                style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = s.color;
                  el.style.boxShadow = `0 0 20px ${s.color}22`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-dim)";
                  el.style.boxShadow = "none";
                }}
              >
                <div>
                  <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>
                    {s.display ?? <CountUp target={s.value} suffix={s.suffix} delay={300 + i * 100} />}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{s.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Shared section header
export function SectionHeader({ num, title }: { num: string; title: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="flex items-center gap-4"
    >
      <span className="section-num">{num}.</span>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="h-px flex-1 max-w-[100px]" style={{ background: "var(--border)" }} />
    </motion.div>
  );
}
