/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'app-bg': 'var(--mat-app-background-color)'
      },
      spacing: {
        'header-height': 'var(--mat-toolbar-standard-height)'
      }
    },
  },
  plugins: [],
}
