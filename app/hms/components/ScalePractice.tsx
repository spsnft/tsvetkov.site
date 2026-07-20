'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface ScalePracticeProps {
  t?: any;
}

// Картинки для карточек по порядку
const CARD_ASSETS = [
  '/assets/sync.webp',
  '/assets/revenue.webp',
  '/assets/growth.webp'
];

// Хелпер для парсинга **bold** в HTML-теги <strong>
const renderFormattedText = (text: string) => {
  if (!text) return null;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} style={{ color: '#ffffff', fontWeight: 600 }}>
        {part}
      </strong>
    ) : (
      part
    )
  );
};

export default function ScalePractice({ t }: ScalePracticeProps) {
  // Фоллбек на случай, если scaleItems еще не переданы
  const items = t?.scaleItems || [];

  return (
    <section className="scale-section">
      <style jsx>{`
        .scale-section {
          width: 100%;
          padding: 6rem 0;
          border-bottom: 1px solid ${T.border};
          background: transparent;
        }

        .scale-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }

        .scale-title {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }

        .scale-subtitle {
          color: ${T.sub};
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          margin: 0;
        }

        .scale-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: stretch;
        }

        .scale-card {
          isolation: isolate;
          -webkit-tap-highlight-color: transparent;
          background: 
            radial-gradient(
              circle at 50% 120px,
              rgba(0, 229, 153, 0.14) 0%,
              rgba(0, 163, 255, 0.03) 45%,
              rgba(255, 255, 255, 0.01) 75%
            );
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .scale-card:hover {
          border-color: rgba(0, 229, 153, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 12px 35px -10px rgba(0, 229, 153, 0.12);
          background: 
            radial-gradient(
              circle at 50% 120px,
              rgba(0, 229, 153, 0.18) 0%,
              rgba(0, 163, 255, 0.05) 50%,
              rgba(255, 255, 255, 0.015) 80%
            );
        }

        .image-wrapper {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          margin-bottom: 1rem;
        }

        .visual-asset {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          mix-blend-mode: screen; 
          transform: translateZ(0);
          will-change: transform, filter;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          filter: contrast(1.18) brightness(1.08) drop-shadow(0 0 20px rgba(0, 229, 153, 0.22));
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .scale-card:hover .visual-asset {
          transform: scale(1.06) translateZ(0);
          filter: contrast(1.2) brightness(1.12) drop-shadow(0 0 30px rgba(0, 229, 153, 0.4));
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .context-label {
          font-size: 0.78rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: rgba(255, 255, 255, 0.35);
          margin: 0;
        }

        .focus-metric {
          font-size: clamp(1.4rem, 2vw, 1.8rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0;
          display: inline-block;
        }

        .card-description {
          color: ${T.sub};
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          text-wrap: pretty;
        }

        @media (max-width: 992px) {
          .scale-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            max-width: 500px;
            margin: 0 auto;
          }
          .scale-card {
            padding: 1.75rem;
          }
        }
      `}</style>

      <div className="scale-header">
        <h2 className="scale-title">{t?.scaleTitle || "Scale your property bookings"}</h2>
        <p className="scale-subtitle">{t?.scaleSub || "Automate workflows so your team can focus on guest experience"}</p>
      </div>

      <div className="scale-grid">
        {items.map((item: any, idx: number) => {
          const metricTitle = `${item.endValue}${item.suffix || ''}${item.fixText || ''}`;
          
          return (
            <div className="scale-card" key={idx}>
              <div className="image-wrapper">
                <img 
                  src={CARD_ASSETS[idx] || CARD_ASSETS[0]} 
                  alt={`${metricTitle} visual`} 
                  className="visual-asset" 
                />
              </div>
              <div className="card-content">
                <p className="context-label">{item.pain}</p>
                <h3 className="focus-metric">{metricTitle}</h3>
                <p className="card-description">
                  {renderFormattedText(item.desc)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
