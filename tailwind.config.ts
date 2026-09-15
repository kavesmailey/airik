import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "24px",
        md: "40px",
        lg: "64px",
      },
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        ayric: {
          white: "#FFFFFF",
          soft: "#E4F0CC",
          green: "#8BC53D",
          dark: "#022F12",
          deepest: "#021408",
        },

        // Legacy aliases — kept for existing components.
        bg: "#FFFFFF",
        text: "#021408",
        accent: "#8BC53D",
        "tone-1": "#E4F0CC",
        "tone-2": "#022F12",
        "tone-3": "#021408",
      },

      fontFamily: {
        sans: ["Lahzeh", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
        xs: ["0.75rem", { lineHeight: "1.1rem" }],
        sm: ["0.875rem", { lineHeight: "1.35rem" }],
        base: ["1rem", { lineHeight: "1.7rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.8rem" }],
        "2xl": ["1.5rem", { lineHeight: "1.35" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1.05" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "0.95" }],
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
      },

      maxWidth: {
        "8xl": "1400px",
        "9xl": "1600px",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },

      boxShadow: {
        soft: "0 20px 60px rgba(2, 20, 8, 0.08)",
        card: "0 12px 40px rgba(2, 20, 8, 0.06)",
      },

      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1000: "1000ms",
        1200: "1200ms",
      },

      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },

      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },

      animation: {
        "fade-up": "fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 700ms ease-out both",
      },

      opacity: {
        4: "0.04",
        8: "0.08",
      },
    },
  },

  plugins: [],
};

export default config;
