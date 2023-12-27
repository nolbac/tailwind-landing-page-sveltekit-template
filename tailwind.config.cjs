/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#3b82f6',
					secondary: '#a78bfa',
					accent: '#6ee7b7',
					neutral: '#a5b4fc',
					'base-100': '#f5f5f4',
					info: '#111827',
					success: '#4ade80',
					warning: '#eab308',
					error: '#dc2626'
				}
			}
		]
	},
	theme: {
		extend: {}
	},

	plugins: [require('daisyui'), require('@tailwindcss/forms')]
};

module.exports = config;
