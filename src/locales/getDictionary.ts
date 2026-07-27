import en from './en.json';
import ru from './ru.json';
import th from './th.json';

const dictionaries = { en, ru, th };

export const getDictionary = (lang: string) => {
  // Возвращаем словарь по ключу, если языка нет — отдаем английский по умолчанию
  return dictionaries[lang as keyof typeof dictionaries] || dictionaries.en;
};
