'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t: {
    aboutLabel?: string;
    aboutTitle?: string;
    aboutDesc?: string;
    aboutBtn?: string;
    [key: string]: any;
  };
}

export default function About({ t }: AboutProps) {
  const labelText = t?.aboutLabel || "Growth Architecture";
  const titleText = t?.aboutTitle || "Systems, Optimization & Scale";
  const descText = t?.aboutDesc || t?.aboutDescription || "A performance-driven infrastructure partner engineered to step into complex business ecosystems and optimize them for maximum efficiency. By unifying marketing channels, data analytics, and workflow automation into a single cohesive engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue";
  const btnText = t?.aboutBtn || t?.aboutButton || "View Professional Profile";

  return (
    <section className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          padding: 6rem 2rem;
          border-bottom: 1px solid ${T.border};
          background: transparent;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 38% 62%;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: start;
        }
        
        .left-col {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        
        .sub-label {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin: 0;
        }
        
        .main-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
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
          gap: 2.2rem;
        }
        
        .description {
          color: ${T.sub};
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0;
          text-wrap: pretty;
        }
        
        /* Привели к единому сквозному стандарту: литой градиент + черный текст */
        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #000000 !important;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          padding: 0.9rem 2.2rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 229, 153, 0.2), 0 10px 30px rgba(0, 163, 255, 0.1);
        }
        
        .view-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 229, 153, 0.35), 0 15px 40px rgba(0, 163, 255, 0.2);
          filter: brightness(1.08);
        }
        
        @media (max-width: 992px) {
          .about-section {
            padding: 4rem 1.5rem;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .right-col {
            gap: 1.8rem;
          }
        }
      `}</style>

      <div className="about-grid">
        <div className="left-col">
          <p className="sub-label">{labelText}</p>
          <h2 className="main-title">{titleText}</h2>
        </div>
        
        <div className="right-col">
          <p className="description">{descText}</p>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="view-profile-btn">
            {btnText}
          </a>
        </div>
      </div>
    </section>
  );
}
