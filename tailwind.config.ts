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
        dark: "#00010f",
        light: "#ffffff",
        secondary: "rgb(37,99,235)",
        accent: "#080a1b",
      },
      backgroundImage: {
        card: "url('../public/card.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
