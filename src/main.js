import './app.css';
import { mount } from 'svelte';
import App from './App.svelte';

// Запускаем Svelte строго после полной готовности окна браузера
document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.getElementById('app');
  
  if (targetElement) {
    mount(App, {
      target: targetElement,
    });
  }
});
