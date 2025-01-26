/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}', // Include components folder
    './layouts/**/*.vue',        // Include layouts folder
    './pages/**/*.vue',          // Include pages folder
    './plugins/**/*.{js,ts}',    // Include plugins folder
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'

  ],
  theme: {

    extend: {
   
    },
    
  },
  plugins: [],
  
}

