/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "20%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        up: {
          "50%": {
            transform: "translateY(100vh)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        fadein: "fadein 1s ease-in",
        up: "up 1s",
      },
    },
  },
  plugins: [],
};
