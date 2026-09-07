import { Github, Linkedin, Code2 } from "lucide-react";
import { SOCIAL_LINKS } from "../data/socialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <div className="font-mono font-bold text-sm">Purushottam Kumar</div>
          <div className="font-mono text-[11.5px] text-text-dim mt-1">
            © 2026 Purushottam Kumar. Built with React.
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-accent-blue transition-colors"
          >
            <Github size={17} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-accent-blue transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href={SOCIAL_LINKS.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="text-text-muted hover:text-accent-blue transition-colors"
          >
            <Code2 size={17} />
          </a>
        </div>

        <div className="font-mono text-[11px] text-text-dim">Designed &amp; engineered with curiosity.</div>
      </div>
    </footer>
  );
}
