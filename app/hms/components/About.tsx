'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

export default function About() {
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
          align-items: transform;
        }
        
        .left-col {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        
        /* П.7 — Благородный приглушенный монохром вместо грязного зеленого */
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
        
        /* П.8 — Премиальный Dark Glassmorphism для кнопки */
        .view-profile-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.85);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          padding: 0.9rem 2.2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .view-profile-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
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
          <p className="sub-label">Growth Architecture</p>
          <h2 className="main-title">Systems, Optimization & Scale</h2>
        </div>
        
        <div className="right-col">
          <p className="description">
            A performance-driven infrastructure partner engineered to step into complex business ecosystems and optimize them for maximum efficiency. By unifying marketing channels, data analytics, and workflow automation into a single cohesive engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue
          </p>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="view-profile-btn">
            View Professional Profile
          </a>
        </div>
      </div>
    </section>
  );
}
