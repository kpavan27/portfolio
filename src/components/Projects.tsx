"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "./About";

type Project = (typeof projects)[number];

function SourceLink({ project }: { project: Project }) {
  return (
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
      View code ↗
    </a>
  );
}

function CompactCard({ project, delay, inView }: { project: Project; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay }}
      className="rounded-2xl p-6 flex flex-col gap-3 transition-colors duration-300"
      style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = project.categoryColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border-dim)";
      }}
    >
      <div className="flex items-center justify-between gap-3">
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
      <h3 className="text-lg font-bold leading-snug">{project.name}</h3>
      <p className="text-sm leading-relaxed line-clamp-4" style={{ color: "var(--text-dim)" }}>
        {project.description}
      </p>
      <ul className="space-y-1.5">
        {project.metrics.map((m) => (
          <li key={m} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-dim)" }}>
            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.categoryColor }} />
            {m}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <div className="pt-2 mt-auto">
        <SourceLink project={project} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={ref} className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader num="03" title="Projects" />

        <p className="font-mono text-xs mt-10" style={{ color: "var(--text-dim)" }}>
          {"// featured"}
        </p>
        <div className="mt-4 space-y-6">
          {featured.map((project, i) => (
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
                  <p className="font-mono text-xs mb-3" style={{ color: "var(--muted)" }}>{"// results"}</p>
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
                    <SourceLink project={project} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-xs mt-14" style={{ color: "var(--text-dim)" }}>
          {"// more projects"}
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <CompactCard key={project.id} project={project} delay={0.1 + i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
