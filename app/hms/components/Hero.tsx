'use client';

import React, { useState, useEffect } from 'react';

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
  const [liveAmount, setLiveAmount] = useState(148335);
  
  const [logs, setLogs] = useState<LogEntry[]>([
    { time: '22:46:12', text: 'Booking.com room status locked' },
    { time: '22:45:54', text: 'Traveloka calendar synced' },
    { time: '22:44:01', text: 'Direct Booking • Room 101 secured' },
    { time: '22:43:41', text: 'Agoda rate parity verified' },
    { time: '22:41:10', text: 'Booking.com channel active' }
  ]);

  useEffect(() => {
    setIsMounted(true);

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
          width: 100%;
          padding: 2.5rem 0 4rem 0;
          position: relative;
          z-index: 10;
        }

        /* FIX: Зажимаем контейнер и обрезаем макет СТРОГО по его правой границе 1200px */
        .hero-section :global(.container) {
          overflow: hidden;
          position: relative;
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 52fr 48fr;
          gap: 1rem;
          align-items: center;
          position: relative;
          box-sizing: border-box;
        }

        .text-column {
          text-align: left;
          position: relative;
          z-index: 10;
          padding-right: 1rem;
          min-width: 0;
        }
        
        .badge {
          color: #00E599;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.7rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          padding: 0.35rem 0.85rem;
          background: rgba(0, 229, 153, 0.05);
          border: 1px solid rgba(0, 229, 153, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(8px);
          margin-bottom: 1.5rem;
        }
        
        .title {
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
          color: #fff;
          text-wrap: balance;
          max-width: 650px;
        }
        
        .subtitles-block {
          margin-bottom: 1.5rem;
          display: block !important;
        }
        
        .sub-line-1, .sub-line-2 {
          display: block !important;
          font-size: clamp(1.05rem, 1.7vw, 1.2rem);
          line-height: 1.55;
          margin: 0;
          color: #CBD5E1;
          font-weight: 400;
          text-wrap: pretty;
        }
        .sub-line-2 {
          margin-top: 0.4rem;
        }
        
        .utp-highlight {
          font-size: clamp(1.25rem, 2.1vw, 1.45rem);
          font-weight: 700;
          color: #00E599;
          margin-bottom: 2.2rem;
          letter-spacing: -0.01em;
          display: block;
        }

        .cta-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn-primary-main {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #0A0A0E;
          padding: 1.1rem 2.2rem;
          border-radius: 8px;
          font-weight: 800;
          letter-spacing: 0.01em;
          text-decoration: none;
          font-size: 1.05rem;
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          box-shadow: 0 4px 20px rgba(0, 229, 153, 0.25);
        }

        .btn-primary-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 229, 153, 0.45);
        }

        .btn-secondary-chat {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(8px);
          box-sizing: border-box;
          cursor: pointer;
        }

        .btn-secondary-chat:hover {
          transform: translateY(-2px);
          background: rgba(37, 211, 102, 0.12);
          border-color: rgba(37, 211, 102, 0.4);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.25);
        }

        .btn-secondary-chat img {
          width: 28px;
          height: 28px;
          object-fit: contain;
          display: block;
        }

        .visual-column {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          min-width: 0;
        }

        .perspective-wrapper {
          width: 100%;
          perspective: 1400px;
          position: relative;
        }

        .perspective-wrapper::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0, 163, 255, 0.12) 0%, rgba(0, 229, 153, 0.04) 40%, transparent 70%);
          transform: translate(-50%, -50%);
          z-index: -1;
          filter: blur(40px);
          pointer-events: none;
        }
        
        .dashboard-mockup {
          width: 140%;
          aspect-ratio: 16 / 10; 
          background-color: rgba(10, 10, 14, 0.85);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          transform: rotateX(10deg) rotateY(-18deg) rotateZ(2deg) translateX(-10px); 
          transform-origin: center center;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.85), inset 0 1px 1px rgba(255, 255, 255, 0.12);
          padding: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, black 65%, transparent 98%);
          mask-image: linear-gradient(to right, black 65%, transparent 98%);
        }
        
        .pms-header {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 0.5rem;
        }
        
        .sync-status { 
          display: flex; 
          align-items: center; 
          gap: 0.5rem; 
          font-size: 0.72rem; 
          color: rgba(255, 255, 255, 0.85); 
          font-weight: 600; 
          background: rgba(255, 255, 255, 0.04); 
          padding: 0.25rem 0.65rem; 
          border-radius: 20px; 
          border: 1px solid rgba(255, 255, 255, 0.08); 
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
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.75rem 0.95rem;
          border-radius: 8px;
          min-width: 0;
          overflow: hidden;
        }
        
        .widget.primary-focus {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
        }

        .widget.primary-focus::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #00E599 0%, #00A3FF 100%);
        }

        .widget-label { font-size: 0.65rem; color: rgba(255, 255, 255, 0.45); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.3rem; }
        .widget-value { font-size: 1.45rem; font-weight: 700; color: #fff; font-family: 'SF Mono', monospace; line-height: 1; }
        
        .text-brand-gradient { 
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .widget-sub { font-size: 0.65rem; color: rgba(255, 255, 255, 0.35); margin-top: 0.3rem; }
        
        .mini-chart {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 24px;
          margin-top: 0.4rem;
        }
        .bar { width: 12px; border-radius: 2px 2px 0 0; }
        .bar.ota { background: rgba(255, 255, 255, 0.08); }
        .bar.direct { background: linear-gradient(180deg, #00E599 0%, #00A3FF 100%); opacity: 0.85; }

        .logs-widget {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.04);
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
          color: rgba(255, 255, 255, 0.55);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
          display: block;
        }
        .log-time {
          color: rgba(255, 255, 255, 0.25);
          margin-right: 0.4rem;
        }

        .pms-matrix {
          flex: 1;
          min-width: 0;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.04);
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
          color: rgba(255, 255, 255, 0.4);
          text-align: center;
          background: rgba(255, 255, 255, 0.015);
        }
        .matrix-header > div { padding: 0.6rem 0; border-right: 1px solid rgba(255, 255, 255, 0.02); }
        
        .matrix-row {
          display: grid;
          grid-template-columns: 80px repeat(7, 1fr);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          flex: 1;
          position: relative;
        }
        .matrix-room-name {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          padding: 0 0.5rem;
          display: flex;
          align-items: center;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(13, 13, 17, 0.3);
        }
        
        .booking {
          position: absolute;
          top: 6px; bottom: 6px;
          border-radius: 6px;
          font-size: 0.65rem;
          padding: 0 0.6rem;
          display: flex;
          align-items: center;
          overflow: hidden;
          white-space: nowrap;
          backdrop-filter: blur(6px);
          transition: all 0.3s ease;
        }

        .b-direct { 
          background: rgba(0, 229, 153, 0.12);
          border: 1px solid rgba(0, 229, 153, 0.5);
          color: #00E599;
          font-weight: 600;
          box-shadow: inset 0 0 10px rgba(0, 229, 153, 0.12), 0 2px 8px rgba(0, 229, 153, 0.1);
        }

        .b-booking { 
          background: rgba(0, 163, 255, 0.12);
          border: 1px solid rgba(0, 163, 255, 0.5);
          color: #38BDF8;
          font-weight: 600;
          box-shadow: inset 0 0 10px rgba(0, 163, 255, 0.12), 0 2px 8px rgba(0, 163, 255, 0.1);
        }

        .b-agoda { 
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.5);
          color: #FB7185;
          font-weight: 600;
          box-shadow: inset 0 0 10px rgba(244, 63, 94, 0.12), 0 2px 8px rgba(244, 63, 94, 0.1);
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
        }

        @media (max-width: 992px) {
          .hero-section { padding: 2rem 0; }
          .hero-grid { grid-template-columns: 1fr; gap: 3.5rem; }
          .text-column { text-align: center; padding-right: 0; }
          .cta-container { flex-direction: column; align-items: center; }
          .dashboard-mockup { 
            transform: none !important; 
            width: 100% !important; 
            -webkit-mask-image: none;
            mask-image: none;
          }
          .pms-body { flex-direction: column; }
          .pms-analytics { flex: none; gap: 0.6rem; width: 100%; }
          .pms-matrix { display: none; }
        }
      `}</style>

      <div className="container">
        <div className="hero-grid">
          <div className="text-column">
            <span className="badge">{t.badge}</span>
            <h1 className="title">{t.heroTitle}</h1>
            
            <div className="subtitles-block">
              <div className="sub-line-1">{line1}</div>
              {line2 && <div className="sub-line-2">{line2}</div>}
            </div>
            
            <div className="utp-highlight">
              {t.heroSub2}
            </div>
            
            <div className="cta-container">
              <button onClick={handleCalendlyPopup} className="btn-primary-main">
                Book a Free Audit
              </button>
              
              <a 
                href="https://wa.me/66955183783" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary-chat"
                title="WhatsApp"
              >
                <img src="/logos/whatsapp.svg" alt="WhatsApp" />
              </a>
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
                      <div className="widget-value" style={{ fontSize: '1.25rem' }}>84% <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span> ฿4,250</div>
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
                      <div className="widget-label">Live Activity Log</div>
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
      </div>
    </section>
  );
}
