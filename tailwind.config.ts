import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#407618",
        "primary-dark": "#2d5211",
        accent: "#D62121",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "muted-foreground": "var(--muted-foreground)",
        night: "var(--night)",
        charcoal: "#0F0F12",
        onyx: "var(--onyx)",
        panel: "var(--panel)",
        border: "var(--border)",
        gold: "#C39A58",
        platinum: "#E1E1E1",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px rgba(64, 118, 24, 0.35)",
        glass: "0 25px 120px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "noise-gradient":
          "linear-gradient(135deg, rgba(5,5,5,0.9), rgba(15,15,19,0.95))",
      },
      animation: {
        "pulse-slow": "pulse 4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;






