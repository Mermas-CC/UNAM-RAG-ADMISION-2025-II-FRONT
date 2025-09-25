// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./",   // 👈 agrega esto
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
  publicDir: 'public',
});
