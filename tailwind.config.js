/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',
          navy: '#0F172A',
          surface: '#131B2E',
          card: '#182238',
          border: '#22304E',
          blue: '#3B82F6',
          electric: '#2563EB',
          cyan: '#06B6D4',
          violet: '#8B5CF6',
          purple: '#7C3AED',
          accent: '#38BDF8',
          light: '#F8FAFC',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.4)',
        'glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.4)',
        'card-hover': '0 20px 30px -10px rgba(15, 23, 42, 0.5), 0 0 15px -3px rgba(59, 130, 246, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B0F19 0%, #0F172A 50%, #172554 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
