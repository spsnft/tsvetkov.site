'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';

const RED_ACCENT = '#FF5555';

type BottleneckProps = {
  dict?: any;
};

export const Bottleneck = ({ dict }: BottleneckProps) => {
  // Скелетон во избежание сдвигов верстки (CLS)
  if (!dict) {
    return (
      <section
        className="bottleneck-section"
        style={{
          width: '100%',
          position: 'relative',
          padding: '1rem 0 clamp(3rem, 6vw, 6rem) 0',
          background: 'transparent',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="header-box" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.85rem',
                borderRadius: 20,
                marginBottom: '1rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'rgba(0, 229, 153, 0.05)',
                border: '1px solid rgba(0, 229, 153, 0.25)',
                color: T.accent,
              }}
            >
              &nbsp;
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                margin: 0,
              }}
            >
              &nbsp;
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: 300,
                  borderRadius: 18,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(12, 12, 16, 0.06)',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const t = dict.bottleneck;

  return (
    <section id="problems" className="bottleneck-section">
      <style jsx>{`
        .bottleneck-section {
          width: 100%;
          position: relative;
          padding: 1rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
          z-index: 5;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 1.25rem;
          }
        }

        .header-box {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Зеленый шильдик */
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${T.accent};
          background: rgba(0, 229, 153, 0.05);
          border: 1px solid rgba(0, 229, 153, 0.25);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 15px rgba(0, 229, 153, 0.08);
        }

        /* Красная мерцающая точка */
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${RED_ACCENT};
          box-shadow: 0 0 8px ${RED_ACCENT};
          animation: pulseRed 1.8s infinite ease-in-out;
        }

        @keyframes pulseRed {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
          text-wrap: balance;
        }

        /* Сетка */
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* УЛЬТРА-ПРОЗРАЧНОЕ СТЕКЛО (ПРОСВЕЧИВАЮТ ТОЧКИ ФОНА) */
        .card {
          position: relative;
          overflow: hidden;
          padding: 2rem 1.75rem 1.75rem 1.75rem;
          border-radius: 18px;
          
          /* Воздушная прозрачность с легким блюром */
          background: rgba(12, 12, 16, 0.06);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          
          /* Блик по верху и тонкий контур */
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25), 
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.1);

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;

          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      background 0.35s ease,
                      border-color 0.35s ease,
                      box-shadow 0.35s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          background: rgba(18, 18, 26, 0.12);
          border-color: rgba(255, 85, 85, 0.35);
          box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.5),
                      0 0 30px rgba(255, 85, 85, 0.12),
                      inset 0 1px 0 0 rgba(255, 255, 255, 0.22);
        }

        .watermark {
          position: absolute;
          top: 10px;
          right: 14px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 4.2rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 85, 85, 0.05);
          pointer-events: none;
          user-select: none;
          z-index: 0;
          transition: color 0.35s ease, transform 0.35s ease;
        }

        .card:hover .watermark {
          color: rgba(255, 85, 85, 0.14);
          transform: scale(1.04);
        }

        .card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        /* ЧЕТКО В 1 СТРОКУ НА ПК */
        .card-title {
          font-size: clamp(1.05rem, 1.2vw, 1.2rem);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.85rem 0;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .card-desc {
          font-size: 0.9rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.68);
          margin: 0 0 1.75rem 0;
          text-wrap: pretty;
        }

        .highlight-text {
          color: #ffffff;
          font-weight: 600;
        }

        .impact-footer {
          padding-top: 0.9rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.09);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .impact-label {
          font-size: 0.76rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.55);
        }

        .impact-value {
          color: ${RED_ACCENT};
          font-weight: 700;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">
            <span className="badge-dot" />
            {t.badge}
          </span>
          <h2 className="title">{t.title}</h2>
        </div>

        <div className="grid">
          {t.items.map((item: any, i: number) => (
            <div key={i} className="card">
              <div className="watermark">{item.num}</div>

              <div className="card-inner">
                <div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">
                    {item.descStart}
                    {item.descHighlight1 && (
                      <strong className="highlight-text">{item.descHighlight1}</strong>
                    )}
                    {item.descMiddle}
                    {item.descHighlight2 && (
                      <strong className="highlight-text">{item.descHighlight2}</strong>
                    )}
                    {item.descEnd}
                  </p>
                </div>

                <div className="impact-footer">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={RED_ACCENT}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                    <polyline points="17 18 23 18 23 12" />
                  </svg>
                  <span className="impact-label">
                    {t.impactLabel} <span className="impact-value">{item.impact}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bottleneck;
