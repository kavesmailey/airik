import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-surface": "var(--color-surface)",
        "bg-light": "var(--color-bg-light)",
        "bg-light-surface": "var(--color-surface-light)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-dark": "var(--color-text-dark)",
        "text-dark-muted": "var(--color-text-dark-muted)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        border: "var(--color-border)",
        "border-light": "var(--color-border-light)",
        "tone-clay": "var(--color-tone-clay)",
        "tone-ink": "var(--color-tone-ink)",
        "tone-olive": "var(--color-tone-olive)",
      },

      fontFamily: {
        sans: ["var(--font-vazirmatn)", "system-ui", "sans-serif"],
      },

      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "1.6" }],
        xs: ["0.8125rem", { lineHeight: "1.6" }],
        sm: ["0.875rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.7" }],
        xl: ["1.25rem", { lineHeight: "1.6" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.4" }],
        "4xl": ["2.25rem", { lineHeight: "1.35" }],
        "5xl": ["3rem", { lineHeight: "1.3" }],
        "6xl": ["3.75rem", { lineHeight: "1.25" }],
        "7xl": ["4.5rem", { lineHeight: "1.2" }],
        "8xl": ["6rem", { lineHeight: "1.1" }],
      },

      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },

      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "12px",
      },

      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        hairline: "0.5px",
      },

      boxShadow: {
        header: "0 1px 0 0 var(--color-border)",
        elevated: "0 4px 24px rgba(0, 0, 0, 0.2)",
        card: "0 1px 3px rgba(0, 0, 0, 0.12)",
      },

      maxWidth: {
        "screen-2xl": "1536px",
        "screen-3xl": "1920px",
      },

      transitionDuration: {
        fast: "150ms",
        DEFAULT: "250ms",
        slow: "400ms",
        slower: "700ms",
      },

      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.22, 0.61, 0.36, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
      },

      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
      },

      opacity: {
        "4": "0.04",
        "8": "0.08",
      },
    },
  },
  plugins: [],
};

export default config;
