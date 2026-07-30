'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';

const CYAN_ACCENT = T.acc2 || '#00A3FF';

interface ExpertiseProps {
  dict: {
    expertise?: {
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
    [key: string]: any;
  } | null;
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

        /* BENTO GRID */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
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

        /* CARD BASE */
        .bento-card {
          position: relative;
          overflow: hidden;
          padding: 1.35rem 1.1rem 1.35rem 1.5rem;
          border-radius: 20px;
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

        /* SPLIT STRUCTURE */
        .card-split {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          height: 100%;
          justify-content: space-between;
        }

        @media (min-width: 640px) {
          .card-split {
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
          }
        }

        .card-text-side {
          flex: 1 1 0%;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-asset-side {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
        }

        .asset-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* SIZES */
        .size-hero {
          width: 140px;
          height: 140px;
        }

        .size-row2 {
          width: 145px;
          height: 145px;
        }

        /* Увеличен размер 3D-ассета для HMS */
        .size-hms-compact {
          width: 110px;
          height: 110px;
        }

        .asset-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          filter: blur(16px);
          pointer-events: none;
        }

        .asset-glow.cyan {
          background: radial-gradient(circle, rgba(0, 163, 255, 0.35) 0%, transparent 70%);
        }

        .asset-glow.green {
          background: radial-gradient(circle, rgba(0, 229, 153, 0.35) 0%, transparent 70%);
        }

        :global(.asset-img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 8px 18px rgba(0, 0, 0, 0.6));
        }

        /* TYPOGRAPHY */
        .card-title {
          font-size: 1.18rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin: 0 0 6px 0;
        }

        .card-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.68);
          margin: 0;
        }

        /* HMS CARD (30%) - NEW SPLIT LAYOUT */
        .card-hms {
          background: rgba(0, 229, 153, 0.03);
          border: 1px solid rgba(0, 229, 153, 0.22);
          padding: 1.35rem 1.25rem;
        }

        .card-hms:hover {
          background: rgba(0, 229, 153, 0.06);
          border-color: rgba(0, 229, 153, 0.45);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 25px rgba(0, 229, 153, 0.12);
        }

        .hms-content-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
          height: 100%;
        }

        @media (min-width: 640px) {
          .hms-content-wrapper {
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
          }
        }

        .hms-left-side {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          flex: 1 1 0%;
          min-width: 0;
        }

        .hms-tag {
          display: inline-block;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00E599;
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.25);
          padding: 3px 8px;
          border-radius: 6px;
        }

        .hms-title-override {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.2;
        }

        .hms-desc-compact {
          font-size: 0.8rem;
          font-weight: 500;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.72);
          margin: 0;
        }

        :global(.hms-btn-compact),
        :global(.hms-btn-compact:visited) {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.8rem;
          border-radius: 8px;
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.35);
          color: #ffffff !important;
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none !important;
          backdrop-filter: blur(8px);
          transition: all 0.25s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        :global(.hms-btn-compact:hover) {
          background: rgba(0, 229, 153, 0.22);
          border-color: rgba(0, 229, 153, 0.7);
          box-shadow: 0 0 16px rgba(0, 229, 153, 0.28);
          color: #ffffff !important;
        }

        .hms-arrow-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00E599;
          transition: transform 0.25s ease;
        }

        :global(.hms-btn-compact:hover) .hms-arrow-icon {
          transform: translate(2px, -2px);
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
            <div className="card-split">
              <div className="card-text-side">
                <h3 className="card-title" style={{ fontSize: '1.25rem' }}>
                  {t.card1Title}
                </h3>
                <p className="card-desc">
                  {renderWithStrong(t.card1Desc)}
                </p>
              </div>

              <div className="card-asset-side">
                <div className="asset-wrapper size-hero">
                  <div className="asset-glow cyan" />
                  <Image 
                    src="/assets/3d-data-cube.webp" 
                    alt={t.card1Title} 
                    className="asset-img"
                    width={140}
                    height={140}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2. КАРТОЧКА 30% — HMS SPECIAL OFFER (SPLIT LAYOUT) */}
          <div className="bento-card card-hms col-30">
            <div className="hms-content-wrapper">
              <div className="hms-left-side">
                <div>
                  <span className="hms-tag">{t.hmsBadge}</span>
                  <h3 className="hms-title-override" style={{ marginTop: '0.55rem' }}>
                    {t.hmsTitle}
                  </h3>
                  <p className="hms-desc-compact" style={{ marginTop: '0.35rem' }}>
                    {t.hmsDesc}
                  </p>
                </div>

                <div style={{ marginTop: '0.85rem' }}>
                  <Link href="/hms" className="hms-btn-compact">
                    <span>{t.hmsCta}</span>
                    <div className="hms-arrow-icon">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="card-asset-side">
                <div className="asset-wrapper size-hms-compact">
                  <div className="asset-glow green" />
                  <Image 
                    src="/assets/3d-hms-core.webp" 
                    alt={t.hmsTitle} 
                    className="asset-img"
                    width={110}
                    height={110}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 3. КАРТОЧКА 50% — STRATEGIC AUDITS */}
          <div className="bento-card col-50">
            <div className="card-split">
              <div className="card-text-side">
                <h3 className="card-title">{t.card2Title}</h3>
                <p className="card-desc">
                  {renderWithStrong(t.card2Desc)}
                </p>
              </div>

              <div className="card-asset-side">
                <div className="asset-wrapper size-row2">
                  <div className="asset-glow cyan" />
                  <Image 
                    src="/assets/3d-gtm-prism.webp" 
                    alt={t.card2Title} 
                    className="asset-img"
                    width={145}
                    height={145}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 4. КАРТОЧКА 50% — PROCESS AUTOMATION */}
          <div className="bento-card col-50">
            <div className="card-split">
              <div className="card-text-side">
                <h3 className="card-title">{t.card3Title}</h3>
                <p className="card-desc">
                  {renderWithStrong(t.card3Desc)}
                </p>
              </div>

              <div className="card-asset-side">
                <div className="asset-wrapper size-row2">
                  <div className="asset-glow green" />
                  <Image 
                    src="/assets/3d-ai-loop.webp" 
                    alt={t.card3Title} 
                    className="asset-img"
                    width={145}
                    height={145}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
