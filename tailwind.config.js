/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#ee9944",
      },
    },
    // screens: {
    //   xl: { max: "1200px" },
    //   lg: { max: "991px" },
    //   md: { max: "767px" },
    //   sm: { max: "550px" },
    //   xsm: { max: "375px" },
    // },
    container: {
      center: true,
    },
  },
  plugins: [],
};
