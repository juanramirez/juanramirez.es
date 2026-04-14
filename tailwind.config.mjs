import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B1F23",
        paper: "#F7F4EE",
        accent: "#B14623",
        muted: "#5B5F65"
      },
      fontFamily: {
        serif: ["Source Serif 4", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "Helvetica", "Arial", "sans-serif"]
      }
    }
  },
  plugins: [typography]
};
