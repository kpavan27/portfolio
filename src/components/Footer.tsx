"use client";

import { config } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: "1px solid var(--border-dim)" }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          <span style={{ color: "var(--blue)" }}>{config.name}</span> · {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          Next.js · TypeScript · Tailwind · Framer Motion
        </p>
        <a
          href={`mailto:${config.email}`}
          className="font-mono text-xs transition-colors duration-200 hover:text-[var(--blue)]"
          style={{ color: "var(--muted)" }}
        >
          {config.email}
        </a>
      </div>
    </footer>
  );
}
