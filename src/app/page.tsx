import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "arshad@portfolio",
  description: "Backend & Fullstack Engineer — Bangalore",
};

const colors = {
  bg: "#0a0a0a",
  panel: "#0e0e0e",
  border: "#1e1e1e",
  primary: "#e5e5e5",
  secondary: "#bfbfbf",
  muted: "#888",
  subtle: "#555",
  accent: "#7fff7f",
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

function Prompt({ path = "~", cmd, showUser = true }: { path?: string; cmd: string; showUser?: boolean }) {
  return (
    <div className="flex items-baseline gap-2 mb-1">
      <span className="font-mono text-xs whitespace-nowrap">
        {showUser && (
          <>
            <span style={{ color: colors.accent }}>arshad</span>
            <span style={{ color: colors.subtle }}>@</span>
            <span style={{ color: "#5fa8d3" }}>prod</span>{" "}
          </>
        )}
        <span style={{ color: "#9b8fcc" }}>{path}</span>{" "}
        <span style={{ color: colors.primary }}>$</span>
      </span>
      <span className="font-mono text-xs" style={{ color: colors.primary }}>
        {cmd}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: colors.bg, color: colors.primary }}>
      <div className="scanlines" />

      {/* NAVBAR */}
      <nav className="sticky top-4 z-50" style={{ marginTop: 12 }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 16px",
            background: "#0d0d0d",
            border: `1px solid ${colors.border}`,
            borderRadius: 10,
          }}
        >
          <div className="flex gap-[6px]">
            {["#3a1a1a", "#2a2a1a", "#1a2e1a"].map((bg, i) => (
              <div key={i} style={{
                width: 10, height: 10, borderRadius: "50%",
                background: bg,
                border: `1px solid ${["#5a2a2a","#4a4a1a","#2a4a2a"][i]}`
              }} />
            ))}
          </div>

          <div className="flex gap-8 absolute left-1/2 -translate-x-1/2">
            {[
              { href: "#projects", label: "./projects" },
              { href: "#reading", label: "./reading" },
              { href: "mailto:arshad@example.com", label: "./contact" },
            ].map((l) => (
              <a key={l.label} href={l.href} style={{ color: colors.secondary }}>
                {l.label}
              </a>
            ))}
          </div>

          <div style={{ width: 40 }} />
        </div>
      </nav>

      <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* WHOAMI */}
        <section style={{ marginBottom: 40 }}>
          <Prompt cmd="whoami -" />
          <h1>Arshad<span style={{ color: colors.accent }}>. </span></h1>

          <p style={{ fontSize: 13, color: colors.secondary }}>
            Backend & Fullstack Engineer
          </p>

          <p style={{
            fontSize: 14,
            color: colors.secondary,
            lineHeight: 1.9,
            borderLeft: `2px solid ${colors.border}`,
            paddingLeft: 16,
            maxWidth: 560,
          }}>
            College student from Bengaluru. Working on workflow engines,
            distributed systems, API platforms.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{ marginBottom: 40 }}>
          <Prompt path="~/projects" cmd="" showUser={false} />

          {projects.map((p) => (
            <div
              key={p.name}
              style={{
                border: `1px solid ${colors.border}`,
                background: colors.panel,
                padding: "40px 18px 18px 18px",
                marginBottom: 12,
                position: "relative",
              }}
            >
              <p style={{ fontWeight: "bold", marginBottom: 6 }}>
                [{p.name}]
              </p>

              <p style={{ fontSize: 13, color: colors.secondary }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                {p.stack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 10,
                      color: colors.secondary,
                      border: `1px solid ${colors.border}`,
                      padding: "2px 7px",
                      background: colors.bg,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div style={{
                position: "absolute",
                top: 12,
                right: 12,
                display: "flex",
                gap: 6,
              }}>
                {[{label:"live",link:p.live},{label:"github",link:p.github}].map(btn=>(
                  <a key={btn.label} href={btn.link} target="_blank"
                    style={{
                      fontSize: 10,
                      padding: "2px 8px",
                      border: "1px solid #3a5f3a",
                      color: "#9fff9f",
                      textDecoration: "none",
                      background: "#0a0a0a",
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
          <Prompt cmd="skills --core" showUser={false} />

          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 11, color: colors.subtle }}>{category}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map((s) => (
                  <span key={s}
                    style={{
                      fontSize: 11,
                      color: colors.primary,
                      padding: "4px 10px",
                      border: `1px solid ${colors.border}`,
                      background: colors.panel,
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
          <Prompt path="~/reading" cmd="" showUser={false} />
          <ul style={{ listStyle: "none", padding: 0 }}>
            {reading.map((r, i) => (
              <li key={i} style={{ fontSize: 12 }}>
                <a href={r.href} target="_blank" style={{ color: colors.secondary }}>
                  → {r.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div style={{ marginTop: 60, fontSize: 10 }}>
          © arshad 2025
        </div>
      </main>
    </div>
  );
}