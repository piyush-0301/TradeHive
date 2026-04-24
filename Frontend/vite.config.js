import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- Make sure it says this!

export default defineConfig({
  plugins: [react()],
})