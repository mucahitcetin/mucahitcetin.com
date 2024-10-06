import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ddd",
        foreground: "var(--foreground)",
        primary: "#5C4B8A",
        secondary: "#FFD700",
        tertiary: "#7d8285",
      },
    },
  },
  plugins: [],
};

export default config;
