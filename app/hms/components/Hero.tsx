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

  // Микро-анимация счетчика
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
          overflow: hidden;
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
        .btn-wa:hover, .btn-line:hover { transform: translateY(-2px); filter: brightness(1.1); }
        .btn-wa { background-color: #2cb742; }
        .btn-line { background-color: #06C755; }
        .btn-icon { height: 20px; width: 20px; object-fit: contain; filter: brightness(0) invert(1); }

        /* КОЛОНКА С МОКАПОМ */
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
          width: 170%; /* Еще шире, чтобы вместить шахматку */
          aspect-ratio: 16 / 9;
          background-color: rgba(13, 13, 17, 0.75);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          transform: rotateX(14deg) rotateY(-16deg) rotateZ(4deg);
          transform-origin: left center;
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.7), 0 0 50px rgba(0, 229, 153, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.1);
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          position: relative;
        }
        
        /* ШАПКА ДАШБОРДА */
        .pms-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.8rem;
        }
        .pms-logo { font-family: monospace; font-size: 0.75rem; color: rgba(255,255,255,0.4); letter-spacing: 0.1em; }
        .sync-status { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: #00E599; font-weight: 600; background: rgba(0, 225, 153, 0.06); padding: 0.3rem 0.6rem; border-radius: 20px; border: 1px solid rgba(0, 225, 153, 0.15); }
        .pulse-dot { width: 6px; height: 6px; background-color: #00E599; border-radius: 50%; animation: pulse 2s infinite; }
        
        /* ОСНОВНОЙ КОНТЕНТ: СЕТКА НА 2 КОЛОНКИ (Аналитика + Шахматка) */
        .pms-body {
          display: flex;
          gap: 1.5rem;
          flex: 1;
        }

        /* 1. ЛЕВАЯ ЧАСТЬ: ВИДЖЕТЫ */
        .pms-analytics {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 0 0 32%;
        }
        .widget {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 1rem;
          border-radius: 8px;
        }
        .widget-label { font-size: 0.7rem; color: #777; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.4rem; }
        .widget-value { font-size: 1.6rem; font-weight: 700; color: #fff; font-family: 'SF Mono', monospace; line-height: 1; }
        .widget-sub { font-size: 0.75rem; color: #555; margin-top: 0.4rem; }
        .text-green { color: #00E599; }
        
        /* CSS-Гистограмма (Mini Chart) */
        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 35px;
          margin-top: 0.8rem;
        }
        .bar { width: 12px; border-radius: 2px 2px 0 0; }
        .bar.ota { background: rgba(255, 255, 255, 0.1); }
        .bar.direct { background: rgba(0, 229, 153, 0.6); }

        /* 2. ПРАВАЯ ЧАСТЬ: ШАХМАТКА (ROOM MATRIX) */
        .pms-matrix {
          flex: 1;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .matrix-header {
          display: grid;
          grid-template-columns: 80px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.65rem;
          color: #666;
          text-align: center;
        }
        .matrix-header > div { padding: 0.5rem 0; border-right: 1px solid rgba(255, 255, 255, 0.02); }
        
        .matrix-row {
          display: grid;
          grid-template-columns: 80px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
          flex: 1;
          position: relative;
        }
        .matrix-room-name {
          font-size: 0.7rem;
          color: #888;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        /* Цветные плашки бронирований */
        .booking {
          position: absolute;
          top: 4px; bottom: 4px;
          border-radius: 4px;
          font-size: 0.6rem;
          padding: 0.2rem 0.4rem;
          color: #fff;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .b-direct { background: linear-gradient(90deg, #00E599 0%, #00b377 100%); color: #000; font-weight: 600; }
        .b-booking { background: linear-gradient(90deg, #003580 0%, #0050c2 100%); }
        .b-agoda { background: linear-gradient(90deg, #873335 0%, #cc474b 100%); }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0); }
        }

        @media (max-width: 992px) {
          .hero-section { padding: 4rem 0 2rem 0; }
          .hero-grid { grid-template-columns: 1fr; gap: 3.5rem; }
          .text-column { text-align: center; }
          .cta-buttons { justify-content: center; }
          .dashboard-mockup { transform: none !important; width: 100% !important; }
          .pms-body { flex-direction: column; }
          .pms-analytics { flex: none; }
          .pms-matrix { display: none; /* Прячем шахматку на мобилках, чтобы не мельтешила */ }
        }
      `}</style>

      <div className="hero-grid">
        {/* ЛЕВАЯ КОЛОНКА (ТЕКСТ) */}
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

        {/* ПРАВАЯ КОЛОНКА (DASHBOARD) */}
        <div className="visual-column">
          <div className="perspective-wrapper">
            <div className="dashboard-mockup">
              
              <div className="pms-header">
                <div className="pms-logo">HMS_CORE_v2.6</div>
                <div className="sync-status"><div className="pulse-dot"></div>1s OTA Sync Active</div>
              </div>
              
              <div className="pms-body">
                {/* 1. АНАЛИТИКА */}
                <div className="pms-analytics">
                  <div className="widget" style={{ borderLeft: '3px solid #00E599' }}>
                    <div className="widget-label">OTA Margin Saved</div>
                    <div className="widget-value text-green">{formatCurrency(liveAmount)}</div>
                    <div className="widget-sub">Current Month</div>
                  </div>
                  
                  <div className="widget">
                    <div className="widget-label">Occupancy / ADR</div>
                    <div className="widget-value" style={{ fontSize: '1.2rem' }}>84% <span style={{ color: '#444' }}>|</span> ฿4,250</div>
                    
                    {/* Мини-график (визуализация роста direct bookings) */}
                    <div className="mini-chart">
                      <div className="bar ota" style={{ height: '40%' }}></div>
                      <div className="bar direct" style={{ height: '30%' }}></div>
                      <div className="bar ota" style={{ height: '60%' }}></div>
                      <div className="bar direct" style={{ height: '50%' }}></div>
                      <div className="bar direct" style={{ height: '70%' }}></div>
                      <div className="bar direct" style={{ height: '85%' }}></div>
                      <div className="bar direct" style={{ height: '100%' }}></div>
                    </div>
                  </div>
                </div>

                {/* 2. ШАХМАТКА БРОНИРОВАНИЙ */}
                <div className="pms-matrix">
                  <div className="matrix-header">
                    <div>ROOM</div>
                    <div>16 Jul</div><div>17 Jul</div><div>18 Jul</div><div>19 Jul</div><div>20 Jul</div><div>21 Jul</div><div>22 Jul</div>
                  </div>
                  
                  {/* Строка 1 */}
                  <div className="matrix-row">
                    <div className="matrix-room-name">Villa 1</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 0%)', width: 'calc(28.5% - 4px)' }}>Direct • Smith</div>
                    <div className="booking b-booking" style={{ left: 'calc(80px + 42.8%)', width: 'calc(42.8% - 4px)' }}>B.com • Lee</div>
                  </div>
                  
                  {/* Строка 2 */}
                  <div className="matrix-row">
                    <div className="matrix-room-name">Villa 2</div>
                    <div className="booking b-agoda" style={{ left: 'calc(80px + 14.2%)', width: 'calc(42.8% - 4px)' }}>Agoda • Kumar</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 71.4%)', width: 'calc(28.5% - 4px)' }}>Direct • VIP</div>
                  </div>

                  {/* Строка 3 */}
                  <div className="matrix-row">
                    <div className="matrix-room-name">Suite A</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 0%)', width: 'calc(57.1% - 4px)' }}>Direct • Johnson</div>
                  </div>

                  {/* Строка 4 */}
                  <div className="matrix-row">
                    <div className="matrix-room-name">Suite B</div>
                    <div className="booking b-booking" style={{ left: 'calc(80px + 0%)', width: 'calc(14.2% - 4px)' }}>B.com</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 28.5%)', width: 'calc(71.4% - 4px)' }}>Direct • Website</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
