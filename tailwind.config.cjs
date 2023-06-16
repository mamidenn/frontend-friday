/** @type {import("tailwindcss").Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		// presets from design/style-guide.md
		colors: {
			primary: {
				'pale-blue': 'hsl(225 100% 94%)',
				'bright-blue': 'hsl(245 75% 52%)'
			},
			neutral: {
				'very-pale-blue': 'hsl(225 100% 98%)',
				'desaturated-blue': 'hsl(224 23% 55%)',
				'dark-blue': 'hsl(223 47% 23%)'
			}
		},
		fontFamily: {
			"sans": ['"Red Hat Display"', "sans-serif"]
		},		
		fontWeight: {
			500: 500,
			700: 700,
			900: 900
		}
	},

	plugins: []
};

module.exports = config;
