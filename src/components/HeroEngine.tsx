import React from 'react';
import { T } from '@/src/theme/tokens';

export interface SystemCard {
  id: string;
  systemLabel: string;
  title: string;
  tags: string[];
  chipKeys: string[]; // Связанные ключевые чипсы из текста
}

const ENGINE_DATA: SystemCard[] = [
  {
    id: '01',
    systemLabel: 'SYSTEM 01 // PERFORMANCE',
    title: 'Scale & Revenue',
    tags: ['Smart Funnels', 'Unit Economics', 'Profit Tracking'],
    chipKeys: ['value', 'scale', 'funnels'],
  },
  {
    id: '02',
    systemLabel: 'SYSTEM 02 // DATA CORE',
    title: 'BI & Attribution',
    tags: ['Live Dashboards', 'Cross-Platform Sync', 'Clean Data'],
    chipKeys: ['data'],
  },
  {
    id: '03',
    systemLabel: 'SYSTEM 03 // INTELLIGENCE',
    title: 'AI & Sales Automation',
    tags: ['Auto-Routing', 'AI Workflows', 'Lead Scoring'],
    chipKeys: ['automation'],
  },
];

export interface HeroEngineProps {
  activeChip?: string | null;
  onHoverCard?: (chipKey: string | null) => void;
}

export const HeroEngine: React.FC<HeroEngineProps> = ({ activeChip, onHoverCard }) => {
  return (
    <div className="engine-container">
      {ENGINE_DATA.map((card) => {
        // Подсвечиваем карточку, если активна связанная чипса
        const isHighlighted = activeChip ? card.chipKeys.includes(activeChip) : false;

        return (
          <div
            key={card.id}
            className={`engine-card ${isHighlighted ? 'active-highlight' : ''}`}
            onMouseEnter={() => onHoverCard?.(card.chipKeys[0])}
            onMouseLeave={() => onHoverCard?.(null)}
          >
            <div className="card-header">
              <span className="live-dot-wrapper">
                <span className="live-dot-ping"></span>
                <span className="live-dot"></span>
              </span>
              <span className="system-label">{card.systemLabel}</span>
            </div>

            <h3 className="card-title">{card.title}</h3>

            <div className="card-tags">
              {card.tags.map((tag, i) => (
                <span key={i} className="engine-tag">
                  <span className="tag-bullet">•</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        );
      })}

      <style jsx>{`
        .engine-container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          z-index: 3;
        }

        .engine-card {
          background: linear-gradient(
            135deg,
            rgba(20, 24, 33, 0.75) 0%,
            rgba(10, 12, 16, 0.85) 100%
          );
          border: 1px solid ${T.accent15};
          border-radius: ${T.radius.lg};
          padding: 1.5rem 1.75rem;
          backdrop-filter: blur(16px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-shadow:
            0 10px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }

        .engine-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: ${T.radius.lg};
          padding: 1px;
          background: ${T.linearGradient};
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.2;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .engine-card:hover,
        .engine-card.active-highlight {
          transform: translateY(-3px) scale(1.01);
          border-color: ${T.accent};
          box-shadow:
            0 16px 36px -10px ${T.accent25},
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .engine-card:hover::before,
        .engine-card.active-highlight::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.6rem;
        }

        .live-dot-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 8px;
          height: 8px;
        }

        .live-dot-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: ${T.accent};
          opacity: 0.75;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.linearGradient};
          box-shadow: 0 0 8px ${T.accent};
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .system-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: ${T.accent};
          font-family: monospace, sans-serif;
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 1.1rem 0;
          letter-spacing: -0.02em;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .engine-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: ${T.radius.sm};
          background: ${T.accent05};
          border: 1px solid ${T.accent20};
          color: #e2f9f1;
        }

        .tag-bullet {
          color: ${T.accent};
        }
      `}</style>
    </div>
  );
};

export default HeroEngine;
