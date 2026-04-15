export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f8] text-[#222] flex flex-col items-center px-4 md:px-8 py-10 font-sans">
      {/* Navbar */}
      <nav className="w-full max-w-xl mx-auto flex items-center justify-between py-4 mb-8 border-b border-[#ececec] bg-white/80 backdrop-blur rounded-t-xl px-4 md:px-8 sticky top-0 z-10 shadow-sm">
        <span className="font-bold text-lg tracking-tight">Arshad</span>
        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#reading" className="hover:text-blue-600 transition-colors">What I'm Reading</a>
          <a href="mailto:arshad@example.com" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>

      <div className="w-full max-w-xl mx-auto bg-white rounded-xl shadow-xl px-5 md:px-8 py-10 flex flex-col gap-10 border border-[#ececec]">
        {/* Header & Intro */}
        <section className="flex flex-col items-start gap-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Arshad</h1>
          <div className="text-base md:text-lg text-[#444]">Backend & Fullstack Developer</div>
          <div className="text-[#666] text-sm md:text-base mt-2 mb-2">College student in Bangalore. I love building reliable systems, workflow engines, and API platforms. Passionate about distributed systems, automation, and developer tooling.</div>
        </section>

        {/* Projects */}
        <section id="projects" className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold mb-2">Projects</h2>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg bg-[#f7f7f8] border border-[#ececec] p-5 flex flex-col gap-1 hover:shadow-md transition-shadow">
              <div className="text-base font-semibold text-blue-700">Dagflow</div>
              <div className="text-[#444] text-sm">A distributed job scheduler and workflow automation platform for reliable, multi-step background jobs. Handles server crashes, restarts, and network issues with ease.</div>
              <div className="text-xs text-[#888] mt-1">Tech Stack: Node.js, Express, Prisma, BullMQ, Redis, PostgreSQL, Next.js, React, TypeScript</div>
            </div>
            <div className="rounded-lg bg-[#f7f7f8] border border-[#ececec] p-5 flex flex-col gap-1 hover:shadow-md transition-shadow">
              <div className="text-base font-semibold text-blue-700">Guardium</div>
              <div className="text-[#444] text-sm">API monitoring platform with real-time hit tracking, analytics, and alerting. Instantly monitor endpoints, latency, and errors with a single SDK line.</div>
              <div className="text-xs text-[#888] mt-1">Tech Stack: Node.js, Express, MongoDB, RabbitMQ, Socket.IO, PostgreSQL, Next.js, React, TypeScript, Tailwind CSS</div>
            </div>
          </div>
        </section>

        {/* What I'm Reading */}
        <section id="reading" className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-2">What I'm Reading</h2>
          <ul className="list-disc list-inside text-[#444] text-sm space-y-1">
            <li><a href="https://doc.rust-lang.org/book/ch16-00-concurrency.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Fearless Concurrency (The Rust Book)</a></li>
            <li><a href="https://www.gutenberg.org/ebooks/2680" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">Meditations by Marcus Aurelius</a></li>
            <li><a href="https://without.boats/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-700">without.boats (Rust blog)</a></li>
          </ul>
        </section>

        {/* Skills */}
        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold mb-2">Skills</h2>
          <div className="text-[#444] text-sm">Node.js, TypeScript, Python, Go, SQL, REST, GraphQL, Docker, CI/CD, Cloud, Next.js, React</div>
        </section>
      </div>
    </main>
  );
}
