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
  const [isMounted, setIsMounted] = useState(false);
  const [liveAmount, setLiveAmount] = useState(148250);
  
  const [logs, setLogs] = useState<LogEntry[]>([
    { time: '22:46:12', text: 'Booking.com room status locked' },
    { time: '22:45:54', text: 'Traveloka calendar synced' },
    { time: '22:44:01', text: 'Direct Booking • Room 101 secured' },
    { time: '22:43:41', text: 'Agoda rate parity verified' },
    { time: '22:41:10', text: 'Booking.com channel active' }
  ]);

  useEffect(() => {
    setIsMounted(true);

    // Безопасно подтягиваем официальные стили и скрипты Calendly для поп-апа
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

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
        ...prev.slice(0, 4)
      ]);
    }, 2000);

    return () => {
      clearInterval(interval);
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  // Вызов окна Calendly поверх интерфейса
  const handleCalendlyPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/fediatsvetkov/15min' });
    } else {
      window.open('https://calendly.com/fediatsvetkov/15min', '_blank');
    }
  };

  const formatCurrency = (num: number) => {
    return '฿' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const dotIndex = t.heroSub1.indexOf('. ');
  let line1 = t.heroSub1;
  let line2 = '';

  if (dotIndex !== -1) {
    line1 = t.heroSub1.substring(0, dotIndex);
    line2 = t.heroSub1.substring(dotIndex + 2);
  }

  return (
    <section 
      className="hero-section"
      style={{ 
        opacity: isMounted ? 1 : 0, 
        transition: 'opacity 0.4s ease-out' 
      }}
    >
      <style jsx>{`
        .hero-section {
          padding: 2.5rem 0 4rem 0;
          position: relative;
          z-index: 10;
          overflow: hidden;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 62% 38%;
          gap: 1.5rem;
          align-items: center;
          position: relative;
        }

        .text-column {
          text-align: left;
          position: relative;
          z-index: 2;
        }
        
        .badge {
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.25em;
          font-size: 0.72rem;
          font-weight: 700;
          display: inline-block;
          margin-bottom: 1.2rem;
        }
        
        .title {
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
          color: #fff;
          text-wrap: pretty;
        }
        
        .subtitles-block {
          margin-bottom: 1.8rem;
          display: block !important;
        }
        .sub-line-1, .sub-line-2 {
          display: block !important;
          font-size: clamp(1.05rem, 1.7vw, 1.2rem);
          line-height: 1.5;
          margin: 0;
          color: ${T.sub};
          text-wrap: pretty;
        }
        .sub-line-2 {
          margin-top: 0.4rem;
        }
        
        .utp-highlight {
          font-size: clamp(1.25rem, 2.1vw, 1.45rem);
          font-weight: 700;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2.5rem;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        
        /* Бритвоострая изумрудная стрелка без синевы */
        .utp-arrow {
          color: #00E599 !important;
          -webkit-text-fill-color: #00E599 !important;
        }

        .cta-container {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .btn-primary-main {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #000000 !important;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          padding: 1.1rem 2.5rem;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          font-size: 1rem;
          flex-shrink: 0;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 229, 153, 0.2), 0 10px 30px rgba(0, 163, 255, 0.1);
          cursor: pointer;
        }
        .btn-primary-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 229, 153, 0.35), 0 15px 40px rgba(0, 163, 255, 0.2);
          filter: brightness(1.08);
        }

        .secondary-chats {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .btn-secondary-chat {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .btn-secondary-chat:hover {
          color: #fff;
          transform: translateY(-1px);
        }

        .btn-secondary-chat img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          transition: transform 0.2s ease;
        }
        .btn-secondary-chat img[src*="whatsapp"] { transform: scale(1.15); }
        .btn-secondary-chat img[src*="line"] { transform: scale(1.45); }

        .visual-column {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        .perspective-wrapper {
          width: 100%;
          perspective: 1400px;
        }
        
        .dashboard-mockup {
          width: 190%; 
          aspect-ratio: 16 / 10; 
          background-color: rgba(13, 13, 17, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          transform: rotateX(13deg) rotateY(-15deg) rotateZ(3deg) translateX(0px); 
          transform-origin: left center;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.08);
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          position: relative;
        }
        
        .pms-header {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.4rem;
        }
        
        .sync-status { 
          display: flex; 
          align-items: center; 
          gap: 0.5rem; 
          font-size: 0.72rem; 
          color: rgba(255, 255, 255, 0.8); 
          font-weight: 600; 
          background: rgba(255, 255, 255, 0.03); 
          padding: 0.25rem 0.65rem; 
          border-radius: 20px; 
          border: 1px solid rgba(255, 255, 255, 0.06); 
        }
        .pulse-dot { 
          width: 6px; 
          height: 6px; 
          background-color: #00E599; 
          border-radius: 50%; 
          box-shadow: 0 0 8px #00E599;
          animation: pulse 2s infinite; 
        }
        
        .pms-body {
          display: flex;
          gap: 1.2rem;
          flex: 1;
          overflow: hidden;
        }

        .pms-analytics {
          display: flex;
          flex-direction: column;
          gap: 0.5rem; 
          flex: 0 0 215px;
          min-width: 0;
          overflow: hidden;
        }
        .widget {
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 0.75rem 0.95rem;
          border-radius: 8px;
          min-width: 0;
          overflow: hidden;
        }
        
        .widget.primary-focus {
          position: relative;
          background: rgba(255, 255, 255, 0.015);
          border-left: none;
        }
        .widget.primary-focus::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #00E599 0%, #00A3FF 100%);
        }

        .widget-label { font-size: 0.65rem; color: #555; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.3rem; }
        .widget-value { font-size: 1.45rem; font-weight: 700; color: #fff; font-family: 'SF Mono', monospace; line-height: 1; }
        
        .text-brand-gradient { 
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .widget-sub { font-size: 0.65rem; color: #444; margin-top: 0.3rem; }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 24px;
          margin-top: 0.4rem;
        }
        .bar { width: 12px; border-radius: 2px 2px 0 0; }
        .bar.ota { background: rgba(255, 255, 255, 0.06); }
        .bar.direct { background: linear-gradient(180deg, #00E599 0%, #00A3FF 100%); opacity: 0.7; }

        .logs-widget {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.02);
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .logs-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between; 
          height: 100%;
          margin-top: 0.4rem;
          font-family: 'SF Mono', monospace;
          font-size: 0.62rem;
        }
        .log-line {
          color: rgba(255, 255, 255, 0.35);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          display: block;
        }
        .log-time {
          color: rgba(255, 255, 255, 0.15);
          margin-right: 0.4rem;
        }

        .pms-matrix {
          flex: 1;
          min-width: 0;
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .matrix-header {
          display: grid;
          grid-template-columns: 80px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.65rem;
          color: #555;
          text-align: center;
          background: rgba(255, 255, 255, 0.01);
        }
        .matrix-header > div { padding: 0.6rem 0; border-right: 1px solid rgba(255, 255, 255, 0.01); }
        
        .matrix-row {
          display: grid;
          grid-template-columns: 80px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.02);
          flex: 1;
          position: relative;
        }
        .matrix-room-name {
          font-size: 0.7rem;
          color: #666;
          padding: 0 0.5rem;
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
          padding: 0 0.5rem;
          color: #fff;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          box-shadow: 0 3px 10px rgba(0,0,0,0.4);
        }
        .b-direct { background: linear-gradient(90deg, #00E599 0%, #00A3FF 100%); color: #000; font-weight: 600; }
        .b-booking { background: linear-gradient(90deg, #003580 0%, #0050c2 100%); }
        .b-agoda { background: linear-gradient(90deg, #873335 0%, #cc474b 100%); }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
        }

        @media (max-width: 992px) {
          .hero-section { padding: 2rem 0 2rem 0; }
          .hero-grid { grid-template-columns: 1fr; gap: 3.5rem; }
          .text-column { text-align: center; }
          .cta-container { flex-direction: column; align-items: center; }
          .secondary-chats { justify-content: center; }
          .utp-highlight { justify-content: center; }
          .dashboard-mockup { transform: none !important; width: 100% !important; }
          .pms-body { flex-direction: column; }
          .pms-analytics { flex: none; gap: 0.6rem; width: 100%; }
          .pms-matrix { display: none; }
        }
      `}</style>

      <div className="hero-grid">
        <div className="text-column">
          <span className="badge">{t.badge}</span>
          <h1 className="title">{t.heroTitle}</h1>
          
          <div className="subtitles-block">
            <div className="sub-line-1">{line1}</div>
            {line2 && <div className="sub-line-2">{line2}</div>}
          </div>
          
          <div className="utp-highlight">
            <span className="utp-arrow">→</span>&nbsp;{t.heroSub2}
          </div>
          
          <div className="cta-container">
            <button onClick={handleCalendlyPopup} className="btn-primary-main" style={{ border: 'none' }}>
              Book a Free Audit
            </button>
            
            <div className="secondary-chats">
              <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" className="btn-secondary-chat">
                <div style={{ width: '18px', height: '18px', minWidth: '18px', flexShrink: 0 }}>
                  <img src="/logos/whatsapp.svg" alt="WhatsApp" />
                </div>
                <span>{t.btnChat}</span>
              </a>
              
              <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer" className="btn-secondary-chat">
                <div style={{ width: '18px', height: '18px', minWidth: '18px', flexShrink: 0 }}>
                  <img src="/logos/line.svg" alt="LINE" />
                </div>
                <span>{t.btnLine}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="visual-column">
          <div className="perspective-wrapper">
            <div className="dashboard-mockup">
              <div className="pms-header">
                <div className="sync-status"><div className="pulse-dot"></div>1s OTA Sync Active</div>
              </div>
              <div className="pms-body">
                <div className="pms-analytics">
                  <div className="widget primary-focus">
                    <div className="widget-label">OTA Margin Saved</div>
                    <div className="widget-value text-brand-gradient">{formatCurrency(liveAmount)}</div>
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
                <div className="pms-matrix">
                  <div className="matrix-header">
                    <div>ROOM</div>
                    <div>16 Dec</div><div>17 Dec</div><div>18 Dec</div><div>19 Dec</div><div>20 Dec</div><div>21 Dec</div><div>22 Dec</div>
                  </div>
                  <div className="matrix-row">
                    <div className="matrix-room-name">Villa 1</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 0%)', width: 'calc(28.5% - 4px)' }}>Direct • Smith</div>
                    <div className="booking b-booking" style={{ left: 'calc(80px + 35%)', width: 'calc(55% - 4px)' }}>Booking.com • Lee</div>
                  </div>
                  <div className="matrix-row">
                    <div className="matrix-room-name">Villa 2</div>
                    <div className="booking b-agoda" style={{ left: 'calc(80px + 10%)', width: 'calc(45% - 4px)' }}>Agoda • Kumar</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 65%)', width: 'calc(30% - 4px)' }}>Direct • VIP</div>
                  </div>
                  <div className="matrix-row">
                    <div className="matrix-room-name">Room 101</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 0%)', width: 'calc(57.1% - 4px)' }}>Direct • Johnson</div>
                    <div className="booking b-booking" style={{ left: 'calc(80px + 60%)', width: 'calc(40% - 4px)' }}>Booking.com • Davis</div>
                  </div>
                  <div className="matrix-row">
                    <div className="matrix-room-name">Room 102</div>
                    <div className="booking b-booking" style={{ left: 'calc(80px + 0%)', width: 'calc(35% - 4px)' }}>Booking.com • Brown</div>
                    <div className="booking b-direct" style={{ left: 'calc(80px + 38%)', width: 'calc(62% - 4px)' }}>Direct • Website</div>
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
