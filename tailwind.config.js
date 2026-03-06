/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
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
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
        },
      },
      boxShadow: {
        glow: '0 0 20px -5px rgba(99, 102, 241, 0.4)',
        'glow-cyan': '0 0 20px -5px rgba(6, 182, 212, 0.4)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}