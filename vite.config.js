import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"/brand/",
  plugins: [react(),tailwindcss()],
  server: {
    port: 5174,   // or any port you want
    open: true    // this tells Vite to open the browser automatically
  }
})
