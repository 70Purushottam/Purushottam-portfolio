import { Code2, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SOCIAL_LINKS } from "../data/socialLinks";

const PROFILES = [
  { label: "LeetCode", href: SOCIAL_LINKS.leetcode },
  { label: "CodeChef", href: SOCIAL_LINKS.codechef },
  { label: "Codeforces", href: SOCIAL_LINKS.codeforces },
];

export default function CompetitiveProgramming() {
  return (
    <section className="py-20 sm:py-28 border-t border-border relative overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] opacity-[0.4] pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <Reveal>
          <SectionHeading
            title="Problem Solving &amp; Competitive Programming"
            subtitle="1,000+ Data Structures & Algorithms problems solved across LeetCode, CodeChef, and Codeforces."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="grid sm:grid-cols-3 gap-4">
            {PROFILES.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-5 py-4 hover:border-accent-blue/60 transition-colors group"
              >
                <span className="flex items-center gap-2.5 font-mono text-[14px] font-semibold">
                  <Code2 size={16} className="text-text-dim group-hover:text-accent-blue transition-colors" />
                  {p.label}
                </span>
                <ExternalLink size={14} className="text-text-dim group-hover:text-accent-blue transition-colors" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
