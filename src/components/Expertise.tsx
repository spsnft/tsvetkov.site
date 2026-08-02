'use client';

import React from 'react';
import Image from 'next/image';
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
      uspLine1: string;
      uspLine2: string;
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

  return (
    <section id="expertise" className="expertise-section">
      <style jsx>{`
        .expertise-section {
          width: 100%;
          position: relative;
          padding: ${T.section.topPad} 0 ${T.section.bottomPad} 0;
          background: transparent;
          z-index: 5;
          scroll-margin-top: 80px;
        }

        .header-box {
          text-align: center;
          margin-bottom: ${T.section.titleGap};
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          margin-bottom: ${T.section.badgeGap};
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0, 229, 153, 0.05);
          border: 1px solid rgba(0, 229, 153, 0.25);
          color: ${T.accent};
          backdrop-filter: blur(12px);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${CYAN_ACCENT};
          box-shadow: 0 0 8px ${CYAN_ACCENT};
          animation: pulseDot 1.8s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .title {
          font-size: ${T.section.titleSize};
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
          text-wrap: balance;
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

          .col-60 {
            grid-column: span 6;
          }

          .col-40 {
            grid-column: span 4;
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
          background: rgba(12, 12, 16, 0.06);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          border: 1px solid rgba(0, 163, 255, 0.15);
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
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
          height: 100%;
          justify-content: space-between;
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

        @media (max-width: 767px) {
          .size-hero,
          .size-row2 {
            width: 72px;
            height: 72px;
          }
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
          font-size: clamp(1.15rem, 1.4vw, 1.35rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin: 0 0 12px 0;
        }

        .card-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.68);
          margin: 0;
        }

        /* USP CARD (40%) — "ODD ONE OUT" HOOK TILE */
        .card-usp {
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, rgba(0, 229, 153, 0.05) 0%, rgba(0, 163, 255, 0.05) 100%), rgba(12, 12, 16, 0.06);
          border: 1px solid rgba(0, 163, 255, 0.25);
          padding: 1.1rem 1.1rem;
          /* Mobile/tablet: promoted to the top of the stack (see .bento-grid order) */
          order: -1;
        }

        @media (min-width: 992px) {
          .card-usp {
            order: 0;
          }
        }

        .card-usp:hover {
          border-color: rgba(0, 163, 255, 0.45);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 25px rgba(0, 163, 255, 0.12);
        }

        .usp-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          text-align: center;
        }

        .usp-hook {
          margin: 0;
          font-size: clamp(1.6rem, 6vw, 2.1rem);
          font-weight: 800;
          line-height: 1.22;
          letter-spacing: -0.02em;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .usp-hook {
            font-size: clamp(1.8rem, 3.6vw, 2.4rem);
          }
        }

        @media (min-width: 992px) {
          .usp-hook {
            font-size: clamp(1.6rem, 2.2vw, 1.95rem);
          }
        }

        .usp-line1 {
          color: #ffffff;
        }

        .usp-line2 {
          display: block;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (min-width: 768px) and (max-width: 991px) {
          .usp-line2 {
            display: inline;
          }
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">
            <span className="badge-dot" />
            {t.badge}
          </span>
          <h2 className="title">{t.title || 'How We Help You Scale'}</h2>
        </div>

        <div className="bento-grid">
          
          {/* 1. КАРТОЧКА 60% — HERO FLAGSHIP */}
          <div className="bento-card col-60">
            <div className="card-split">
              <div className="card-text-side">
                <h3 className="card-title">
                  {t.card1Title}
                </h3>
                <p className="card-desc">
                  {t.card1Desc}
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

          {/* 2. КАРТОЧКА 40% — USP HOOK */}
          <div className="bento-card card-usp col-40">
            <div className="usp-content">
              <p className="usp-hook">
                <span className="usp-line1">{t.uspLine1}</span>{' '}
                <span className="usp-line2">{t.uspLine2}</span>
              </p>
            </div>
          </div>

          {/* 3. КАРТОЧКА 50% — STRATEGIC AUDITS */}
          <div className="bento-card col-50">
            <div className="card-split">
              <div className="card-text-side">
                <h3 className="card-title">{t.card2Title}</h3>
                <p className="card-desc">
                  {t.card2Desc}
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
                  {t.card3Desc}
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
