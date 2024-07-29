/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts,vue}'],
  theme: {
    extend: {
      colors: {
        'lunar-green': {
          50: '#f6f7f6',
          100: '#e4e7e0',
          200: '#c8cec1',
          300: '#a4ae9a',
          400: '#808c75',
          500: '#65725a',
          600: '#505a47',
          700: '#3f4739',
          800: '#373d32',
          900: '#30352c',
          950: '#191d16'
        },
        lola: {
          50: '#f9f6f8',
          100: '#f5eef3',
          200: '#e4d2df',
          300: '#dcc5d6',
          400: '#c6a0ba',
          500: '#b282a1',
          600: '#9c6686',
          700: '#84526f',
          800: '#6e465c',
          900: '#5d3e4f',
          950: '#36212c'
        },
        'blue-marguerite': {
          50: '#eef0ff',
          100: '#e0e3ff',
          200: '#c8cbfd',
          300: '#a6aafb',
          400: '#8782f7',
          500: '#7161ef',
          600: '#6648e3',
          700: '#573ac8',
          800: '#4731a2',
          900: '#3d2f80',
          950: '#241c4a'
        }
      }
    }
  },
  plugins: []
}
