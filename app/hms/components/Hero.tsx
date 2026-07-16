'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface HeroProps {
  t: {
    badge: string;
    heroTitle: string;
    heroSub1: string;
    heroSub2: string;
    btnChat: string;
    btnLine: string;
  };
}

export default function Hero({ t }: HeroProps) {
  // Общие элементы текста и кнопок, чтобы не дублировать JSX-мусор
  const renderTextContent = () => (
    <div className="text-column">
      <span className="badge">{t.badge}</span>
      <h1 className="title">{t.heroTitle}</h1>
      <div className="subtitles">
        <p style={{ color: T.body, margin: 0 }}>{t.heroSub1}</p>
        <p style={{ color: T.accent, margin: '0.5rem 0 0 0', fontWeight: 700 }}>{t.heroSub2}</p>
      </div>
      <div className="cta-buttons">
        <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" className="btn-wa">
          <img src="/logos/whatsapp.svg" alt="WA" className="btn-icon" /> {t.btnChat}
        </a>
        <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer" className="btn-line">
          <img src="/logos/line.svg" alt="Line" className="btn-icon" /> {t.btnLine}
        </a>
      </div>
    </div>
  );

  return (
    <section className="hero-section">
      <style jsx>{`
        .hero-section {
          padding: 4rem 0 3rem 0;
          position: relative;
          zIndex: 10;
        }
        .comparison-label {
          text-align: center;
          color: ${T.accent};
          font-family: monospace;
          font-size: 0.9rem;
          letter-spacing: 0.2em;
          margin: 6rem 0 2rem 0;
          text-transform: uppercase;
        }
        
        /* ГЛОБАЛЬНАЯ ДВУХКОЛОНОЧНАЯ СЕТКА */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
          min-height: 500px;
        }

        /* СТИЛИ ДЛЯ ТЕКСТА */
        .text-column {
          text-align: left;
        }
        .badge {
          color: ${T.acc2};
          text-transform: uppercase;
          letter-spacing: 0.2em;
          fontSize: 0.75rem;
          font-weight: 700;
        }
        .title {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .subtitles {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          line-height: 1.4;
          margin-bottom: 2.5rem;
        }
        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-wa, .btn-line {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #fff;
          padding: 1rem 2rem;
          border-radius: 6px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
        }
        .btn-wa { background-color: #2cb742; }
        .btn-line { background-color: #06C755; }
        .btn-icon { height: 1.3rem; width: auto; filter: brightness(0) invert(1); }

        /* БАЗОВЫЙ МОКАП */
        .dashboard-mockup {
          width: 100%;
          aspect-ratio: 16 / 10;
          background-color: rgba(20, 20, 25, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 229, 153, 0.03);
          position: relative;
        }
        .mockup-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: rgba(255, 255, 255, 0.15);
          font-weight: 600;
          font-size: 0.9rem;
          text-align: center;
          padding: 1rem;
        }

        /* ------------------------------------------------------------- */
        /* ВАРИАНТ 1: ВСЁ ВНУТРИ КОНТЕЙНЕРА (АККУРАТНЫЙ) */
        /* ------------------------------------------------------------- */
        .perspective-contained {
          perspective: 1000px;
        }
        .mockup-contained {
          transform: rotateX(12deg) rotateY(-10deg) rotateZ(3deg);
          transition: transform 0.4s ease;
        }
        .mockup-contained:hover {
          transform: rotateX(6deg) rotateY(-5deg) rotateZ(1deg) translateY(-4px);
        }

        /* ------------------------------------------------------------- */
        /* ВАРИАНТ 2: ВЫЛЕТАЕТ ЗА КРАЙ ЭКРАНА (МАСШТАБНЫЙ) */
        /* ------------------------------------------------------------- */
        .perspective-bleeding {
          perspective: 1500px;
          position: relative;
          width: 100%;
        }
        .mockup-bleeding {
          /* Увеличиваем ширину до 140% и смещаем вправо, вылетая из сетки */
          width: 140%; 
          transform: rotateX(16deg) rotateY(-14deg) rotateZ(4deg);
          transform-origin: left center;
          transition: transform 0.4s ease;
        }
        .mockup-bleeding:hover {
          transform: rotateX(10deg) rotateY(-8deg) rotateZ(2deg) scale(1.02);
        }

        /* АДАПТИВ ПОД МОБИЛКИ (ОБА ВАРИАНТА СТАДЫВАЮТСЯ В СТОПКУ) */
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }
          .text-column { text-align: center; }
          .cta-buttons { justify-content: center; }
          .mockup-contained, .mockup-bleeding {
            transform: none !important;
            width: 100% !important;
          }
        }
      `}</style>

      {/* ---------------------------------------- */}
      {/* ТЕСТ ВАРИАНТА 1 */}
      {/* ---------------------------------------- */}
      <div className="comparison-label">Вариант 1: Софт внутри сетки (Contained)</div>
      
      <div className="hero-grid">
        {renderTextContent()}
        <div className="perspective-contained">
          <div className="dashboard-mockup mockup-contained">
            <div className="mockup-placeholder">
              [ ИНТЕРФЕЙС ЦЕЛИКОМ ВНУТРИ ОКНА ]<br/>Размер элементов стандартный
            </div>
          </div>
        </div>
      </div>

      <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '6rem 0' }} />

      {/* ---------------------------------------- */}
      {/* ТЕСТ ВАРИАНТА 2 */}
      {/* ---------------------------------------- */}
      <div className="comparison-label" style={{ color: '#00E599' }}>Вариант 2: Вылет за край (Bleeding Edge)</div>
      
      <div className="hero-grid">
        {renderTextContent()}
        <div className="perspective-bleeding">
          <div className="dashboard-mockup mockup-bleeding">
            <div className="mockup-placeholder" style={{ color: '#00E599' }}>
              [ ИНТЕРФЕЙС ВЫЛЕТАЕТ ЗА КРАЙ ЭКРАНА ]<br/>Картинка шире на 40%, якоря крупнее
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
