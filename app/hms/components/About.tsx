'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface AboutProps {
  t?: {
    aboutTitle?: string;
    aboutDescFirst?: string;
    aboutDescRest?: string;
    stat1Num?: string;
    stat1Name?: string;
    stat1Sub?: string;
    stat2Num?: string;
    stat2Name?: string;
    stat2Sub?: string;
    stat3Num?: string;
    stat3Name?: string;
    stat3Sub?: string;
    proofLabel?: string;
    case1Title?: string;
    case1Badge?: string;
    case1Desc?: string;
    case2Title?: string;
    case2Badge?: string;
    case2Desc?: string;
    [key: string]: any;
  };
}

const renderCaseTitle = (title: string) => {
  if (!title) return null;
  if (title.includes(' | ')) {
    const parts = title.split(' | ');
    return (
      <span className="case-title-container">
        <span className="metric-part">{parts[0]}</span>
        <span className="title-sep">•</span>
        <span className="metric-part">{parts[1]}</span>
      </span>
    );
  }
  return <span className="metric-part">{title}</span>;
};

const renderFormattedDesc = (desc: string) => {
  if (!desc) return null;

  const processed = desc
    .replace(/Google Ads & Direct Engine/g, '<span class="nobr">Google Ads & Direct Engine</span>')
    .replace(/Booking\.com dependence/g, '<span class="nobr">Booking.com dependence</span>')
    .replace(/Google Ads และระบบจองตรง/g, '<span class="nobr">Google Ads และระบบจองตรง</span>')
    .replace(/ลดการพึ่งพา Booking\.com/g, '<span class="nobr">ลดการพึ่งพา Booking.com</span>')
    .replace(/Google Ads и модуль прямых броней/g, '<span class="nobr">Google Ads и модуль прямых броней</span>')
    .replace(/зависимость от Booking\.com/g, '<span class="nobr">зависимость от Booking.com</span>');

  const parts = processed.split(/<span class="nobr">(.*?)<\/span>/g);

  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <span key={i} className="nobr">
          {part}
        </span>
      );
    }
    return part;
  });
};

