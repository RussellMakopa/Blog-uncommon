import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#0747A1",
      secondary: "#F2F2F2;",
      light: "#ffffff",
      dark: "#161616",
      lightgray: "#D9D9D9",
      black: "#000000",
      transparent: "#00000000",
      accentGreen: "#dcfce7",
    },
    extend: {
      fontFamily: {
        primary: "AvenirNext-Regular",
        secondary: "Chillax-Semibold",
        bold: "Chillax-Bold",
        demibold: "AvenirNext-DemiBold",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
