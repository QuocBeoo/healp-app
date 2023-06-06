/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      opacity: {
        15: ".15",
      },
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
    colors: {
      light: "#FFFFFF",
      "primary-300": "#FFCC21",
      "primary-400": "#FF963C",
      "primary-500": "#EA6C00",
      "secondary-300": "#8FE9D0",
      "dark-500": "#414141",
      "dark-600": "#2E2E2E",
      "gray-400": "#777777",
    },
    screens: {
      xsm: "400px",
      // => @media (min-width: 400px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
