"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "./About";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader num="03" title="Projects" />

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
              className="group rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = project.categoryColor;
                el.style.boxShadow = `0 0 40px ${project.categoryColor}18`;
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border-dim)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Color accent top bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.categoryColor}, transparent)` }} />

              <div className="p-7 grid md:grid-cols-3 gap-6 items-start">
                {/* Left: number + title */}
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: `${project.categoryColor}18`,
                        color: project.categoryColor,
                        border: `1px solid ${project.categoryColor}33`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                      {project.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug group-hover:text-white transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: metrics */}
                <div className="space-y-2.5">
                  <p className="font-mono text-xs mb-3" style={{ color: "var(--muted)" }}>// outcomes</p>
                  {project.metrics.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: project.categoryColor }}
                      />
                      <span style={{ color: "var(--text-dim)" }}>{m}</span>
                    </div>
                  ))}

                  <div className="pt-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200"
                        style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = project.categoryColor;
                          el.style.color = project.categoryColor;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "var(--border)";
                          el.style.color = "var(--text-dim)";
                        }}
                      >
                        View Source ↗
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg border"
                        style={{ borderColor: "var(--border-dim)", color: "var(--muted)" }}
                      >
                        Code on request
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
