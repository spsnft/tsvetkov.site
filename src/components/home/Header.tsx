'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';
import { homePad0CSS } from '@/src/theme/homeContainer';

const LOCALES = ['en', 'ru'] as const;

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  lang: string;
  brand: string;
  waLink: string;
  whatsappLabel: string;
  navLinks: [NavLink, NavLink, NavLink];
}

export const Header = ({ lang, brand, waLink, whatsappLabel, navLinks }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLang = (next: string) => {
    if (!pathname || next === lang) return;
    const segments = pathname.split('/');
    segments[1] = next;
    startTransition(() => router.push(segments.join('/')));
  };

  return (
    <header className="home-header">
      <style jsx>{`
        .home-header {
          ${homePad0CSS()}
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          background: ${T.home.color.bgLight};
          font-family: ${T.home.font.sans};
        }

        .logo-block {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          text-decoration: none;
          color: ${T.home.color.textPrimary};
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .logo-block {
            gap: 16px;
            padding: 16px 32px;
          }
        }

        .badge {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${T.home.color.dark};
          color: ${T.home.color.textOnDarkPrimary};
          font-family: ${T.home.font.mono};
          font-size: 11px;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .badge {
            width: 30px;
            height: 30px;
          }
        }

        .brand-name {
          font-size: 15px;
          font-weight: 600;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .brand-name {
            font-size: 16px;
          }
        }

        /* Name hidden 768–1279: only the FT mark stays, freeing up room
           for nav-links. Full "FT + Fedor Tsvetkov" below 768 and at 1280+. */
        @media (min-width: 768px) and (max-width: 1279px) {
          .brand-name {
            display: none;
          }
        }

        /* padding-right on the container (not margin on the last link) —
           the gap to the locale switch/WhatsApp on its right. 32px
           768-1279, 48px at 1280+. */
        .nav-links {
          display: none;
          align-items: center;
          gap: 32px;
          font-size: 16px;
          font-weight: 400;
          padding-right: 32px;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        @media (min-width: 1280px) {
          .nav-links {
            padding-right: 48px;
          }
        }

        .nav-links :global(a) {
          color: ${T.home.color.textSecondary};
          text-decoration: none;
        }

        .nav-links :global(a:hover) {
          color: ${T.home.color.accent};
        }

        /* Locale switch + WhatsApp link, on paper, right-aligned — same at
           every width; there's no dark segment to hand off to anymore. */
        .right {
          display: flex;
          align-items: stretch;
          flex: 1;
          justify-content: flex-end;
        }

        .locale-switch {
          display: flex;
          align-items: center;
          font-family: ${T.home.font.mono};
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .locale-btn {
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          padding: 0 6px;
          color: ${T.home.color.textSecondary};
          opacity: ${isPending ? 0.6 : 1};
        }

        .locale-btn.active {
          color: ${T.home.color.accent};
          font-weight: 500;
        }

        .wa-link {
          display: flex;
          align-items: center;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.accent};
          text-decoration: none;
          white-space: nowrap;
          font-size: 12px;
          padding: 0 12px 0 18px;
        }

        .wa-link:hover {
          color: ${T.home.color.accentHoverLight};
        }
      `}</style>

      <a href={`/${lang}`} className="logo-block">
        <span className="badge">FT</span>
        <span className="brand-name">{brand}</span>
      </a>

      <nav className="nav-links">
        {navLinks.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>

      <div className="right">
        <div className="locale-switch">
          {LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              className={`locale-btn${lang === l ? ' active' : ''}`}
              onClick={() => switchLang(l)}
            >
              {l}
            </button>
          ))}
        </div>
        <a className="wa-link" href={waLink} target="_blank" rel="noopener">
          {whatsappLabel}
        </a>
      </div>
    </header>
  );
};
