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

  // Имитация тикающих прямых бронирований
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
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          line-height: 1.5;
          margin-bottom: 1.5rem;
          color: ${T.body};
        }
        
        /* УСИЛЕННОЕ УТП ДЛЯ ПРЯМОЙ ПРИБЫЛИ */
        .utp-highlight {
          font-size: clamp(1.15rem, 2vw, 1.35rem);
          font-weight: 700;
          color: #00E599;
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
        
        /* Фикс иконок: убрали инверсию, оставили чистый нативный SVG */
        .btn-icon { 
          height: 22px; 
          width: 22px; 
          object-fit: contain;
        }

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
          width: 175%; 
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
        
        .pms-body {
          display: flex;
          gap: 1.5rem;
          flex: 1;
          overflow: hidden;
        }

        /* 1. АНАЛИТИКА: Равномерное распределение по высоте */
        .pms-analytics {
          display: flex;
          flex-direction: column;
          justify-content: space-between; /* Магия распределения элементов */
          height: 100%;
          flex: 0 0 32%;
        }
        .widget {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 0.85rem 1rem;
          border-radius: 8px;
        }
        
        /* Зеленый акцент только на первом виджете для жесткого фокуса */
        .widget.primary-focus {
          border-left: 3px solid #00E599;
          background: rgba(20, 20, 25, 0.4);
        }
        
        .widget-label { font-size: 0.65rem; color: #666; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.3rem; }
        .widget-value { font-size: 1.45rem; font-weight: 700; color: #fff; font-family: 'SF Mono', monospace; line-height: 1.1; }
        .widget-sub { font-size: 0.65rem; color: #444; margin-top: 0.3rem; }
        .text-green { color: #00E599; }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 28px;
          margin-top: 0.5rem;
        }
        .bar { width: 12px; border-radius: 2px 2px 0 0; }
        .bar.ota { background: rgba(255, 255, 255, 0.08); }
        .bar.direct { background: rgba(0, 229, 153, 0.5); }

        /* 2. ШАХМАТКА */
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
          grid-template-columns: 90px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.65rem;
          color: #555;
          text-align: center;
          background: rgba(255, 255, 255, 0.01);
        }
        .matrix-header > div { padding: 0.6rem 0; border-right: 1px solid rgba(255, 255, 255, 0.02); }
        
        .matrix-row {
          display: grid;
          grid-template-columns: 90px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
          flex: 1;
          position: relative;
        }
        .matrix-room-name {
          font-size: 0.7rem;
          color: #777;
          padding: 0 0.6rem;
          display: flex;
          align-items: center;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(13, 13, 17, 0.3);
        }
        
        .booking {
          position: absolute;
          top: 6px; bottom: 6px;
          border-radius: 4px;
          font-size: 0.65rem;
          padding: 0 0.5rem;
          color: #fff;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
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
          .utp-highlight { justify-content: center; }
          .dashboard-mockup { transform: none !important; width: 100% !important; }
          .pms-body { flex-direction: column; }
          .pms-analytics { flex: none; gap: 1rem; }
          .pms-matrix { display: none; }
        }
      `}</style>

      <div className="hero-grid">
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="text-column">
          <span className="badge">{t.badge}</span>
          <h1 className="title">{t.heroTitle}</h1>
          
          <div className="subtitles">
            <p>{t.heroSub1}</p>
          </div>
          
          {/* КРУПНОЕ УТП */}
          <div className="utp-highlight">
            <span>→</span> {t.heroSub2}
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

        {/* ПРАВАЯ КОЛОНКА */}
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
                  <div className="widget primary-focus">
                    <div className="widget-label">OTA Margin Saved</div>
                    <div className="widget-value text-green">{formatCurrency(liveAmount)}</div>
                    <div className="widget-sub">Current Month</div>
                  </div>
                  
                  <div className="widget">
                    <div className="widget-label">Occupancy / ADR</div>
                    <div className="widget-value" style={{ fontSize: '1.2rem' }}>84% <span style={{ color: '#333' }}>|</span> ฿4,250</div>
                    
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

                  <div className="widget">
                    <div className="widget-label">RevPAR</div>
                    <div className="widget-value">฿3,570</div>
                    <div className="widget-sub">Per Available Room</div>
                  </div>
                </div>

                {/* 2. ШАХМАТКА БРОНИРОВАНИЙ */}
                <div className="pms-matrix">
                  <div className="matrix-header">
                    <div>ROOM</div>
                    <div>16 Dec</div><div>17 Dec</div><div>18 Dec</div><div>19 Dec</div><div>20 Dec</div><div>21 Dec</div><div>22 Dec</div>
                  </div>
                  
                  <div className="matrix-row">
                    <div className="matrix-room-name">Villa 1</div>
                    <div className="booking b-direct" style={{ left: 'calc(90px + 0%)', width: 'calc(28.5% - 4px)' }}>Direct • Smith</div>
                    <div className="booking b-booking" style={{ left: 'calc(90px + 42.8%)', width: 'calc(50% - 4px)' }}>Booking.com • Lee</div>
                  </div>
                  
                  <div className="matrix-row">
                    <div className="matrix-room-name">Villa 2</div>
                    <div className="booking b-agoda" style={{ left: 'calc(90px + 14.2%)', width: 'calc(42.8% - 4px)' }}>Agoda • Kumar</div>
                    <div className="booking b-direct" style={{ left: 'calc(90px + 71.4%)', width: 'calc(28.5% - 4px)' }}>Direct • VIP</div>
                  </div>

                  <div className="matrix-row">
                    <div className="matrix-room-name">Room 101</div>
                    <div className="booking b-direct" style={{ left: 'calc(90px + 0%)', width: 'calc(57.1% - 4px)' }}>Direct • Johnson</div>
                  </div>

                  <div className="matrix-row">
                    <div className="matrix-room-name">Room 102</div>
                    <div className="booking b-booking" style={{ left: 'calc(90px + 0%)', width: 'calc(25% - 4px)' }}>Booking.com</div>
                    <div className="booking b-direct" style={{ left: 'calc(90px + 28.5%)', width: 'calc(71.4% - 4px)' }}>Direct • Website</div>
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
