/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paint: {
          pink: '#ff1e56',
          blue: '#00d9ff',
          green: '#7ed321',
          purple: '#bd10e0',
          orange: '#f39c12',
          gold: '#ffd700',
          'gold-light': '#ffb347',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
        }
      },
      fontFamily: {
        'display': ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      animation: {
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 2s ease-in-out infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'drip': 'drip 2s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        goldShimmer: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blob: {
          '0%, 100%': { 
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
            'border-radius': '50% 40% 60% 30%',
          },
          '25%': { 
            transform: 'translate(20px, -20px) scale(1.1) rotate(90deg)',
            'border-radius': '40% 60% 30% 50%',
          },
          '50%': { 
            transform: 'translate(-10px, 10px) scale(0.9) rotate(180deg)',
            'border-radius': '60% 30% 50% 40%',
          },
          '75%': { 
            transform: 'translate(-20px, -10px) scale(1.05) rotate(270deg)',
            'border-radius': '30% 50% 40% 60%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drip: {
          '0%': { 
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            opacity: '0',
          },
          '100%': { 
            'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            opacity: '1',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'paint-splash': `
          radial-gradient(ellipse at center, rgba(255, 30, 86, 0.1) 0%, transparent 70%),
          radial-gradient(ellipse at 80% 20%, rgba(0, 217, 255, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 20% 80%, rgba(126, 211, 33, 0.1) 0%, transparent 50%)
        `,
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}