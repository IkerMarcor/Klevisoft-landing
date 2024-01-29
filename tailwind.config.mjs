/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#13151a',
				'blue': '#0D1C3A',
				'gray': '#94a3b8',
				'light-gray': '#e5e7eb',
				'cyan':'#40a6ef',
				'dark-cyan':'#2d8fd5',
				'green': '#16C55E',
			},
			backgroundImage: {
				'klevi-1': "url('/src/assets/images/background-1.png')",
			}
		}
	},
	plugins: [],
}
