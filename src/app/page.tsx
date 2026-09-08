"use client";

import { useState } from "react";

const dark = {
  bg: "#0a0a0a",
  panel: "#111111",
  border: "#2a2a2a",
  primary: "#e5e5e5",
  secondary: "#bfbfbf",
  muted: "#888",
  subtle: "#555",
  accent: "#7fff7f",
  navBg: "#0d0d0d",
  scanlines: true,
};

const light = {
  bg: "#fafaf7",
  panel: "#f0f0eb",
  border: "#d8d8d0",
  primary: "#111111",
  secondary: "#444444",
  muted: "#777777",
  subtle: "#aaaaaa",
  accent: "#1a7a1a",
  navBg: "#f0f0eb",
  scanlines: false,
};

const experience = [
  {
    company: "Meti M2M Pvt. Limited",
    role: "intern",
    period: "june - present",
    desc: "Industry 4.0 / IoT platform deployed at Titan Company's (Tanishq) jewellery manufacturing facility, tracking real-time production stages across multiple manufacturing divisions. Live stage status is displayed on TVs across the factory floor, giving visibility into which step of the process is currently active.",
  },
];

const projects = [
  {
    name: "dagflow",
    desc: "Distributed job scheduler & workflow automation platform. Handles server crashes, restarts, and network partitions without flinching.",
    stack: ["Node.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL"],
    live: "https://dagflow-web.vercel.app",
    github: "https://github.com/Arshadx9/Dagflo",
  },
  {
    name: "guardium",
    desc: "API monitoring platform — real-time tracking, latency analytics, and error alerting.",
    stack: ["Node.js", "TypeScript", "RabbitMQ", "MongoDB"],
    live: "http://13.63.125.183:3000",
    github: "https://github.com/Arshadx9/Guardium.co",
  },
];

const links = [
  { label: "github", href: "https://github.com/Arshadx9" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/arshad-zeon-45aa04387/",
  },
];

const reading = [
  {
    title: "The Republic — Plato",
    href: "https://www.gutenberg.org/ebooks/1497",
  },
  {
    title: "Power vs Force — David R. Hawkins",
    href: "https://openlibrary.org/works/OL82563W/Power_vs_Force",
  },
];

type Theme = typeof dark;

function Heading({ label, t }: { label: string; t: Theme }) {
  return (
    <h2
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 22,
        fontWeight: 700,
        color: t.accent,
        letterSpacing: "0.02em",
        margin: "0 0 18px",
        paddingBottom: 10,
        borderBottom: `1px solid ${t.border}`,
        transition: "color 0.3s, border-color 0.3s",
      }}
    >
      {label}
    </h2>
  );
}

