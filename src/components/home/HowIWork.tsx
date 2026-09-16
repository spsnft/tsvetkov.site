'use client';

import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';

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
    <section className="how">
      <style jsx>{`
        .how {
          ${homePadCSS()}
          background: ${T.home.color.bgLightAlt};
          padding-top: 32px;
          padding-bottom: 32px;
        }

        @media (min-width: 768px) {
          .how {
            padding-top: 64px;
            padding-bottom: 64px;
          }
        }

        h2 {
          margin: 0 0 16px;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.h2};
        }

        @media (min-width: 768px) {
          h2 {
            margin-bottom: 32px;
            font-size: ${T.home.type.desktop.h2};
          }
        }

        .columns {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .columns {
            flex-direction: row;
            gap: 32px;
          }
        }

        .col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .label {
          font-family: ${T.home.font.mono};
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.desktop.label};
        }

        .body {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.mobile.body};
          line-height: 1.55;
        }

        @media (min-width: 768px) {
          .body {
            font-size: ${T.home.type.desktop.body};
            line-height: 1.45;
          }
        }
      `}</style>

      <h2>{title}</h2>
      <div className="columns">
        {items.map((item) => (
          <div className="col" key={item.label}>
            <div className="label">{item.label}</div>
            <p className="body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
