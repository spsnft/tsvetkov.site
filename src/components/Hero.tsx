'use client';

import React, { useState, useCallback } from 'react';
import { HeroTicker } from './HeroTicker';
import { T } from '@/src/theme/tokens';

interface HeroProps {
  lang: string;
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
      className={`inline-chip-wrapper ${isActive ? 'is-active' : ''} ${
        isHeader ? 'header-chip' : 'body-chip'
      }`}
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
          padding: 2px 14px;
          margin: 0 6px;
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.3);
          color: ${T.accent};
          box-shadow: 0 0 15px rgba(0, 229, 153, 0.12);
        }

        .body-chip {
          padding: 1px 8px;
          margin: 0 4px;
          background: rgba(0, 229, 153, 0.06);
          border: 1px solid rgba(0, 229, 153, 0.25);
          color: ${T.accent};
        }

        .chip-text {
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .inline-chip-wrapper:hover,
        .inline-chip-wrapper.is-active {
          background: rgba(0, 229, 153, 0.18);
          border-color: ${T.accent};
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 229, 153, 0.35);
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

export const Hero = ({ lang, dict }: HeroProps) => {
  const [activeChipKey, setActiveChipKey] = useState<string | null>(null);
  const [highlightedLine, setHighlightedLine] = useState<string | null>(null);

  const t = dict?.hero ?? {
    badge: 'TSVETKOV • FOUNDER-LED AGENCY',
    cta: 'Audit My Business',
  };

  const handleFrameChange = useCallback(
    (chipKeys: string[], highlightLineKey?: string) => {
      if (chipKeys.length > 0) {
        setActiveChipKey(chipKeys[0]);
      }
      setHighlightedLine(highlightLineKey || null);
    },
    []
  );

  const handleManualSelect = useCallback(
    (chipKeys: string[], highlightLineKey?: string) => {
      if (chipKeys.length > 0) {
        setActiveChipKey(chipKeys[0]);
      }
      setHighlightedLine(highlightLineKey || null);
    },
    []
  );

  return (
    <section className="hero-section">
      <style jsx>{`
        .hero-section {
          width: 100%;
          position: relative;
          padding-top: clamp(5.5rem, 10vw, 8.5rem);
          padding-bottom: clamp(3rem, 6vw, 5rem);
          background: transparent;
          overflow: hidden;
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge-wrapper {
          margin-bottom: 1.25rem;
        }

        .hero-badge {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${T.accent};
          background: ${T.accent08};
          padding: 6px 16px;
          border-radius: 20px;
          border: 1px solid ${T.accent25};
          backdrop-filter: blur(8px);
        }

        .hero-title {
          font-size: clamp(2.6rem, 5.2vw, 4.8rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 1.5rem 0;
        }

        .hero-sublines {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2.25rem;
          max-width: 680px;
        }

        .subline-item {
          font-size: clamp(1rem, 1.6vw, 1.25rem);
          font-weight: 500;
          color: ${T.body};
          line-height: 1.5;
          transition: all 0.3s ease;
          padding: 3px 10px;
          border-radius: 6px;
        }

        .subline-item.highlighted-line {
          background: ${T.accent08};
          color: #ffffff;
          border: 1px solid ${T.accent20};
        }

        .cta-wrapper {
          margin-bottom: 2.5rem;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 54px;
          padding: 0 2.25rem;
          border-radius: ${T.radius.md};
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.01em;
          text-decoration: none;
          cursor: pointer;
          background: linear-gradient(180deg, #00e599 0%, #00a3ff 100%);
          color: #0a0a0c;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 20px -6px ${T.accent40},
            0 4px 12px rgba(0, 163, 255, 0.2);
          transition: all 0.25s ease;
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -6px ${T.accent},
            0 6px 16px rgba(0, 163, 255, 0.35);
        }

        .ticker-container {
          width: 100%;
          max-width: 820px;
          padding: 0;
          position: relative;
          z-index: 4;
        }
      `}</style>

      <div
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '550px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${T.glow} 0%, ${T.accent05} 35%, transparent 65%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="hero-content">
        <div className="hero-badge-wrapper">
          <span className="hero-badge">{t.badge}</span>
        </div>

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

        <div className="hero-sublines">
          <div className="subline-item">
            We eliminate chaos in{' '}
            <InlineTextChip
              chipKey="funnels"
              text="funnels"
              tooltipText="Smart Funnel Routing"
              activeChip={activeChipKey}
              onHover={setActiveChipKey}
            />
            &nbsp;&amp; digital systems
          </div>

          <div
            className={`subline-item ${
              highlightedLine === 'data' ? 'highlighted-line' : ''
            }`}
          >
            No fluff — clean data architecture &amp; P&amp;L attribution
          </div>

          <div className="subline-item">
            Track every dollar with{' '}
            <InlineTextChip
              chipKey="automation"
              text="automation"
              tooltipText="AI Agents & Workflows"
              activeChip={activeChipKey}
              onHover={setActiveChipKey}
            />
          </div>
        </div>

        <div className="cta-wrapper">
          <a href="#contact" className="btn-primary-hero">
            {t.cta}
          </a>
        </div>

        <div className="ticker-container">
          <HeroTicker
            lang={lang}
            activeChip={activeChipKey}
            highlightedLine={highlightedLine}
            onFrameChange={handleFrameChange}
            onManualSelect={handleManualSelect}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
