import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ar: resolve(__dirname, 'ar/index.html'),
        en: resolve(__dirname, 'en/index.html'),
      },
    },
  },
});
