/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}
// module.exports = {
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       spacing: {
//         '2/3': '66.666667%',
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],

// };
