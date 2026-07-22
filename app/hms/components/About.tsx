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
    case1Metrics?: string;
    case1Desc?: string;
    case2Title?: string;
    case2Badge?: string;
    case2Metrics?: string;
    case2Desc?: string;
    [key: string]: any;
  };
}

export default function About({ t }: AboutProps) {
  const labelText = t?.aboutLabel || "Growth Architecture";
  const titleText = t?.aboutTitle || "Systems / Optimization / Scale";
  
  const firstSentence = t?.aboutDescFirst || "We step into business to optimize them for maximum efficiency.";
  const restText = t?.aboutDescRest || "By unifying marketing channels, data analytics, and workflow automation into a single engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue.";
  
  const btnText = t?.aboutBtn || t?.aboutButton || "View Agency Profile";

  const trustStats = [
    { num: t?.stat1Num || "10+", name: t?.stat1Name || "Years Exp.", sub: t?.stat1Sub || "Growth & systems" },
    { num: t?.stat2Num || "30+", name: t?.stat2Name || "Brands Scaled", sub: t?.stat2Sub || "B2B & Direct models" },
    { num: t?.stat3Num || "$2M+", name: t?.stat3Name || "Saved Fees", sub: t?.stat3Sub || "In OTA commissions" }
  ];

  const cases = [
    {
      title: t?.case1Title || "Luxury Villa Resort",
      badge: t?.case1Badge || "CASE 01",
      metrics: t?.case1Metrics || "+$2,800/mo saved in OTA fees • +42% Direct Bookings",
      desc: t?.case1Desc || "Replaced manual management with an automated Direct Engine."
    },
    {
      title: t?.case2Title || "Boutique Hotel",
      badge: t?.case2Badge || "CASE 02",
      metrics: t?.case2Metrics || "+310% Google Traffic • 0% Overbooking Risk",
      desc: t?.case2Desc || "Integrated Google Ads & Direct Engine, cutting Booking dependence."
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
        
        .about-grid {
          display: grid;
          grid-template-columns: 48fr 52fr;
          gap: 3.5rem;
          align-items: start;
          box-sizing: border-box;
        }
        
        /* --- LEFT COLUMN: BRAND & STATS --- */
        .left-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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
        
        /* Фирменный градиент бренда Mint -> Cyan */
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

        /* 3 TRUST STATS: Фирменный цвет #00E599 (как +40%, +60% на скриншоте) */
        .trust-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          width: 100%;
          margin-top: 0.5rem;
        }

        .trust-stat-card {
          background: rgba(12, 14, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.1rem 0.9rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          backdrop-filter: blur(12px);
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .trust-stat-card:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(0, 229, 153, 0.3);
        }

        .stat-num {
          font-size: 1.65rem;
          font-weight: 800;
          color: #00E599;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .stat-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.3rem;
        }

        .stat-sub {
          font-size: 0.68rem;
          color: ${T.sub};
          line-height: 1.3;
        }

        /* --- RIGHT COLUMN: PROOF, CASES & CTA --- */
        .right-col {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .proof-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.2rem;
        }

        .proof-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #00E599;
        }

        .cases-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .case-card {
          width: 100%;
          background: rgba(12, 14, 20, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 1.35rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          box-sizing: border-box;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.2s ease;
        }

        .case-card:hover {
          background: rgba(22, 27, 38, 0.8);
          border-color: rgba(0, 229, 153, 0.35);
          transform: translateY(-1px);
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
          color: #ffffff;
          margin: 0;
        }

        .case-badge {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00E599;
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.2);
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          white-space: nowrap;
        }

        .case-metrics {
          font-size: 0.92rem;
          font-weight: 700;
          color: #00E599;
          margin: 0;
        }

        .case-desc {
          font-size: 0.85rem;
          color: ${T.sub};
          line-height: 1.45;
          margin: 0;
        }

        /* CTA-кнопка */
        .actions-row {
          margin-top: 0.4rem;
          display: flex;
          justify-content: flex-start;
        }
        
        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          color: #ffffff !important;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0.9rem 2rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          width: 100%;
        }
        
        .view-profile-btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(0, 229, 153, 0.4);
          color: #ffffff !important;
          box-shadow: 0 8px 25px rgba(0, 229, 153, 0.15);
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
          }
          .main-title {
            white-space: normal;
          }
          .right-col {
            gap: 1.2rem;
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
            <div>
              <p className="sub-label">{labelText}</p>
              <h2 className="main-title">{titleText}</h2>
            </div>
            
            <p className="description">
              <span className="highlight-sentence">{firstSentence}</span>{' '}
              <span className="dimmed-text">{restText}</span>
            </p>

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
                  <p className="case-metrics">{c.metrics}</p>
                  <p className="case-desc">{c.desc}</p>
                </div>
              ))}
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
