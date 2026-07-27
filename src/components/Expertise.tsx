'use client';

import React from 'react';
import Image from 'next/image';

const CYAN_ACCENT = '#00A3FF';

interface ExpertiseProps {
  dict: {
    expertise: {
      badge: string;
      title: string;
      card1Title: string;
      card1Desc: string;
      card1Pills: string[];
      card2Title: string;
      card2Desc: string;
      card2Pills: string[];
      card3Title: string;
      card3Desc: string;
      card3Pills: string[];
    };
  } | null;
}

export const Expertise = ({ dict }: ExpertiseProps) => {
  const t = dict?.expertise ?? {
    badge: 'THE SOLUTION',
    title: 'How We Fix Your Growth Engine',
    card1Title: 'Go-To-Market & Growth Strategy',
    card1Desc: 'Designing scalable acquisition funnels and positioning that turn market demand into <strong>predictable, high-margin revenue</strong>.',
    card1Pills: ['GTM Strategy', 'Funnel Architecture', 'Omnichannel Scale', 'CAC Optimization'],
    card2Title: 'Data & Revenue Intelligence',
    card2Desc: 'End-to-end attribution bridging marketing spend directly with <strong>net P&L, cohort retention, and true customer LTV</strong>.',
    card2Pills: ['P&L Attribution', 'Unit Economics', 'BI Dashboards', 'LTV & Cohorts'],
    card3Title: 'CRM & AI-Powered Operations',
    card3Desc: 'Building zero-leakage CRM workflows and AI processing to <strong>eliminate manual routines, slash overhead, and accelerate deal closure</strong>.',
    card3Pills: ['CRM Architecture', 'AI Lead Scoring', 'Process Automation', 'Retention Loops'],
  };

  const renderWithStrong = (text: string) => {
    const parts = text.split(/<strong>(.*?)<\/strong>/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} style={{ color: '#fff' }}>{part}</strong>;
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
          padding: 2rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
        }

        .header-box {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .badge {
          display: inline-block;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0, 163, 255, 0.08);
          border: 1px solid rgba(0, 163, 255, 0.25);
          color: ${CYAN_ACCENT};
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
        }

        .bento-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          width: 100%;
        }

        .card-half {
          flex: 1 1 420px;
          min-width: 0;
          position: relative;
          overflow: hidden;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card-full {
          flex: 1 1 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 2.5rem 2rem;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card-half:hover,
        .card-full:hover {
          border-color: rgba(0, 163, 255, 0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 163, 255, 0.08);
        }

        .asset-slot {
          position: relative;
          height: 180px;
          width: 100%;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .asset-glow {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          filter: blur(20px);
        }

        .asset-glow.cyan {
          background: radial-gradient(circle, rgba(0, 163, 255, 0.18) 0%, rgba(0, 0, 0, 0) 70%);
        }

        .asset-glow.green {
          background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
        }

        :global(.asset-img) {
          max-height: 100%;
          width: auto !important;
          height: auto !important;
          object-fit: contain;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
        }

        .card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.25;
        }

        .card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 1.5rem 0;
        }

        .pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .pill {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 5px 12px;
          border-radius: 8px;
        }

        .full-card-inner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          align-items: center;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">{t.badge}</span>
          <h2 className="title">{t.title}</h2>
        </div>

        <div className="bento-grid">
          {/* CARD 1 */}
          <div className="card-matte card-half">
            <div className="asset-slot">
              <div className="asset-glow cyan" />
              <Image 
                src="/assets/3d-gtm-prism.png" 
                alt="GTM Strategy Visual" 
                className="asset-img"
                width={200}
                height={180}
              />
            </div>

            <div>
              <h3 className="card-title">{t.card1Title}</h3>
              <p className="card-desc">
                {renderWithStrong(t.card1Desc)}
              </p>
            </div>

            <div className="pills-container">
              {t.card1Pills.map((pill, i) => (
                <span key={i} className="pill">• {pill}</span>
              ))}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card-matte card-half">
            <div className="asset-slot">
              <div className="asset-glow green" />
              <Image 
                src="/assets/3d-data-cube.png" 
                alt="Data Intelligence Visual" 
                className="asset-img"
                width={200}
                height={180}
              />
            </div>

            <div>
              <h3 className="card-title">{t.card2Title}</h3>
              <p className="card-desc">
                {renderWithStrong(t.card2Desc)}
              </p>
            </div>

            <div className="pills-container">
              {t.card2Pills.map((pill, i) => (
                <span key={i} className="pill">• {pill}</span>
              ))}
            </div>
          </div>

          {/* CARD 3 (WIDE) */}
          <div className="card-matte card-full">
            <div className="full-card-inner">
              <div>
                <h3 className="card-title">{t.card3Title}</h3>
                <p className="card-desc">
                  {renderWithStrong(t.card3Desc)}
                </p>

                <div className="pills-container">
                  {t.card3Pills.map((pill, i) => (
                    <span key={i} className="pill">• {pill}</span>
                  ))}
                </div>
              </div>

              <div className="asset-slot" style={{ height: 160 }}>
                <div className="asset-glow cyan" style={{ width: 200, height: 100 }} />
                <Image 
                  src="/assets/3d-ai-loop.png" 
                  alt="CRM AI Automation Visual" 
                  className="asset-img"
                  width={220}
                  height={160}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
