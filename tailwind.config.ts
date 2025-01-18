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
        dark: "#28304D",
        light: "#FFFFFF",
        primary: "#1D1D3B",
        secondary: "#6D6DB8",
      },
    },
  },
  plugins: [],
} satisfies Config;
