/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      colors: {
        primary: '#0C8077',
        primaryHover: '#09665f',
        dark: '#0F172A',
        secondary: '#64748B',
        light: '#F8FAFC',
        border: '#E5E7EB',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite reverse',
        'pulse-glow': 'glow 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(12, 128, 119, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(12, 128, 119, 0.6)' },
        }
      }
    }
  },
  plugins: [],
}