module.exports = {
  presets: [
    require('./config/tailwind-preset.js'),
    require('./config/colors-preset.js'),
    require('./config/typography-preset.js'),
    require('./config/grid-preset.js'),
    require('./config/shadow-preset.js'),
  ],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
