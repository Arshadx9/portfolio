"use client";

import { useState } from "react";

const dark = {
  bg:        "#0a0a0a",
  panel:     "#111111",
  border:    "#2a2a2a",
  primary:   "#e5e5e5",
  secondary: "#bfbfbf",
  muted:     "#888",
  subtle:    "#555",
  accent:    "#7fff7f",
  navBg:     "#0d0d0d",
  scanlines:  true,
  promptBlue: "#5fa8d3",
  promptPurple: "#9b8fcc",
};

const light = {
  bg:        "#fafaf7",
  panel:     "#f0f0eb",
  border:    "#d8d8d0",
  primary:   "#111111",
  secondary: "#444444",
  muted:     "#777777",
  subtle:    "#aaaaaa",
  accent:    "#1a7a1a",
  navBg:     "#f0f0eb",
  scanlines:  false,
  promptBlue: "#1a6090",
  promptPurple: "#5030a0",
};

const projects = [
  {
    name: "dagflow",
    desc: "Distributed job scheduler & workflow automation platform. Handles server crashes, restarts, and network partitions without flinching.",
    stack: ["Node.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL"],
    live: "https://dagflow-web.vercel.app",
    github: "https://github.com/Arshadx9/Dagflow",
  },
  {
    name: "guardium",
    desc: "API monitoring platform — real-time tracking, latency analytics, and error alerting.",
    stack: ["Node.js", "TypeScript", "RabbitMQ", "MongoDB"],
    live: "http://13.63.125.183:3000",
    github: "https://github.com/Arshadx9/Guardium.co",
  },
  {
    name: "zentra",
    desc: "Full-stack RAG application — upload PDFs, embed and index document data, then query it through a chat interface. Includes user authentication and a personal dashboard.",
    stack: ["Node.js", "TypeScript", "React", "Vite", "PostgreSQL"],
    live: "https://zentra-75mx.vercel.app",
    github: "https://github.com/Arshadx9/Zentra",
  },
];

const skills = {
  development: [
    "Node.js","TypeScript","Express","MongoDB","Mongoose",
    "PostgreSQL","Prisma","Redis","BullMQ","RabbitMQ",
    "Socket.IO","JWT","Zod","Next.js","React","Tailwind CSS",
  ],
  infra: ["Docker Compose","RabbitMQ","MongoDB","PostgreSQL","Redis"],
};

const reading = [
  { title: "The Republic — Plato", href: "https://www.gutenberg.org/ebooks/1497" },
  { title: "Power vs Force — David R. Hawkins", href: "https://openlibrary.org/works/OL82563W/Power_vs_Force" },
];

type Theme = typeof dark;

function Prompt({ path = "~", cmd, showUser = true, t }: { path?: string; cmd: string; showUser?: boolean; t: Theme }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, whiteSpace: "nowrap" }}>
        {showUser && (
          <>
            <span style={{ color: t.accent }}>arshad</span>
            <span style={{ color: t.subtle }}>@</span>
            <span style={{ color: t.promptBlue }}>prod</span>{" "}
          </>
        )}
        <span style={{ color: t.promptPurple }}>{path}</span>{" "}
        <span style={{ color: t.primary }}>$</span>
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: t.primary }}>
        {cmd}
      </span>
    </div>
  );
}

