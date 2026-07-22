'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t?: any;
}

export default function About({ t }: AboutProps) {
  const eyebrow = t?.about?.eyebrow || "GROWTH ARCHITECTURE";
  const titleHighlight = t?.about?.titleHighlight || "Systems";
  const titleRest = t?.about?.titleRest || "| Optimization | Scale";
  const descBold = t?.about?.descBold || "We step into business to optimize them for maximum efficiency.";
  const descText = t?.about?.descText || "By unifying marketing channels, data analytics, and workflow automation into a single engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue.";
  
  const metrics = t?.about?.metrics || [
    { value: "$1M+", label: "Saved Fees", sub: "In OTA commissions" },
    { value: "20+", label: "Brands Scaled", sub: "B2B & Direct models" },
    { value: "10+", label: "Years Experience", sub: "Growth & systems" }
  ];

  const provenLabel = t?.about?.provenLabel || "PROVEN RESULTS";
  
  const cases = t?.about?.cases || [
    {
      badge: "VILLA RESORT",
      title: "+$2,800/mo saved in OTA fees | +42% Direct Bookings",
      desc: "Replaced manual management with an automated Direct Engine"
    },
    {
      badge: "BOUTIQUE HOTEL",
      title: "+310% Google Traffic | Zero Double-Bookings",
      desc: "Integrated Google Ads & Direct Engine, cutting Booking dependence"
    }
  ];

  const ctaText = t?.about?.ctaText || "View Agency Profile";

  return (
    <section className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          padding: 4rem 0;
          background: transparent;
        }

        .about-header {
          max-width: 900px;
          margin-bottom: 3rem;
        }

        .eyebrow {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          margin-bottom: 0.5rem;
          display: block;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0 0 1.25rem 0;
        }

        .title-highlight {
          color: #00E599;
        }

        .about-description {
          font-size: 1.05rem;
          line-height: 1.6;
          color: ${T.sub};
          margin: 0;
        }

        .about-description strong {
          color: #ffffff;
          font-weight: 600;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 3.5rem;
        }

        .metric-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 1.75rem 1.5rem;
          text-align: center;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .metric-card:hover {
          border-color: rgba(0, 229, 153, 0.2);
          transform: translateY(-2px);
        }

        .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #00E599;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }

        .metric-label {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }

        .metric-sub {
          font-size: 0.85rem;
          color: ${T.sub};
        }

        .results-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .results-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          margin-bottom: 0.25rem;
        }

        .case-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 1.5rem 1.75rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          transition: border-color 0.3s ease;
        }

        .case-card:hover {
          border-color: rgba(255, 255, 255, 0.12);
        }

        .case-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .case-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #00E599;
          margin: 0;
          line-height: 1.35;
        }

        .case-desc {
          font-size: 0.95rem;
          color: ${T.sub};
          margin: 0;
        }

        .case-badge {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          white-space: nowrap;
          align-self: center;
        }

        .cta-wrapper {
          margin-top: 1rem;
        }

        .btn-agency-profile {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-agency-profile:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.2);
          color: #00E599;
        }

        .btn-agency-profile svg {
          transition: transform 0.2s ease;
        }

        .btn-agency-profile:hover svg {
          transform: translateX(3px);
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .about-section { padding: 3rem 0; }
          .main-title { font-size: 2rem; }
          .metrics-grid { gap: 0.85rem; margin-bottom: 2.5rem; }
          .metric-card { padding: 1.25rem 0.75rem; }
          .metric-value { font-size: 2rem; }
          .metric-label { font-size: 0.9rem; }
          .metric-sub { font-size: 0.8rem; }
          .case-card { padding: 1.25rem 1.25rem; }
          .case-title { font-size: 1rem; }
          .case-desc { font-size: 0.85rem; }
        }

        @media (max-width: 767px) {
          .about-section { padding: 2.5rem 0; }
          .about-header { margin-bottom: 2rem; }
          .main-title { font-size: 1.75rem; }
          .about-description { font-size: 0.95rem; }
          .metrics-grid { grid-template-columns: 1fr; gap: 0.85rem; margin-bottom: 2.5rem; }
          .metric-card { padding: 1.25rem; }
          .case-card { flex-direction: column; align-items: flex-start; gap: 0.75rem; padding: 1.25rem; }
          .case-badge { align-self: flex-start; order: -1; }
          .case-title { font-size: 1rem; }
          .case-desc { font-size: 0.85rem; }
        }
      `}</style>

      <div className="container">
        <div className="about-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="main-title">
            <span className="title-highlight">{titleHighlight}</span> {titleRest}
          </h2>
          <p className="about-description">
            <strong>{descBold}</strong> {descText}
          </p>
        </div>

        <div className="metrics-grid">
          {metrics.map((item: any, idx: number) => (
            <div className="metric-card" key={idx}>
              <div className="metric-value">{item.value}</div>
              <div className="metric-label">{item.label}</div>
              <div className="metric-sub">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="results-section">
          <span className="results-label">{provenLabel}</span>

          {cases.map((item: any, idx: number) => (
            <div className="case-card" key={idx}>
              <div className="case-content">
                <h3 className="case-title">{item.title}</h3>
                <p className="case-desc">{item.desc}</p>
              </div>
              <span className="case-badge">{item.badge}</span>
            </div>
          ))}

          <div className="cta-wrapper">
            <a href="#agency-profile" className="btn-agency-profile">
              <span>{ctaText}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
