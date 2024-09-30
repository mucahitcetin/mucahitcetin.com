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
        background: "#F5F5F5",
        foreground: "var(--foreground)",

        primary: "#2D7A82",
        secondary: "#FC8B4F",
        tertiary: "#7d8285",
      },
    },
  },
  plugins: [],
};
export default config;
