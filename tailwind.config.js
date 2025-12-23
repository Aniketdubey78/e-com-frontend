const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // 👇 YE DONO LINES ADD KARNA ZAROORI HAI
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: [// 👈 YE BHI ADD KARNA
  require("flowbite/plugin"), flowbiteReact],
};