/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--c-bg)",
        },
        surface: {
          DEFAULT: "var(--c-surface)",
        },
        border: {
          DEFAULT: "var(--c-border)",
        },
        accent: {
          blue: "#5FA8FF",
          cyan: "#4FD6D0",
          amber: "#F2B441",
          green: "#4ADE80",
        },
        text: {
          primary: "var(--c-text-primary)",
          muted: "var(--c-text-muted)",
          dim: "var(--c-text-dim)",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["Inter", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(var(--c-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--c-grid-line) 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        pulse_soft: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.35 },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse_soft: "pulse_soft 2.2s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease both",
      },
    },
  },
  plugins: [],
};
