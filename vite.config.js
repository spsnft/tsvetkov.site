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
    // Нацеливаем сборщик на стабильные и проверенные стандарты
    target: 'es2022',
    // Отключаем минификацию esbuild, которая могла агрессивно вырезать полифилы прототипов
    minify: 'terser',
    terserOptions: {
      compress: {
        /* Пассивное сжатие, чтобы не ломать внутренние call-методы Svelte */
        keep_fnames: true,
        keep_classnames: true
      }
    }
  }
});
