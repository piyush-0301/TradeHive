import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- Make sure it says this!

export default defineConfig({
  plugins: [react()],
  base: './', // This tells the browser to look in the current folder for files
})