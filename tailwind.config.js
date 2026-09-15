/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leedy: {
          navy: {
            DEFAULT: '#0B132B',
            dark: '#070C1B',
            card: '#111C3A',
            light: '#1C2A4F',
            border: '#233563'
          },
          gold: {
            DEFAULT: '#F59E0B',
            light: '#FBBF24',
            dark: '#D97706',
            hover: '#EAB308',
            tint: '#FEF3C7'
          },
          green: {
            DEFAULT: '#10B981',
            dark: '#059669',
            light: '#34D399'
          },
          cream: '#FDFBF7'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif']
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

