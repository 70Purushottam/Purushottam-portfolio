import { Mail, Phone, Github, Linkedin, Code2, FileCheck2, ArrowUpRight, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { SOCIAL_LINKS, CONTACT } from "../data/socialLinks";
import { CERTIFICATIONS } from "../data/achievements";

const QUICK_LINKS = [
  { label: "GitHub", value: "70Purushottam", href: SOCIAL_LINKS.github, icon: Github },
  { label: "LinkedIn", value: "purushottam-kumar", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: "LeetCode", value: "Gambit5382", href: SOCIAL_LINKS.leetcode, icon: Code2 },
  { label: "CodeChef", value: "purushottam70", href: SOCIAL_LINKS.codechef, icon: Code2 },
  { label: "Codeforces", value: "772purushottam", href: SOCIAL_LINKS.codeforces, icon: Code2 },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <h2 className="font-mono font-bold text-2xl sm:text-3xl tracking-tight mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-text-muted max-w-xl mb-12">
            I'm always interested in interesting software engineering problems, impactful projects,
            and opportunities to learn and build.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Primary contact card */}
          <Reveal delay={60} className="lg:col-span-2">
            <div className="h-full rounded-xl border border-border bg-surface p-7 flex flex-col">
              <div className="space-y-5 mb-8">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-colors shrink-0">
                    <Mail size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-[10.5px] text-text-dim uppercase tracking-wide">Email</div>
                    <div className="text-[14.5px] group-hover:text-accent-blue transition-colors">
                      {CONTACT.email}
                    </div>
                  </div>
                </a>
                <a
                  href={`mailto:${CONTACT.collegeEmail}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-accent-cyan group-hover:border-accent-blue transition-colors shrink-0">
                    <GraduationCap size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-[10.5px] text-text-dim uppercase tracking-wide">College Email</div>
                    <div className="text-[14.5px] group-hover:text-accent-blue transition-colors break-all">
                      {CONTACT.collegeEmail}
                    </div>
                  </div>
                </a>
                <a href={`tel:${CONTACT.phoneHref}`} className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-colors shrink-0">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className="font-mono text-[10.5px] text-text-dim uppercase tracking-wide">Phone</div>
                    <div className="text-[14.5px] group-hover:text-accent-blue transition-colors">
                      {CONTACT.phone}
                    </div>
                  </div>
                </a>
              </div>

              <div className="flex flex-col gap-3 mt-auto">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center justify-center gap-2 font-mono text-[13px] font-semibold px-5 py-3 rounded-md bg-accent-blue text-[#04070A] hover:bg-[#7fb9ff] transition-colors"
                >
                  <Mail size={15} /> Email Me
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-mono text-[13px] font-semibold px-5 py-3 rounded-md border border-border hover:border-accent-blue hover:text-accent-blue transition-colors"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-mono text-[13px] font-semibold px-5 py-3 rounded-md border border-border hover:border-accent-blue hover:text-accent-blue transition-colors"
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>
          </Reveal>

          {/* Quick links + certificates */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="h-full rounded-xl border border-border bg-surface p-7">
              <h3 className="font-mono text-[11px] tracking-wider uppercase text-text-dim mb-4">
                Profiles &amp; Coding Platforms
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                {QUICK_LINKS.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 px-4 py-3 rounded-md border border-border hover:border-accent-blue transition-colors group"
                  >
                    <span className="flex items-center gap-2.5 font-mono text-[13px]">
                      <Icon size={14} className="text-text-dim group-hover:text-accent-blue transition-colors" />
                      {label}
                    </span>
                    <span className="flex items-center gap-1 text-[12px] text-text-muted group-hover:text-accent-blue transition-colors">
                      {value} <ArrowUpRight size={12} />
                    </span>
                  </a>
                ))}
              </div>

              <h3 className="font-mono text-[11px] tracking-wider uppercase text-text-dim mb-4">
                Certificates
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {CERTIFICATIONS.map((cert) => (
                  <a
                    key={cert.title}
                    href={cert.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-md border border-border hover:border-accent-amber transition-colors group"
                  >
                    <FileCheck2 size={15} className="text-text-dim group-hover:text-accent-amber transition-colors shrink-0" />
                    <span className="text-[12.5px] leading-snug group-hover:text-accent-amber transition-colors">
                      {cert.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
