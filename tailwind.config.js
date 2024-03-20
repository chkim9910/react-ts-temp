/** @type {import('tailwindcss').Config} */
// import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const content = ['./src/**/*.{js,jsx,ts,tsx}']
export const theme = {
    fontFamily: {
        // noto: ['Noto Sans', 'sans-serif'],
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    extend: {
        spacing: {
            128: '32rem',
            144: '36rem',
        },
        borderRadius: {
            '4xl': '2rem',
        },
        fontFamily: {
            display: 'Oswald, ui-serif', // Adds a new `font-display` class
        },
    },
}
export const plugins = []
