import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0F0F0F",
        light: "#FFFFFF",
        primary: "#141414",
        secondary: "#6D6DB8",
      },
      fontSize: {
        heading: "2rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
