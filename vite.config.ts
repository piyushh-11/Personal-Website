import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        fallback: './404.html',
      },
    },
  },
  plugins: [react()],
  base: '/', // No need to change this for `username.github.io` repositories
});