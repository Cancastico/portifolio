import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        smt: { min: "0px", max: "769px" },
        md: { min: "769px", max: "1024px" },
        lg: { min: "1025px", max: "1280px" },
        xl: { min: "1281px", max: "1920px" },
        xxl: "1921px",
        "2xl": "1366px",
      },
    },
    extend: {
      fontFamily: {
        ubuntu: ['"Ubuntu",sans-serif '],
        ibmPlexMono: ['"IBM Plex Mono", monospace']
      },
      screens: {
        smt: { min: "0px" },
        md: { min: "769px" },
        lg: { min: "1025px" },
        xl: { min: "1281px" },
        xxl: "1921px",
        "2xl": "1366px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          primary: "#ffffff",
          dark: "#282f37"
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00AD84",
          foreground: "#256253",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "skills": "url('/public/skillsBackground.png')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements', nocompatible: true })],
} satisfies Config

export default config