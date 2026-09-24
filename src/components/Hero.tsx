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

        /* One shared column for status line, H1 and CTA button across every
           width — visual grouping/order differs below vs from 1280 (see
           .copy-rest / .wide-status / .wide-cta), but there is exactly one
           <h1> in the DOM at all times, sized/positioned by CSS alone. */
        .copy {
          display: flex;
          flex-direction: column;
          padding-top: 32px;
          padding-bottom: 32px;
          ${homePadCSS()}
        }

        @media (min-width: 1280px) {
          .copy {
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }

        h1.copy-h1 {
          order: 0;
          margin: 0 0 12px 0;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.display};
          line-height: 0.98;
          letter-spacing: -0.038em;
        }

        /* Below 520: mobileLines (manual 4-line break). From 520: the same
           2-line heroA/heroB copy used at 768+, still at the 44px mobile
           size until the 768 step below raises it to 60px. */
        .h1-compact {
          display: inline;
        }

        .h1-wide {
          display: none;
        }

        @media (min-width: 520px) {
          .h1-compact {
            display: none;
          }

          .h1-wide {
            display: inline;
          }
        }

        @media (min-width: 768px) {
          h1.copy-h1 {
            line-height: 0.95;
            letter-spacing: -0.04em;
            font-size: 60px;
          }
        }

        @media (min-width: 1280px) {
          h1.copy-h1 {
            order: 1;
            margin-bottom: 18px;
            font-size: ${T.home.type.desktop.display};
          }
        }

        .accent-dot {
          color: ${T.home.color.accent};
        }

        /* Below 1280: button + status line grouped together, below the H1. */
        .copy-rest {
          order: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (min-width: 1280px) {
          .copy-rest {
            display: none;
          }
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

        /* From 1280: status line above the H1, CTA button below it — both
           standalone (not grouped with each other), the H1 in between. */
        .wide-status {
          order: 0;
          display: none;
          margin-bottom: 19px;
        }

        @media (min-width: 1280px) {
          .wide-status {
            display: block;
          }
        }

        .wide-cta {
          order: 2;
          display: none;
        }

        @media (min-width: 1280px) {
          .wide-cta {
            display: block;
          }
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

      <div className="copy">
        <div className="wide-status">
          <StatusLine key={lang} lang={lang} place={place} />
        </div>

        <h1 className="copy-h1">
          <span className="h1-compact">
            {mobileLines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </span>
          <span className="h1-wide">
            {heroA}
            <br />
            {heroB}
          </span>
          <span className="accent-dot">.</span>
        </h1>

        <div className="copy-rest">
          <a className="cta-btn-mobile" href={waLink} target="_blank" rel="noopener">
            {cta}
            <span>→</span>
          </a>
          <StatusLine key={lang} lang={lang} place={place} />
        </div>

        <div className="wide-cta">
          <a className="cta-btn" href={waLink} target="_blank" rel="noopener">
            {cta} →
          </a>
        </div>
      </div>
    </section>
  );
};
