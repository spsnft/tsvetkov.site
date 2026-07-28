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
          padding-top: clamp(5rem, 10vw, 9rem);
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
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
          position: relative;
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          font-size: clamp(2.8rem, 5.5vw, 5rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 1.5rem 0;
        }

        .hero-sublines {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .subline-item {
          font-size: clamp(1.05rem, 1.8vw, 1.35rem);
          font-weight: 500;
          color: ${T.body};
          line-height: 1.5;
          transition: background 0.3s ease, color 0.3s ease;
          padding: 2px 8px;
          border-radius: 6px;
        }

        .subline-item.highlighted-line {
          background: ${T.accent08};
          color: #ffffff;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 56px;
          padding: 0 2.5rem;
          border-radius: ${T.radius.md};
          font-weight: 800;
          font-size: 1.05rem;
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
          max-width: 800px;
          margin-top: 2.5rem;
          padding: 0 1.5rem;
          position: relative;
          z-index: 4;
        }
      `}</style>

      {/* Фоновое неоновое свечение */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${T.glow} 0%, ${T.accent05} 35%, transparent 65%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Основной контент */}
      <div className="hero-content">
        {/* Бейдж */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: T.accent,
              background: T.accent08,
              padding: '6px 16px',
              borderRadius: 20,
              border: `1px solid ${T.accent25}`,
            }}
          >
            {t.badge}
          </span>
        </div>

        {/* Заголовок */}
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

        {/* Подзаголовок */}
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
          </div>

          <div
            className={`subline-item ${
              highlightedLine === 'data' ? 'highlighted-line' : ''
            }`}
          >
            No fluff — just clean data architecture
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

        {/* Кнопка */}
        <a href="#contact" className="btn-primary-hero">
          {t.cta}
        </a>
      </div>

      {/* Тикер под кнопкой */}
      <div className="ticker-container">
        <HeroTicker
          lang={lang}
          activeChip={activeChipKey}
          highlightedLine={highlightedLine}
          onFrameChange={handleFrameChange}
          onManualSelect={handleManualSelect}
        />
      </div>
    </section>
  );
};

export default Hero;
