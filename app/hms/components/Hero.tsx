'use client';

import React, { useState, useEffect } from 'react';
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
  const [liveAmount, setLiveAmount] = useState(148250);

  // Микро-анимация: имитируем, что прямо сейчас капают прямые бронирования, увеличивая сэкономленную комиссию
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveAmount(prev => prev + Math.floor(Math.random() * 45) + 5);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (num: number) => {
    return '฿' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section className="hero-section">
      <style jsx>{`
        .hero-section {
          padding: 6rem 0 4rem 0;
          position: relative;
          z-index: 10;
          overflow: hidden; /* Гарантирует, что вылетающий дашборд не создаст горизонтальный скролл у сайта */
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2.5rem;
          align-items: center;
          position: relative;
        }

        /* ТЕКСТОВАЯ КОЛОНКА */
        .text-column {
          text-align: left;
          position: relative;
          z-index: 2;
        }
        .badge {
          color: ${T.acc2};
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.75rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1rem;
        }
        .title {
          font-size: clamp(2.2rem, 3.8vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
          color: #fff;
        }
        .subtitles {
          font-size: clamp(1rem, 1.6vw, 1.2rem);
          line-height: 1.5;
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
          gap: 0.7rem;
          color: #fff;
          padding: 1rem 1.8rem;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          transition: transform 0.2s ease, filter 0.2s ease;
        }
        .btn-wa:hover, .btn-line:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
        .btn-wa { background-color: #2cb742; }
        .btn-line { background-color: #06C755; }
        
        /* Жестко ограничиваем размеры иконок мессенджеров, чтобы не ломали верстку */
        .btn-icon { 
          height: 20px; 
          width: 20px; 
          object-fit: contain;
          filter: brightness(0) invert(1); 
        }

        /* КОЛОНКА С МОКАПОМ (BLEEDING EDGE) */
        .visual-column {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .perspective-wrapper {
          perspective: 1400px;
          width: 100%;
        }
        .dashboard-mockup {
          /* Широкий оверфлоу: дашборд становится огромным и улетает вправо */
          width: 155%; 
          aspect-ratio: 16 / 10;
          background-color: rgba(13, 13, 17, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          transform: rotateX(14deg) rotateY(-16deg) rotateZ(4deg);
          transform-origin: left center;
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.7), 
            0 0 50px rgba(0, 229, 153, 0.02),
            inset 0 1px 1px rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          position: relative;
        }
        
        /* Внутренние компоненты интерактивного дашборда */
        .pms-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.8rem;
        }
        .pms-logo {
          font-family: monospace;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em;
        }
        
        /* Мягко пульсирующий зеленый статус синхронизации */
        .sync-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #00E599;
          font-weight: 600;
          background: rgba(0, 225, 153, 0.06);
          padding: 0.3rem 0.6rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 225, 153, 0.15);
        }
        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: #00E599;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        
        /* Основной контент софта - виджеты и графики */
        .pms-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 60%; /* Удерживаем контент в видимой левой зоне дашборда */
        }
        .widget {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 1.2rem;
          border-radius: 8px;
        }
        .widget-label {
          font-size: 0.75rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.4rem;
        }
        .widget-value {
          font-size: 1.8rem;
          font-weight: 700;
          color: #fff;
          font-family: 'SF Mono', monospace;
        }
        
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0); }
        }

        /* АДАПТИВНОСТЬ ПОД МОБИЛКИ */
        @media (max-width: 992px) {
          .hero-section { padding: 4rem 0 2rem 0; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .text-column { text-align: center; }
          .cta-buttons { justify-content: center; }
          .dashboard-mockup {
            transform: none !important;
            width: 100% !important;
            aspect-ratio: 16 / 9;
          }
          .pms-content { max-width: 100%; }
        }
      `}</style>

      <div className="hero-grid">
        {/* ЛЕВАЯ КОЛОНКА: ТЕКСТ И МЕССЕНДЖЕРЫ */}
        <div className="text-column">
          <span className="badge">{t.badge}</span>
          <h1 className="title">{t.heroTitle}</h1>
          
          <div className="subtitles">
            <p style={{ color: T.body, margin: 0 }}>{t.heroSub1}</p>
            <p style={{ color: T.accent, margin: '0.5rem 0 0 0', fontWeight: 700 }}>{t.heroSub2}</p>
          </div>
          
          <div className="cta-buttons">
            <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" className="btn-wa">
              <img src="/logos/whatsapp.svg" alt="WA" className="btn-icon" /> 
              {t.btnChat}
            </a>
            <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer" className="btn-line">
              <img src="/logos/line.svg" alt="Line" className="btn-icon" /> 
              {t.btnLine}
            </a>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: КИНЕМАТОГРАФИЧНЫЙ СОФТ С ВЫЛЕТОМ */}
        <div className="visual-column">
          <div className="perspective-wrapper">
            <div className="dashboard-mockup">
              
              {/* Шапка фейкового интерфейса */}
              <div className="pms-header">
                <div className="pms-logo">CORE_SYSTEM_v2.6</div>
                <div className="sync-status">
                  <div className="pulse-dot"></div>
                  1s OTA Sync Active
                </div>
              </div>
              
              {/* Внутренности софта: виджеты, которые отельер считает сразу */}
              <div className="pms-content">
                <div className="widget" style={{ borderLeft: '3px solid #00E599' }}>
                  <div className="widget-label">OTA Commissions Saved (This Month)</div>
                  <div className="widget-value" style={{ color: '#00E599' }}>
                    {formatCurrency(liveAmount)}
                  </div>
                </div>
                
                <div className="widget">
                  <div className="widget-label">Direct Revenue Share</div>
                  <div className="widget-value">64.2%</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
