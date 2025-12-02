/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "#f0f4ff",
					100: "#e0e9ff",
					200: "#c7d7fe",
					300: "#a4bcfd",
					400: "#7c97fa",
					500: "#5b75f5",
					600: "#4650ea",
					700: "#3a40d7",
					800: "#3036ae",
					900: "#2d3389",
					950: "#1d1f53",
				},
				secondary: {
					50: "#fff7ed",
					100: "#ffedd5",
					200: "#fed7aa",
					300: "#fdba74",
					400: "#fb923c",
					500: "#f97316",
					600: "#ea580c",
					700: "#c2410c",
					800: "#9a3412",
					900: "#7c2d12",
					950: "#431407",
				},
				accent: {
					50: "#f0fdfa",
					100: "#ccfbf1",
					200: "#99f6e4",
					300: "#5eead4",
					400: "#2dd4bf",
					500: "#14b8a6",
					600: "#0d9488",
					700: "#0f766e",
					800: "#115e59",
					900: "#134e4a",
					950: "#042f2e",
				},
			},
			fontFamily: {
				sans: [
					"var(--font-roboto)",
					"Inter",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
				],
				display: ["var(--font-roboto)", "system-ui", "sans-serif"],
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
				"6xl": ["3.75rem", { lineHeight: "1" }],
				"7xl": ["4.5rem", { lineHeight: "1" }],
			},
			spacing: {
				18: "4.5rem",
				88: "22rem",
				100: "25rem",
				112: "28rem",
				128: "32rem",
			},
			animation: {
				"fade-in": "fadeIn 0.6s ease-out",
				"fade-in-up": "fadeInUp 0.6s ease-out",
				"fade-in-down": "fadeInDown 0.6s ease-out",
				"slide-in-left": "slideInLeft 0.5s ease-out",
				"slide-in-right": "slideInRight 0.5s ease-out",
				"scale-in": "scaleIn 0.5s ease-out",
				float: "float 3s ease-in-out infinite",
				glow: "glow 2s ease-in-out infinite alternate",
				shimmer: "shimmer 2s linear infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(30px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeInDown: {
					"0%": { opacity: "0", transform: "translateY(-30px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideInLeft: {
					"0%": { opacity: "0", transform: "translateX(-30px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				slideInRight: {
					"0%": { opacity: "0", transform: "translateX(30px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				scaleIn: {
					"0%": { opacity: "0", transform: "scale(0.9)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-20px)" },
				},
				glow: {
					"0%": { boxShadow: "0 0 20px rgba(91, 117, 245, 0.5)" },
					"100%": {
						boxShadow:
							"0 0 30px rgba(91, 117, 245, 0.8), 0 0 40px rgba(249, 115, 22, 0.6)",
					},
				},
				shimmer: {
					"0%": { backgroundPosition: "-1000px 0" },
					"100%": { backgroundPosition: "1000px 0" },
				},
			},
			boxShadow: {
				soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
				medium:
					"0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)",
				hard: "0 10px 40px -10px rgba(0, 0, 0, 0.2)",
				glow: "0 0 30px rgba(91, 117, 245, 0.4)",
				"glow-secondary": "0 0 30px rgba(249, 115, 22, 0.4)",
			},
			backdropBlur: {
				xs: "2px",
			},
		},
	},
	plugins: [],
};
