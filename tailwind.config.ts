import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "modal-open": {
          from: { opacity: "0%", transform: "translateY(-20px)" },
          to: { opacity: "100%", transform: "translateY(0)" },
        },
        "modal-close": {
          from: { opacity: "100%", transform: "translateY(0)" },
          to: { opacity: "0%", transform: "translateY(-20px)" },
        },
      },
      animation: {
        "modal-open": "modal-open 300ms ease-in-out forwards",
        "modal-close": "modal-close 300ms ease-in-out forwards",
      },
      colors: {
        codeit_purple: "#6500c3",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
