"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,9,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-dim)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-sm tracking-wide">
          <span style={{ color: "var(--blue)" }}>P</span>
          <span>avan </span>
          <span style={{ color: "var(--blue)" }}>K</span>
          <span className="cursor-blink font-mono" style={{ color: "var(--blue)" }}>_</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link, i) => (
            <motion.li key={link.href} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 + i * 0.06 }}>
              <a
                href={link.href}
                className="text-xs font-mono tracking-wider uppercase transition-colors duration-200 hover:text-white"
                style={{ color: "var(--text-dim)" }}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
          {config.available && (
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
              <span
                className="font-mono text-xs px-3 py-1.5 rounded-full border flex items-center gap-1.5"
                style={{ borderColor: "var(--green)", color: "var(--green)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />
                Open to work
              </span>
            </motion.li>
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-xs"
          style={{ color: "var(--blue)" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕ close" : "☰ menu"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "var(--surface)", borderBottom: "1px solid var(--border-dim)" }}
          >
            <ul className="px-6 py-4 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-mono"
                    style={{ color: "var(--text-dim)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
