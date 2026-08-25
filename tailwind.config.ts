import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      primary: [
        "'Cormorant Upright'",
        "'Cormorant Garamond'",
        "Georgia",
        "Cambria",
        "'Times New Roman'",
        "serif",
      ],
      secondary: [
        "'Open Sans'",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        // Deep charcoal / near-black architectural grounds
        charcoal: {
          DEFAULT: "#0c0e0d", // Main canvas
          surface: "#131615",  // Cards and elevated panels
          elevated: "#1a1e1b", // Overlays and modals
          border: "rgba(244, 238, 228, 0.08)", // Subtle hairline borders
          borderLight: "rgba(244, 238, 228, 0.16)",
        },
        // Warm cream editorial typography & accents
        cream: {
          DEFAULT: "#f4eee4", // Main editorial text & titles
          muted: "#c4bcad",   // Body text and descriptions
          faint: "#787265",   // Meta info, subtitles, tracking labels
        },
        // Muted natural botanical olive / sage
        olive: {
          DEFAULT: "#576d5b", // Primary botanical accent
          light: "#7c9480",   // Hover states / glows
          dark: "#38473a",    // Deep container tint
          muted: "rgba(87, 109, 91, 0.15)",
        },
        // Warm culinary amber / terracotta
        amber: {
          DEFAULT: "#c89c6c", // Warm food accents & prices
          light: "#dfb78c",   // Hover states
          dark: "#9c7347",    // Deep accents
          glow: "rgba(200, 156, 108, 0.12)",
        },
        // Retain compatibility aliases mapped to new tokens
        primary: {
          DEFAULT: "#0c0e0d",
          light: "#131615",
          dark: "#080908",
        },
        secondary: {
          DEFAULT: "#c4bcad",
          dark: "#787265",
        },
        accent: {
          DEFAULT: "#c89c6c",
          hover: "#dfb78c",
        },
      },
      letterSpacing: {
        "editorial-tight": "-0.03em",
        "editorial-wide": "0.18em",
        "editorial-widest": "0.3em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/footer/bg.png')",
      },
    },
  },
  plugins: [],
};

export default config;
