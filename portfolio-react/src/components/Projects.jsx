import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS, PROJECT_TAGS } from "../data/projects";

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="03"
            title="Featured Projects"
            subtitle="Systems-level and full-stack work — built end to end, from sockets to UI."
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="flex flex-wrap gap-2 mb-9" role="group" aria-label="Filter projects by technology">
            {PROJECT_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                className={`font-mono text-[12px] px-3.5 py-1.5 rounded-full border transition-colors ${
                  activeTag === tag
                    ? "bg-accent-blue text-[#04070A] border-accent-blue font-semibold"
                    : "border-border text-text-muted hover:text-accent-blue hover:border-accent-blue"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
