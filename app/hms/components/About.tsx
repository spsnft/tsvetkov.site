'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t?: {
    aboutLabel?: string;
    aboutTitle?: string;
    aboutDescFirst?: string;
    aboutDescRest?: string;
    aboutBtn?: string;
    stat1Num?: string;
    stat1Name?: string;
    stat1Sub?: string;
    stat2Num?: string;
    stat2Name?: string;
    stat2Sub?: string;
    stat3Num?: string;
    stat3Name?: string;
    stat3Sub?: string;
    proofLabel?: string;
    case1Title?: string;
    case1Badge?: string;
    case1Desc?: string;
    case2Title?: string;
    case2Badge?: string;
    case2Desc?: string;
    [key: string]: any;
  };
}

export default function About({ t }: AboutProps) {
  const labelText = t?.aboutLabel || "Growth Architecture";
  const titleText = t?.aboutTitle || "Systems | Optimization | Scale";
  
  const firstSentence = t?.aboutDescFirst || "We step into business to optimize them for maximum efficiency.";
  const restText = t?.aboutDescRest || "By unifying marketing channels, data analytics, and workflow automation into a single engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue";
  
  const btnText = t?.aboutBtn || t?.aboutButton || "View Agency Profile";

  const trustStats = [
    { num: t?.stat1Num || "$1M+", name: t?.stat1Name || "Saved Fees", sub: t?.stat1Sub || "In OTA commissions" },
    { num: t?.stat2Num || "20+", name: t?.stat2Name || "Brands Scaled", sub: t?.stat2Sub || "B2B & Direct models" },
    { num: t?.stat3Num || "10+", name: t?.stat3Name || "Years Experience", sub: t?.stat3Sub || "Growth & systems" }
  ];

  const cases = [
    {
      title: t?.case1Title || "+$2,800/mo saved in OTA fees | +42% Direct Bookings",
      badge: t?.case1Badge || "Villa Resort",
      desc: t?.case1Desc || "Replaced manual management with an automated Direct Engine"
    },
    {
      title: t?.case2Title || "+310% Google Traffic | Zero Double-Bookings",
      badge: t?.case2Badge || "Boutique Hotel",
      desc: t?.case2Desc || "Integrated Google Ads & Direct Engine, cutting Booking dependence"
    }
  ];

  const proofLabel = t?.proofLabel || "Proven Results";

  return (
    <section className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          padding: 1rem 0 5rem 0;
          background: transparent;
        }
        
        /* Сетка stretch гарантирует одинаковую высоту колонок */
        .about-grid {
          display: grid;
          grid-template-columns: 48fr 52fr;
          gap: 3.5rem;
          align-items: stretch;
          box-sizing: border-box;
        }
        
        /* --- LEFT COLUMN --- */
        .left-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .left-top-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .sub-label {
          color: ${T.sub};
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 0;
          opacity: 0.8;
        }
        
        .main-title {
          font-size: clamp(1.8rem, 2.7vw, 2.5rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0;
          white-space: nowrap;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .description {
          font-size: 1.05rem;
          line-height: 1.65;
          margin: 0;
          text-wrap: pretty;
        }

        .highlight-sentence {
          color: #ffffff;
          font-weight: 600;
        }

        .dimmed-text {
          color: ${T.sub};
        }

        /* 3 TRUST STATS */
        .trust-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          width: 100%;
        }

        .trust-stat-card {
          background: rgba(12, 14, 20, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.25rem 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.25rem;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
        }

        .trust-stat-card:hover {
          background: rgba(22, 27, 38, 0.75);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .stat-num {
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-name {
          font-size: 0.82rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.2rem;
        }

        .stat-sub {
          font-size: 0.7rem;
          color: ${T.sub};
          line-height: 1.3;
        }

        /* --- RIGHT COLUMN (STRETCHED) --- */
        .right-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.2rem;
          height: 100%;
        }

        .right-top-content {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .proof-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proof-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          opacity: 0.8;
        }

        .cases-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          width: 100%;
        }

        .case-card {
          width: 100%;
          background: rgba(12, 14, 20, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 1.35rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          backdrop-filter: blur(12px);
          box-sizing: border-box;
          transition: all 0.25s ease;
        }

        .case-card:hover {
          background: rgba(18, 22, 32, 0.75);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .case-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .case-title {
          font-size: 0.98rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .case-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .case-desc {
          font-size: 0.85rem;
          color: ${T.sub};
          line-height: 1.45;
          margin: 0;
        }

        /* CTA-КНОПКА (Опускается строго вровень с низом буллетов слева) */
        .actions-row {
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }
        
        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.85rem 2rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
          box-sizing: border-box;
        }
        
        .view-profile-btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.25);
          color: #ffffff !important;
        }

        .view-profile-btn svg {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }

        .view-profile-btn:hover svg {
          transform: translateX(3px);
        }
        
        @media (max-width: 992px) {
          .about-section {
            padding: 0 0 3.5rem 0;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: start;
          }
          .left-col, .right-col {
            justify-content: start;
            gap: 1.5rem;
          }
          .main-title {
            white-space: normal;
          }
        }

        @media (max-width: 576px) {
          .trust-stats-grid {
            grid-template-columns: 1fr;
          }
          .description {
            font-size: 1rem;
            line-height: 1.6;
          }
          .case-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
          }
          .view-profile-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <div className="about-grid">
          
          {/* LEFT COLUMN: BRAND & STATS */}
          <div className="left-col">
            <div className="left-top-content">
              <div>
                <p className="sub-label">{labelText}</p>
                <h2 className="main-title">{titleText}</h2>
              </div>
              
              <p className="description">
                <span className="highlight-sentence">{firstSentence}</span>{' '}
                <span className="dimmed-text">{restText}</span>
              </p>
            </div>

            {/* 3 TRUST STAT BULLETS */}
            <div className="trust-stats-grid">
              {trustStats.map((stat, i) => (
                <div className="trust-stat-card" key={i}>
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-name">{stat.name}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT COLUMN: PROOF, CASES & CTA */}
          <div className="right-col">
            <div className="right-top-content">
              <div className="proof-header">
                <span className="proof-label">{proofLabel}</span>
              </div>

              <div className="cases-wrapper">
                {cases.map((c, i) => (
                  <div className="case-card" key={i}>
                    <div className="case-header">
                      <span className="case-title">{c.title}</span>
                      <span className="case-badge">{c.badge}</span>
                    </div>
                    <p className="case-desc">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="actions-row">
              <a 
                href="https://tsvetkov.site" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-profile-btn"
              >
                <span>{btnText}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
