import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        brand: { blue: "#3B82F6", glow: "#1D4ED8" },
      },
      animation: {
        "fade-in":  "fadeIn 0.9s ease-out both",
        "slide-up": "slideUp 0.8s ease-out both",
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: "0" },                                     "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(28px)" },      "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};
export default config;