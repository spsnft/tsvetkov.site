import en from './en.json';
import ru from './ru.json';
import th from './th.json';

// Тип словаря на основе английского
type Dictionary = typeof en;

const dictionaries: Record<string, Dictionary> = { en, ru, th };

// Резолвится синхронно на сервере, чтобы контент был в первом SSR-рендере,
// а не появлялся только после клиентской подгрузки словаря
export function getDictionary(lang: string): Dictionary {
  return dictionaries[lang] || dictionaries.en;
}
