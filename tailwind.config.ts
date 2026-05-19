
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* v2.2 named palette tokens */
				'deep-teal':  '#0A2E36',
				'slate-teal': '#1F4B53',
				'mist-teal':  '#5C7E83',
				'brass':      '#5A4357',
				'brass-deep': '#3F2F3D',
				'bone':       '#FAFAFA',
				'cream':      '#F4F4F4',
				'ink-1':      '#0F1B1F',
				'ink-2':      '#3D5A60',
				'ink-3':      '#6B7B7E',
				'ink-4':      '#8A9396',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
				mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
			},
			boxShadow: {
				'cool-sm': '0 1px 2px rgb(15 27 31 / 0.06)',
				'cool-md': '0 4px 8px -2px rgb(15 27 31 / 0.10)',
				'cool-lg': '0 12px 24px -6px rgb(15 27 31 / 0.14), 0 4px 8px -4px rgb(15 27 31 / 0.08)',
				'cool-xl': '0 24px 40px -8px rgb(15 27 31 / 0.18), 0 8px 16px -8px rgb(15 27 31 / 0.10)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to:   { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to:   { height: '0' }
				},
				'fade-in': {
					'0%':   { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in-right': {
					'0%':   { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
			},
			animation: {
				'accordion-down':   'accordion-down 0.2s ease-out',
				'accordion-up':     'accordion-up 0.2s ease-out',
				'fade-in':          'fade-in 0.6s ease-out',
				'slide-in-right':   'slide-in-right 0.4s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
