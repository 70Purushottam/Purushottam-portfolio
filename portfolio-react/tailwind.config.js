/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080B0F",
          light: "#FAFAF9",
        },
        surface: {
          DEFAULT: "#0F141A",
          light: "#FFFFFF",
        },
        border: {
          DEFAULT: "#1E2833",
          light: "#E4E4E1",
        },
        accent: {
          blue: "#5FA8FF",
          cyan: "#4FD6D0",
          amber: "#F2B441",
          green: "#4ADE80",
        },
        text: {
          primary: "#E7ECEF",
          muted: "#8592A0",
          dim: "#566270",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["Inter", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
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
