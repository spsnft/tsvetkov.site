import { useEffect, useState } from 'react';

// Динамическая загрузка словарей (code-splitting работает)
const dictionaryLoaders = {
  en: () => import('./en.json').then(m => m.default || m),
  ru: () => import('./ru.json').then(m => m.default || m),
  th: () => import('./th.json').then(m => m.default || m),
};

// Тип для словаря (на основе английского)
type Dictionary = typeof import('./en.json');

// Хук для клиентских компонентов
export function useDictionary(lang: string) {
  const [dict, setDict] = useState<Dictionary | null>(null);

  useEffect(() => {
    const loader = dictionaryLoaders[lang as keyof typeof dictionaryLoaders] || dictionaryLoaders.en;
    loader().then(setDict);
  }, [lang]);

  return dict;
}
