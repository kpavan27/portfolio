"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { config } from "@/data/portfolio";

// Animated data chart SVG
function DataChart() {
  const bars = [
    { h: 60, color: "#3b82f6", label: "SQL" },
    { h: 85, color: "#f59e0b", label: "Power BI" },
    { h: 72, color: "#10b981", label: "ETL" },
    { h: 90, color: "#8b5cf6", label: "Python" },
    { h: 65, color: "#3b82f6", label: "Azure" },
    { h: 78, color: "#f59e0b", label: "EDA" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="relative w-full max-w-sm mx-auto"
    >
      {/* Card */}
      <div
        className="rounded-2xl p-6 relative overflow-hidden"
        style={{
          background: "rgba(13,20,33,0.9)",
          border: "1px solid rgba(59,130,246,0.2)",
          boxShadow: "0 0 60px rgba(59,130,246,0.08)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-mono" style={{ color: "var(--blue)" }}>SKILL PROFICIENCY</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>analytics dashboard</p>
          </div>
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--blue)" }}
              />
            ))}
          </div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-2 h-28 mb-2">
          {bars.map((bar, i) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-1 h-full">
              {/* Full-height track */}
              <div className="w-full h-full rounded-sm relative overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                {/* Animated fill from bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 rounded-sm"
                  style={{ background: bar.color }}
                  initial={{ height: "0%" }}
                  animate={{ height: `${bar.h}%` }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {bars.map((bar) => (
            <div key={bar.label} className="flex-1 text-center">
              <span className="text-[9px] font-mono" style={{ color: "var(--muted)" }}>{bar.label}</span>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mt-5 pt-4" style={{ borderTop: "1px solid var(--border-dim)" }}>
          {[
            { val: "3+", label: "Internships", c: "var(--blue)" },
            { val: "3", label: "Projects", c: "var(--amber)" },
            { val: "MSc", label: "1st Class", c: "var(--green)" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-lg font-bold font-mono" style={{ color: s.c }}>{s.val}</div>
              <div className="text-[10px]" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Decorative glow */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)" }}
        />
      </div>

      {/* Floating chips */}
      {(
        [
          { text: "✓ Pipeline built", color: "var(--green)", top: "-12px", right: "-16px", delay: 1.4 },
          { text: "↗ +24% accuracy", color: "var(--amber)", top: "55%", left: "-140px", delay: 1.7 },
        ] as { text: string; color: string; top?: string; bottom?: string; left?: string; right?: string; delay: number }[]
      ).map((chip, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{ delay: chip.delay, y: { repeat: Infinity, duration: 3, ease: "easeInOut" } }}
          className="absolute font-mono text-[10px] px-2.5 py-1 rounded-full glass"
          style={{
            color: chip.color,
            border: `1px solid ${chip.color}33`,
            top: chip.top,
            bottom: chip.bottom,
            right: chip.right,
            left: chip.left,
          }}
        >
          {chip.text}
        </motion.div>
      ))}
    </motion.div>
  );
}

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts: { x: number; y: number; vx: number; vy: number }[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59,130,246,0.35)";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${(1 - d / 90) * 0.07})`;
            ctx.stroke();
          }
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const DELAY = [0.2, 0.35, 0.5, 0.65, 0.8] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <ParticleCanvas />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(59,130,246,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(30,58,95,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY[0] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{ background: "var(--blue-dim)", border: "1px solid rgba(59,130,246,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--green)" }} />
            <span className="font-mono text-xs" style={{ color: "var(--blue)" }}>
              Open to opportunities · Dublin, Ireland
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY[1] }}
            className="text-5xl md:text-6xl font-bold tracking-tight leading-none mb-3"
          >
            {config.name.split(" ")[0]}{" "}
            <span className="shimmer-text">{config.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY[2] }}
            className="text-xl font-semibold mb-5"
            style={{ color: "var(--blue)" }}
          >
            {config.role}
            <span className="font-mono text-sm ml-2" style={{ color: "var(--muted)" }}>
              — SQL · Python · Power BI · Azure
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY[3] }}
            className="text-base leading-relaxed mb-8 max-w-md"
            style={{ color: "var(--text-dim)" }}
          >
            {config.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: DELAY[4] }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{ background: "var(--blue)", color: "#fff" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(59,130,246,0.5)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              View Projects
            </a>
            <a
              href="/Pavan_Kolasani_CV.pdf"
              download
              className="px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all duration-200"
              style={{ borderColor: "rgba(59,130,246,0.5)", color: "var(--blue)", background: "rgba(59,130,246,0.08)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(59,130,246,0.15)"; el.style.borderColor = "var(--blue)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(59,130,246,0.08)"; el.style.borderColor = "rgba(59,130,246,0.5)"; }}
            >
              Download CV ↓
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all duration-200"
              style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--blue)"; el.style.color = "var(--blue)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.color = "var(--text-dim)"; }}
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right */}
        <div className="hidden md:block">
          <DataChart />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "var(--blue)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
