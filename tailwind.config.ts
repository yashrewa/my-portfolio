import type {Config}
from 'tailwindcss'
import {nextui} from '@nextui-org/react'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    fontFamily: {
        poppins: ['AR One Sans', 'sans-serif']
    },
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
            },
            colors: {
                "backgroundColor": "var(--background-start-rgb)",
                "primary-purple": '#A32CC4'
            }
        }
    },
    darkMode: "class",
    plugins: [nextui()]
}
export default config
