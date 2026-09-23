'use client';

import { Fragment } from 'react';
import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';
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
          background: ${T.home.color.bgLight};
        }

        /* Below 768: unchanged plain flow. */
        .copy-mobile {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 32px;
          padding-bottom: 32px;
          ${homePadCSS()}
        }

        @media (min-width: 768px) {
          .copy-mobile {
            display: none;
          }
        }

        h1.mobile {
          margin: 0;
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

        /* From 768: light two-column layout — text left, photo card right. */
        .wide {
          display: none;
        }

        @media (min-width: 768px) {
          .wide {
            ${homePadCSS()}
            display: flex;
            align-items: center;
            gap: 48px;
            padding-top: 48px;
            padding-bottom: 48px;
          }
        }

        .copy {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 21px;
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

        /* 768–1279: mobile-sized H1 (mobileLines). From 1280: desktop H1
           (heroA/heroB) takes over — see the two @media rules below. */
        h1.tablet {
          display: block;
          margin: 0;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.display};
          line-height: 0.98;
          letter-spacing: -0.038em;
        }

        @media (min-width: 1280px) {
          h1.tablet {
            display: none;
          }
        }

        h1.desktop {
          display: none;
          margin: 0 0 0 -6px;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-size: ${T.home.type.desktop.display};
        }

        @media (min-width: 1280px) {
          h1.desktop {
            display: block;
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

        .card {
          flex-shrink: 0;
          width: min(30%, 320px);
          aspect-ratio: 4 / 5;
          background: ${T.home.color.dark};
        }

        .card-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 100%;
        }
      `}</style>

      {/* Below 768 */}
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

      {/* From 768 */}
      <div className="wide">
        <div className="copy">
          <div className="heading-block">
            <StatusLine key={lang} lang={lang} place={place} />
            <h1 className="tablet">
              {mobileLines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
              <span className="accent-dot">.</span>
            </h1>
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
        <div className="card">
          <img className="card-img" src="/hero-card.webp" alt={portraitAlt} />
        </div>
      </div>
    </section>
  );
};
