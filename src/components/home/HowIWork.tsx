'use client';

import { T } from '@/src/theme/tokens';
import { homeGridVarsCSS } from '@/src/theme/homeContainer';

interface HowItem {
  label: string;
  body: string;
}

interface HowIWorkProps {
  title: string;
  items: [HowItem, HowItem];
}

export const HowIWork = ({ title, items }: HowIWorkProps) => {
  return (
    <section className="how" id="process">
      <style jsx>{`
        .how {
          background: ${T.home.color.bgLightAlt};
        }

        /* Mobile */
        .mobile {
          display: flex;
          flex-direction: column;
          gap: 16px;
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

        .col-mobile {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Two subsections read as one paragraph at the 16px flex gap alone
           (continuous text, not a list — no divider) — match tablet's 32px
           separation between them instead. */
        .col-mobile + .col-mobile {
          margin-top: 16px;
        }

        .label-mobile {
          font-family: ${T.home.font.mono};
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.desktop.label};
        }

        .body-mobile {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.body};
          line-height: 1.55;
          text-wrap: pretty;
        }

        /* Tablet/desktop */
        .wide {
          display: none;
        }

        @media (min-width: 768px) {
          .wide {
            ${homeGridVarsCSS()}
            display: grid;
            grid-template-columns: var(--pad) minmax(0, 1fr) minmax(0, 1.1fr) var(--pad);
            padding: 64px 0;
          }
        }

        h2.section-title-wide {
          grid-column: 2 / 4;
          margin: 0 0 32px 0;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.desktop.h2};
        }

        .col1 {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-right: 0;
        }

        @media (min-width: 1280px) {
          .col1 {
            grid-column: 2 / 3;
            padding-right: 64px;
          }
        }

        .col2 {
          grid-column: 2 / 4;
          margin-top: 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (min-width: 1280px) {
          .col2 {
            grid-column: 3 / 4;
            margin-top: 0;
          }
        }

        .label {
          font-family: ${T.home.font.mono};
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.desktop.label};
        }

        :global(:lang(th)) .label-mobile,
        :global(:lang(th)) .label {
          letter-spacing: 0;
        }

        .body {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.desktop.body};
          line-height: 1.45;
          max-width: 820px;
          text-wrap: pretty;
        }
      `}</style>

      {/* Mobile */}
      <div className="mobile">
        <h2 className="section-title-mobile">{title}</h2>
        {items.map((item) => (
          <div className="col-mobile" key={item.label}>
            <span className="label-mobile">{item.label}</span>
            <p className="body-mobile">{item.body}</p>
          </div>
        ))}
      </div>

      {/* Tablet/desktop */}
      <div className="wide">
        <h2 className="section-title-wide">{title}</h2>
        <div className="col1">
          <span className="label">{items[0].label}</span>
          <p className="body">{items[0].body}</p>
        </div>
        <div className="col2">
          <span className="label">{items[1].label}</span>
          <p className="body">{items[1].body}</p>
        </div>
      </div>
    </section>
  );
};
