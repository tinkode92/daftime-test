import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        daftime: {
          yellow: "#d6b303",
          "yellow-dark": "#b79903",
          "yellow-light": "#fffced",
          cream: "#fffade",
          "cream-border": "#f3edd1",
          gray: {
            bg: "#f3f3f3",
            card: "#f4f4f4",
            light: "#f7f7f7",
            text: "#595959",
            mute: "#737070",
            muter: "#9e9e9e",
            border: "#e6e5e0",
          },
          dark: "#0d0d0d",
          black: "#131313",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "marquee-x": "marqueeX 28s linear infinite",
        "marquee-x-slow": "marqueeX 60s linear infinite",
      },
      keyframes: {
        marqueeX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
