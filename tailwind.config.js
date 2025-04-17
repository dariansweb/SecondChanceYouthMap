/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
  darkMode: "class",
};

export default config;
