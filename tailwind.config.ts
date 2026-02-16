import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Retro colors
        retro: {
           dark: "#0D0D0D",       // Matte black
           charcoal: "#121212",   // Slightly lighter background
           orange: "#CC4400",     // Burnt Orange
           amber: "#FFB000",      // Amber
           offwhite: "#E0E0E0",   // Text
           red: "#FF1100",        // Neon Red
           green: "#00FF41",      // Terminal Green (classic)
        }
      },
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        techno: ["var(--font-rajdhani)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
