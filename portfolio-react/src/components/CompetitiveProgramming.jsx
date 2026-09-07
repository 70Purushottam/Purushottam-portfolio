import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CP_STATS } from "../data/achievements";
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
          <SectionHeading title="Problem Solving &amp; Competitive Programming" />
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {CP_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              {stat.href ? (
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full rounded-xl border border-border bg-surface p-5 sm:p-6 text-center hover:border-accent-blue/60 transition-colors"
                >
                  <div className="font-mono font-extrabold text-2xl sm:text-3xl text-accent-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[12px] text-text-muted">{stat.label}</div>
                </a>
              ) : (
                <div className="h-full rounded-xl border border-border bg-surface p-5 sm:p-6 text-center">
                  <div className="font-mono font-extrabold text-2xl sm:text-3xl text-accent-amber mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[12px] text-text-muted">{stat.label}</div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="flex flex-wrap gap-3">
            {PROFILES.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[12.5px] font-semibold px-4 py-2.5 rounded-md border border-border hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                {p.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
