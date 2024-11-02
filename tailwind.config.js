/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Create a smooth transition from right to left
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '70%': { transform: 'translateX(-70%)' }, // Move left by 100%
        },
      },
      animation: {
        marquee: 'marquee 15s linear infinite', // Adjust animation duration as needed
      },
    },
  },
  plugins: [],
};
