// tailwind.config.js
module.exports = {
  darkMode: 'class',  // уже должно быть
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-5)',
        'primary-light': 'var(--color-4)',
        'primary-lighter': 'var(--color-3)',
        secondary: 'var(--color-6)',
        accent: 'var(--color-2)',
        'accent-light': 'var(--color-1)',
      },
      backgroundColor: {
        page: 'var(--bg-page)',
      },
      textColor: {
        default: 'var(--text-default)',
      }
    },
  },
  plugins: [],
};
