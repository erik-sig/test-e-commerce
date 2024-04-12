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
        primary: {
          "light-orange": "hsl(25, 100%, 94%)",
          orange: "hsl(26, 100%, 55%)",
        },
        neutral: {
          "very-dark-blue": "hsl(220, 13%, 13%)",
          "dark-grayish blue": "hsl(219, 9%, 45%)",
          "grayish-blue": "#68707D",
          "light-grayish-blue": "hsl(223, 64%, 98%)",
          "black-opacity": "hsl(0, 0%, 0%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
