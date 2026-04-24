import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

export default defineConfig({
  plugins: [react()],
  // Make sure there is NO "base: '/something/'" here 
  // unless you are using a sub-path.
})