/**
 * Канонический хост продакшена.
 *
 * Абсолютные URL в мете (og:image в том числе) строятся только от него: без
 * явного metadataBase Next.js подставляет VERCEL_URL, и на превью-деплое в
 * og:image уезжает адрес вида *-git-*.vercel.app, который потом кешируется
 * мессенджерами. NEXT_PUBLIC_SITE_URL может переопределить хост, но по
 * умолчанию и на проде, и на превью в мету попадает продакшен-домен.
 */
const RAW = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tsvetkov.site';

export const SITE_URL = RAW.replace(/\/+$/, '');

export const siteUrl = (path = '/') => new URL(path, `${SITE_URL}/`).toString();
