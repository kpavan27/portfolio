"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { config } from "@/data/portfolio";
import { SectionHeader } from "./About";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const contacts = [
    {
      key: "email",
      icon: "✉",
      label: "Email",
      value: config.email,
      copyVal: config.email,
      color: "var(--blue)",
    },
    {
      key: "phone",
      icon: "📞",
      label: "Phone",
      value: config.phone,
      copyVal: config.phone,
      color: "var(--green)",
    },
    {
      key: "location",
      icon: "📍",
      label: "Location",
      value: config.location,
      copyVal: null,
      color: "var(--amber)",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-28 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
      />
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader num="06" title="Get in Touch" />

        <div className="mt-14 grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold leading-snug mb-4">
              Let&apos;s{" "}
              <span style={{ color: "var(--blue)" }}>talk</span>.
            </h2>
            <p className="leading-relaxed mb-8" style={{ color: "var(--text-dim)" }}>
              I&apos;m open to permanent roles in data engineering, data science and trust &amp; safety
              analytics, in Dublin or remote. The quickest way to reach me is email.
            </p>

            {/* Contact items */}
            <div className="space-y-3">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.key}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}33` }}
                  >
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs" style={{ color: "var(--muted)" }}>{c.label}</p>
                    <p className="text-sm font-mono truncate" style={{ color: "var(--text)" }}>
                      {c.value}
                    </p>
                  </div>
                  {c.copyVal && (
                    <button
                      onClick={() => copy(c.copyVal!, c.key)}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg border transition-all duration-200"
                      style={{
                        borderColor: copied === c.key ? c.color : "var(--border)",
                        color: copied === c.key ? c.color : "var(--muted)",
                        background: copied === c.key ? `${c.color}10` : "transparent",
                      }}
                    >
                      {copied === c.key ? "copied!" : "copy"}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[
                { label: "GitHub", href: config.github, color: "var(--blue)" },
                { label: "LinkedIn", href: config.linkedin, color: "var(--blue)" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-mono border transition-all duration-200"
                  style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = s.color;
                    el.style.color = s.color;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-dim)";
                  }}
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — summary card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border-dim)" }}
          >
            {/* Card header */}
            <div
              className="px-6 py-4 flex items-center justify-between"
              style={{ background: "var(--surface2)", borderBottom: "1px solid var(--border-dim)" }}
            >
              <div className="flex gap-1.5">
                {["#ff5f57","#febc2e","#28c840"].map((c) => (
                  <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>profile.json</span>
            </div>

            <div className="p-6 font-mono text-xs space-y-2">
              {[
                ["{", null],
                ['  "name"', `"${config.name}"`],
                ['  "role"', `"${config.role}"`],
                ['  "location"', `"${config.location}"`],
                ['  "available"', "true"],
                ['  "current"', `"${config.current}"`],
                ['  "open_to"', '["permanent", "full-time"]'],
                ['  "timezone"', '"Europe/Dublin (GMT+1)"'],
                ['  "stack"', '["SQL", "Python", "AWS", "scikit-learn"]'],
                ['}', null],
              ].map(([key, val], i) => (
                <div key={i}>
                  {val === null ? (
                    <span style={{ color: "var(--text-dim)" }}>{key}</span>
                  ) : (
                    <>
                      <span style={{ color: "var(--purple)" }}>{key}</span>
                      <span style={{ color: "var(--text-dim)" }}>: </span>
                      <span style={{ color: val === "true" ? "var(--green)" : val?.startsWith("[") ? "var(--amber)" : "var(--blue)" }}>
                        {val}
                      </span>
                      <span style={{ color: "var(--muted)" }}>,</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
