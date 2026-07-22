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

export default function Hero({ t }: HeroProps) {
  const [isMounted, setIsMounted] = useState(false);
  // Стартовая сумма за месяц $4,850
  const [liveAmount, setLiveAmount] = useState(4850);
  const [isTicking, setIsTicking] = useState(false);

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
      setLiveAmount(prev => prev + Math.floor(Math.random() * 3) + 1);
      setIsTicking(true);
      setTimeout(() => setIsTicking(false), 300);
    }, 1200);

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
    return '$' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

        .hero-grid {
          display: grid;
          grid-template-columns: 58fr 42fr;
          gap: 2.5rem;
          align-items: stretch;
          position: relative;
          box-sizing: border-box;
        }

        .text-column {
          text-align: left;
          position: relative;
          z-index: 10;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
          width: fit-content;
        }
        
        .title {
          font-size: clamp(2.4rem, 4.4vw, 3.9rem);
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin: 0 0 1.5rem 0;
          color: #fff;
          text-wrap: balance;
          width: 100%;
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
          gap: 0.85rem;
          flex-wrap: nowrap;
        }
        
        .btn-primary-main {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 54px;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #0A0A0E;
          padding: 0 2.2rem;
          border-radius: 10px;
          font-weight: 800;
          letter-spacing: 0.01em;
          text-decoration: none;
          font-size: 1.05rem;
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          box-shadow: 0 4px 20px rgba(0, 229, 153, 0.25);
          box-sizing: border-box;
          white-space: nowrap;
        }

        .btn-primary-main:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 229, 153, 0.45);
        }

        /* ЕДИНЫЙ ФИРМЕННЫЙ СТИЛЬ КНОПКИ WHATSAPP ДЛЯ ВСЕХ ВЕРСИЙ */
        .btn-secondary-chat {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 10px;
          background: rgba(0, 229, 153, 0.06);
          border: 1px solid rgba(0, 229, 153, 0.25);
          backdrop-filter: blur(8px);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 229, 153, 0.1);
          box-sizing: border-box;
          cursor: pointer;
          flex-shrink: 0;
          text-decoration: none;
          padding: 0;
        }

        .btn-secondary-chat:hover {
          transform: translateY(-2px);
          background: rgba(0, 229, 153, 0.15);
          border-color: rgba(0, 229, 153, 0.5);
          box-shadow: 0 6px 25px rgba(0, 229, 153, 0.3);
        }

        /* Картинка 64х64 с отступом 8px заполняет контейнер 54х54px 1:1 без сжатия */
        .btn-secondary-chat img {
          width: 54px;
          height: 54px;
          object-fit: contain;
          display: block;
          filter: hue-rotate(18deg) brightness(1.1);
          transition: transform 0.25s ease;
        }

        .btn-secondary-chat:hover img {
          transform: scale(1.05);
        }

        /* --- BENTO PROOF CARD VISUAL --- */
        .visual-column {
          position: relative;
          width: 100%;
          display: flex;
          height: 100%;
          min-width: 0;
        }

        .bento-card-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
        }

        .bento-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(0, 229, 153, 0.14) 0%, rgba(0, 163, 255, 0.08) 55%, transparent 80%);
          filter: blur(50px);
          pointer-events: none;
          z-index: 1;
        }

        .bento-card {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          background: rgba(12, 14, 20, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.8rem;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.6),
            inset 0 1px 1px rgba(255, 255, 255, 0.12);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        .bento-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 0.5rem;
        }

        .sync-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #00E599;
          background: rgba(0, 229, 153, 0.08);
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 229, 153, 0.2);
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: #00E599;
          border-radius: 50%;
          box-shadow: 0 0 8px #00E599;
          animation: pulse 2s infinite;
        }

        .ota-saved-block {
          text-align: right;
        }

        .ota-saved-label {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .ota-saved-value {
          font-family: 'SF Mono', monospace, sans-serif;
          font-size: clamp(1.25rem, 2vw, 1.55rem);
          font-weight: 800;
          color: #38BDF8;
          margin-top: 0.15rem;
          transition: transform 0.15s ease, color 0.15s ease;
          display: block;
          text-shadow: 0 0 12px rgba(56, 189, 248, 0.25);
        }

        .ota-saved-value.ticking {
          transform: scale(1.04);
          color: #00E599;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 1.1rem;
          flex: 1;
          margin-top: 1.2rem;
        }

        .bento-item {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 1.2rem 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.35rem;
          transition: border-color 0.25s ease, background 0.25s ease;
          cursor: default;
        }

        .bento-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 229, 153, 0.3);
        }

        .stat-value-container {
          display: flex;
          align-items: baseline;
          justify-content: center;
          line-height: 1;
        }

        .stat-plus {
          font-size: clamp(1.4rem, 2.2vw, 1.9rem);
          font-weight: 700;
          color: #00E599;
          margin-right: 2px;
          opacity: 0.9;
        }

        .stat-value {
          font-size: clamp(2.1rem, 3.2vw, 2.7rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.82rem;
          color: #94A3B8;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
        }

        /* ПЛАНШЕТНАЯ И МОБИЛЬНАЯ АДАПТАЦИЯ (<= 1024px) */
        @media (max-width: 1024px) {
          .hero-section { 
            padding: 2rem 0; 
          }
          .hero-grid { 
            grid-template-columns: 1fr; 
            gap: 0; 
          }
          .text-column { 
            text-align: center; 
            align-items: center; 
          }
          .badge { 
            margin-left: auto; 
            margin-right: auto; 
          }
          .cta-container { 
            flex-direction: row !important; 
            justify-content: center; 
            align-items: center;
            gap: 0.85rem;
            width: 100%;
          }
          .visual-column { 
            display: none !important; /* Убираем бенто-карту */
          }
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
            <div className="bento-card-wrapper">
              <div className="bento-glow"></div>

              <div className="bento-card">
                <div className="bento-header">
                  <div className="sync-badge">
                    <div className="pulse-dot"></div> DIRECT BOOKING SYNC ACTIVE
                  </div>
                  <div className="ota-saved-block">
                    <div className="ota-saved-label">OTA Margin Saved</div>
                    <span className={`ota-saved-value ${isTicking ? 'ticking' : ''}`}>
                      {formatCurrency(liveAmount)}
                    </span>
                  </div>
                </div>

                <div className="bento-grid">
                  <div className="bento-item">
                    <div className="stat-value-container">
                      <span className="stat-plus">+</span>
                      <span className="stat-value">40%</span>
                    </div>
                    <div className="stat-label">Direct Revenue</div>
                  </div>

                  <div className="bento-item">
                    <div className="stat-value-container">
                      <span className="stat-plus">+</span>
                      <span className="stat-value">60%</span>
                    </div>
                    <div className="stat-label">Margin per Guest</div>
                  </div>

                  <div className="bento-item">
                    <div className="stat-value-container">
                      <span className="stat-plus">+</span>
                      <span className="stat-value">300%</span>
                    </div>
                    <div className="stat-label">Google Traffic</div>
                  </div>

                  <div className="bento-item">
                    <div className="stat-value-container">
                      <span className="stat-plus">+</span>
                      <span className="stat-value">35%</span>
                    </div>
                    <div className="stat-label">Repeat Bookings</div>
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
