/**
 * Канонический хост продакшена.
 *
 * Абсолютные URL в мете (og:image в том числе) строятся только от него: без
 * явного metadataBase Next.js подставляет VERCEL_URL, и на превью-деплое в
 * og:image уезжает адрес вида *-git-*.vercel.app, который потом кешируется
 * мессенджерами.
 *
 * Одного metadataBase оказалось мало: NEXT_PUBLIC_SITE_URL в окружении сборки
 * сам содержал адрес превью-деплоя, поэтому подменённая база всё равно
 * приводила к *.vercel.app. Теперь любой хост на vercel.app отбрасывается —
 * какой бы ни была переменная, в мету попадает продакшен-домен. Локальные
 * хосты (localhost и собственные домены) переопределение по-прежнему проходят.
 */
const CANONICAL = 'https://www.tsvetkov.site';

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return CANONICAL;

  let host: string;
  try {
    host = new URL(raw).hostname;
  } catch {
    // Значение не является абсолютным URL — доверять ему нельзя
    return CANONICAL;
  }

  // Превью- и продакшен-деплои Vercel: og:image должен указывать на домен сайта
  if (host === 'vercel.app' || host.endsWith('.vercel.app')) return CANONICAL;

  return raw.replace(/\/+$/, '');
}

export const SITE_URL = resolveSiteUrl();

export const siteUrl = (path = '/') => new URL(path, `${SITE_URL}/`).toString();
