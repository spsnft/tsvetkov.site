'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';

const COLOR_CYAN = '#00A3FF';
const COLOR_EMERALD = '#00E599';
const COLOR_MINT = '#34D399';

interface StepData {
  title: string;
  desc: string;
  impact: string;
}

interface ServicesProps {
  dict: {
    services?: {
      badge: string;
      title: string;
      outcomeLabel?: string;
      step1Title: string;
      step1Desc: string;
      step1Impact: string;
      step2Title: string;
      step2Desc: string;
      step2Impact: string;
      step3Title: string;
      step3Desc: string;
      step3Impact: string;
    };
    [key: string]: any;
  } | null;
}

export const Services = ({ dict }: ServicesProps) => {
  const t = dict?.services;

  if (!t) return null;

  const steps: (StepData & { num: string; color: string })[] = [
    {
      num: '01',
      title: t.step1Title,
      desc: t.step1Desc,
      impact: t.step1Impact,
      color: COLOR_CYAN,
    },
    {
      num: '02',
      title: t.step2Title,
      desc: t.step2Desc,
      impact: t.step2Impact,
      color: COLOR_EMERALD,
    },
    {
      num: '03',
      title: t.step3Title,
      desc: t.step3Desc,
      impact: t.step3Impact,
      color: COLOR_MINT,
    },
  ];

  return (
    <section id="services" className="services-section">
      <style jsx>{`
        .services-section {
          width: 100%;
          position: relative;
          padding: ${T.section.topPad} 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
          z-index: 5;
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
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: ${T.section.badgeGap};
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.25);
          color: ${COLOR_EMERALD};
          backdrop-filter: blur(12px);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${COLOR_EMERALD};
          box-shadow: 0 0 8px ${COLOR_EMERALD};
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
        }

        /* ТАЙМЛАЙН: Полноширинный контейнер без искусственных ограничений */
        .timeline-box {
          position: relative;
          padding-left: clamp(2rem, 5vw, 4rem);
          width: 100%;
          margin: 0 auto;
        }

        .track-line {
          position: absolute;
          left: clamp(0.75rem, 2vw, 1.35rem);
          top: 1.75rem;
          bottom: 3rem;
          width: 2px;
          background: linear-gradient(
            180deg,
            ${COLOR_EMERALD} 0%,
            ${COLOR_CYAN} 70%,
            rgba(0, 163, 255, 0.1) 100%
          );
          z-index: 1;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .step-item {
          position: relative;
          width: 100%;
        }

        .step-node {
          position: absolute;
          left: calc(-1 * clamp(2rem, 5vw, 4rem) + clamp(0.75rem, 2vw, 1.35rem) - 13px);
          top: 1.5rem;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0A0A0C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
          z-index: 2;
        }

        /* BENTO CARD STYLES */
        .card-custom {
          padding: clamp(1.25rem, 3vw, 2rem);
          border-radius: 20px;
          background: rgba(12, 12, 16, 0.06);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          width: 100%;
        }

        .card-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
        }

        .card-title {
          font-size: clamp(1.2rem, 2.5vw, 1.45rem);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
          line-height: 1.25;
        }

        .card-desc {
          font-size: 0.9rem;
          line-height: 1.55;
          color: rgba(255, 255, 255, 0.68);
          margin: 0;
        }

        .outcome-box {
          border-radius: 10px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        .outcome-tag {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 3px 6px;
          border-radius: 4px;
          flex-shrink: 0;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">
            <span className="badge-dot" />
            {t.badge}
          </span>
          <h2 className="title">{t.title}</h2>
        </div>

        <div className="timeline-box">
          <div className="track-line" />

          <div className="steps-list">
            {steps.map((item, i) => (
              <div key={i} className="step-item">
                <div 
                  className="step-node" 
                  style={{ 
                    border: `2px solid ${item.color}`, 
                    color: item.color,
                    boxShadow: `0 0 14px ${item.color}40` 
                  }}
                >
                  {item.num}
                </div>

                <div 
                  className="card-custom"
                  style={{
                    border: `1px solid rgba(255, 255, 255, 0.08)`,
                  }}
                >
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.desc}</p>

                  <div
                    className="outcome-box"
                    style={{
                      background: `${item.color}08`,
                      border: `1px solid ${item.color}25`
                    }}
                  >
                    <span 
                      className="outcome-tag"
                      style={{
                        background: `${item.color}20`,
                        color: item.color
                      }}
                    >
                      {t.outcomeLabel || 'OUTCOME //'}
                    </span>
                    <div style={{ fontSize: '0.83rem', lineHeight: 1.4, color: '#ffffff', fontWeight: 600 }}>
                      {item.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
