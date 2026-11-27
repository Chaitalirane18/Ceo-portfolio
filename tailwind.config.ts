import path from "node:path";
import type { Config } from "tailwindcss";

// Design tokens mirror the :root variables in app/globals.css so utilities and legacy CSS stay in sync.
const config: Config = {
  // Absolute globs so scanning works no matter which folder the dev server was started from.
  content: [
    path.join(__dirname, "app/**/*.{ts,tsx}"),
    path.join(__dirname, "components/**/*.{ts,tsx}"),
  ],
  // Preflight stays off while the legacy stylesheet still owns the base reset; flip on once migration is complete.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "var(--navy)", 2: "var(--navy-2)", deep: "var(--navy-deep)" },
        brand: { DEFAULT: "var(--blue)", royal: "var(--royal)", sky: "var(--sky)", bright: "var(--bright)" },
        accent: { DEFAULT: "#f07c00", soft: "#f07c00", ink: "#b85c00" },
        ink: "var(--ink)",
        muted: "var(--muted)",
        ice: "var(--ice)",
        line: "var(--line)",
      },
      fontFamily: {
        head: ["var(--font-jakarta)", "Segoe UI", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Segoe UI", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,37,49,0.06), 0 10px 30px rgba(15,37,49,0.09)",
      },
      borderRadius: { card: "12px" },
      keyframes: {
        drawerSlide: { from: { opacity: "0", transform: "translateY(-8px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: { drawer: "drawerSlide 0.35s ease-out forwards" },
    },
  },
  plugins: [],
};
export default config;