export default function Home() {
  const [isLight, setIsLight] = useState(true);
  const t = isLight ? light : dark;

  return (
    <div style={{
      minHeight: "100dvh",
      background: t.bg,
      color: t.primary,
      fontFamily: "'JetBrains Mono', monospace",
      transition: "background 0.3s, color 0.3s",
      position: "relative",
      paddingBottom: 1, // prevents margin collapse exposing body bg
    }}>

      {/* Scanlines — dark mode only */}
      {t.scanlines && (
        <div style={{
          position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100,
          background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)",
        }} />
      )}

      {/* NAVBAR */}
      <nav style={{ position: "sticky", top: 16, zIndex: 50, padding: "0 24px" }}>
        <div style={{
          maxWidth: 800, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "10px 16px",
          background: t.navBg,
          border: `1px solid ${t.border}`,
          borderRadius: 10,
          transition: "background 0.3s, border-color 0.3s",
        }}>
          <div style={{ width: 40 }} />

          {/* Nav links */}
          <div style={{ display: "flex", gap: 32, position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            {[
              { href: "#projects", label: "./projects" },
              { href: "#reading",  label: "./reading"  },
              { href: "mailto:arshad@example.com", label: "./contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{
                color: t.secondary, fontSize: 12, textDecoration: "none",
                transition: "color 0.2s",
              }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button onClick={() => setIsLight(v => !v)} style={{
            background: "none",
            border: `1px solid ${t.border}`,
            color: t.muted,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            padding: "3px 9px",
            cursor: "pointer",
            borderRadius: 3,
            letterSpacing: "0.05em",
            transition: "all 0.2s",
          }}>
            {isLight ? "[ dark ]" : "[ light ]"}
          </button>
        </div>
      </nav>

      <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* WHOAMI */}
        <section style={{ marginBottom: 40 }}>
          <Prompt cmd="whoami -" t={t} />
          <h1 style={{ color: t.primary, margin: "8px 0 4px", fontSize: 32 }}>
            Arshad<span style={{ color: t.accent }}>. </span>
          </h1>
          <p style={{ fontSize: 13, color: t.secondary, margin: "4px 0" }}>
            Backend & Fullstack Engineer
          </p>
          <p style={{
            fontSize: 14, color: t.secondary, lineHeight: 1.9,
            borderLeft: `2px solid ${t.border}`, paddingLeft: 16,
            maxWidth: 560, margin: "12px 0 0",
          }}>
            College student from Bengaluru. Working on workflow engines,
            distributed systems, API platforms.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ marginBottom: 40 }}>
          <Prompt path="~/projects" cmd="" showUser={false} t={t} />

          {projects.map((p) => (
            <div key={p.name} style={{
              border: `1px solid ${t.border}`,
              background: t.panel,
              padding: "40px 18px 18px 18px",
              marginBottom: 12,
              position: "relative",
              transition: "background 0.3s, border-color 0.3s",
              cursor: "pointer",
            }}>
              <p style={{ fontWeight: "bold", marginBottom: 6, color: t.primary, margin: "0 0 6px" }}>
                [{p.name}]
              </p>
              <p style={{ fontSize: 13, color: t.secondary, margin: "0 0 10px" }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.stack.map((tag) => (
                  <span key={tag} style={{
                    fontSize: 10, color: t.secondary,
                    border: `1px solid ${t.border}`,
                    padding: "2px 7px", background: t.bg,
                    transition: "background 0.3s, border-color 0.3s",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 6 }}>
                {[{ label: "live", link: p.live }, { label: "github", link: p.github }].map((btn) => (
                  <a key={btn.label} href={btn.link} target="_blank" style={{
                    fontSize: 10, padding: "2px 8px",
                    border: `1px solid ${t.accent}55`,
                    color: t.accent, textDecoration: "none", background: t.bg,
                    transition: "all 0.2s",
                  }}>
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* SKILLS */}
        <section style={{ marginBottom: 40 }}>
          <Prompt cmd="skills --core" showUser={false} t={t} />

          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 11, color: t.subtle, margin: "0 0 6px" }}>{category}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((s) => (
                  <span key={s} style={{
                    fontSize: 11, color: t.primary,
                    padding: "4px 10px",
                    border: `1px solid ${t.border}`,
                    background: t.panel,
                    transition: "background 0.3s, border-color 0.3s",
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* READING */}
        <section id="reading">
          <Prompt path="~/reading" cmd="" showUser={false} t={t} />
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {reading.map((r, i) => (
              <li key={i} style={{ fontSize: 12 }}>
                <a href={r.href} target="_blank"
                  style={{ color: t.secondary, textDecoration: "none" }}>
                  → {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div style={{ marginTop: 60, fontSize: 10, color: t.subtle }}>
          © arshad 2025
        </div>
      </main>
    </div>
  );
}