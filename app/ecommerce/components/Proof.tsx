'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';
import { EcommerceContent } from '../constants';

export default function Proof({ t }: { t: EcommerceContent }) {
  const trustStats = [
    { num: t.stat1Num, name: t.stat1Name, sub: t.stat1Sub },
    { num: t.stat2Num, name: t.stat2Name, sub: t.stat2Sub },
    { num: t.stat3Num, name: t.stat3Name, sub: t.stat3Sub },
  ];

  const cases = [
    { title: t.case1Title, badge: t.case1Badge, desc: t.case1Desc },
    { title: t.case2Title, badge: t.case2Badge, desc: t.case2Desc },
  ];

  return (
    <section className="proof-section">
      <style jsx>{`
        .proof-section {
          width: 100%;
          padding: 0 0 clamp(3rem, 6vw, 5rem) 0;
        }

        .header-box {
          text-align: center;
          margin-bottom: ${T.section.titleGap};
        }

        .title {
          font-size: ${T.section.titleSize};
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0 0 1.25rem 0;
          text-wrap: balance;
        }

        .desc {
          color: ${T.sub};
          font-size: 1rem;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 720px;
        }

        .desc :global(strong) {
          color: #ffffff;
          font-weight: 600;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
        }

        .stat-card {
          background: rgba(12, 12, 16, 0.06);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          border: 1px solid ${T.accent15};
          border-radius: 12px;
          padding: 1.25rem 0.7rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.25rem;
        }

        .stat-num {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 0.15rem;
        }

        .stat-sub {
          font-size: 0.68rem;
          color: ${T.sub};
          line-height: 1.3;
        }

        .proof-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          opacity: 0.8;
          margin-bottom: 0.85rem;
          display: block;
        }

        .cases-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .case-card {
          background: rgba(12, 12, 16, 0.06);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          border: 1px solid ${T.accent15};
          border-radius: 14px;
          padding: 1.25rem 1.35rem;
        }

        .case-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .case-title {
          font-size: 0.98rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.35;
          background: ${T.linearGradient};
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
          flex-shrink: 0;
        }

        .case-desc {
          font-size: 0.85rem;
          color: ${T.sub};
          line-height: 1.48;
          margin: 0;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <h2 className="title">{t.aboutTitle}</h2>
          <p className="desc">
            <strong>{t.aboutDescFirst}</strong> {t.aboutDescRest}
          </p>
        </div>

        <div className="grid">
          <div>
            <div className="stats-grid">
              {trustStats.map((stat, i) => (
                <div className="stat-card" key={i}>
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-name">{stat.name}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="proof-label">{t.proofLabel}</span>
            <div className="cases-wrapper">
              {cases.map((c, i) => (
                <div className="case-card" key={i}>
                  <div className="case-header">
                    <h3 className="case-title">{c.title}</h3>
                    <span className="case-badge">{c.badge}</span>
                  </div>
                  <p className="case-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
