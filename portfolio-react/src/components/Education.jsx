import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { JEE_ACHIEVEMENT, SCHOOLING } from "../data/achievements";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="06" title="Education" />
        </Reveal>

        <Reveal delay={70}>
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="font-mono font-bold text-[16px] mb-1">
                National Institute of Technology, Patna
              </h3>
              <p className="text-text-muted text-[14px]">
                B.Tech — Electronics and Communication Engineering
              </p>
            </div>
            <div className="font-mono text-[13px] text-text-muted text-left sm:text-right">
              <div>Jun. 2024 – May 2028</div>
              <div>Patna, Bihar, India</div>
              <div className="text-accent-amber font-bold text-[15px] mt-1">CGPA 8.45/10</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={130}>
          <div className="grid sm:grid-cols-2 gap-5 mb-6">
            {SCHOOLING.map((s) => (
              <div key={s.level} className="rounded-xl border border-border bg-surface p-6 sm:p-7">
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="font-mono font-bold text-[14.5px]">
                    {s.level} — {s.board}
                  </h4>
                  <span className="font-mono text-[12px] text-text-dim">{s.year}</span>
                </div>
                <p className="text-text-muted text-[13.5px] mb-3">{s.school}</p>
                <div className="text-accent-amber font-mono font-bold text-[16px]">{s.score}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={190}>
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-7 max-w-md">
            <h4 className="font-mono font-bold text-[14px] mb-3">{JEE_ACHIEVEMENT.title}</h4>
            <ul className="space-y-1.5">
              {JEE_ACHIEVEMENT.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[13.5px] text-text-muted">
                  <span className="text-accent-blue">›</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
