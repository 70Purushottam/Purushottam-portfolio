import { useEffect, useState } from "react";
import { Github, Linkedin, Code2, ArrowRight, Download, Mail } from "lucide-react";
import { SOCIAL_LINKS, RESUME_PATH } from "../data/socialLinks";

const TERMINAL_LINES = [
  "$ whoami",
  "",
  "purushottam@nitp",
  "",
  "> systems programming",
  "> backend engineering",
  "> full-stack development",
  "> problem solving",
  "",
  "$ ./build_future.sh",
  "",
  "Building...",
];

function TerminalWindow() {
  const [lineCount, setLineCount] = useState(0);
  const [barDone, setBarDone] = useState(false);

  useEffect(() => {
    if (lineCount >= TERMINAL_LINES.length) {
      const t = setTimeout(() => setBarDone(true), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineCount((c) => c + 1), 140);
    return () => clearTimeout(t);
  }, [lineCount]);

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A333D]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A333D]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A333D]" />
        <span className="ml-3 font-mono text-[11px] text-text-dim">purushottam@nitp: ~</span>
      </div>
      <div className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-relaxed min-h-[300px]">
        {TERMINAL_LINES.slice(0, lineCount).map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "text-accent-cyan" : "text-text-primary"}>
            {line || "\u00A0"}
          </div>
        ))}
        {lineCount >= TERMINAL_LINES.length && (
          <>
            <div className="text-text-muted mt-0.5">
              <span className="text-accent-green">{"\u2588".repeat(barDone ? 20 : Math.min(20, lineCount))}</span>
              <span className="text-border">{"\u2588".repeat(barDone ? 0 : 0)}</span>
              {barDone ? " 100%" : ""}
            </div>
            {barDone && (
              <div className="mt-2 text-accent-green">
                ✓ Ready to ship
                <span className="inline-block w-2 h-4 bg-accent-blue ml-1 align-middle animate-blink" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern bg-[length:56px_56px] opacity-[0.5] pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fadeUp">
          <div className="inline-flex items-center gap-2 font-mono text-[12.5px] text-accent-green mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse_soft" />
            OPEN TO SWE INTERNSHIPS & ROLES
          </div>

          <h1 className="font-mono font-extrabold text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-5">
            Hi, I'm Purushottam Kumar.
          </h1>

          <p className="text-lg sm:text-xl text-text-muted mb-3 max-w-xl">
            I build systems, solve problems, and engineer scalable software.
          </p>
          <p className="text-[15px] text-text-dim mb-8 max-w-xl">
            Software developer focused on systems programming, backend engineering, full-stack
            development, and Data Structures &amp; Algorithms.
          </p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 font-mono text-[12.5px] text-text-muted mb-9 max-w-md">
            <li>&gt; B.Tech ECE @ NIT Patna</li>
            <li>&gt; CGPA 8.45/10</li>
            <li>&gt; 1000+ DSA problems solved</li>
            <li>&gt; Flipkart GRiD 8.0 Semi-Finalist</li>
          </ul>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold px-5 py-3 rounded-md bg-accent-blue text-[#04070A] hover:bg-[#7fb9ff] transition-colors"
            >
              View Projects <ArrowRight size={15} />
            </a>
            <a
              href={RESUME_PATH}
              download
              className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold px-5 py-3 rounded-md border border-border-DEFAULT border hover:border-accent-blue hover:text-accent-blue transition-colors"
            >
              <Download size={15} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold px-5 py-3 rounded-md border border-border hover:border-accent-blue hover:text-accent-blue transition-colors"
            >
              <Mail size={15} /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-text-muted hover:text-accent-blue transition-colors"
            >
              <Github size={19} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-text-muted hover:text-accent-blue transition-colors"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile"
              className="text-text-muted hover:text-accent-blue transition-colors"
            >
              <Code2 size={19} />
            </a>
          </div>
        </div>

        <div className="animate-fadeUp" style={{ animationDelay: "150ms" }}>
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
