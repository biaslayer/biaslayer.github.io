import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#09090b",
          900: "#111216",
          800: "#16181d",
          700: "#20232b",
          600: "#2a303c",
          500: "#737a87",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f4f4f5"
        },
        light: {
          950: "#ffffff",
          900: "#fafafa",
          800: "#f4f4f5",
          700: "#e4e4e7",
          600: "#d4d4d8",
          500: "#a1a1aa",
          400: "#71717a",
          300: "#52525b",
          200: "#3f3f46",
          100: "#27272a"
        },
        accent: {
          500: "#77e0c6",
          400: "#93edd4",
          300: "#b6f3e1"
        }
      },
      fontFamily: {
        body: ["Kalam", "cursive"],
        heading: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      maxWidth: {
        reading: "48rem"
      },
      boxShadow: {
        soft: "0 0 0 1px rgba(255, 255, 255, 0.04), 0 24px 80px rgba(0, 0, 0, 0.25)",
        "soft-light": "0 0 0 1px rgba(0, 0, 0, 0.06), 0 8px 24px rgba(0, 0, 0, 0.08)"
      }
    }
  },
  plugins: [typography]
};
