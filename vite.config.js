import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      // Явно принуждаем компилятор использовать стандарты Svelte 5 Runes
      compilerOptions: {
        runes: true
      }
    })
  ]
});
