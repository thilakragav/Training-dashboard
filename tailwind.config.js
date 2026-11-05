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
        // NodalBot Official Claude-Inspired Warm Editorial Tokens
        nodal: {
          bg: 'rgb(var(--nodal-bg-rgb) / <alpha-value>)',
          navy: 'rgb(var(--nodal-navy-rgb) / <alpha-value>)',
          surface: 'rgb(var(--nodal-surface-rgb) / <alpha-value>)',
          card: 'rgb(var(--nodal-card-rgb) / <alpha-value>)',
          cardHover: 'rgb(var(--nodal-card-hover-rgb) / <alpha-value>)',
          blue: 'rgb(var(--nodal-blue-rgb) / <alpha-value>)',       // Primary accent (terracotta #C56845 / #D27A54)
          cyan: 'rgb(var(--nodal-cyan-rgb) / <alpha-value>)',       // Secondary accent (warm ochre #D99A78 / #E5A17D)
          violet: 'rgb(var(--nodal-violet-rgb) / <alpha-value>)',   // Deep warm sienna (#8F4F35)
          purple: 'rgb(var(--nodal-purple-rgb) / <alpha-value>)',
          text: 'rgb(var(--nodal-text-rgb) / <alpha-value>)',       // Main text (#29251F / #F5F0E8)
          muted: 'rgb(var(--nodal-muted-rgb) / <alpha-value>)',     // Secondary text (#6B6258 / #C9BFB2)
          border: 'rgb(var(--nodal-border-rgb) / <alpha-value>)',   // Border (#E6DED3 / #4B443B)
          borderGlow: 'rgb(var(--nodal-border-glow-rgb, 197 104 69) / <alpha-value>)',
          terracotta: '#C56845',
          ochre: '#D99A78',
          softAccent: '#F0E2D7',
          charcoal: '#25231F',
        },
        // Backward-compatible brand mappings
        brand: {
          void: 'rgb(var(--nodal-bg-rgb) / <alpha-value>)',
          midnight: 'rgb(var(--nodal-navy-rgb) / <alpha-value>)',
          navy: 'rgb(var(--nodal-surface-rgb) / <alpha-value>)',
          slate: 'rgb(var(--nodal-surface-rgb) / <alpha-value>)',
          surface: 'rgb(var(--nodal-surface-rgb) / <alpha-value>)',
          card: 'rgb(var(--nodal-card-rgb) / <alpha-value>)',
          cardHover: 'rgb(var(--nodal-card-hover-rgb) / <alpha-value>)',
          border: 'rgb(var(--nodal-border-rgb) / <alpha-value>)',
          borderGlow: 'rgb(var(--nodal-border-glow-rgb, 197 104 69) / <alpha-value>)',
          blue: 'rgb(var(--nodal-blue-rgb) / <alpha-value>)',
          electric: 'rgb(var(--nodal-cyan-rgb) / <alpha-value>)',
          cyan: 'rgb(var(--nodal-cyan-rgb) / <alpha-value>)',
          violet: 'rgb(var(--nodal-violet-rgb) / <alpha-value>)',
          purple: 'rgb(var(--nodal-purple-rgb) / <alpha-value>)',
          silver: 'rgb(var(--nodal-muted-rgb) / <alpha-value>)',
          coolWhite: 'rgb(var(--nodal-text-rgb) / <alpha-value>)',
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Lora', 'Georgia', 'serif'],
        display: ['Newsreader', 'Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'warm-sm': '0 1px 3px 0 rgba(41, 37, 31, 0.05)',
        'warm-card': '0 2px 12px -2px rgba(41, 37, 31, 0.08), 0 1px 4px -1px rgba(41, 37, 31, 0.04)',
        'warm-hover': '0 12px 28px -4px rgba(41, 37, 31, 0.12), 0 4px 10px -2px rgba(41, 37, 31, 0.06)',
        'glow-terracotta': '0 4px 20px -2px rgba(197, 104, 69, 0.25)',
        'glow-blue': '0 4px 20px -2px rgba(197, 104, 69, 0.25)',
        'glow-cyan': '0 4px 20px -2px rgba(217, 154, 120, 0.25)',
        'glow-violet': '0 4px 20px -2px rgba(143, 79, 53, 0.25)',
        'card-hover': '0 16px 32px -8px rgba(41, 37, 31, 0.15)',
        'panel': '0 8px 32px 0 rgba(41, 37, 31, 0.08)',
        'subtle': '0 2px 12px -2px rgba(41, 37, 31, 0.08)',
      },
      backgroundImage: {
        'tech-radial': 'radial-gradient(circle at 50% 0%, rgba(197, 104, 69, 0.12) 0%, transparent 75%)',
        'tech-radial-violet': 'radial-gradient(circle at 80% 20%, rgba(217, 154, 120, 0.10) 0%, transparent 60%)',
        'gradient-electric': 'linear-gradient(135deg, #C56845 0%, #D99A78 100%)',
        'gradient-warm': 'linear-gradient(135deg, #C56845 0%, #D99A78 100%)',
        'gradient-terracotta': 'linear-gradient(135deg, #C56845 0%, #8F4F35 100%)',
        'gradient-nodal': 'linear-gradient(135deg, #C56845 0%, #D99A78 50%, #8F4F35 100%)',
        'gradient-solutions': 'linear-gradient(135deg, #8F4F35 0%, #C56845 100%)',
        'gradient-academy': 'linear-gradient(135deg, #C56845 0%, #D99A78 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        nodeFloat: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-4px) translateX(2px)' },
          '66%': { transform: 'translateY(2px) translateX(-2px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'orbit-slow': 'orbit 30s linear infinite',
        'orbit-reverse': 'orbit 40s linear infinite reverse',
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'slide-left': 'slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-d1': 'fadeUp 0.6s ease-out 0.1s forwards',
        'fade-up-d2': 'fadeUp 0.6s ease-out 0.2s forwards',
        'fade-up-d3': 'fadeUp 0.6s ease-out 0.3s forwards',
        'fade-up-d4': 'fadeUp 0.6s ease-out 0.4s forwards',
        'fade-up-d5': 'fadeUp 0.6s ease-out 0.5s forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'node-float': 'nodeFloat 8s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
