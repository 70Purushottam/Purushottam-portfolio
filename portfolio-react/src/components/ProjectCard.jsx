import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  const visual = project.diagram || project.mockup;

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden hover:border-accent-blue/50 hover:-translate-y-0.5 transition-all duration-200">
      {visual && (
        <div className="border-b border-border bg-bg px-5 py-4 overflow-x-auto">
          <pre className="font-mono text-[11px] leading-[1.5] text-accent-cyan/80 whitespace-pre">
            {visual.join("\n")}
          </pre>
        </div>
      )}

      <div className="p-6 sm:p-7">
        <h3 className="font-mono font-bold text-lg mb-2">{project.name}</h3>
        <p className="text-text-muted text-[14.5px] leading-relaxed mb-4">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2.5 py-1 rounded border border-border text-text-dim"
            >
              {t}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-6">
          {project.highlights.slice(0, 4).map((h, i) => (
            <li key={i} className="flex gap-2.5 text-[13.5px] text-text-muted leading-snug">
              <span className="text-accent-blue mt-0.5 shrink-0">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[12.5px] font-semibold px-4 py-2.5 rounded-md border border-border hover:border-accent-blue hover:text-accent-blue transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[12.5px] font-semibold px-4 py-2.5 rounded-md bg-accent-blue text-[#04070A] hover:bg-[#7fb9ff] transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
