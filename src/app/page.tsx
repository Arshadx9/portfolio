import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "arshad@portfolio",
  description: "Backend & Fullstack Engineer — Bangalore",
};

const projects = [
  {
    name: "dagflow",
    desc: "Distributed job scheduler & workflow automation platform. Handles server crashes, restarts, and network partitions without flinching. Multi-step background jobs that actually finish.",
    stack: ["Node.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL", "Prisma", "Next.js"],
  },
  {
    name: "guardium",
    desc: "API monitoring platform — real-time hit tracking, latency analytics, error alerting. One SDK line to instrument any endpoint. Built for teams who care about p99, not just uptime pings.",
    stack: ["Node.js", "TypeScript", "RabbitMQ", "Socket.IO", "MongoDB", "PostgreSQL", "Next.js"],
  },
];

const skills = [
  "Node.js", "TypeScript", "Python", "Go", "PostgreSQL", "Redis",
  "Docker", "REST", "GraphQL", "CI/CD", "Next.js", "React", "BullMQ", "RabbitMQ",
];

const reading = [
  { title: "Fearless Concurrency — The Rust Book", href: "https://doc.rust-lang.org/book/ch16-00-concurrency.html" },
  { title: "Meditations — Marcus Aurelius", href: "https://www.gutenberg.org/ebooks/2680" },
  { title: "without.boats — Rust internals blog", href: "https://without.boats/" },
];

function Prompt({ path = "~", cmd }: { path?: string; cmd: string }) {
  return (
    <div className="flex items-baseline gap-2 mb-1">
      <span className="font-mono text-xs whitespace-nowrap text-[#4a4a4a]">
        <span className="text-[#7fff7f]">arshad</span>
        <span className="text-[#3a3a3a]">@</span>
        <span className="text-[#5fa8d3]">prod</span>{" "}
        <span className="text-[#9b8fcc]">{path}</span>{" "}
        <span className="text-[#c8c8c8]">$</span>
      </span>
      <span className="font-mono text-xs text-[#e0e0e0]">{cmd}</span>
    </div>
  );
}
export default function Home() {
  return (
    <>

      <div className="min-h-screen" style={{ background: "#0a0a0a", color: "#c8c8c8" }}>
        <div className="scanlines" />

        {/* Nav */}
        <nav
          className="sticky top-0 z-50 flex items-center gap-4 px-6 py-3"
          style={{ background: "#0d0d0d", borderBottom: "1px solid #1e1e1e" }}
        >
          <div className="flex gap-[6px]">
            {["#3a1a1a", "#2a2a1a", "#1a2e1a"].map((bg, i) => (
              <div
                key={i}
                style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: bg,
                  border: `1px solid ${["#5a2a2a", "#4a4a1a", "#2a4a2a"][i]}`,
                }}
              />
            ))}
          </div>
          <p className="flex-1 text-center font-mono text-[11px] tracking-[0.05em] text-[#3a3a3a] m-0">
            arshad@portfolio ~ zsh
          </p>
          <div className="flex gap-5">
            {[
              { href: "#projects", label: "./projects" },
              { href: "#reading", label: "./reading" },
              { href: "mailto:arshad@example.com", label: "./contact" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link font-mono text-[11px] tracking-[0.05em] no-underline"
                style={{ color: "#444" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Body */}
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px 80px" }}>

          {/* whoami */}
          <section style={{ marginBottom: 40 }}>
            <Prompt cmd="whoami -" />
            <div style={{ marginBottom: 32 }}>
              <h1
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(28px, 6vw, 52px)",
                  fontWeight: 700,
                  color: "#e8e8e8",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                  margin: "0 0 4px",
                }}
              >
                Arshad<span style={{ color: "#7fff7f" }}>. </span>
              </h1>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: "#555",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                }}
              >
                Backend &amp; Fullstack Engineer
              </p>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  color: "#7a7a7a",
                  lineHeight: 1.8,
                  maxWidth: 560,
                  borderLeft: "2px solid #1e1e1e",
                  paddingLeft: 16,
                  margin: 0,
                }}
              >
                College student from Bengaluru . I build reliable systems — workflow engines, distributed
                job scheduler, API platforms. I think about fault tolerance before I think about
                features. Currently reading Rust concurrency docs at 2am.
                <span className="cursor-blink" />
              </p>
            </div>
          </section>

          {/* contact */}
          <section style={{ marginBottom: 40 }}>
            <Prompt cmd="cat /etc/contact.conf" />
            <div style={{ marginBottom: 32 }}>
              {[
                { k: "location", v: "Bangalore, IN", color: "#b0b0b0" },
                { k: "email", v: "arshad@example.com", color: "#5fa8d3", href: "mailto:arshad@example.com" },
                { k: "github", v: "github.com/arshad", color: "#5fa8d3", href: "#" },
                { k: "status", v: "● open to work", color: "#4a7a4a" },
              ].map((row) => (
                <div key={row.k} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: "6px 16px", marginBottom: 6 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#3d3d3d" }}>{row.k}</span>
                  {row.href ? (
                    <a href={row.href} className="reading-link" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: row.color, textDecoration: "none" }}>{row.v}</a>
                  ) : (
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: row.color }}>{row.v}</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* projects */}
          <section id="projects" style={{ marginBottom: 40 }}>
            <Prompt path="~/projects" cmd="ls -la --color=never" />
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#3a3a3a", margin: "0 0 16px" }}>
                # 2 directories, 0 abandoned
              </p>
              {projects.map((p) => (
                <div
                  key={p.name}
                  className="project-card"
                  style={{
                    border: "1px solid #161616",
                    background: "#0e0e0e",
                    padding: "18px 20px",
                    marginBottom: 12,
                  }}
                >
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700, color: "#d8d8d8", letterSpacing: "0.04em", margin: "0 0 6px" }}>
                    <span style={{ color: "#3a3a3a" }}>[</span>{p.name}<span style={{ color: "#3a3a3a" }}>]</span>
                  </p>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#666", lineHeight: 1.7, margin: "0 0 10px" }}>
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          color: "#404040",
                          border: "1px solid #1e1e1e",
                          padding: "2px 7px",
                          letterSpacing: "0.04em",
                          background: "#0a0a0a",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* skills */}
          <section style={{ marginBottom: 40 }}>
            <Prompt cmd="skills --list" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 32 }}>
              {skills.map((s) => (
                <span
                  key={s}
                  className="skill-chip"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#3a3a3a",
                    padding: "3px 9px",
                    border: "1px solid #1a1a1a",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* reading */}
          <section id="reading" style={{ marginBottom: 40 }}>
            <Prompt path="~/reading" cmd="cat queue.log | tail -3" />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {reading.map((r, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    padding: "8px 0",
                    borderBottom: i < reading.length - 1 ? "1px solid #111" : "none",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "#2a2a2a", flexShrink: 0 }}>→</span>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reading-link"
                    style={{ color: "#7a7a7a", textDecoration: "none" }}
                  >
                    {r.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* footer */}
          <div
            style={{
              marginTop: 60,
              borderTop: "1px solid #111",
              paddingTop: 20,
              fontSize: 10,
              color: "#252525",
              display: "flex",
              justifyContent: "space-between",
              letterSpacing: "0.05em",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span>© arshad 2025</span>
            <span style={{ color: "#1e3e1e" }}>
              {new Date().toISOString().slice(0, 10)}
            </span>
          </div>
        </main>
      </div>
    </>
  );
}