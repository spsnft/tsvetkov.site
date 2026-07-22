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
    [key: string]: any;
  };
}

export default function About({ t }: AboutProps) {
  const labelText = t?.aboutLabel || "Growth Architecture";
  const titleText = t?.aboutTitle || "Systems, Optimization & Scale";
  
  const firstSentence = t?.aboutDescFirst || "We step into business ecosystems to optimize them for maximum efficiency.";
  const restText = t?.aboutDescRest || "By unifying marketing channels, data analytics, and workflow automation into a single engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue.";
  
  const btnText = t?.aboutBtn || t?.aboutButton || "View Agency Profile";

  // Данные двух реальных локальных кейсов
  const cases = [
    {
      title: "Phuket Luxury Villa Resort (24 Keys)",
      badge: "Featured Proof",
      metrics: "+$2,800/mo saved in OTA fees • +42% Direct Bookings",
      desc: "Replaced manual channel management with an automated direct booking pipeline in 60 days."
    },
    {
      title: "Bangtao Boutique Hotel (18 Keys)",
      badge: "Direct Engine",
      metrics: "+310% Google Traffic • 0% Overbooking Risk",
      desc: "Integrated Google Hotel Ads & direct engine, cutting Agoda dependence by half."
    }
  ];

  return (
    <section className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          padding: 0 0 5rem 0;
          background: transparent;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 38fr 62fr;
          gap: 4rem;
          align-items: start;
          box-sizing: border-box;
        }
        
        .left-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          position: sticky;
          top: 2rem;
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
          font-size: clamp(2rem, 3.2vw, 2.6rem);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin: 0;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-wrap: pretty;
        }
        
        .right-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.8rem;
        }
        
        .description {
          font-size: 1.1rem;
          line-height: 1.7;
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

        /* --- 3 TRUST STATS BULLETS --- */
        .trust-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          width: 100%;
        }

        .trust-stat-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 10px;
          padding: 1rem 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: #00E599;
          letter-spacing: -0.02em;
          line-height: 1;
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

        /* --- CASES GRID (2 Cards) --- */
        .cases-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .case-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(0, 229, 153, 0.2);
          border-radius: 12px;
          padding: 1.2rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          backdrop-filter: blur(10px);
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .case-card:hover {
          background: rgba(255, 255, 255, 0.03);
          border-color: rgba(0, 229, 153, 0.4);
        }

        .case-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .case-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .case-badge {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #00E599;
          background: rgba(0, 229, 153, 0.1);
          border: 1px solid rgba(0, 229, 153, 0.2);
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          white-space: nowrap;
        }

        .case-metrics {
          font-size: 0.9rem;
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

        /* --- ACTION ROW --- */
        .actions-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }
        
        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9) !important;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.85rem 2.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          backdrop-filter: blur(8px);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .view-profile-btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(0, 229, 153, 0.5);
          color: #ffffff !important;
          box-shadow: 0 8px 25px rgba(0, 229, 153, 0.12);
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
            gap: 2rem;
          }
          .left-col {
            position: relative;
            top: 0;
          }
          .right-col {
            gap: 1.6rem;
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
          .actions-row {
            width: 100%;
          }
          .view-profile-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <div className="about-grid">
          
          {/* LEFT COLUMN */}
          <div className="left-col">
            <p className="sub-label">{labelText}</p>
            <h2 className="main-title">{titleText}</h2>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="right-col">
            
            {/* Intro text */}
            <p className="description">
              <span className="highlight-sentence">{firstSentence}</span>{' '}
              <span className="dimmed-text">{restText}</span>
            </p>

            {/* 3 Trust Stat Bullets */}
            <div className="trust-stats-grid">
              <div className="trust-stat-card">
                <span className="stat-num">10+</span>
                <span className="stat-name">Years Exp.</span>
                <span className="stat-sub">Growth &amp; systems</span>
              </div>
              <div className="trust-stat-card">
                <span className="stat-num">30+</span>
                <span className="stat-name">Brands Scaled</span>
                <span className="stat-sub">B2B &amp; Direct models</span>
              </div>
              <div className="trust-stat-card">
                <span className="stat-num">0%</span>
                <span className="stat-name">Overbooking</span>
                <span className="stat-sub">Sync risk-free setup</span>
              </div>
            </div>

            {/* 2 Local Case Proofs */}
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
            
            {/* Main Agency Profile Link */}
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
