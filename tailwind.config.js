/** @type {import('tailwindcss').Config} */
export const content = [
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./app.vue",
  "./error.vue",
];
export const theme = {
  typography: {
    default: {},
  },
  extend: {},
};
export const plugins = [];

// export const purge = [];
// export const darkMode = false;

// export const variants = {
//   extend: {},
// };
// export const plugins = [
//   require(`@tailwindcss/typography`)
// ];
