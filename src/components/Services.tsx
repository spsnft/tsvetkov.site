'use client';

import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';

interface ServiceItem {
  n: string;
  title: string;
  body: string;
  link?: string;
  linkLabel?: string;
}

interface ServicesProps {
  title: string;
  items: ServiceItem[];
}

export const Services = ({ title, items }: ServicesProps) => {
  return (
    <section className="services" id="services">
      <style jsx>{`
        .services {
          background: ${T.home.color.bgLight};
        }

        /* Mobile */
        .mobile {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 32px 24px;
        }

        @media (min-width: 768px) {
          .mobile {
            display: none;
          }
        }

        h2.section-title-mobile {
          margin: 0;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.h2};
        }

        .row-mobile {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 24px 0;
          border-top: 1px solid ${T.home.color.ruleLight};
        }

        .row-mobile:first-of-type {
          border-top: none;
        }

        .row-mobile:last-of-type {
          padding-bottom: 0;
        }

        .title-row-mobile {
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .n-mobile {
          font-family: ${T.home.font.mono};
          font-weight: 500;
          color: ${T.home.color.textPrimary};
          font-size: 15px;
        }

        .title-mobile {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.015em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.body};
        }

        .body-mobile {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.mobile.body};
          line-height: 1.55;
        }

        .link-mobile {
          align-self: flex-start;
          font-family: ${T.home.font.sans};
          font-weight: 500;
          color: ${T.home.color.accent};
          text-decoration: none;
          font-size: ${T.home.type.mobile.base};
        }

        .link-mobile:hover {
          color: ${T.home.color.accentHoverLight};
        }

        /* Tablet/desktop */
        .wide {
          display: none;
        }

        @media (min-width: 768px) {
          .wide {
            display: flex;
            flex-direction: column;
            padding-bottom: 32px;
          }
        }

        h2.section-title-wide {
          margin: 0;
          ${homePadCSS()}
          padding-top: 64px;
          padding-bottom: 32px;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.desktop.h2};
        }

        .row {
          ${homePadCSS()}
          display: grid;
          grid-template-columns: max-content max-content 0px minmax(0, 1fr);
          padding-top: 24px;
          padding-bottom: 24px;
          align-items: start;
          border-top: 1px solid ${T.home.color.ruleLight};
        }

        .row:first-of-type {
          border-top: none;
        }

        .row:last-of-type {
          padding-bottom: 0;
        }

        @media (min-width: 1280px) {
          .row {
            grid-template-columns: minmax(0, 44px) minmax(0, 340px) minmax(0, 820px) minmax(0, 1fr);
          }
        }

        .n {
          grid-column: 1;
          align-self: baseline;
          position: relative;
          top: -3px;
          font-family: ${T.home.font.mono};
          font-weight: 500;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.desktop.base};
          padding-right: 12px;
        }

        @media (min-width: 1280px) {
          .n {
            padding-right: 0;
          }
        }

        .title {
          grid-column: 2;
          align-self: baseline;
          padding-right: 24px;
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.015em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.desktop.body};
        }

        .desc {
          grid-column: 1 / span 4;
          grid-row: 2;
          margin-top: 10px;
          align-self: baseline;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @media (min-width: 1280px) {
          .desc {
            grid-column: 3;
            grid-row: auto;
            margin-top: 0;
          }
        }

        .body {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.desktop.body};
          line-height: 1.45;
          letter-spacing: -0.012em;
          max-width: 820px;
        }

        .link {
          font-family: ${T.home.font.sans};
          font-weight: 500;
          color: ${T.home.color.accent};
          text-decoration: none;
          font-size: ${T.home.type.desktop.base};
        }

        .link:hover {
          color: ${T.home.color.accentHoverLight};
        }
      `}</style>

      {/* Mobile */}
      <div className="mobile">
        <h2 className="section-title-mobile">{title}</h2>
        {items.map((item) => (
          <div className="row-mobile" key={item.n}>
            <div className="title-row-mobile">
              <span className="n-mobile">{item.n}</span>
              <span className="title-mobile">{item.title}</span>
            </div>
            <p className="body-mobile">{item.body}</p>
            {item.link && item.linkLabel && (
              <a className="link-mobile" href={item.link}>
                {item.linkLabel} →
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Tablet/desktop */}
      <div className="wide">
        <h2 className="section-title-wide">{title}</h2>
        {items.map((item) => (
          <div className="row" key={item.n}>
            <span className="n">{item.n}</span>
            <span className="title">{item.title}</span>
            <div className="desc">
              <p className="body">{item.body}</p>
              {item.link && item.linkLabel && (
                <a className="link" href={item.link}>
                  {item.linkLabel} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
