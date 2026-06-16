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
    // Переключаем дефолтный esbuild на terser для бережного сжатия прототипов
    minify: 'terser',
    terserOptions: {
      compress: {
        // Запрещаем оптимизатору портить вызовы функций и кеш прототипов
        keep_fnames: true,
        keep_classnames: true,
        reduce_vars: false
      }
    }
  }
});
