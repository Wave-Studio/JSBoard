module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald"],
      },
      colors: {
        coolGray: {
          700: "#2C2F33",
          800: "#1f2124",
          900: "#121314",
        },
        theme: {
          primary: "#2563EB",
        }
      },
      screens: {
        xs: "362px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  colors: {},
};
