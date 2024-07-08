/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./src/views/**/*.{js,jsx,ts,tsx,vue,html}",
  ],
  theme: {
    screens: {
      sm: { max: "1279px" },
      // md: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
