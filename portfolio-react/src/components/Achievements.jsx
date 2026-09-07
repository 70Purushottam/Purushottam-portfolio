import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ACHIEVEMENTS } from "../data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="04" title="Achievements" />
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-border bg-surface p-6 hover:border-accent-amber/50 transition-colors">
                {a.tag && (
                  <span className="inline-block font-mono text-[10.5px] font-bold tracking-wide text-[#04070A] bg-accent-amber px-2.5 py-1 rounded-full mb-4">
                    {a.tag.toUpperCase()}
                  </span>
                )}
                <h3 className="font-mono font-bold text-[15px] mb-2 leading-snug">{a.title}</h3>
                <p className="text-text-muted text-[13.5px] leading-relaxed">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
