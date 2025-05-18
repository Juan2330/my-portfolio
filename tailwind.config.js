module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Anton'],
        sans: ['Inter'],
        mono: ['Fira Code'],
      },
      screens: {
        '3xl': '1792px',
      },
    },
  },
  plugins: [],
}