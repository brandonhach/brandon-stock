import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#235789',
				'primary-content': '#EEF4ED',
				secondary: '#EE6C4D',
				'secondary-content': '#8DA9C4',
				neutral: '#050706',
				'base-100': '#000000',
			},
		},
	},
	plugins: [],
};
export default config;
