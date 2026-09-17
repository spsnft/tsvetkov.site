'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';
import { homePad0CSS } from '@/src/theme/homeContainer';

const LOCALES = ['en', 'ru', 'th'] as const;

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  lang: string;
  brand: string;
  waLink: string;
  navLinks: [NavLink, NavLink, NavLink];
}

export const Header = ({ lang, brand, waLink, navLinks }: HeaderProps) => {
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
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          background: ${T.home.color.bgLight};
          border-bottom: 1px solid ${T.home.color.ruleLight};
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

        .nav-links {
          display: none;
          align-items: center;
          gap: 32px;
          font-size: 16px;
          font-weight: 400;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-links :global(a) {
          color: ${T.home.color.textSecondary};
          text-decoration: none;
        }

        .nav-links :global(a:hover) {
          color: ${T.home.color.accent};
        }

        .right {
          display: flex;
          align-items: stretch;
          flex: 1;
          justify-content: flex-end;
        }

        @media (min-width: 768px) {
          .right {
            flex: none;
          }
        }

        .locale-switch {
          display: flex;
          align-items: center;
          font-family: ${T.home.font.mono};
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .locale-switch {
            letter-spacing: 0.1em;
            margin-left: 24px;
          }
        }

        @media (min-width: 1280px) {
          .locale-switch {
            margin-left: 0;
          }
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

        @media (min-width: 768px) {
          .locale-btn {
            padding: 0 8px;
          }
        }

        @media (min-width: 1280px) {
          .locale-btn {
            padding: 0 16px;
          }
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

        @media (min-width: 768px) {
          .wa-link {
            font-size: 13px;
            padding: 0 24px 0 16px;
          }
        }

        @media (min-width: 1280px) {
          .wa-link {
            border-left: 1px solid ${T.home.color.ruleLight};
            padding: 0 28px;
          }
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
          WhatsApp
        </a>
      </div>
    </header>
  );
};
