/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			black: '#000000',
			white: '#FFFFFF',
			'dark-teal': '#24657A',
			'sky-blue': '#F2F6F8'
		},
		backgroundImage: {
			bullan: 'url(./pascal-bullan-InwZeTM1DL0-unsplash.jpg)'
		},
		fontFamily: {
			sans: ['"Fira Sans"', 'sans-serif']
		},
		fontWeight: {
			light: 300,
			default: 500,
			bold: 700
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
