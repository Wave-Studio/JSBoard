module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald"],
			},
			colors: {
				coolGray: {
					50: "#bac8d6",
					75: "#bdc9db",
					100: "#d3dded",
					200: "e6eefc",
					700: "#2C2F33",
					800: "#1f2124",
					850: "#141517",
					900: "#121314",
				},
				theme: {
					primary: "#1757e3", //Windy Blue
					secondary: "#259c7c", //Flax Blue
				},
				branding: {
					50: "#baf5eb", //for light theme
					900: "#0a0b0d", //for dark theme
				},
			},
			screens: {
				gf: "281px",
				xs: "362px",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms"), require("nightwind")],
	colors: {},
};
