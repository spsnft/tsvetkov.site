/**
 * Канонический хост продакшена.
 *
 * Абсолютные URL в мете (og:image в том числе) строятся только от него: без
 * явного metadataBase Next.js подставляет VERCEL_URL, и в og:image уезжает
 * адрес вида *-git-*.vercel.app, который потом кешируется мессенджерами.
 *
 * Одного metadataBase оказалось мало: NEXT_PUBLIC_SITE_URL в окружении
 * задеплоенного проекта сам содержал адрес превью-домена, поэтому подстановка
 * возвращалась через переменную. Ниже переменная не просто читается, а
 * проверяется: всё, что резолвится в *.vercel.app, localhost или в невалидный
 * URL, отбрасывается в пользу продакшен-домена. Переопределить хост
 * переменной по-прежнему можно — но только на реальный домен.
 */
const PRODUCTION_URL = 'https://www.tsvetkov.site';

function resolveSiteUrl(raw: string | undefined): string {
  if (!raw) return PRODUCTION_URL;

  const trimmed = raw.trim().replace(/\/+$/, '');
  if (!trimmed) return PRODUCTION_URL;

  // Переменную окружения задают и без схемы («www.tsvetkov.site»)
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  let host: string;
  try {
    host = new URL(withScheme).hostname.toLowerCase();
  } catch {
    return PRODUCTION_URL;
  }

  // Превью- и локальные хосты в каноническую мету попадать не должны
  const isEphemeral =
    host.endsWith('.vercel.app') ||
    host === 'localhost' ||
    host.endsWith('.localhost') ||
    host === '127.0.0.1';

  return isEphemeral ? PRODUCTION_URL : withScheme;
}

export const SITE_URL = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteUrl = (path = '/') => new URL(path, `${SITE_URL}/`).toString();
