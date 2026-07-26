import type { Language, Dictionary } from '@/src/types/i18n';

const dictionaries: Record<Language, () => Promise<Dictionary>> = {
  en: () => import('@/src/locales/en.json').then((module) => module.default),
  ru: () => import('@/src/locales/ru.json').then((module) => module.default),
  th: () => import('@/src/locales/th.json').then((module) => module.default),
};

export const getDictionary = async (lang: Language): Promise<Dictionary> => {
  const loadDictionary = dictionaries[lang] || dictionaries.en;
  return loadDictionary();
};
