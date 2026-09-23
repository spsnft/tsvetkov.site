'use client';

import { useRef } from 'react';
import { T } from '@/src/theme/tokens';
import { homePadCSS } from '@/src/theme/homeContainer';
import ParticleField from '@/src/components/lab/ParticleField';

// Same values Contact.tsx uses for its own particle-bg layer.
const PARTICLE_COLORS = ['rgba(245, 243, 238, 0.55)', 'rgba(245, 243, 238, 0.28)'];
const PARTICLE_MAX_SIZE = 3.75;

interface Metric {
  value: string;
  note: string;
  field: string;
}

interface ProofProps {
  metrics: [Metric, Metric, Metric];
  slogan: string;
  portraitAlt: string;
}

export const Proof = ({ metrics, slogan, portraitAlt }: ProofProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section className="proof" ref={sectionRef}>
      <style jsx>{`
        .proof {
          position: relative;
          overflow: hidden;
          background: ${T.home.color.dark};
          color: ${T.home.color.textOnDarkPrimary};
        }

        .particle-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* Mobile — no bottom padding: the photo sits flush against the
           section's bottom edge, dark bg showing only on its sides. */
        .mobile {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 24px 24px 0 24px;
        }

        @media (min-width: 768px) {
          .mobile {
            display: none;
          }
        }

        .metrics-mobile {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .metric-mobile {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .value-mobile {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          font-size: ${T.home.type.mobile.display};
        }

        .note-mobile {
          font-family: ${T.home.font.sans};
          font-weight: 500;
          color: ${T.home.color.textOnDarkPrimary};
          font-size: ${T.home.type.mobile.base};
        }

        .field-mobile {
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          font-size: ${T.home.type.mobile.micro};
        }

        .slogan-mobile {
          font-family: ${T.home.font.mono};
          color: ${T.home.color.textOnDarkFaint};
          text-transform: uppercase;
          white-space: nowrap;
          overflow-x: auto;
          font-size: ${T.home.type.mobile.label};
          letter-spacing: 0.055em;
        }

        .photo-mobile {
          position: relative;
          z-index: 1;
          display: block;
          align-self: center;
          width: 100%;
          max-width: 280px;
          aspect-ratio: 4 / 5;
          object-fit: cover;
        }

        /* Tablet/desktop */
        .wide {
          position: relative;
          z-index: 1;
          display: none;
        }

        @media (min-width: 768px) {
          .wide {
            ${homePadCSS()}
            display: flex;
            flex-direction: column;
            gap: 52px;
            padding-top: 48px;
            padding-bottom: 48px;
          }
        }

        .metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 0;
          justify-content: start;
        }

        @media (min-width: 1280px) {
          .metrics {
            grid-template-columns: max-content max-content max-content;
            column-gap: 155.5px;
          }
        }

        .metric {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 16px;
        }

        .value {
          font-family: ${T.home.font.sans};
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1;
          font-variant-numeric: tabular-nums;
          font-size: 54px;
        }

        @media (min-width: 1280px) {
          .value {
            font-size: ${T.home.type.desktop.metric};
          }
        }

        .note {
          font-family: ${T.home.font.sans};
          font-weight: 500;
          color: ${T.home.color.textOnDarkPrimary};
          font-size: ${T.home.type.desktop.base};
        }

        .field {
          font-family: ${T.home.font.sans};
          color: ${T.home.color.textOnDarkMuted};
          font-size: ${T.home.type.desktop.label};
        }

        .slogan {
          font-family: ${T.home.font.mono};
          color: ${T.home.color.textOnDarkFaint};
          text-transform: uppercase;
          white-space: nowrap;
          overflow-x: auto;
          font-size: 28px;
          letter-spacing: 0.045em;
        }

        @media (min-width: 1280px) {
          .slogan {
            font-size: ${T.home.type.desktop.slogan};
            letter-spacing: 0.049em;
          }
        }

      `}</style>

      <div className="particle-bg" aria-hidden="true">
        <ParticleField
          backgroundColor="transparent"
          particleColors={PARTICLE_COLORS}
          particleCount={16}
          mobileParticleCount={10}
          maxSize={PARTICLE_MAX_SIZE}
          connectionLines
          linesNearPointerOnly
          interactionTarget={sectionRef}
          tapToggle
        />
      </div>

      {/* Mobile */}
      <div className="mobile">
        <div className="metrics-mobile">
          {metrics.map((m, i) => (
            <div className="metric-mobile" key={i}>
              <div className="value-mobile">{m.value}</div>
              <div className="note-mobile">{m.note}</div>
              <div className="field-mobile">{m.field}</div>
            </div>
          ))}
        </div>
        <div className="slogan-mobile">{slogan}</div>
        <img className="photo-mobile" src="/hero-card.webp" alt={portraitAlt} />
      </div>

      {/* Tablet/desktop */}
      <div className="wide">
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
      </div>
    </section>
  );
};
