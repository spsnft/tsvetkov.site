'use client';

import React from 'react';
import { T } from '@/src/theme/tokens';

interface ServicesProps {
  dict: {
    services: {
      badge: string;
      title: string;
      step1Badge: string;
      step1Title: string;
      step1Desc: string;
      step1Deliverables: string[];
      step1Impact: string;
      step2Badge: string;
      step2Title: string;
      step2Desc: string;
      step2Deliverables: string[];
      step2Impact: string;
      step3Badge: string;
      step3Title: string;
      step3Desc: string;
      step3Deliverables: string[];
      step3Impact: string;
    };
  } | null;
}

export const Services = ({ dict }: ServicesProps) => {
  const t = dict?.services ?? {
    badge: 'ENGAGEMENT MODELS & SERVICES',
    title: 'How We Work Together',
    step1Badge: 'QUICK START / 1-2 WEEKS',
    step1Title: 'Audit & Growth Roadmap',
    step1Desc: 'Deep-dive diagnostic of your current ad channels, CRM workflows, and unit economics. We identify traffic leakage, broken attribution, and sales bottlenecks.',
    step1Deliverables: ['P&L & Analytics Audit', 'CRM & Pipeline Diagnostic', 'Growth Bottleneck Map', 'Step-by-Step Action Plan'],
    step1Impact: 'Full clarity on lost revenue before committing capital',
    step2Badge: 'SYSTEM BUILD / TURNKEY',
    step2Title: 'Growth Infrastructure Build',
    step2Desc: 'End-to-end architecture deployment: high-intent funnels, automated lead routing, zero-leakage CRM configuration, and custom P&L attribution dashboards.',
    step2Deliverables: ['Custom Funnel Architecture', 'Instant CRM Lead Routing', 'End-to-End P&L Tracking', 'AI Workflow Automation'],
    step2Impact: 'Scalable system ready for high-budget traffic expansion',
    step3Badge: 'ONGOING / FRACTIONAL CMO',
    step3Title: 'Growth Partner & Performance Scaling',
    step3Desc: 'Continuous strategic direction and hands-on execution. We optimize CAC, manage ad spend, accelerate sales speed, and scale net margin month-over-month.',
    step3Deliverables: ['Omnichannel Traffic Mgmt', 'Weekly P&L Optimization', 'Funnel Conversion Tuning', 'Executive Reporting'],
    step3Impact: 'Predictable revenue growth and guaranteed system reliability',
  };

  const models = [
    {
      num: '01',
      badge: t.step1Badge,
      title: t.step1Title,
      description: t.step1Desc,
      deliverables: t.step1Deliverables,
      impact: t.step1Impact,
      color: '#34D399',
    },
    {
      num: '02',
      badge: t.step2Badge,
      title: t.step2Title,
      description: t.step2Desc,
      deliverables: t.step2Deliverables,
      impact: t.step2Impact,
      color: T.accent,
    },
    {
      num: '03',
      badge: t.step3Badge,
      title: t.step3Title,
      description: t.step3Desc,
      deliverables: t.step3Deliverables,
      impact: t.step3Impact,
      color: '#10B981',
    },
  ];

  return (
    <section id="services" className="services-section">
      <style jsx>{`
        .services-section {
          width: 100%;
          position: relative;
          padding: 1rem 0 clamp(3rem, 6vw, 6rem) 0;
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
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.25);
          color: ${T.accent};
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
        }

        .timeline-box {
          position: relative;
          padding-left: clamp(1rem, 5vw, 3.5rem);
          max-width: 1000px;
          margin: 0 auto;
        }

        .track-line {
          position: absolute;
          left: clamp(0.4rem, 2.2vw, 1.25rem);
          top: 1.5rem;
          bottom: 3rem;
          width: 2px;
          background: linear-gradient(180deg, ${T.accent} 0%, rgba(0, 229, 153, 0.15) 90%, transparent 100%);
          z-index: 1;
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .step-node {
          position: absolute;
          left: calc(-1 * clamp(1rem, 5vw, 3.5rem) + clamp(0.4rem, 2.2vw, 1.25rem) - 13px);
          top: 1.75rem;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #090B0E;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 800;
          z-index: 2;
        }

        .card {
          padding: clamp(1.5rem, 3vw, 2.25rem);
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .card:hover {
          border-color: rgba(0, 229, 153, 0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 229, 153, 0.08);
        }

        .card-title {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem);
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
          max-width: 850px;
        }

        .deliverables-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.6rem;
        }

        .deliverable-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.85);
        }

        .outcome-box {
          background: rgba(0, 229, 153, 0.05);
          border: 1px solid rgba(0, 229, 153, 0.2);
          border-radius: 12px;
          padding: 0.85rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">{t.badge}</span>
          <h2 className="title">{t.title}</h2>
        </div>

        <div className="timeline-box">
          <div className="track-line" />

          <div className="steps-list">
            {models.map((item, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div 
                  className="step-node" 
                  style={{ 
                    border: `2px solid ${item.color}`, 
                    color: item.color,
                    boxShadow: `0 0 12px ${item.color}30` 
                  }}
                >
                  {item.num}
                </div>

                <div className="card-matte card">
                  <div style={{ marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        color: item.color,
                        textTransform: 'uppercase',
                        background: `${item.color}12`,
                        padding: '4px 10px',
                        borderRadius: 6,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>

                  <div>
                    <div className="deliverables-label">Key Deliverables</div>
                    <div className="deliverables-grid">
                      {item.deliverables.map((del, di) => (
                        <div key={di} className="deliverable-item">
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="outcome-box">
                    <span style={{ fontSize: '1.1rem' }}>🎯</span>
                    <div style={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
                      <strong style={{ color: T.accent, fontWeight: 700 }}>Outcome:&nbsp;</strong>
                      <span style={{ color: '#fff', fontWeight: 600 }}>{item.impact}</span>
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
