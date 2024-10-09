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
    boxShadow: {
      primary: "0 0 15px 0 rgba(45, 122, 130, 0.5)",
      secondary: "0 0 15px 0 rgba(252, 139, 79, 0.5)",
    },
  },
  plugins: [],
};

export default config;
