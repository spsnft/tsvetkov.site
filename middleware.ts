import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Если пользователь заходит на корень сайта (/), отправляем его на /en
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Пропускаем системные файлы Next.js, статичные изображения и API-руты
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico).*)'],
};
