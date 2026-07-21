'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t: {
    aboutLabel?: string;
    aboutTitle?: string;
    aboutDescFirst?: string;
    aboutDescRest?: string;
    aboutDesc?: string;
    aboutBtn?: string;
    [key: string]: any;
  };
}

export default function About({ t }: AboutProps) {
  const labelText = t?.aboutLabel || "Growth Architecture";
  const titleText = t?.aboutTitle || "Systems, Optimization & Scale";
  
  // Фолбэки с разделенным текстом для акцентирования первой фразы
  const firstSentence = t?.aboutDescFirst || "We step into business ecosystems to optimize them for maximum efficiency.";
  const restText = t?.aboutDescRest || "By unifying marketing channels, data analytics, and workflow automation into a single engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue.";
  
  const btnText = t?.aboutBtn || t?.aboutButton || "View Professional Profile";

  return (
    <section className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          /* Верх: 0 (отступ дает предыдущий блок) | Низ: 80px (5rem) */
          padding: 0 1.5rem 5rem 1.5rem;
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
        
        /* Ghost Button для профиля */
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
            padding: 0 1.25rem 3.5rem 1.25rem;
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
          .view-profile-btn {
            width: 100%;
          }
        }
      `}</style>

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
          
          <a href="/" className="view-profile-btn">
            {btnText}
          </a>
        </div>
      </div>
    </section>
  );
}
