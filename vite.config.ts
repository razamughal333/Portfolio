import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from razamughal333.github.io/Portfolio/,
  // so every asset path must start with /Portfolio/.
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
