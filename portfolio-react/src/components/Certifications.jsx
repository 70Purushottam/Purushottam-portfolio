import { FileCheck2, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CERTIFICATIONS } from "../data/achievements";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading index="05" title="Certifications" />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-border bg-surface p-6 hover:border-accent-blue/50 transition-colors flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <FileCheck2 size={18} className="text-accent-blue mt-0.5 shrink-0" />
                  <h3 className="font-mono font-bold text-[15px] leading-snug">{cert.title}</h3>
                </div>
                <p className="text-text-primary text-[13.5px] mb-1">{cert.issuer}</p>
                <p className="text-text-muted text-[13px] mb-5">{cert.meta}</p>
                {cert.certUrl && (
                  <a
                    href={cert.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 font-mono text-[12px] text-accent-blue hover:underline w-fit"
                  >
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
