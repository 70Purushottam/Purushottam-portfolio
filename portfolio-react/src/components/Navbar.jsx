import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { RESUME_PATH } from "../data/socialLinks";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/85 dark:bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-mono font-bold text-sm sm:text-base tracking-tight">
          <span className="text-accent-blue">PK</span>
          <span className="hidden sm:inline text-text-muted"> · Purushottam Kumar</span>
        </a>

        <div className="hidden md:flex items-center gap-7 font-mono text-[13px] text-text-muted">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent-blue transition-colors">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 rounded-md border border-border hover:border-accent-blue text-text-muted hover:text-accent-blue transition-colors"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href={RESUME_PATH}
            download
            className="inline-flex items-center gap-2 font-mono text-[12.5px] font-semibold px-4 py-2 rounded-md bg-accent-blue text-[#04070A] hover:bg-[#7fb9ff] transition-colors"
          >
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          className="md:hidden p-2 text-text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-border px-5 pb-6 pt-2 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm py-2.5 text-text-muted hover:text-accent-blue transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-md border border-border text-text-muted"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <a
              href={RESUME_PATH}
              download
              className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-[12.5px] font-semibold px-4 py-2.5 rounded-md bg-accent-blue text-[#04070A]"
            >
              <Download size={14} /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
