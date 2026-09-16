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
          ${homePadCSS()}
          background: ${T.home.color.bgLight};
          padding-top: 32px;
          padding-bottom: 32px;
        }

        @media (min-width: 768px) {
          .services {
            padding-top: 64px;
            padding-bottom: 32px;
          }
        }

        h2 {
          margin: 0 0 24px;
          font-family: ${T.home.font.sans};
          font-weight: 700;
          letter-spacing: -0.03em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.h2};
        }

        @media (min-width: 768px) {
          h2 {
            font-size: ${T.home.type.desktop.h2};
          }
        }

        .row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 24px 0;
          border-top: 1px solid ${T.home.color.ruleLight};
        }

        @media (min-width: 768px) {
          .row {
            flex-direction: row;
            align-items: baseline;
            gap: 32px;
          }
        }

        .n {
          font-family: ${T.home.font.mono};
          font-weight: 500;
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.mobile.base};
          flex-shrink: 0;
        }

        @media (min-width: 768px) {
          .n {
            font-size: ${T.home.type.desktop.base};
            width: 40px;
          }
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }

        .title {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.015em;
          color: ${T.home.color.textPrimary};
          font-size: ${T.home.type.mobile.body};
        }

        @media (min-width: 768px) {
          .title {
            font-size: ${T.home.type.desktop.body};
          }
        }

        .body {
          margin: 0;
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textSecondary};
          font-size: ${T.home.type.mobile.body};
          line-height: 1.55;
          letter-spacing: -0.012em;
        }

        @media (min-width: 768px) {
          .body {
            font-size: ${T.home.type.desktop.body};
            line-height: 1.45;
          }
        }

        .link {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          color: ${T.home.color.accent};
          text-decoration: none;
        }

        .link:hover {
          color: ${T.home.color.accentHoverLight};
        }
      `}</style>

      <h2>{title}</h2>

      {items.map((item) => (
        <div className="row" key={item.n}>
          <span className="n">{item.n}</span>
          <div className="content">
            <div className="title">{item.title}</div>
            <p className="body">{item.body}</p>
            {item.link && item.linkLabel && (
              <a className="link" href={item.link}>
                {item.linkLabel} →
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
