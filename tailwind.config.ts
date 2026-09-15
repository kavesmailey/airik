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
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
      },
    },

    extend: {
      colors: {
        ayric: {
          white: "#FFFFFF",
          green: "#8BC53D",
          softGreen: "#E4F0CC",
          darkGreen: "#022F12",
          deepestGreen: "#021408",
        },
      },

      fontSize: {
        "2xs": [
          "0.6875rem",
          {
            lineHeight: "1.5",
          },
        ],

        xs: [
          "0.75rem",
          {
            lineHeight: "1.6",
          },
        ],

        sm: [
          "0.8125rem",
          {
            lineHeight: "1.7",
          },
        ],

        base: [
          "0.9375rem",
          {
            lineHeight: "1.8",
          },
        ],

        lg: [
          "1.0625rem",
          {
            lineHeight: "1.75",
          },
        ],

        xl: [
          "1.25rem",
          {
            lineHeight: "1.65",
          },
        ],

        "2xl": [
          "1.4rem",
          {
            lineHeight: "1.5",
          },
        ],

        "3xl": [
          "1.75rem",
          {
            lineHeight: "1.42",
          },
        ],

        "4xl": [
          "2.125rem",
          {
            lineHeight: "1.34",
          },
        ],

        "5xl": [
          "2.75rem",
          {
            lineHeight: "1.3",
          },
        ],

        "6xl": [
          "3.5rem",
          {
            lineHeight: "1.25",
          },
        ],

        "7xl": [
          "4rem",
          {
            lineHeight: "1.2",
          },
        ],

        "8xl": [
          "5rem",
          {
            lineHeight: "1.16",
          },
        ],
      },

      borderRadius: {
        ayric: "28px",
      },

      transitionTimingFunction: {
        "ayric": "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      transitionDuration: {
        "1200": "1200ms",
        "1600": "1600ms",
        "1800": "1800ms",
      },
    },
  },

  plugins: [],
};

export default config;
