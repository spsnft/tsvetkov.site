'use client';

import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';

interface HeroProps {
  heroA: string;
  heroB: string;
  cta: string;
  waLink: string;
}

// Portrait column width = round(cap × 0.3) per design/system-report-v2.md §4.
// cap 768 (tablet) → 230px, cap 1280 (desktop) → 384px.
const PORTRAIT_TABLET = 230;
const PORTRAIT_DESKTOP = 384;

export const Hero = ({ heroA, heroB, cta, waLink }: HeroProps) => {
  return (
    <section className="hero">
      <style jsx>{`
        .hero {
          ${homePadCSS()}
          background: ${T.home.color.bgLight};
          padding-top: 24px;
          padding-bottom: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .hero {
            padding-top: 80px;
            padding-bottom: 80px;
            flex-direction: row;
            align-items: stretch;
            gap: 32px;
          }
        }

        .copy {
          display: flex;
          flex-direction: column;
          gap: 16px;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .copy {
            flex: 1;
            /* Optical compensation around the H1 block — one-off, not part
               of the shared vertical scale (§3). */
            gap: 20px;
          }
        }

        h1 {
          margin: 0;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.display};
          line-height: 0.98;
          letter-spacing: -0.038em;
        }

        @media (min-width: 768px) {
          h1 {
            /* Tablet max size that still keeps two lines inside a 448px
               column — one-off, doesn't belong to the shared type scale. */
            font-size: 52px;
            line-height: 0.97;
            letter-spacing: -0.039em;
          }
        }

        @media (min-width: 1280px) {
          h1 {
            font-size: ${T.home.type.desktop.display};
            line-height: 0.95;
            letter-spacing: -0.04em;
          }
        }

        h1 .accent-dot {
          color: ${T.home.color.accent};
        }

        .cta-btn {
          align-self: flex-start;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          font-size: ${T.home.type.mobile.base};
          color: ${T.home.color.textOnDarkPrimary};
          background: ${T.home.color.accent};
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s ease;
        }

        @media (min-width: 768px) {
          .cta-btn {
            font-size: ${T.home.type.desktop.base};
          }
        }

        .cta-btn:hover {
          background: ${T.home.color.accentHoverLight};
        }

        .portrait {
          /* Placeholder — solid fill, real photo comes later. Height on
             mobile is a one-off, not part of the shared spacing scale. */
          background: ${T.home.color.dark};
          border-radius: 8px;
          height: 240px;
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .portrait {
            width: ${PORTRAIT_TABLET}px;
            height: auto;
          }
        }

        @media (min-width: 1280px) {
          .portrait {
            width: ${PORTRAIT_DESKTOP}px;
          }
        }
      `}</style>

      <div className="copy">
        <h1>
          {heroA}
          <br />
          {heroB}
          <span className="accent-dot">.</span>
        </h1>
        <a className="cta-btn" href={waLink} target="_blank" rel="noopener">
          {cta}
        </a>
      </div>

      <div className="portrait" aria-hidden="true" />
    </section>
  );
};
