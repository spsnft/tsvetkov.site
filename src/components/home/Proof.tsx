'use client';

import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';

interface Metric {
  value: string;
  note: string;
  field: string;
}

interface ProofProps {
  metrics: [Metric, Metric, Metric];
  slogan: string;
}

export const Proof = ({ metrics, slogan }: ProofProps) => {
  return (
    <section className="proof">
      <style jsx>{`
        .proof {
          ${homePadCSS()}
          background: ${T.home.color.dark};
          padding-top: 32px;
          padding-bottom: 32px;
        }

        @media (min-width: 768px) {
          .proof {
            padding-top: 48px;
            padding-bottom: 48px;
          }
        }

        .metrics {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .metrics {
            flex-direction: row;
            gap: 24px;
          }
        }

        .metric {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid ${T.home.color.darkBorder};
          flex: 1;
        }

        @media (min-width: 768px) {
          .metric {
            gap: 16px;
          }
        }

        .value {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.04em;
          font-variant-numeric: tabular-nums;
          color: ${T.home.color.textOnDarkPrimary};
          font-size: ${T.home.type.mobile.display};
        }

        @media (min-width: 768px) {
          .value {
            font-size: 54px;
          }
        }

        @media (min-width: 1280px) {
          .value {
            font-size: ${T.home.type.desktop.metric};
          }
        }

        .note {
          font-family: ${T.home.font.sans};
          font-weight: 500;
          color: ${T.home.color.textOnDarkMuted};
          font-size: ${T.home.type.mobile.base};
        }

        @media (min-width: 768px) {
          .note {
            font-size: ${T.home.type.desktop.base};
          }
        }

        .field {
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          font-size: ${T.home.type.mobile.micro};
        }

        @media (min-width: 768px) {
          .field {
            font-size: ${T.home.type.desktop.label};
          }
        }

        .slogan {
          font-family: ${T.home.font.mono};
          color: ${T.home.color.textOnDarkFaint};
          white-space: nowrap;
          overflow-x: auto;
          /* Row → slogan gap is a one-off (52px in the report), not part of
             the shared spacing scale. */
          margin-top: 32px;
          font-size: ${T.home.type.mobile.label};
          letter-spacing: 0.055em;
        }

        @media (min-width: 768px) {
          .slogan {
            margin-top: 52px;
            font-size: 28px;
            letter-spacing: 0.045em;
          }
        }

        @media (min-width: 1280px) {
          .slogan {
            font-size: ${T.home.type.desktop.slogan};
            letter-spacing: 0.049em;
          }
        }
      `}</style>

      <div className="metrics">
        {metrics.map((m, i) => (
          <div className="metric" key={i}>
            <div className="value">{m.value}</div>
            <div className="note">{m.note}</div>
            <div className="field">{m.field}</div>
          </div>
        ))}
      </div>

      <div className="slogan">{slogan}</div>
    </section>
  );
};
