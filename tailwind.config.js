/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0E17',
          surface: '#111726',
          raised: '#161D30',
          border: '#232C43',
        },
        light: {
          DEFAULT: '#F7F8FC',
          surface: '#FFFFFF',
          raised: '#EEF1F8',
          border: '#DDE2EE',
        },
        ink: {
          DEFAULT: '#E8ECF4',
          muted: '#8B93A7',
          dim: '#5C6478',
        },
        py: {
          blue: '#4B8BBE',
          blueDeep: '#306998',
          yellow: '#FFD43B',
          yellowDeep: '#FFE873',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, rgba(10,14,23,1)), radial-gradient(ellipse 80% 50% at 50% -10%, rgba(75,139,190,0.25), transparent)',
        'glow-blue-yellow':
          'radial-gradient(circle at 20% 20%, rgba(75,139,190,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,212,59,0.15), transparent 40%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glow: '0 0 40px rgba(75,139,190,0.35)',
        glowYellow: '0 0 40px rgba(255,212,59,0.25)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
