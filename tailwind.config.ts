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
        primary: "#060640",
        secondary: "#00E5CC",
        tertiary: "#ECF9FF",
        quaternary: "#000020",
        black: "#000000",
        white: "#ffffff",
        "card-paragraph": "#9090A7",
        "about-heading-1": "#1C2F41",
        "about-heading-2": "#14A39A",
      },
    },
    screens: {
      xsm: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
