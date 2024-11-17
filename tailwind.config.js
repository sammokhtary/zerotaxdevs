/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				indigo: {
					DEFAULT: "#4F46E5",
				},
			},
		},
	},
	plugins: [],
};
