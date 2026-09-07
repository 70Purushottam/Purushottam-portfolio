import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { SKILLS } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="02" title="Technical Skills" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="h-full rounded-xl border border-border bg-surface p-6 hover:border-accent-blue/50 transition-colors">
                <h3 className="font-mono text-[11px] tracking-wider uppercase text-text-dim mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[12.5px] px-3 py-1.5 rounded-md border border-border text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
