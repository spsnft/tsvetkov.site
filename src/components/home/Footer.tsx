'use client';

import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';

interface FooterProps {
  copyright: string;
}

export const Footer = ({ copyright }: FooterProps) => {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          ${homePadCSS()}
          background: ${T.home.color.dark};
          border-top: 1px solid ${T.home.color.darkBorder};
          padding-top: 24px;
          padding-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .badge {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${T.home.color.darkBorder};
          color: ${T.home.color.textOnDarkPrimary};
          font-family: ${T.home.font.mono};
          font-size: 11px;
          font-weight: 500;
          border-radius: 6px;
        }

        .copyright {
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          font-size: ${T.home.type.mobile.micro};
        }

        @media (min-width: 768px) {
          .copyright {
            font-size: ${T.home.type.desktop.label};
          }
        }
      `}</style>

      <span className="badge" aria-hidden="true">
        FT
      </span>
      <span className="copyright">{copyright}</span>
    </footer>
  );
};
