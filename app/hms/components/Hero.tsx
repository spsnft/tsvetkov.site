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

interface LogEntry {
  time: string;
  text: string;
}

export default function Hero({ t }: HeroProps) {
  const [liveAmount, setLiveAmount] = useState(148250);
  
  // Стартовый набор из 5 строк, чтобы сразу забить пространство без дыр
  const [logs, setLogs] = useState<LogEntry[]>([
    { time: '22:46:12', text: 'Booking.com room inventory locked' },
    { time: '22:45:54', text: 'Traveloka calendar synced' },
    { time: '22:44:01', text: 'Direct Booking • Room 101 secured' },
    { time: '22:43:41', text: 'Agoda rate parity verified' },
    { time: '22:41:10', text: 'Booking.com channel active' }
  ]);

  // Разгоняем интервал до 2 секунд для мгновенного эффекта "живого софта"
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveAmount(prev => prev + Math.floor(Math.random() * 45) + 5);
      
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];
      const channels = ['Booking.com', 'Agoda', 'Traveloka', 'Trip.com'];
      const actions = ['calendar updated', 'inventory synced', 'rate parity checked', 'room status locked'];
      
      const randomChannel = channels[Math.floor(Math.random() * channels.length)];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      
      setLogs(prev => [
        { time: timeStr, text: `${randomChannel} ${randomAction}` },
        ...prev.slice(0, 4) // Строго удерживаем 5 строк
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (num: number) => {
    return '฿' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section className="hero-section">
      <style jsx>{`
        .hero-section {
          padding: 2rem 0 4rem 0; /* Ужали дыру сверху */
          position: relative;
          z-index: 10;
          overflow: hidden;
        }
        
        /* Жесткая фиксация колонок в % полностью лечит баг с дерганьем макета */
        .hero-grid {
          display: grid;
          grid-template-columns: 54% 46%;
          gap: 3rem;
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
        
        .utp-highlight {
          font-size: clamp(1.2rem, 2vw, 1.4rem);
          font-weight: 700;
          color: #00E599;
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn-premium-cta {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #fff;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.1rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(4px);
        }
        .btn-premium-cta:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
        }
        
        /* Контейнер-маска для выравнивания кривых SVG иконок */
        .icon-wrapper {
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
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
          width: 180%; 
          aspect-ratio: 16 / 9;
          background-color: rgba(13, 13, 17, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          transform: rotateX(13deg) rotateY(-15deg) rotateZ(3deg);
          transform-origin: left center;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 229, 153, 0.01), inset 0 1px 1px rgba(255, 255, 255, 0.08);
          padding: 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
        }
        
        .pms-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.8rem;
        }
        .pms-logo { font-family: monospace; font-size: 0.75rem; color: rgba(255,255,255,0.3); letter-spacing: 0.1em; }
        .sync-status { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; color: #00E599; font-weight: 600; background: rgba(0, 225, 153, 0.05); padding: 0.35rem 0.7rem; border-radius: 20px; border: 1px solid rgba(0, 225, 153, 0.12); }
        .pulse-dot { width: 6px; height: 6px; background-color: #00E599; border-radius: 50%; animation: pulse 2s infinite; }
        
        .pms-body {
          display: flex;
          gap: 1.5rem;
          flex: 1;
          overflow: hidden;
        }

        /* АНАЛИТИКА */
        .pms-analytics {
          display: flex;
          flex-direction: column;
          gap: 0.6rem; 
          flex: 0 0 30%;
        }
        .widget {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 0.85rem 1rem;
          border-radius: 8px;
        }
        .widget.primary-focus {
          border-left: 3px solid #00E599;
          background: rgba(255, 255, 255, 0.015);
        }
        .widget-label { font-size: 0.65rem; color: #555; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.4rem; }
        .widget-value { font-size: 1.55rem; font-weight: 700; color: #fff; font-family: 'SF Mono', monospace; line-height: 1; }
        .widget-sub { font-size: 0.65rem; color: #444; margin-top: 0.4rem; }
        .text-green { color: #00E599; }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 28px;
          margin-top: 0.5rem;
        }
        .bar { width: 12px; border-radius: 2px 2px 0 0; }
        .bar.ota { background: rgba(255, 255, 255, 0.06); }
        .bar.direct { background: rgba(0, 229, 153, 0.45); }

        /* ЖИВЫЕ ЛОГИ (Полная ликвидация дыры) */
        .logs-widget {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.02);
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 135px; /* Жестко фиксируем высоту логов во избежание CLS сдвигов */
        }
        .logs-container {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-top: 0.4rem;
          font-family: 'SF Mono', monospace;
          font-size: 0.62rem;
        }
        .log-line {
          color: rgba(255, 255, 255, 0.35);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .log-time {
          color: rgba(255, 255, 255, 0.15);
          margin-right: 0.4rem;
        }

        /* ШАХМАТКА БРОНИРОВАНИЙ */
        .pms-matrix {
          flex: 1;
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .matrix-header {
          display: grid;
          grid-template-columns: 85px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.65rem;
          color: #555;
          text-align: center;
          background: rgba(255, 255, 255, 0.01);
        }
        .matrix-header > div { padding: 0.7rem 0; border-right: 1px solid rgba(255, 255, 255, 0.01); }
        
        .matrix-row {
          display: grid;
          grid-template-columns: 85px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
          flex: 1;
          position: relative;
        }
        .matrix-room-name {
          font-size: 0.7rem;
          color: #666;
          padding: 0 0.6rem;
          display: flex;
          align-items: center;
          border-right: 1px solid rgba(255, 255, 255, 0.04);
          background: rgba(13, 13, 17, 0.2);
        }
        
        .booking {
          position: absolute;
          top: 6px; bottom: 6px;
          border-radius: 4px;
          font-size: 0.65rem;
          padding: 0 0.6rem;
          color: #fff;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 3px 10px rgba(0,0,0,0.4);
        }
        .b-direct { background: linear-gradient(90deg, #00E599 0%, #00b377 100%); color: #000; font-weight: 600; }
        .b-booking { background: linear-gradient(90deg, #003580 0%, #0050c2 100%); }
        .b-agoda { background: linear-gradient(90deg, #873335 0%, #cc474b 100%); }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0); }
        }

        @media (max-width: 992px) {
          .hero-section { padding: 2rem 0 2rem 0; }
          .hero-grid { grid-template-columns: 1fr; gap: 3.5rem; }
          .text-column { text-align: center; }
          .cta-buttons { justify-content: center; }
          .utp-highlight { justify-content: center; }
          .dashboard-mockup { transform: none !important; width: 100% !important; }
          .pms-body { flex-direction: column; }
          .pms-analytics { flex: none; gap: 0.6rem; }
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
          
          <div className="utp-highlight">
            <span>→</span> {t.heroSub2}
          </div>
          
          <div className="cta-buttons">
            <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" className="btn-premium-cta">
              <div className="icon-wrapper">
                {/* Инлайн-стили исключают вспышку огромного логотипа при первой загрузке */}
                <img src="/logos/whatsapp.svg" alt="WhatsApp" className="btn-icon" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
              </div>
              {t.btnChat}
            </a>
            <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer" className="btn-premium-cta">
              <div className="icon-wrapper">
                {/* Принудительный scale внутри маски идеально выравнивает LINE с WhatsApp */}
                <img src="/logos/line.svg" alt="LINE" className="btn-icon" style={{ width: '32px', height: '32px', objectFit: 'contain', transform: 'scale(1.35)' }} />
              </div>
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
                    <div className="widget-value" style={{ fontSize: '1.25rem' }}>84% <span style={{ color: '#333' }}>|</span> ฿4,250</div>
                    
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

                  {/* ЖИВЫЕ СИСТЕМНЫЕ ЛОГИ */}
                  <div className="widget logs-widget">
                    <div className="widget-label" style={{ color: '#444' }}>Live Activity Log</div>
                    <div className="logs-container">
                      {logs.map((log, i) => (
                        <div key={i} className="log-line">
                          <span className="log-time">[{log.time}]</span>
                          {log.text}
                        </div>
                      ))}
                    </div>
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
                    <div className="booking b-direct" style={{ left: 'calc(85px + 0%)', width: 'calc(28.5% - 4px)' }}>Direct • Smith</div>
                    <div className="booking b-booking" style={{ left: 'calc(85px + 35%)', width: 'calc(55% - 4px)' }}>Booking.com • Lee</div>
                  </div>
                  
                  <div className="matrix-row">
                    <div className="matrix-room-name">Villa 2</div>
                    <div className="booking b-agoda" style={{ left: 'calc(85px + 10%)', width: 'calc(45% - 4px)' }}>Agoda • Kumar</div>
                    <div className="booking b-direct" style={{ left: 'calc(85px + 65%)', width: 'calc(30% - 4px)' }}>Direct • VIP</div>
                  </div>

                  <div className="matrix-row">
                    <div className="matrix-room-name">Room 101</div>
                    <div className="booking b-direct" style={{ left: 'calc(85px + 0%)', width: 'calc(57.1% - 4px)' }}>Direct • Johnson</div>
                    <div className="booking b-booking" style={{ left: 'calc(85px + 60%)', width: 'calc(40% - 4px)' }}>Booking.com • Davis</div>
                  </div>

                  <div className="matrix-row">
                    <div className="matrix-room-name">Room 102</div>
                    <div className="booking b-booking" style={{ left: 'calc(85px + 0%)', width: 'calc(35% - 4px)' }}>Booking.com • Brown</div>
                    <div className="booking b-direct" style={{ left: 'calc(85px + 38%)', width: 'calc(62% - 4px)' }}>Direct • Website</div>
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
