import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: The base must match your GitHub repository name
  // If your repo is https://github.com/username/birthday-hari
  // Then base should be '/birthday-hari/'
  base: '/birthday-hari/',
})