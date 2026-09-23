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

export const Hero = ({ lang, place, heroA, heroB, mobileLines, cta, waLink }: HeroProps) => {
  return (
    <section className="hero">
      <style jsx>{`
        .hero {
          background: ${T.home.color.bgLight};
        }

        /* Below 1280: single column, mobile-sized H1 built from mobileLines. */
        .copy-mobile {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 32px;
          padding-bottom: 32px;
          ${homePadCSS()}
        }

        @media (min-width: 1280px) {
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

        @media (min-width: 768px) {
          h1.mobile {
            display: none;
          }
        }

        /* 768–1279: same two-line heroA/heroB copy as the 1280+ H1
           (h1.desktop below), just at a fixed 60px instead of the
           desktop.display token — still inside .copy-mobile, so the
           status line/button underneath keep their current layout. */
        h1.tablet {
          display: none;
          margin: 0;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-size: 60px;
        }

        @media (min-width: 768px) {
          h1.tablet {
            display: block;
          }
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

        /* From 1280: single column, full container width, desktop H1. */
        .wide {
          display: none;
        }

        @media (min-width: 1280px) {
          .wide {
            ${homePadCSS()}
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }

        .heading-block {
          display: flex;
          flex-direction: column;
          gap: 19px;
        }

        h1.desktop {
          margin: 0;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-size: ${T.home.type.desktop.display};
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
      `}</style>

      {/* Below 1280 */}
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
        <h1 className="tablet">
          {heroA}
          <br />
          {heroB}
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

      {/* From 1280 */}
      <div className="wide">
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
    </section>
  );
};
