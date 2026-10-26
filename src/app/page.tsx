"use client";

import { useEffect, useRef, useState } from "react";
import { aadPrograms } from "./aadPrograms";

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
    period: "july - present",
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

const cyberFiles = [
  {
    label: "########",
    file: "/cyber/aad.pdf",
    filename: "aad.pdf",
    meta: "pdf · 13 pages · 264 kb",
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

  const [showAad, setShowAad] = useState(false);
  const [openProgram, setOpenProgram] = useState<number | null>(null);
  const [copied, setCopied] = useState<number | null>(null);
  const aadRef = useRef<HTMLElement>(null);
  const [aadScrollTick, setAadScrollTick] = useState(0);

  // The aad section only mounts once its nav link is clicked, so scroll after render.
  useEffect(() => {
    if (aadScrollTick) aadRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [aadScrollTick]);

  function copyProgram(i: number) {
    navigator.clipboard.writeText(aadPrograms[i].code).then(() => {
      setCopied(i);
      setTimeout(() => setCopied((c) => (c === i ? null : c)), 1500);
    });
  }

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
              { href: "#cyber", label: "cyber" },
              { href: "#aad", label: "aad" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={
                  l.label === "aad"
                    ? (e) => {
                        e.preventDefault();
                        setShowAad(true);
                        setAadScrollTick((n) => n + 1);
                      }
                    : undefined
                }
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
        <section style={{ marginBottom: 38 }}>
          <h1
            style={{
              color: t.primary,
              margin: "0 0 8px",
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "-0.045em",
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
        <section id="experience" style={{ marginBottom: 38 }}>
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
        <section id="projects" style={{ marginBottom: 38 }}>
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
        <section id="reading" style={{ marginBottom: 38 }}>
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

        {/* CYBER */}
        <section id="cyber" style={{ marginTop: 38 }}>
          <Heading label="cyber" t={t} />

          {cyberFiles.map((f) => (
            <a
              key={f.file}
              href={f.file}
              download={f.filename}
              style={{
                display: "flex",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: 10,
                border: `1px solid ${t.border}`,
                background: t.panel,
                padding: "16px 20px",
                textDecoration: "none",
                transition: "background 0.3s, border-color 0.3s",
              }}
            >
              <span style={{ fontSize: 15, color: t.primary }}>{f.label}</span>

              <span style={{ fontSize: 11, color: t.muted }}>{f.meta}</span>

              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 11,
                  padding: "3px 10px",
                  border: `1px solid ${t.accent}55`,
                  color: t.accent,
                  background: t.bg,
                  transition: "all 0.2s",
                }}
              >
                download
              </span>
            </a>
          ))}
        </section>

        {/* AAD — hidden until its nav link is clicked */}
        {showAad && (
          <section id="aad" ref={aadRef} style={{ marginTop: 38 }}>
            <Heading label="aad" t={t} />

            {aadPrograms.map((prog, i) => {
              const isOpen = openProgram === i;
              return (
                <div
                  key={prog.name}
                  style={{
                    border: `1px solid ${t.border}`,
                    background: t.panel,
                    marginBottom: 8,
                    transition: "background 0.3s, border-color 0.3s",
                  }}
                >
                  <button
                    onClick={() => setOpenProgram(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 12,
                      width: "100%",
                      background: "none",
                      border: "none",
                      padding: "13px 18px",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    <span style={{ fontSize: 11, color: t.muted }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: 14, color: t.primary }}>
                      {prog.name}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        fontSize: 11,
                        color: t.accent,
                        flex: "none",
                      }}
                    >
                      {isOpen ? "[ − ]" : "[ + ]"}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ position: "relative", padding: "0 18px 18px" }}>
                      <button
                        onClick={() => copyProgram(i)}
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 28,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          padding: "3px 10px",
                          border: `1px solid ${t.accent}55`,
                          color: t.accent,
                          background: t.panel,
                          cursor: "pointer",
                        }}
                      >
                        {copied === i ? "copied" : "copy"}
                      </button>
                      <pre
                        style={{
                          margin: 0,
                          padding: "16px 18px",
                          background: t.bg,
                          border: `1px solid ${t.border}`,
                          color: t.secondary,
                          fontSize: 12.5,
                          lineHeight: 1.6,
                          overflowX: "auto",
                          transition: "background 0.3s, border-color 0.3s",
                        }}
                      >
                        <code>{prog.code}</code>
                      </pre>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        <div
          style={{
            marginTop: 48,
            fontSize: 11,
            color: t.subtle,
          }}
        >
          all truths are half truths
        </div>
      </main>
    </div>
  );
}
