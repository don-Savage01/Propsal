/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono, monospace"],
      serifFont: ["'Georgia'", "serif"],
      sansFont: ["'Helvetica Neue'", "Arial", "sans-serif"],
    },
    extend: { height: { screen: "100dvh" } },
  },
  plugins: [],
};
