import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your path if it's different
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
