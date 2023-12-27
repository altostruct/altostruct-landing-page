module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    dark: "bg-[#161616]",
    light: "bg-[#292929]",
  },
  fonts: {
    kthfont: "font-family: KHTeka",
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
