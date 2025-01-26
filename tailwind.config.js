/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './Pages/**/*.{vue,js,ts}',  // Nuxt pages directory
    './Components/**/*.{vue,js,ts}', // Components directory
    './layouts/**/*.{vue,js,ts}', // Layouts directory
    './app.vue', // Main app file
  ],
  theme: {
    screens: {
      sm: '440px',  // Small devices (phones)
      md: '768px',  // Medium devices (tablets)
      lg: '1024px', // Large devices (laptops)
      xl: '1280px', // Extra large devices (desktops)
      '2xl': '1536px', // 2X Large devices (large desktops)
    },
    extend: {
   
    },
    
  },
  plugins: [],
  
}

