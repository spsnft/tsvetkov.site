'use client';

import { useEffect, useState } from 'react';

// Динамическая загрузка словарей — каждая локаль грузится только когда нужна
const dictionaryLoaders = {
  en: () => import('./en.json').then(m => m.default || m),
  ru: () => import('./ru.json').then(m => m.default || m),
  th: () => import('./th.json').then(m => m.default || m),
};

// Тип словаря на основе английского
type Dictionary = typeof import('./en.json');

// Хук для клиентских компонентов
export function useDictionary(lang: string): Dictionary | null {
  const [dict, setDict] = useState<Dictionary | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loader = dictionaryLoaders[lang as keyof typeof dictionaryLoaders] || dictionaryLoaders.en;
    loader().then(module => {
      if (!cancelled) setDict(module);
    });

    return () => { cancelled = true; };
  }, [lang]);

  return dict;
}
