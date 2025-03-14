/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/brain/hlm-tailwind-preset")],
  content: ["./src/**/*.{html,ts,tsx}", "./libs/ui/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
