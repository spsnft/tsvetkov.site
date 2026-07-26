import en from '@/src/locales/en.json';

export type Language = 'en' | 'ru' | 'th';
export type Dictionary = typeof en;

// Помощник для безопасной типизации переводов
export type TranslationKeys = keyof Dictionary;
