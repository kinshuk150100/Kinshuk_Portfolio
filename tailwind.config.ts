import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,tsx}',
    './lib/**/*.{js,ts,tsx}',
  ],
  darkMode: 'class',
  // Tailwind v3 automatically purges unused CSS based on content array above
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'card-border': 'var(--card-border)',
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          quaternary: 'var(--accent-quaternary)',
          quinary: 'var(--accent-quinary)',
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-tech': 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 50%, #00B4D8 100%)',
        'gradient-tech-dark': 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 30%, #00B4D8 60%, #22C55E 100%)',
        'gradient-vibrant': 'linear-gradient(135deg, #6C63FF 0%, #9D4EDD 25%, #00B4D8 50%, #22C55E 75%, #FF9A00 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(108, 99, 255, 0.2) 0%, rgba(157, 78, 221, 0.15) 30%, rgba(0, 180, 216, 0.1) 60%, transparent 80%)',
        'gradient-glow-terminal': 'radial-gradient(ellipse at center, rgba(108, 99, 255, 0.15) 0%, rgba(157, 78, 221, 0.12) 30%, rgba(0, 180, 216, 0.08) 60%, transparent 80%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
