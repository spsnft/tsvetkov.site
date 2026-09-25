'use client';

import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';

interface FooterProps {
  copyright: string;
}

const Badge = () => (
  <span
    aria-hidden="true"
    style={{
      boxSizing: 'border-box',
      width: 28,
      height: 28,
      marginLeft: -2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1.5px solid ${T.home.color.textOnDarkMuted}`,
      color: T.home.color.textOnDarkPrimary,
      fontFamily: T.home.font.mono,
      fontSize: 11,
      fontWeight: 500,
      flexShrink: 0,
    }}
  >
    FT
  </span>
);

export const Footer = ({ copyright }: FooterProps) => {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          ${homePadCSS()}
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 24px;
          padding-bottom: 24px;
          background: ${T.home.color.dark};
          border-top: 1px solid ${T.home.color.darkBorder};
        }

        /* Mobile: badge on the left, copyright pushed to the right. */
        .badge-slot {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .copyright-mobile {
          display: block;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          font-size: ${T.home.type.mobile.micro};
        }

        @media (min-width: 768px) {
          .copyright-mobile {
            display: none;
          }
        }

        /* Tablet/desktop: badge and copyright grouped together on the left. */
        .copyright-wide {
          display: none;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
        }

        @media (min-width: 768px) {
          .copyright-wide {
            display: block;
            font-size: ${T.home.type.desktop.label};
          }
        }
      `}</style>

      <div className="badge-slot">
        <Badge />
        <span className="copyright-wide">{copyright}</span>
      </div>
      <span className="copyright-mobile">{copyright}</span>
    </footer>
  );
};
