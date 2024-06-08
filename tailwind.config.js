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
				pt: ["PT Serif", "serif"],
			},
		},
	},
	plugins: [],
};
