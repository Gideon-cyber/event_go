/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          "linear-gradient(to right bottom, rgba(0, 0, 0,0.95), rgba(0,0,0,0.95)), url('/background.svg')",
        "bg-hero":
          "linear-gradient(118.98deg, rgba(237,70,144, 0.9) -2.11%, rgba(85,34,204, 0.9) 63.58%), url('/background.svg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bluePrim: "#242565",
        pinkPrim: "#F5167E",
        blueSec: "#3D37F1",
      },
      screens: {
        sm: "480px",
        md: "1024px",
        lg: "1200px",
      },
      fontWeight: {
        "b-300": "300",
        "b-400": "400",
        "b-500": "500",
        "b-600": "600",
        "b-700": "700",
        "b-800": "800",
        "b-900": "900",
        "bold-max": "1000",
      },
      boxShadow: {
        card: "0px 18.9529px 47.3822px rgba(119, 115, 170, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
