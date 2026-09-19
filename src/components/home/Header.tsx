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

// Dark segment's width = the .portrait column's width (--portrait, see
// homeGridVarsCSS in src/theme/homeContainer.ts) plus the container's own
// right padding (padExtra) — same tablet/desktop cap values Hero.tsx reads
// from T.home.container, so the segment's right edge tracks .portrait's
// right edge (both anchored to the true viewport edge via the matching
// "+ pad0" term below) without duplicating the --portrait formula itself.
const { tablet, desktop } = T.home.container;
const portraitWidthTablet = Math.round(tablet.cap * 0.3);
const portraitWidthDesktop = Math.round(desktop.cap * 0.3);
const segmentWidthTablet = portraitWidthTablet + tablet.padExtra;
const segmentWidthDesktop = portraitWidthDesktop + desktop.padExtra;

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
          border-bottom: 1px solid ${T.home.color.ruleLight};
          font-family: ${T.home.font.sans};
        }

        /* Reserve room for the dark segment so logo/nav-links stop where it
           begins instead of running underneath it. Same width formula as
           .dark-segment below — deliberately duplicated (not read off a
           shared var) since Header and Hero are DOM siblings and Hero's
           --portrait custom property isn't in scope here. */
        @media (min-width: 768px) {
          .home-header {
            padding-right: calc(max(0px, (100vw - ${tablet.cap}px) / 2) + ${segmentWidthTablet}px);
          }
        }

        @media (min-width: 1280px) {
          .home-header {
            padding-right: calc(max(0px, (100vw - ${desktop.cap}px) / 2) + ${segmentWidthDesktop}px);
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

        /* Hidden 768–1279: the dark segment's width there (--portrait +
           tablet padExtra) doesn't leave enough room next to the logo for
           three nav items at a legible size, especially the longer RU
           labels. Reappears at 1280+, where the desktop segment leaves
           ~600px — comfortably more than nav needs. */
        .nav-links {
          display: none;
          align-items: center;
          gap: 32px;
          font-size: 16px;
          font-weight: 400;
        }

        @media (min-width: 1280px) {
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

        /* Tablet/desktop only (≥768): dark segment, same width as .portrait
           (--portrait + container padExtra), right edge flush with the
           header's own true right edge (position:absolute against the
           sticky header's padding box ignores the header's own
           padding-right, same "+ pad0" full-bleed trick .portrait uses) —
           so it lines up with .portrait's right edge at every width, not
           just the 768/1280 cap points. Persists with the sticky header,
           doesn't disappear on scroll. */
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
            width: calc(max(0px, (100vw - ${tablet.cap}px) / 2) + ${segmentWidthTablet}px);
            background: ${T.home.color.dark};
          }
        }

        @media (min-width: 1280px) {
          .dark-segment {
            width: calc(max(0px, (100vw - ${desktop.cap}px) / 2) + ${segmentWidthDesktop}px);
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
