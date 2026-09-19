'use client';

import { useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';
import { homePad0CSS, homeGridVarsCSS } from '@/src/theme/homeContainer';

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
          ${homeGridVarsCSS()}
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          background: ${T.home.color.bgLight};
          font-family: ${T.home.font.sans};
        }

        /* Reserve room for the dark segment so logo/nav-links stop where it
           begins instead of running underneath it. --portrait/--pad0 come
           from homeGridVarsCSS() above — the exact same function Hero.tsx
           calls for .hero's own --portrait/--pad0 (src/theme/homeContainer.ts)
           — so this is the same source, not a second hand-typed formula;
           it can't drift from .portrait's own width (calc(var(--portrait) +
           var(--pad0)) is .portrait's grid-column-3 track size verbatim).
           One rule: the vars already switch at 768/1280 on their own. */
        @media (min-width: 768px) {
          .home-header {
            padding-right: calc(var(--portrait) + var(--pad0));
          }
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
           for nav-links next to the (wider, relative to that range) dark
           segment. Full "FT + Fedor Tsvetkov" below 768 and at 1280+. */
        @media (min-width: 768px) and (max-width: 1279px) {
          .brand-name {
            display: none;
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

        /* Mobile only (<768): locale switch + WhatsApp link stay on paper,
           right-aligned in normal flow — unchanged from before the dark
           segment existed. */
        .right {
          display: flex;
          align-items: stretch;
          flex: 1;
          justify-content: flex-end;
        }

        @media (min-width: 768px) {
          .right {
            display: none;
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

        /* Tablet/desktop only (≥768): dark segment, width = calc(var(--portrait)
           + var(--pad0)) — .portrait's own grid-column-3 track size, verbatim,
           from the same --portrait/--pad0 declared above via homeGridVarsCSS().
           Right edge flush with the header's own true right edge
           (position:absolute against the sticky header's padding box ignores
           the header's own padding-right, same full-bleed trick .portrait's
           "+ pad0" term uses) — so both edges line up with .portrait's edges
           at every width, not just the 768/1280 cap points. Persists with the
           sticky header, doesn't disappear on scroll. */
        .dark-segment {
          display: none;
        }

        @media (min-width: 768px) {
          .dark-segment {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: calc(var(--portrait) + var(--pad0));
            background: ${T.home.color.dark};
          }
        }

        .locale-switch-dark {
          display: flex;
          align-items: center;
          font-family: ${T.home.font.mono};
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-left: 24px;
        }

        @media (min-width: 1280px) {
          .locale-switch-dark {
            margin-left: 0;
          }
        }

        .locale-btn-dark {
          border: none;
          background: transparent;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
          letter-spacing: inherit;
          text-transform: inherit;
          padding: 0 8px;
          color: ${T.home.color.textOnDarkMuted};
          opacity: ${isPending ? 0.6 : 1};
        }

        @media (min-width: 1280px) {
          .locale-btn-dark {
            padding: 0 16px;
          }
        }

        .locale-btn-dark.active {
          color: ${T.home.color.accentHoverDark};
          font-weight: 500;
        }

        .wa-link-dark {
          display: flex;
          align-items: center;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.accentHoverDark};
          text-decoration: none;
          white-space: nowrap;
          font-size: 13px;
          padding: 0 24px 0 16px;
        }

        @media (min-width: 1280px) {
          .wa-link-dark {
            border-left: 1px solid ${T.home.color.darkBorder};
            padding: 0 28px;
          }
        }

        .wa-link-dark:hover {
          color: ${T.home.color.textOnDarkPrimary};
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

      {/* Mobile (<768) */}
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

      {/* Tablet/desktop (≥768) */}
      <div className="dark-segment">
        <div className="locale-switch-dark">
          {LOCALES.map((l) => (
            <button
              key={l}
              type="button"
              className={`locale-btn-dark${lang === l ? ' active' : ''}`}
              onClick={() => switchLang(l)}
            >
              {l}
            </button>
          ))}
        </div>
        <a className="wa-link-dark" href={waLink} target="_blank" rel="noopener">
          {whatsappLabel}
        </a>
      </div>
    </header>
  );
};