export default function Home() {
  const [isLight, setIsLight] = useState(true);
  const t = isLight ? light : dark;

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: t.bg,
        color: t.primary,
        fontFamily: "'JetBrains Mono', monospace",
        transition: "background 0.3s, color 0.3s",
        position: "relative",
        paddingBottom: 1,
      }}
    >
      {/* Scanlines — dark mode only */}
      {t.scanlines && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 100,
            background:
              "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)",
          }}
        />
      )}

      {/* NAVBAR — scrolls away with the page, not sticky */}
      <nav style={{ padding: "16px 24px 0" }}>
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 18px",
            background: t.navBg,
            border: `1px solid ${t.border}`,
            borderRadius: 10,
            transition: "background 0.3s, border-color 0.3s",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 26 }}>
            {[
              { href: "#experience", label: "experience" },
              { href: "#projects", label: "projects" },
              { href: "#reading", label: "reading" },
              { href: "#links", label: "links" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  color: t.secondary,
                  fontSize: 13,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={() => setIsLight((v) => !v)}
            style={{
              background: "none",
              border: `1px solid ${t.border}`,
              color: t.muted,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              padding: "4px 11px",
              cursor: "pointer",
              borderRadius: 3,
              letterSpacing: "0.05em",
              transition: "all 0.2s",
              flex: "none",
            }}
          >
            {isLight ? "[ dark ]" : "[ light ]"}
          </button>
        </div>
      </nav>

      <main
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "48px 24px 96px",
        }}
      >
        {/* INTRO */}
        <section style={{ marginBottom: 56 }}>
          <h1
            style={{
              color: t.primary,
              margin: "0 0 8px",
              fontFamily: "'Newsreader', Georgia, serif",
              fontSize: 34,
              fontWeight: 600,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            Arshad<span style={{ color: t.accent }}>.</span>
          </h1>

          <p
            style={{
              fontSize: 15,
              color: t.secondary,
              margin: "0 0 16px",
            }}
          >
            Backend &amp; Fullstack Engineer
          </p>

          <p
            style={{
              fontSize: 16,
              color: t.secondary,
              lineHeight: 1.85,
              borderLeft: `2px solid ${t.border}`,
              paddingLeft: 18,
              maxWidth: 620,
              margin: 0,
              transition: "border-color 0.3s",
            }}
          >
            Tinkering with backend / distributed systems.
          </p>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" style={{ marginBottom: 56 }}>
          <Heading label="experience" t={t} />

          {experience.map((e) => (
            <div
              key={e.company}
              style={{
                border: `1px solid ${t.border}`,
                background: t.panel,
                padding: 22,
                marginBottom: 14,
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: t.primary,
                    margin: 0,
                  }}
                >
                  {e.company}
                </p>

                <span
                  style={{
                    fontSize: 11,
                    color: t.accent,
                    border: `1px solid ${t.accent}55`,
                    padding: "3px 10px",
                    background: t.bg,
                    transition: "background 0.3s",
                  }}
                >
                  {e.role}
                </span>

                <span
                  style={{
                    fontSize: 12,
                    color: t.muted,
                    marginLeft: "auto",
                    transition: "color 0.3s",
                  }}
                >
                  {e.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: 15,
                  color: t.secondary,
                  lineHeight: 1.85,
                  margin: 0,
                }}
              >
                {e.desc}
              </p>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ marginBottom: 56 }}>
          <Heading label="projects" t={t} />

          {projects.map((p) => (
            <div
              key={p.name}
              style={{
                border: `1px solid ${t.border}`,
                background: t.panel,
                padding: "48px 22px 22px",
                marginBottom: 14,
                position: "relative",
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: t.primary,
                  margin: "0 0 10px",
                }}
              >
                {p.name}
              </p>

              <p
                style={{
                  fontSize: 15,
                  color: t.secondary,
                  lineHeight: 1.85,
                  margin: "0 0 14px",
                }}
              >
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 11,
                      color: t.secondary,
                      border: `1px solid ${t.border}`,
                      padding: "3px 9px",
                      background: t.bg,
                      transition: "background 0.3s, border-color 0.3s",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  display: "flex",
                  gap: 8,
                }}
              >
                {[
                  { label: "live", link: p.live },
                  { label: "github", link: p.github },
                ].map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 11,
                      padding: "3px 10px",
                      border: `1px solid ${t.accent}55`,
                      color: t.accent,
                      textDecoration: "none",
                      background: t.bg,
                      transition: "all 0.2s",
                    }}
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* READING */}
        <section id="reading" style={{ marginBottom: 56 }}>
          <Heading label="reading" t={t} />

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {reading.map((r, i) => (
              <li key={i} style={{ fontSize: 14, marginBottom: 8 }}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: t.secondary,
                    textDecoration: "none",
                  }}
                >
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* LINKS */}
        <section id="links">
          <Heading label="links" t={t} />

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 13.5,
                  color: t.accent,
                  padding: "6px 14px",
                  border: `1px solid ${t.accent}55`,
                  background: t.panel,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: 72,
            fontSize: 11,
            color: t.subtle,
          }}
        >
          © arshad 2025
        </div>
      </main>
    </div>
  );
}
