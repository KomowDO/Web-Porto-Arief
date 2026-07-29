// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Pastikan import ini benar jika pakai Tailwind v4

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // BARIS INI SANGAT PENTING UNTUK GITHUB PAGES:
  base: '/Web-Porto-Arief/', // <--- Gunakan tanda garis miring di awal dan akhir
})