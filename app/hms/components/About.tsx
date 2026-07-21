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
    caseBadge?: string;
    caseTitle?: string;
    caseMetrics?: string;
    caseDesc?: string;
    [key: string]: any;
  };
}

export default function About({ t }: AboutProps) {
  const labelText = t?.aboutLabel || "Growth Architecture";
  const titleText = t?.aboutTitle || "Systems, Optimization & Scale";
  
  const firstSentence = t?.aboutDescFirst || "We step into business ecosystems to optimize them for maximum efficiency.";
  const restText = t?.aboutDescRest || "By unifying marketing channels, data analytics, and workflow automation into a single engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue.";
  
  const btnText = t?.aboutBtn || t?.aboutButton || "View Agency Profile";

  // Данные обезличенного кейса
  const caseBadge = t?.caseBadge || "Featured Case Proof";
  const caseTitle = t?.caseTitle || "Phuket Luxury Villa Resort (24 Keys)";
  const caseMetrics = t?.caseMetrics || "+$2,800/mo saved in OTA fees • +42% Direct Bookings";
  const caseDesc = t?.caseDesc || "Replaced manual channel management with an automated direct booking pipeline in 60 days.";

  return (
    <section className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          /* Верх: 0 | Низ: 80px (5rem) */
          padding: 0 0 5rem 0;
          background: transparent;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 38% 62%;
          gap: 4rem;
          align-items: start;
        }
        
        .left-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
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
          gap: 2rem;
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

        /* Карточка кейса (Вариант В) */
        .case-card {
          width: 100%;
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(0, 229, 153, 0.2);
          border-radius: 12px;
          padding: 1.4rem 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          backdrop-filter: blur(10px);
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .case-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .case-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00E599;
          background: rgba(0, 229, 153, 0.1);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
        }

        .case-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .case-metrics {
          font-size: 0.95rem;
          font-weight: 700;
          color: #00E599;
          margin: 0;
        }

        .case-desc {
          font-size: 0.88rem;
          color: ${T.sub};
          line-height: 1.5;
          margin: 0;
        }

        .actions-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
        
        @media (max-width: 992px) {
          .about-section {
            padding: 0 0 3.5rem 0;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .right-col {
            gap: 1.8rem;
          }
        }

        @media (max-width: 576px) {
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
          <div className="left-col">
            <p className="sub-label">{labelText}</p>
            <h2 className="main-title">{titleText}</h2>
          </div>
          
          <div className="right-col">
            <p className="description">
              <span className="highlight-sentence">{firstSentence}</span>{' '}
              <span className="dimmed-text">{restText}</span>
            </p>

            {/* Мини-кейс / Пруф */}
            <div className="case-card">
              <div className="case-header">
                <span className="case-title">{caseTitle}</span>
                <span className="case-badge">{caseBadge}</span>
              </div>
              <p className="case-metrics">{caseMetrics}</p>
              <p className="case-desc">{caseDesc}</p>
            </div>
            
            <div className="actions-row">
              <a href="/" className="view-profile-btn">
                {btnText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
