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

        .hero-grid {
          display: grid;
          grid-template-columns: 52fr 48fr;
          gap: 2rem;
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

        /* --- HYBRID 3D HUB VISUAL --- */
        .visual-column {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }

        .hybrid-hub-wrapper {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }

        .hub-glow-bg {
          position: absolute;
          width: 70%;
          height: 70%;
          background: radial-gradient(circle, rgba(0, 229, 153, 0.18) 0%, rgba(0, 163, 255, 0.12) 50%, transparent 75%);
          filter: blur(50px);
          z-index: 1;
          pointer-events: none;
        }

        .svg-connections {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .pulse-line {
          stroke-dasharray: 8 12;
          animation: dashMove 12s linear infinite;
        }

        @keyframes dashMove {
          to { stroke-dashoffset: -200; }
        }

        .hero-hub-card {
          position: relative;
          z-index: 10;
          width: 78%;
          background: rgba(12, 14, 20, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(0, 229, 153, 0.3);
          border-radius: 20px;
          padding: 1.8rem 1.5rem;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.7),
            inset 0 1px 1px rgba(255, 255, 255, 0.15),
            0 0 30px rgba(0, 229, 153, 0.1);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          transform: rotateX(4deg) rotateY(-6deg);
          transition: transform 0.4s ease;
        }

        .hero-hub-card:hover {
          transform: rotateX(0deg) rotateY(0deg) translateY(-4px);
        }

        .hub-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #00E599;
          background: rgba(0, 229, 153, 0.08);
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          border: 1px solid rgba(0, 229, 153, 0.25);
          width: fit-content;
        }

        .pulse-dot-small {
          width: 6px;
          height: 6px;
          background-color: #00E599;
          border-radius: 50%;
          box-shadow: 0 0 8px #00E599;
          animation: pulse 2s infinite;
        }

        .hub-main-stat {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-big {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #CBD5E1;
          font-weight: 500;
        }

        .hub-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          width: 100%;
        }

        .hub-sub-stat {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }

        .sub-stat-title {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .sub-stat-value {
          font-family: 'SF Mono', monospace;
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFF;
          margin-top: 0.2rem;
        }

        .hub-status-tag {
          font-size: 0.7rem;
          color: #38BDF8;
          font-weight: 600;
          background: rgba(0, 163, 255, 0.1);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
          border: 1px solid rgba(0, 163, 255, 0.25);
        }

        /* Orbiting Node Badges */
        .node-badge {
          position: absolute;
          z-index: 12;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.85rem;
          background: rgba(18, 22, 31, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          backdrop-filter: blur(12px);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
          font-size: 0.72rem;
          font-weight: 600;
          color: #FFF;
          animation: float 5s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .node-badge:hover {
          border-color: #00E599;
          transform: scale(1.05) !important;
          box-shadow: 0 0 20px rgba(0, 229, 153, 0.3);
        }

        .node-top-left {
          top: 4%;
          left: 2%;
          animation-delay: 0s;
        }

        .node-top-right {
          top: 8%;
          right: 0%;
          animation-delay: 1.2s;
        }

        .node-bottom-left {
          bottom: 6%;
          left: 0%;
          animation-delay: 2.5s;
        }

        .node-bottom-right {
          bottom: 4%;
          right: 2%;
          animation-delay: 3.7s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
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
          .hybrid-hub-wrapper { max-width: 380px; margin: 0 auto; }
          .hero-hub-card { transform: none !important; width: 85%; }
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
            <div className="hybrid-hub-wrapper">
              <div className="hub-glow-bg"></div>

              {/* Connecting Lines SVG */}
              <svg className="svg-connections" viewBox="0 0 400 400">
                <line x1="80" y1="60" x2="200" y2="200" stroke="rgba(0, 229, 153, 0.25)" strokeWidth="1.5" className="pulse-line" />
                <line x1="320" y1="70" x2="200" y2="200" stroke="rgba(0, 163, 255, 0.25)" strokeWidth="1.5" className="pulse-line" />
                <line x1="70" y1="330" x2="200" y2="200" stroke="rgba(0, 163, 255, 0.25)" strokeWidth="1.5" className="pulse-line" />
                <line x1="330" y1="320" x2="200" y2="200" stroke="rgba(0, 229, 153, 0.25)" strokeWidth="1.5" className="pulse-line" />
              </svg>

              {/* Orbiting Nodes */}
              <div className="node-badge node-top-left">
                <span style={{ color: '#003580', fontWeight: '800' }}>B.</span> Booking.com
              </div>

              <div className="node-badge node-top-right">
                <span style={{ color: '#F43F5E', fontWeight: '800' }}>a.</span> Agoda
              </div>

              <div className="node-badge node-bottom-left">
                <span style={{ color: '#FF5A5F', fontWeight: '800' }}>★</span> Airbnb
              </div>

              <div className="node-badge node-bottom-right">
                <span style={{ color: '#25D366', fontWeight: '800' }}>⚡</span> Direct Sync
              </div>

              {/* Central Card */}
              <div className="hero-hub-card">
                <div className="hub-header-badge">
                  <div className="pulse-dot-small"></div> Direct System Active
                </div>

                <div className="hub-main-stat">
                  <div className="stat-big">+34%</div>
                  <div className="stat-label">Direct Revenue Growth</div>
                </div>

                <div className="hub-divider"></div>

                <div className="hub-sub-stat">
                  <div>
                    <div className="sub-stat-title">OTA Margin Saved</div>
                    <div className="sub-stat-value">{formatCurrency(liveAmount)}</div>
                  </div>
                  <div className="hub-status-tag">0% Commission</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
