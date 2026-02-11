import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                void: "#080707",
                depth: "#100F0F",
                surface: "#222121",
                muted: "#494C49",
                warmAccent: "#695C58",
            },
            fontFamily: {
                sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.025em',
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
                'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};

export default config;
