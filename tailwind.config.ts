import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightArmyGreen: '#28616712',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #E7F5FD 0%, #E6F9F6 50%, #E3FCEF 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
