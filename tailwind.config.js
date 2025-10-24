// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
      },
    },
 keyframes: {
      marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      'marquee-reverse': {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
    animation: {
      marquee: 'marquee var(--duration, 30s) linear infinite',
      'marquee-reverse': 'marquee-reverse var(--duration, 30s) linear infinite',
    },

  },
  plugins: [],
}