export default function About({ t = {} }: AboutProps) {
  const titleText = t.aboutTitle || "Systems. Optimization. Scale.";
  
  const firstSentence = t.aboutDescFirst || "We step into business to optimize them for maximum efficiency.";
  const restText = t.aboutDescRest || "By unifying marketing channels, data analytics, and workflow automation into a single engine, we eliminate operational chaos and unlock systemic growth — transforming hidden leakages into predictable, scalable revenue.";

  const trustStats = [
    { num: t.stat1Num || "$1M+", name: t.stat1Name || "Saved Fees", sub: t.stat1Sub || "In OTA commissions" },
    { num: t.stat2Num || "20+", name: t.stat2Name || "Brands Scaled", sub: t.stat2Sub || "B2B & Direct models" },
    { num: t.stat3Num || "10+", name: t.stat3Name || "Years Experience", sub: t.stat3Sub || "Growth & systems" }
  ];

  const cases = [
    {
      title: t.case1Title || "+$2,800/mo saved in OTA fees | +42% Direct Bookings",
      badge: t.case1Badge || "Villa Resort",
      desc: t.case1Desc || "Replaced manual management with an automated Direct Engine"
    },
    {
      title: t.case2Title || "+310% Google Traffic | Zero Double-Bookings",
      badge: t.case2Badge || "Boutique Hotel",
      desc: t.case2Desc || "Integrated Google Ads & Direct Engine, cutting Booking.com dependence"
    }
  ];

  const proofLabel = t.proofLabel || "Proven Results";

  return (
    <section className="about-section">
      <style jsx>{`
        .about-section {
          width: 100%;
          padding: 0 0 3.5rem 0;
          background: transparent;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .about-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 48fr 52fr;
          gap: 3.5rem;
          align-items: stretch;
          box-sizing: border-box;
        }
        
        /* --- LEFT COLUMN --- */
        .left-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .left-top-content {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .col-label-placeholder {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          visibility: hidden;
          user-select: none;
        }

        .description {
          font-size: 1.05rem;
          line-height: 1.65;
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

        .trust-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          width: 100%;
        }

        .trust-stat-card {
          background: rgba(12, 14, 20, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 1.25rem 0.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.25rem;
          backdrop-filter: blur(12px);
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .trust-stat-card:hover {
          background: rgba(22, 27, 38, 0.75);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .stat-num {
          font-size: 1.65rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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

        /* --- RIGHT COLUMN --- */
        .right-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }

        .proof-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .proof-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          opacity: 0.8;
        }

        .cases-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1rem;
          height: 100%;
        }

        .case-card {
          width: 100%;
          background: rgba(12, 14, 20, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 1.25rem 1.35rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;
          backdrop-filter: blur(12px);
          box-sizing: border-box;
          transition: all 0.25s ease;
          flex: 1;
        }

        .case-card:hover {
          background: rgba(18, 22, 32, 0.75);
          border-color: rgba(255, 255, 255, 0.18);
        }

        .case-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .case-title {
          font-size: 0.98rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.01em;
          line-height: 1.35;
        }

        :global(.case-title-container) {
          display: inline-flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.35rem 0.5rem;
        }

        :global(.metric-part) {
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
        }

        :global(.title-sep) {
          color: rgba(255, 255, 255, 0.35);
          -webkit-text-fill-color: rgba(255, 255, 255, 0.35);
          font-size: 0.8rem;
          user-select: none;
        }

        :global(.nobr) {
          white-space: nowrap;
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
          text-wrap: pretty;
        }

        /* --- ПЛАНШЕТЫ И НОУТБУКИ (ДО 1024px) --- */
        @media (max-width: 1024px) {
          :global(.case-title-container) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          :global(.title-sep) {
            display: none !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .about-section {
            padding: 0 0 3rem 0;
          }
          .about-header {
            margin-bottom: 2.5rem;
          }
          .about-title {
            font-size: 2rem;
          }
          .about-grid {
            gap: 2rem;
            grid-template-columns: 48fr 52fr;
          }
          .description {
            font-size: 0.95rem;
            line-height: 1.55;
          }
          .trust-stats-grid {
            gap: 0.5rem;
          }
          .trust-stat-card {
            padding: 1rem 0.4rem;
          }
          .stat-num {
            font-size: 1.35rem;
          }
          .stat-name {
            font-size: 0.75rem;
          }
          .stat-sub {
            font-size: 0.62rem;
          }
          .case-card {
            padding: 1rem 1rem;
          }
          .case-title {
            font-size: 0.88rem;
            line-height: 1.3;
          }
          .case-desc {
            font-size: 0.8rem;
            line-height: 1.4;
          }
        }

        /* --- МОБИЛЬНЫЕ (ДО 767px) --- */
        @media (max-width: 767px) {
          .about-section {
            padding: 0 0 2.5rem 0;
          }
          .about-header {
            margin-bottom: 2.25rem;
          }
          .about-title {
            font-size: 1.75rem;
          }
          .col-label-placeholder {
            display: none;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .left-col, .right-col {
            gap: 1.25rem;
          }
          .description {
            font-size: 0.95rem;
            line-height: 1.55;
          }
          
          .trust-stats-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.4rem;
          }
          .trust-stat-card {
            padding: 0.75rem 0.3rem;
            border-radius: 10px;
          }
          .stat-num {
            font-size: 1.3rem;
          }
          .stat-name {
            font-size: 0.72rem;
            margin-top: 0.15rem;
            line-height: 1.15;
          }
          .stat-sub {
            font-size: 0.6rem;
            line-height: 1.15;
            opacity: 0.85;
          }

          .case-card {
            padding: 1.1rem 1.1rem;
          }
          .case-title {
            font-size: 0.9rem;
            line-height: 1.35;
          }
          .case-desc {
            font-size: 0.82rem;
            line-height: 1.45;
          }
        }
      `}</style>

      <div className="container">
        
        {/* CENTERED HEADER */}
        <div className="about-header">
          <h2 className="about-title">{titleText}</h2>
        </div>

        <div className="about-grid">
          
          {/* LEFT COLUMN */}
          <div className="left-col">
            <div className="left-top-content">
              <span className="col-label-placeholder">ALIGNMENT</span>
              <p className="description">
                <span className="highlight-sentence">{firstSentence}</span>{' '}
                <span className="dimmed-text">{restText}</span>
              </p>
            </div>

            <div className="trust-stats-grid">
              {trustStats.map((stat, i) => (
                <div className="trust-stat-card" key={i}>
                  <span className="stat-num">{stat.num}</span>
                  <span className="stat-name">{stat.name}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="right-col">
            <div className="proof-header">
              <span className="proof-label">{proofLabel}</span>
            </div>

            <div className="cases-wrapper">
              {cases.map((c, i) => (
                <div className="case-card" key={i}>
                  <div className="case-header">
                    <h3 className="case-title">{renderCaseTitle(c.title)}</h3>
                    <span className="case-badge">{c.badge}</span>
                  </div>
                  <p className="case-desc">{renderFormattedDesc(c.desc)}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
