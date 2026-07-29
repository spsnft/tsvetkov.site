'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';

const CYAN_ACCENT = T.acc2 || '#00A3FF';

interface ExpertiseProps {
  dict: {
    expertise: {
      badge: string;
      title: string;
      subtitle?: string;
      card1Title: string;
      card1Desc: string;
      card1Bullets?: string[];
      hmsBadge: string;
      hmsTitle: string;
      hmsDesc?: string;
      hmsCta: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
    };
  } | null;
}

export const Expertise = ({ dict }: ExpertiseProps) => {
  const t = dict?.expertise ?? {
    badge: 'SOLUTIONS & ARSENAL',
    title: 'Systems Built to Scale Your Business',
    subtitle: 'Connecting architecture, funnels, and automation into a predictable growth engine.',
    card1Title: 'Systems, Data & Architecture',
    card1Desc: 'Eliminate blind decision-making by unifying scattered business data into a <strong>single source of truth</strong>. Complete clarity on P&L, unit economics, and margin.',
    card1Bullets: [
      'Unified P&L & Multi-Channel Attribution',
      'Zero-Leakage CRM Routing Protocols',
      'Real-Time Margin & Unit Dashboards'
    ],
    hmsBadge: 'SPECIALIZED OFFER',
    hmsTitle: 'Direct Booking Ecosystems (HMS)',
    hmsCta: 'Explore HMS Solution',
    card2Title: 'Strategic Audits & Funnel Optimization',
    card2Desc: 'We analyze your customer journey to eliminate bottlenecks. Rebuilding sales funnels and optimizing conversion to <strong>maximize revenue from existing traffic</strong>.',
    card3Title: 'Process Automation & AI Workflows',
    card3Desc: 'Eliminate operational lag and human error. Instantly route leads, <strong>automate CRM handoffs, and deploy AI agents</strong> to cut overhead and accelerate sales.',
  };

  const renderWithStrong = (text: string) => {
    const parts = text.split(/<strong>(.*?)<\/strong>/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} style={{ color: '#ffffff' }}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="expertise" className="expertise-section">
      <style jsx>{`
        .expertise-section {
          width: 100%;
          position: relative;
          padding: 1.5rem 0 clamp(2.5rem, 5vw, 5rem) 0;
          background: transparent;
          z-index: 5;
        }

        .header-box {
          text-align: center;
          margin-bottom: 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          margin-bottom: 0.65rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0, 163, 255, 0.08);
          border: 1px solid rgba(0, 163, 255, 0.25);
          color: ${CYAN_ACCENT};
          backdrop-filter: blur(12px);
        }

        .title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          text-wrap: balance;
        }

        .subtitle {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          max-width: 600px;
          line-height: 1.45;
        }

        /* BENTO GRID 10-TRACK (УЛЬТРА-КОМПАКТНЫЙ GAP) */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
        }

        @media (min-width: 992px) {
          .bento-grid {
            grid-template-columns: repeat(10, 1fr);
          }

          .col-70 {
            grid-column: span 7;
          }

          .col-30 {
            grid-column: span 3;
          }

          .col-50 {
            grid-column: span 5;
          }
        }

        /* BENTO CARD BASE */
        .bento-card {
          position: relative;
          overflow: hidden;
          padding: 1.35rem 1.5rem;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(12, 12, 16, 0.45);
          backdrop-filter: blur(14px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .bento-card:hover {
          border-color: rgba(0, 163, 255, 0.35);
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 163, 255, 0.06);
        }

        /* HERO CARD (70%) SPLIT LAYOUT */
        .hero-split-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          height: 100%;
          align-items: center;
        }

        @media (min-width: 768px) {
          .hero-split-container {
            flex-direction: row;
          }
        }

        .hero-left {
          flex: 1.4;
        }

        .hero-right {
          flex: 0.75;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* BULLETS INLINE/COMPACT */
        .hero-bullets {
          margin-top: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.6rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid rgba(255, 255, 255, 0.04);
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
        }

        .bullet-icon {
          color: ${T.accent};
          font-size: 0.7rem;
          line-height: 1;
        }

        /* АККУРАТНЫЙ КУБ (135px) */
        .hero-asset-box {
          position: relative;
          width: 135px;
          height: 135px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-asset-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 163, 255, 0.22) 0%, rgba(0, 229, 153, 0.1) 60%, transparent 75%);
          filter: blur(20px);
          pointer-events: none;
        }

        /* CARD HEADER & ASSETS */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
        }

        .header-content {
          flex: 1;
        }

        .asset-slot-inline {
          position: relative;
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: -2px;
        }

        .asset-glow-inline {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          filter: blur(12px);
          pointer-events: none;
        }

        .asset-glow-inline.cyan {
          background: radial-gradient(circle, rgba(0, 163, 255, 0.25) 0%, transparent 70%);
        }

        .asset-glow-inline.green {
          background: radial-gradient(circle, rgba(0, 229, 153, 0.25) 0%, transparent 70%);
        }

        :global(.asset-img-inline) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.5));
        }

        .card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin: 0;
        }

        .card-desc {
          font-size: 0.86rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        /* HMS CARD (30%) — ULTRA-SLIM BANNER */
        .card-hms {
          background: rgba(0, 229, 153, 0.03);
          border: 1px solid rgba(0, 229, 153, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-hms:hover {
          background: rgba(0, 229, 153, 0.06);
          border-color: rgba(0, 229, 153, 0.5);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 25px rgba(0, 229, 153, 0.12);
        }

        .hms-tag {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.accent};
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.25);
          padding: 2px 7px;
          border-radius: 5px;
          margin-bottom: 0.6rem;
        }

        .hms-usp {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .hms-usp-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${T.accent};
        }

        /* COMPACT B2B CTA BUTTON */
        .hms-glass-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.6rem 0.85rem;
          margin-top: 1rem;
          border-radius: 10px;
          background: rgba(0, 229, 153, 0.09);
          border: 1px solid rgba(0, 229, 153, 0.32);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }

        .hms-glass-button:hover {
          background: rgba(0, 229, 153, 0.2);
          border-color: rgba(0, 229, 153, 0.65);
          box-shadow: 0 0 15px rgba(0, 229, 153, 0.22);
        }

        .hms-button-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(0, 229, 153, 0.15);
          color: ${T.accent};
          transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        }

        .hms-glass-button:hover .hms-button-arrow {
          transform: translateX(3px);
          background: ${T.accent};
          color: #0d0e12;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">{t.badge}</span>
          <h2 className="title">{t.title}</h2>
          {t.subtitle && <p className="subtitle">{t.subtitle}</p>}
        </div>

        <div className="bento-grid">
          
          {/* 1. КАРТОЧКА 70% — HERO FLAGSHIP */}
          <div className="bento-card col-70">
            <div className="hero-split-container">
              <div className="hero-left">
                <h3 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>
                  {t.card1Title}
                </h3>
                <p className="card-desc">
                  {renderWithStrong(t.card1Desc)}
                </p>

                {t.card1Bullets && (
                  <div className="hero-bullets">
                    {t.card1Bullets.map((bullet, idx) => (
                      <div className="bullet-item" key={idx}>
                        <span className="bullet-icon">◆</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* КУБ (135px) */}
              <div className="hero-right">
                <div className="hero-asset-box">
                  <div className="hero-asset-glow" />
                  <Image 
                    src="/assets/3d-data-cube.webp" 
                    alt="Systems & Data Architecture" 
                    className="asset-img-inline"
                    width={135}
                    height={135}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. КАРТОЧКА 30% — HMS OFFER (КОМПАКТНЫЙ БАННЕР) */}
          <div className="bento-card card-hms col-30">
            <div>
              <span className="hms-tag">{t.hmsBadge}</span>
              
              <div className="card-header">
                <div className="header-content">
                  <h3 className="card-title" style={{ fontSize: '1.05rem' }}>{t.hmsTitle}</h3>
                </div>
                <div className="asset-slot-inline" style={{ width: 44, height: 44 }}>
                  <div className="asset-glow-inline green" />
                  <Image 
                    src="/assets/3d-hms-core.webp" 
                    alt="HMS Hospitality Tech" 
                    className="asset-img-inline"
                    width={44}
                    height={44}
                  />
                </div>
              </div>

              <div className="hms-usp">
                <span className="hms-usp-dot" />
                <span>0% OTA Commissions & PMS Sync</span>
              </div>
            </div>

            {/* B2B КНОПКА */}
            <Link href="/hms" className="hms-glass-button">
              <span>{t.hmsCta}</span>
              <div className="hms-button-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          </div>

          {/* 3. КАРТОЧКА 50% — FUNNEL OPTIMIZATION */}
          <div className="bento-card col-50">
            <div>
              <div className="card-header">
                <div className="header-content">
                  <h3 className="card-title">{t.card2Title}</h3>
                </div>
                <div className="asset-slot-inline">
                  <div className="asset-glow-inline cyan" />
                  <Image 
                    src="/assets/3d-gtm-prism.webp" 
                    alt="Funnel Strategy Visual" 
                    className="asset-img-inline"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <p className="card-desc">
                {renderWithStrong(t.card2Desc)}
              </p>
            </div>
          </div>

          {/* 4. КАРТОЧКА 50% — AI WORKFLOWS */}
          <div className="bento-card col-50">
            <div>
              <div className="card-header">
                <div className="header-content">
                  <h3 className="card-title">{t.card3Title}</h3>
                </div>
                <div className="asset-slot-inline">
                  <div className="asset-glow-inline green" />
                  <Image 
                    src="/assets/3d-ai-loop.webp" 
                    alt="AI Automation Visual" 
                    className="asset-img-inline"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              <p className="card-desc">
                {renderWithStrong(t.card3Desc)}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
