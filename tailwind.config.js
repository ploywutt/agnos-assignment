/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2.5rem",
        xl: "2.5rem",
        "2xl": "2.5rem",
      },
      screens: {
        ...defaultTheme.screens,
        "2xl": "1400px",
        "3xl": "1800px",
      },
    },
    extend: {
      colors: {
        content1: "var(--content1)",
        content2: "var(--content2)",
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        mute: "var(--mute)",
        accent: "var(--accent)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
