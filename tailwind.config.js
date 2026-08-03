/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0B132B',
        indigoSlate: '#1C2541',
        ice: '#E6F1FF',
        tealSignal: '#5BC0BE',
        tealDark: '#0D7977',
        amberPulse: '#F4D35E',
        mistLine: '#A8B2D1',
        // Light-mode semantic tokens
        lmBg: '#F4F8FC',
        lmSurface: '#FFFFFF',
        lmSurfaceAlt: '#EEF3F9',
        lmText: '#0B1929',
        lmTextSoft: '#2A3D52',
        lmMuted: '#4A6375',
        lmBorder: '#C5D4E4',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(11, 19, 43, 0.5)',
      },
    },
  },
  plugins: [],
}

