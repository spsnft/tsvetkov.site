'use client';

import { Fragment } from 'react';
import { T } from '@/src/theme/tokens';
import { homeGridVarsCSS } from '@/src/theme/homeContainer';
import { StatusLine } from '@/src/components/home/StatusLine';

interface HeroProps {
  lang: string;
  place: string;
  heroA: string;
  heroB: string;
  mobileLines: string[];
  cta: string;
  waLink: string;
  portraitAlt: string;
}

export const Hero = ({ lang, place, heroA, heroB, mobileLines, cta, waLink, portraitAlt }: HeroProps) => {
  return (
    <section className="hero">
      <style jsx>{`
        .hero {
          ${homeGridVarsCSS()}
          background: ${T.home.color.bgLight};
        }

        /* Mobile: plain flow, no grid */
        .copy-mobile {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px 24px 32px 24px;
        }

        @media (min-width: 768px) {
          .copy-mobile {
            display: none;
          }
        }

        h1.mobile {
          margin: 0 0 0 -3px;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.display};
          line-height: 0.98;
          letter-spacing: -0.038em;
        }

        .cta-row-mobile {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .cta-btn-mobile {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 14px;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          font-size: ${T.home.type.mobile.base};
          color: ${T.home.color.textOnDarkPrimary};
          background: ${T.home.color.accent};
          padding: 18px 22px;
          text-decoration: none;
        }

        .cta-btn-mobile:hover {
          background: ${T.home.color.accentHoverLight};
        }

        .portrait-mobile {
          width: 100%;
          background: ${T.home.color.dark};
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          border-bottom: 1px solid ${T.home.color.ruleLight};
        }

        .portrait-img-mobile {
          width: 60%;
          aspect-ratio: 4 / 5;
          display: block;
          object-fit: cover;
        }

        @media (min-width: 768px) {
          .portrait-mobile {
            display: none;
          }
        }

        /* Tablet/desktop: grid — pad | text | portrait+pad0 */
        .grid {
          display: none;
        }

        @media (min-width: 768px) {
          .grid {
            display: grid;
            grid-template-columns: var(--pad) minmax(0, 1fr) calc(var(--portrait) + var(--pad0));
          }
        }

        .copy {
          grid-column: 2;
          display: flex;
          flex-direction: column;
          gap: 21px;
          padding: 80px 48px 80px 0;
          border-right: 1px solid ${T.home.color.ruleLight};
        }

        @media (min-width: 1280px) {
          .copy {
            gap: 18px;
          }
        }

        .heading-block {
          display: flex;
          flex-direction: column;
          gap: 21px;
        }

        @media (min-width: 1280px) {
          .heading-block {
            gap: 19px;
          }
        }

        h1.desktop {
          margin: 0 0 0 -6px;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-size: 52px;
        }

        @media (min-width: 1280px) {
          h1.desktop {
            font-size: ${T.home.type.desktop.display};
          }
        }

        .accent-dot {
          color: ${T.home.color.accent};
        }

        .cta-btn {
          align-self: flex-start;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          font-size: ${T.home.type.desktop.base};
          color: ${T.home.color.textOnDarkPrimary};
          background: ${T.home.color.accent};
          padding: 16px 32px;
          text-decoration: none;
        }

        .cta-btn:hover {
          background: ${T.home.color.accentHoverLight};
        }

        .portrait {
          grid-column: 3;
          align-self: stretch;
          background: ${T.home.color.dark};
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .portrait-img {
          width: 100%;
          aspect-ratio: 4 / 5;
          display: block;
          object-fit: cover;
          object-position: 50% 50%;
        }
      `}</style>

      {/* Mobile */}
      <div className="portrait-mobile">
        <img
          className="portrait-img-mobile"
          src="/hero-45.webp"
          alt={portraitAlt}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="copy-mobile">
        <h1 className="mobile">
          {mobileLines.map((line, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
          <span className="accent-dot">.</span>
        </h1>
        <div className="cta-row-mobile">
          <a className="cta-btn-mobile" href={waLink} target="_blank" rel="noopener">
            {cta}
            <span>→</span>
          </a>
          <StatusLine key={lang} lang={lang} place={place} />
        </div>
      </div>

      {/* Tablet/desktop */}
      <div className="grid">
        <div className="copy">
          <div className="heading-block">
            <StatusLine key={lang} lang={lang} place={place} />
            <h1 className="desktop">
              {heroA}
              <br />
              {heroB}
              <span className="accent-dot">.</span>
            </h1>
          </div>
          <a className="cta-btn" href={waLink} target="_blank" rel="noopener">
            {cta} →
          </a>
        </div>
        <div className="portrait">
          <img className="portrait-img" src="/hero-45.webp" alt={portraitAlt} />
        </div>
      </div>
    </section>
  );
};
