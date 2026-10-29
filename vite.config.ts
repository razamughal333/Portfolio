import { copyFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from razamughal333.github.io/Portfolio/,
  // so every asset path must start with /Portfolio/.
  base: '/Portfolio/',
  plugins: [
    react(),
    tailwindcss(),
    {
      // GitHub Pages only knows real files. If someone opens /Portfolio/about directly,
      // it serves 404.html instead, and a copy of index.html there lets React Router take over.
      name: 'spa-404-fallback',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html')
      },
    },
  ],
})
