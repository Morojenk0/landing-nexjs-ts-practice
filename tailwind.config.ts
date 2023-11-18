import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				tablet: '2.5rem',
				desktop: '8.5rem',
			},
		},
		extend: {
			backgroundImage: {
				'hero-image': "url('../public/hero.png')",
				'features-image': "url('../public/features-bg.png')",
				'guide-image': "url('../public/guide-bg.png')",
			},
			screens: {
				mobile: '375px',
				tablet: '768px',
				desktop: '1440px',
			},
			colors: {
				white: {
					DEFAULT: '#fff',
				},
				black: {
					DEFAULT: '#232233',
				},
				blue: {
					DEFAULT: '#5956E9',
				},
				gray: {
					DEFAULT: '#6C6C72',
				},
			},
			boxShadow: {
				'box-shadow': '0px 1px 10px 0px rgba(0, 0, 0, 0.10)',
			},
			keyFrames: {
				curtain: {
					'0%': { width: '0', height: '0' },
					'100%': { width: '100vw', height: '100vw' },
				},
			},
			animation: {
				curtain: 'curtain 1s ease-in-out',
			},
		},
		fontSize: {
			sm: [
				'.8rem',
				{
					fontWeight: 300,
					lineHeight: 'normal',
				},
			],
			base: [
				'1rem',
				{
					lineHeight: '1.5rem',
					fontWeight: '400',
				},
			],
			xl: [
				'1.25rem',
				{
					lineHeight: '1.875rem',
					fontWeight: '600',
				},
			],
			'2xl': [
				'1.5625rem',
				{
					lineHeight: '2.34375rem',
					fontWeight: '600',
				},
			],
			'3xl': [
				'1.95313rem',
				{
					lineHeight: '2.95313rem',
					fontWeight: '700',
				},
			],
			'4xl': [
				'2.44144rem',
				{
					lineHeight: '3.65625rem',
					fontWeight: '600',
				},
			],
			'5xl': [
				'3.05188rem',
				{
					lineHeight: '3.96744rem ',
					fontWeight: '700',
				},
			],
			'6xl': [
				'3.815rem',
				{
					lineHeight: 'normal',
					fontWeight: '700',
				},
			],
		},
	},
	plugins: [],
}
export default config
