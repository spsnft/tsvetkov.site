import React, { useState } from 'react';
import { HeroTimeline } from './HeroTimeline';
import { T } from '@/src/theme/tokens';

interface HeroProps {
  dict?: any;
}

interface InlineTextChipProps {
  chipKey: string;
  text: string;
  tooltipText?: string;
  activeChip: string | null;
  onHover: (key: string | null) => void;
  isHeader?: boolean;
}

const InlineTextChip: React.FC<InlineTextChipProps> = ({
  chipKey,
  text,
  tooltipText,
  activeChip,
  onHover,
  isHeader = false,
}) => {
  const isActive = activeChip === chipKey;

  return (
    <span
      className={`inline-chip-wrapper ${isActive ? 'is-active' : ''} ${isHeader ? 'header-chip' : 'body-chip'}`}
      onMouseEnter={() => onHover(chipKey)}
      onMouseLeave={() => onHover(null)}
    >
      <span className="chip-text">{text}</span>
      {tooltipText && <span className="chip-popover">{tooltipText}</span>}

      <style jsx>{`
        .inline-chip-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          border-radius: ${T.radius.sm};
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          vertical-align: baseline;
          user-select: none;
        }

        .header-chip {
          padding: 0px 14px;
          margin: 0 4px;
          background: ${T.accent10};
          border: 1px solid ${T.accent30};
          color: ${T.accent};
          box-shadow: 0 0 15px ${T.accent08};
        }

        .body-chip {
          padding: 1px 10px;
          margin: 0 4px;
          background: ${T.accent08};
          border: 1px solid ${T.accent25};
          color: ${T.accent};
        }

        .chip-text {
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .inline-chip-wrapper:hover,
        .inline-chip-wrapper.is-active {
          background: ${T.accent25};
          border-color: ${T.accent};
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px ${T.accent35};
        }

        .chip-popover {
          position: absolute;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%) translateY(4px);
          padding: 4px 10px;
          background: ${T.bg1};
          border: 1px solid ${T.accent40};
          border-radius: ${T.radius.sm};
          font-size: 0.72rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          z-index: 10;
          font-family: monospace, sans-serif;
        }

        .inline-chip-wrapper:hover .chip-popover {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
      `}</style>
    </span>
  );
};

export const Hero = ({ dict }: HeroProps) => {
  const [activeChipKey, setActiveChipKey] = useState<string | null>(null);

  const t = dict?.hero ?? {
    badge: 'TSVETKOV • FOUNDER-LED AGENCY',
    cta: 'Audit My Business',
  };

  return (
    <section className="hero-section">
      <style jsx>{`
        .hero-section {
          width: 100%;
          position: relative;
          padding-top: clamp(4rem, 8vw, 8rem);
          padding-bottom: clamp(4rem, 8vw, 7rem);
          background: transparent;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }

        .hero-grid {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 3rem;
          position: relative;
          z-index: 4;
        }

        @media (max-width: 991px) {
          .hero-grid {
            flex-direction: column;
            gap: 2.5rem;
          }
        }

        .hero-left {
          max-width: 580px;
          flex-shrink: 0;
        }

        @media (max-width: 991px) {
          .hero-left {
            max-width: 100%;
            text-align: center;
          }
        }

        .hero-right {
          width: 520px;
          flex-shrink: 0;
        }

        @media (max-width: 991px) {
          .hero-right {
            width: 100%;
          }
        }

        .hero-title {
          font-size: clamp(2.4rem, 4.8vw, 4.2rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 1.8rem 0;
        }

        .hero-sublines {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          margin-bottom: 2.5rem;
        }

        .subline-item {
          font-size: clamp(1.05rem, 1.8vw, 1.35rem);
          font-weight: 600;
          color: ${T.body};
          line-height: 1.5;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 2.2rem;
          border-radius: ${T.radius.md};
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.01em;
          text-decoration: none;
          cursor: pointer;
          background: linear-gradient(180deg, #00e599 0%, #00a3ff 100%);
          color: #0a0a0c;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow:
            0 8px 20px -6px ${T.accent40},
            0 4px 12px rgba(0, 163, 255, 0.2);
          transition: all 0.2s ease;
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px -6px ${T.accent};
        }
      `}</style>

      {/* Фоновое неоновое свечение */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '0%',
          width: '650px',
          height: '550px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${T.glow} 0%, ${T.accent05} 40%, transparent 70%)`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="hero-grid">
          {/* Левая часть */}
          <div className="hero-left">
            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: T.accent,
                  background: T.accent08,
                  padding: '6px 14px',
                  borderRadius: 20,
                  border: `1px solid ${T.accent25}`,
                }}
              >
                {t.badge}
              </span>
            </div>

            {/* Главный заголовок со встроенными чипсами */}
            <h1 className="hero-title">
              <InlineTextChip
                chipKey="value"
                text="Value"
                tooltipText="ROI & Economics"
                activeChip={activeChipKey}
                onHover={setActiveChipKey}
                isHeader
              />
              Growth
              <br />
              Engineered to
              <InlineTextChip
                chipKey="scale"
                text="Scale"
                tooltipText="System Scaling"
                activeChip={activeChipKey}
                onHover={setActiveChipKey}
                isHeader
              />
            </h1>

            {/* Список со встроенными чипсами */}
            <div className="hero-sublines">
              <div className="subline-item">
                We eliminate chaos in
                <InlineTextChip
                  chipKey="funnels"
                  text="funnels"
                  tooltipText="Smart Funnel Routing"
                  activeChip={activeChipKey}
                  onHover={setActiveChipKey}
                />
              </div>

              <div className="subline-item">
                No fluff — just clean data architecture
              </div>

              <div className="subline-item">
                Track every dollar with
                <InlineTextChip
                  chipKey="automation"
                  text="automation"
                  tooltipText="AI Agents & Workflows"
                  activeChip={activeChipKey}
                  onHover={setActiveChipKey}
                />
              </div>
            </div>

            {/* Микро-социальное доказательство */}
            <p
              style={{
                fontSize: '0.78rem',
                color: T.sub,
                marginBottom: '1.25rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
              }}
            >
              Trusted by founders from SaaS, E-com, Real Estate
            </p>

            <a href="#contact" className="btn-primary-hero">
              {t.cta}
            </a>
          </div>

          {/* Правая часть: Timeline вместо Engine */}
          <div className="hero-right">
            <HeroTimeline
              activeChip={activeChipKey}
              onHoverFrame={(chipKeys) => setActiveChipKey(chipKeys[0])}
              onLeaveFrame={() => setActiveChipKey(null)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
