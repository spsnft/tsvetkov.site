'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';

interface HeroProps {
  lang: string;
  dict?: any;
}

export const Hero = ({ dict }: HeroProps) => {
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
          min-height: 82vh;
          display: flex;
          align-items: flex-end;
          padding-top: clamp(6rem, 12vw, 10rem);
          padding-bottom: clamp(3rem, 6vw, 5.5rem);
          background: transparent;
          overflow: hidden;
          box-sizing: border-box;
        }

        .hero-container {
          width: 100%;
          max-width: 1224px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 4;
        }

        .hero-split-grid {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2.5rem;
        }

        @media (min-width: 992px) {
          .hero-split-grid {
            flex-direction: row;
            align-items: flex-end;
            gap: 3.5rem;
          }
        }

        /* ЛЕВАЯ КОЛОНКА */
        .left-col {
          flex: 1 1 auto;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge-wrapper {
          margin-bottom: 1.5rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
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

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.accent};
          box-shadow: 0 0 8px ${T.accent};
        }

        .hero-title {
          font-size: clamp(3rem, 6.2vw, 5.6rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.035em;
          color: #ffffff;
          margin: 0;
          text-wrap: balance;
        }

        .hero-title .accent-text {
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-title .highlight {
          color: ${T.accent};
          -webkit-text-fill-color: initial;
        }

        /* ПРАВАЯ КОЛОНКА */
        .right-col {
          flex: 0 0 auto;
          width: 100%;
          max-width: 440px;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .hero-description {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          border-left: 2px solid ${T.accent30};
          padding-left: 1.25rem;
        }

        .desc-main {
          font-size: clamp(1rem, 1.4vw, 1.15rem);
          line-height: 1.55;
          color: ${T.body};
          font-weight: 500;
          margin: 0;
        }

        .desc-sub {
          font-size: 0.875rem;
          line-height: 1.5;
          color: ${T.sub};
          margin: 0;
        }

        .cta-action-box {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          height: 54px;
          padding: 0 2.25rem;
          border-radius: ${T.radius.md};
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 0.01em;
          text-decoration: none;
          cursor: pointer;
          white-space: nowrap;
          background: linear-gradient(180deg, #00e599 0%, #00a3ff 100%);
          color: #0a0a0c;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 8px 20px -6px ${T.accent40}, 0 4px 12px rgba(0, 163, 255, 0.2);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px -6px ${T.accent}, 0 6px 16px rgba(0, 163, 255, 0.35);
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .btn-primary-hero:hover .btn-arrow {
          transform: translateX(4px);
        }

        /* Неоновое фоновое свечение в стиле Chaos Labs */
        .ambient-glow {
          position: absolute;
          bottom: 10%;
          left: 20%;
          width: 700px;
          height: 450px;
          border-radius: 50%;
          background: radial-gradient(circle, ${T.glow} 0%, rgba(0, 163, 255, 0.06) 40%, transparent 70%);
          filter: blur(90px);
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      {/* Мягкий неоновый фон */}
      <div className="ambient-glow" />

      <div className="hero-container">
        <div className="hero-split-grid">
          
          {/* Левая сторона: Заголовок Chaos Labs Style */}
          <div className="left-col">
            <div className="hero-badge-wrapper">
              <span className="hero-badge">
                <span className="badge-dot" />
                {t.badge}
              </span>
            </div>

            <h1 className="hero-title">
              Value Growth
              <br />
              <span className="accent-text">Engineered to</span>
              <br />
              <span className="highlight">Scale</span>
            </h1>
          </div>

          {/* Правая сторона: Описание и Главный CTA */}
          <div className="right-col">
            <div className="hero-description">
              <p className="desc-main">
                We eliminate chaos in marketing &amp; digital systems with high-performance architectures.
              </p>
              <p className="desc-sub">
                No guesswork or empty clicks — clean data attribution, automated CRM sales routing, and full control over every dollar.
              </p>
            </div>

            <div className="cta-action-box">
              <a href="#contact" className="btn-primary-hero">
                <span>{t.cta}</span>
                <svg className="btn-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
