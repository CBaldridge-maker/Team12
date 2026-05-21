export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        purr: '#7c3aed',
        cyber: '#00f6ff',
        neon: '#ff54a6',
        slate: {
          950: '#020617',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 246, 255, 0.18)',
      },
    },
  },
  plugins: [],
}
