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
  const [liveAmount, setLiveAmount] = useState(148335);

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
    }, 2500);

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

        /* Распределяем пропорцию: 58% под текст, 42% под правый блок */
        .hero-grid {
          display: grid;
          grid-template-columns: 58fr 42fr;
          gap: 2.5rem;
          align-items: center;
          position: relative;
          box-sizing: border-box;
        }

        .text-column {
          text-align: left;
          position: relative;
          z-index: 10;
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

        /* --- BENTO PROOF CARD VISUAL --- */
        .visual-column {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-width: 0;
        }

        .bento-card-wrapper {
          position: relative;
          width: 100%;
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
          gap: 1.4rem;
          box-sizing: border-box;
        }

        .bento-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          gap: 0.5rem;
        }

        .sync-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
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
          font-family: 'SF Mono', monospace;
          font-size: 1.1rem;
          font-weight: 700;
          color: #38BDF8;
          margin-top: 0.1rem;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .bento-item {
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 1.3rem 1.1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 0.5rem;
          min-height: 100px;
          transition: all 0.25s ease;
        }

        .bento-item:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 229, 153, 0.3);
          transform: translateY(-2px);
        }

        .stat-value {
          font-size: clamp(2rem, 3.2vw, 2.7rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.4rem;
        }

        .stat-label {
          font-size: 0.82rem;
          color: #CBD5E1;
          font-weight: 500;
        }

        .stat-trend {
          font-size: 0.7rem;
          color: #00E599;
          font-weight: 700;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
          70% { box-shadow: 0 0 0 6px rgba(0, 225, 153, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 225, 153, 0.6); }
        }

        @media (max-width: 992px) {
          .hero-section { padding: 2rem 0; }
          .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
          .text-column { text-align: center; }
          .cta-container { flex-direction: column; align-items: center; }
          .bento-card-wrapper { max-width: 480px; margin: 0 auto; }
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
                    <div className="pulse-dot"></div> 1s Sync Active
                  </div>
                  <div className="ota-saved-block">
                    <div className="ota-saved-label">OTA Margin Saved</div>
                    <div className="ota-saved-value">{formatCurrency(liveAmount)}</div>
                  </div>
                </div>

                <div className="bento-grid">
                  <div className="bento-item">
                    <div className="stat-value">+40%</div>
                    <div className="stat-label-row">
                      <span className="stat-label">Direct Revenue</span>
                      <span className="stat-trend">↑</span>
                    </div>
                  </div>

                  <div className="bento-item">
                    <div className="stat-value">+60%</div>
                    <div className="stat-label-row">
                      <span className="stat-label">Margin per Guest</span>
                      <span className="stat-trend">↑</span>
                    </div>
                  </div>

                  <div className="bento-item">
                    <div className="stat-value">+300%</div>
                    <div className="stat-label-row">
                      <span className="stat-label">Google Traffic</span>
                      <span className="stat-trend">↑</span>
                    </div>
                  </div>

                  <div className="bento-item">
                    <div className="stat-value">+35%</div>
                    <div className="stat-label-row">
                      <span className="stat-label">Repeat Bookings</span>
                      <span className="stat-trend">↑</span>
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
