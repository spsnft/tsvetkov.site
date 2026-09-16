'use client';

import { useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';

const LOCALES = ['en', 'ru', 'th'] as const;

const FlagThailand = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true" style={{ flexShrink: 0 }}>
    <rect width="18" height="12" fill={T.home.color.flagWhite} />
    <rect width="18" height="2.4" fill={T.home.color.flagRed} />
    <rect y="9.6" width="18" height="2.4" fill={T.home.color.flagRed} />
    <rect y="3.6" width="18" height="4.8" fill={T.home.color.flagBlue} />
  </svg>
);

function formatBangkokTime() {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Bangkok',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(new Date());
}

function useBangkokTime() {
  const [time, setTime] = useState(formatBangkokTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatBangkokTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

interface HeaderProps {
  lang: string;
  brand: string;
  place: string;
  waLink: string;
}

// "WhatsApp" here is a hardcoded header CTA label, deliberately separate from
// COPY.hero.cta ("WhatsApp me") — see design/system-report-v2.md §6.
export const Header = ({ lang, brand, place, waLink }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const time = useBangkokTime();

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
          /* Header padding is its own one-off (16px 32px desktop / 12px
             12px mobile, §3) — not the shared section container formula. */
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 12px;
          background: ${T.home.color.bgLight};
          border-bottom: 1px solid ${T.home.color.ruleLight};
          font-family: ${T.home.font.sans};
        }

        @media (min-width: 768px) {
          .home-header {
            padding: 16px 32px;
          }
        }

        .badge {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${T.home.color.dark};
          color: ${T.home.color.textOnDarkPrimary};
          font-family: ${T.home.font.mono};
          font-size: 11px;
          font-weight: 500;
          border-radius: 6px;
        }

        .brand-block {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: ${T.home.color.textPrimary};
          flex-shrink: 0;
        }

        .brand-name {
          /* Badge + full name + locale switcher + CTA don't fit on one row
             below ~480px — badge-only carries the brand there. */
          display: none;
          font-size: ${T.home.type.mobile.base};
          font-weight: 600;
          white-space: nowrap;
        }

        @media (min-width: 480px) {
          .brand-name {
            display: inline;
          }
        }

        @media (min-width: 768px) {
          .brand-name {
            font-size: ${T.home.type.desktop.base};
          }
        }

        .status-line {
          display: none;
          align-items: center;
          gap: 8px;
          font-family: ${T.home.font.mono};
          font-size: ${T.home.type.desktop.label};
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: ${T.home.color.textSecondary};
          white-space: nowrap;
        }

        @media (min-width: 1024px) {
          .status-line {
            display: flex;
          }
        }

        .locale-switch {
          display: flex;
          gap: 4px;
          font-family: ${T.home.font.mono};
        }

        .locale-btn {
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 4px 6px;
          font-family: inherit;
          font-size: ${T.home.type.mobile.micro};
          letter-spacing: 0.04em;
          color: ${T.home.color.textSecondary};
          opacity: ${isPending ? 0.6 : 1};
        }

        .locale-btn.active {
          color: ${T.home.color.accent};
          font-weight: 600;
        }

        .cta {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          font-size: ${T.home.type.mobile.base};
          color: ${T.home.color.textOnDarkPrimary};
          background: ${T.home.color.accent};
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s ease;
        }

        @media (min-width: 768px) {
          .cta {
            font-size: ${T.home.type.desktop.base};
          }
        }

        .cta:hover {
          background: ${T.home.color.accentHoverLight};
        }

        .right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .right {
            gap: 24px;
          }
        }
      `}</style>

      <a href={`/${lang}`} className="brand-block">
        <span className="badge">FT</span>
        <span className="brand-name">{brand}</span>
      </a>

      <div className="status-line">
        <FlagThailand />
        <span>{place}</span>
        {time && <span>{time}</span>}
      </div>

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
        <a className="cta" href={waLink} target="_blank" rel="noopener">
          WhatsApp
        </a>
      </div>
    </header>
  );
};
