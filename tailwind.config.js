/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		textColor: {
			black: "#242424",
			white: "#ffffff",
		},
		extend: {
			fontFamily: {
				playfair: ["Playfair Display", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
