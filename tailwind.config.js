/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

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
    default: {
      css: {
        'code::before': {
          content: '""',
        },
        'code::after': {
          content: '""',
        },
      },
    },
  },
  extend: {
    colors: {
      orange: colors.orange,
    }
  },
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
