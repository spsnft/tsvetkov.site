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
      hmsDesc: string;
      hmsCta: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
    };
  };
}

export const Expertise = ({ dict }: ExpertiseProps) => {
  const t = dict?.expertise;

  if (!t) return null;

  const renderWithStrong = (text: string) => {
    if (!text) return null;
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

        /* BENTO GRID 10-TRACK */
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
          padding: 1.25rem 1.4rem;
          border-radius: 18px;
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

        /* FLOAT ASSET (ОБТЕКАНИЕ ТЕКСТОМ) */
        .float-asset {
          float: right;
          margin-left: 0.85rem;
          margin-bottom: 0.25rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .asset-glow {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          filter: blur(12px);
          pointer-events: none;
        }

        .asset-glow.cyan {
          background: radial-gradient(circle, rgba(0, 163, 255, 0.25) 0%, transparent 70%);
        }

        .asset-glow.green {
          background: radial-gradient(circle, rgba(0, 229, 153, 0.25) 0%, transparent 70%);
        }

        :global(.asset-img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 5px 12px rgba(0, 0, 0, 0.5));
        }

        /* TYPOGRAPHY (ЧЕСТНЫЕ 4PX ОТСТУПА) */
        .card-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin: 0 0 4px 0;
        }

        .card-desc {
          font-size: 0.86rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.65);
          margin: 0;
        }

        /* HMS CARD (30%) & MICRO CTA */
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
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.accent};
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.25);
          padding: 2px 7px;
          border-radius: 5px;
          margin-bottom: 0.5rem;
        }

        .hms-desc {
          font-size: 0.8rem;
          font-weight: 500;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 4px;
        }

        /* B2B LINK BUTTON */
        .hms-glass-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.55rem 0.85rem;
          margin-top: 0.85rem;
          border-radius: 10px;
          background: rgba(0, 229, 153, 0.09);
          border: 1px solid rgba(0, 229, 153, 0.32);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }

        .hms-glass-button:hover {
          background: rgba(0, 229, 153, 0.2);
          border-color: rgba(0, 229, 153, 0.65);
          box-shadow: 0 0 18px rgba(0, 229, 153, 0.25);
        }

        .hms-arrow-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${T.accent};
          transition: transform 0.25s ease;
        }

        .hms-glass-button:hover .hms-arrow-icon {
          transform: translate(3px, -3px);
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
            <div className="float-asset" style={{ width: 105, height: 105 }}>
              <div className="asset-glow cyan" />
              <Image 
                src="/assets/3d-data-cube.webp" 
                alt={t.card1Title} 
                className="asset-img"
                width={105}
                height={105}
                priority
              />
            </div>
            
            <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
              {t.card1Title}
            </h3>
            <p className="card-desc">
              {renderWithStrong(t.card1Desc)}
            </p>
          </div>

          {/* 2. КАРТОЧКА 30% — HMS SPECIAL OFFER */}
          <div className="bento-card card-hms col-30">
            <div>
              <span className="hms-tag">{t.hmsBadge}</span>
              
              <div className="float-asset" style={{ width: 46, height: 46 }}>
                <div className="asset-glow green" />
                <Image 
                  src="/assets/3d-hms-core.webp" 
                  alt={t.hmsTitle} 
                  className="asset-img"
                  width={46}
                  height={46}
                />
              </div>

              <h3 className="card-title" style={{ fontSize: '1.05rem' }}>
                {t.hmsTitle}
              </h3>

              <div className="hms-desc">
                {t.hmsDesc}
              </div>
            </div>

            <Link href="/hms" className="hms-glass-button">
              <span>{t.hmsCta}</span>
              <div className="hms-arrow-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>
          </div>

          {/* 3. КАРТОЧКА 50% — STRATEGIC AUDITS */}
          <div className="bento-card col-50">
            <div className="float-asset" style={{ width: 48, height: 48 }}>
              <div className="asset-glow cyan" />
              <Image 
                src="/assets/3d-gtm-prism.webp" 
                alt={t.card2Title} 
                className="asset-img"
                width={48}
                height={48}
              />
            </div>

            <h3 className="card-title">{t.card2Title}</h3>
            <p className="card-desc">
              {renderWithStrong(t.card2Desc)}
            </p>
          </div>

          {/* 4. КАРТОЧКА 50% — PROCESS AUTOMATION */}
          <div className="bento-card col-50">
            <div className="float-asset" style={{ width: 48, height: 48 }}>
              <div className="asset-glow green" />
              <Image 
                src="/assets/3d-ai-loop.webp" 
                alt={t.card3Title} 
                className="asset-img"
                width={48}
                height={48}
              />
            </div>

            <h3 className="card-title">{t.card3Title}</h3>
            <p className="card-desc">
              {renderWithStrong(t.card3Desc)}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
