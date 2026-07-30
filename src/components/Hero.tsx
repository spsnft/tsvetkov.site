'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';

interface HeroProps {
  lang: string;
  dict?: any;
}

export const Hero = ({ dict }: HeroProps) => {
  const t = dict?.hero ?? {
    badge: 'FOUNDER-LED AGENCY',
    titleLine1: 'More Revenue.',
    titleLine2: 'Engineered.',
    sub1: 'We eliminate chaos in <strong>marketing &amp; digital systems</strong>',
    sub2: 'No fluff — just <strong>high-performance architectures</strong>',
    sub3: 'Track every dollar and <strong>automate sales flow</strong>',
    cta: 'Audit My Business',
  };

  return (
    <section className="hero-section">
      <style jsx>{`
        .hero-section {
          width: 100%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: clamp(5.25rem, 8vw, 8rem);
          padding-bottom: clamp(3.5rem, 6vw, 6.5rem);
          background: transparent;
          /* Убираем overflow: hidden, чтобы дать свечению бесшовно заходить на следующую секцию */
          overflow: visible;
          box-sizing: border-box;
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          position: relative;
          z-index: 4;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .hero-container {
            padding-left: 1.25rem;
            padding-right: 1.25rem;
          }
        }

        .hero-split-grid {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .hero-split-grid {
            flex-direction: row;
            align-items: flex-end;
            gap: 3.5rem;
          }
        }

        /* ЛЕВАЯ КОЛОНКА: ЗАГОЛОВОК И СВЕЧЕНИЕ */
        .left-col {
          flex: 1 1 auto;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1.25rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${T.accent};
          background: ${T.accent05};
          border: 1px solid ${T.accent25};
          backdrop-filter: blur(12px);
          position: relative;
          z-index: 2;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.accent};
          box-shadow: 0 0 8px ${T.accent};
        }

        .hero-title {
          font-size: clamp(2.8rem, 5.8vw, 5.6rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.035em;
          margin: 0;
          text-wrap: balance;
          position: relative;
          z-index: 2;
        }

        .hero-title .title-line1 {
          color: #ffffff;
        }

        .hero-title .title-line2 {
          background: linear-gradient(135deg, #00e599 0%, #00a3ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Неоновое свечение с органичным переливом в следующий блок */
        .ambient-glow {
          position: absolute;
          top: 60%;
          left: 35%;
          transform: translate(-50%, -50%);
          width: 580px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            ${T.glow} 0%,
            rgba(0, 163, 255, 0.08) 45%,
            transparent 75%
          );
          filter: blur(90px);
          pointer-events: none;
          z-index: 1;
        }

        /* ПРАВАЯ КОЛОНКА: ОПИСАНИЕ И КНОПКА */
        .right-col {
          flex: 0 0 auto;
          width: 100%;
          max-width: 460px;
          display: flex;
          flex-direction: column;
          gap: 2.25rem;
          position: relative;
          z-index: 2;
        }

        .hero-description {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-left: 2px solid ${T.accent30};
          padding-left: 1.25rem;
        }

        .desc-item {
          font-size: clamp(0.95rem, 1.3vw, 1.1rem);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.65);
          font-weight: 400;
          margin: 0;
        }

        .desc-item :global(strong) {
          color: #ffffff;
          font-weight: 600;
        }

        .cta-action-box {
          display: flex;
          align-items: center;
        }

        @media (min-width: 768px) {
          .cta-action-box {
            transform: translateY(-6px);
          }
        }

        .btn-arrow {
          margin-left: 8px;
          transition: transform 0.2s ease;
        }

        .cta-action-box :global(.btn-primary:hover) .btn-arrow {
          transform: translateX(4px);
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-split-grid">
          {/* Левая сторона: Заголовок + бесшовный glow */}
          <div className="left-col">
            <div className="ambient-glow" />

            {t.badge && (
              <span className="hero-badge">
                <span className="badge-dot" />
                {t.badge}
              </span>
            )}

            <h1 className="hero-title">
              <span className="title-line1">{t.titleLine1}</span>
              <br />
              <span className="title-line2">{t.titleLine2}</span>
            </h1>
          </div>

          {/* Правая сторона: Подзаголовки и CTA */}
          <div className="right-col">
            <div className="hero-description">
              {t.sub1 && (
                <p
                  className="desc-item"
                  dangerouslySetInnerHTML={{ __html: t.sub1 }}
                />
              )}
              {t.sub2 && (
                <p
                  className="desc-item"
                  dangerouslySetInnerHTML={{ __html: t.sub2 }}
                />
              )}
              {t.sub3 && (
                <p
                  className="desc-item"
                  dangerouslySetInnerHTML={{ __html: t.sub3 }}
                />
              )}
            </div>

            <div className="cta-action-box">
              <a href="#contact" className="btn-primary">
                <span>{t.cta}</span>
                <svg
                  className="btn-arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
