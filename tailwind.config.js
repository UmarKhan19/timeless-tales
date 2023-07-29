/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('../public/heroimage2.jpg')",
      },
      fontFamily: {
        playFair: ["Playfair Display"],
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [],
};
