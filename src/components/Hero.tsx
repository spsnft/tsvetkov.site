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
    titleLine1: 'More Revenue',
    titleLine2: 'Engineered',
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
          padding-bottom: ${T.section.bottomPad};
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
            align-items: flex-start;
            gap: 3.5rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-split-grid {
            align-items: flex-end;
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

        .hero-title-dot {
          display: inline-block;
          width: 0.15em;
          height: 0.15em;
          margin-left: 0.06em;
          border-radius: 50%;
          background: ${T.accent};
          box-shadow: 0 0 6px ${T.accent}, 0 0 12px ${T.accent};
          vertical-align: baseline;
          animation: heroDotPulse 1.8s infinite ease-in-out;
        }

        @keyframes heroDotPulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
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
          text-wrap: balance;
        }

        .cta-action-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
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

        .btn-secondary-chat {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: 12px;
          background: rgba(0, 229, 153, 0.06);
          border: 1px solid rgba(0, 229, 153, 0.25);
          backdrop-filter: blur(8px);
          color: #00e599;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 229, 153, 0.1);
          box-sizing: border-box;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-secondary-chat:hover {
          transform: translateY(-2px);
          background: rgba(0, 229, 153, 0.15);
          border-color: rgba(0, 229, 153, 0.5);
          box-shadow: 0 6px 25px rgba(0, 229, 153, 0.3);
          color: #00e599;
        }

        .btn-secondary-chat svg {
          width: 24px;
          height: 24px;
          display: block;
          transition: transform 0.25s ease;
        }

        .btn-secondary-chat:hover svg {
          transform: scale(1.08);
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-split-grid">
          {/* Левая сторона: Заголовок + бесшовный glow */}
          <div className="left-col">
            <div className="ambient-glow" />

            {t.badge && (
              <span className="hero-badge">
                {t.badge}
              </span>
            )}

            <h1 className="hero-title">
              <span className="title-line1">{t.titleLine1}</span>
              <span className="hero-title-dot" />
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

              <a
                href="https://wa.me/66650255229"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-chat"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
