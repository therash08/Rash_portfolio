/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-hover': 'var(--surface-hover)',
        border: 'var(--border-color)',
        'border-subtle': 'var(--border-subtle)',
        foreground: 'var(--foreground)',
        'foreground-muted': 'var(--foreground-muted)',
        'foreground-subtle': 'var(--foreground-subtle)',
        aurora: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          violet: '#8B5CF6',
          teal: '#2DD4BF',
        },
        cyan: {
          accent: '#22D3EE',
          glow: 'rgba(34, 211, 238, 0.25)',
        },
        blue: {
          accent: '#3B82F6',
          glow: 'rgba(59, 130, 246, 0.25)',
        },
        violet: {
          accent: '#8B5CF6',
          glow: 'rgba(139, 92, 246, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(34, 211, 238, 0.25)',
        'glow-violet': '0 0 30px -5px rgba(139, 92, 246, 0.25)',
        'glow-lg': '0 0 50px -10px rgba(34, 211, 238, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'orbit-slow': 'orbit 28s linear infinite',
        'orbit-reverse': 'orbit 38s linear infinite reverse',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.98)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
