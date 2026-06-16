import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        runes: true
      }
    })
  ],
  build: {
    // Отключаем минификацию полностью. Бандл не будет сжиматься и ломаться.
    minify: false
  }
});
