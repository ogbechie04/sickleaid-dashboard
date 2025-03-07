import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "var(--primary-green)",
        danger: "var(--danger)",
        backgroundYellow: "var(--background-yellow)",
      },
      fontFamily: {
        Inter: "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
