'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';

interface CaseStudiesProps {
  dict?: any;
  lang?: string;
}

export const CaseStudies = ({ dict, lang = 'en' }: CaseStudiesProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const t = dict?.cases || {};

  const caseData = [
    {
      id: 'hms',
      tabLabel: t.tabs?.hms || '01 // HOSPITALITY / HMS',
      category: t.hmsCategory || 'SPECIALIZED OFFER / HOSPITALITY',
      title: t.items?.hms?.title || 'Direct Booking Architecture & OTA Elimination',
      problem: t.items?.hms?.challenge || 'High OTA commissions (18–25%), total loss of guest data ownership, and low direct channel conversion.',
      solution: t.items?.hms?.solution || 'Turnkey HMS deployment: direct booking funnels, automated WhatsApp CRM sync, and zero-commission engine.',
      metrics: t.items?.hms?.metrics || [
        { value: '+40%', label: 'Direct Bookings' },
        { value: '0%', label: 'OTA Commission' },
        { value: '100%', label: 'Data Ownership' },
      ],
      hasCta: true,
      ctaText: t.hmsCta || 'Explore HMS System',
      ctaLink: '/hms',
    },
    {
      id: 'ecomm',
      tabLabel: t.tabs?.ecomm || '02 // E-COMMERCE & SCALING',
      category: t.items?.ecomm?.category || 'OMNICHANNEL E-COMM',
      title: t.items?.ecomm?.title || 'P&L Attribution & Performance Scaling Engine',
      problem: t.items?.ecomm?.challenge || 'Ad spend scaled across 5 channels with zero net profit visibility, broken tracking, and ballooning CAC.',
      solution: t.items?.ecomm?.solution || 'End-to-end data pipeline linking ad accounts directly to live net-margin P&L attribution dashboards.',
      metrics: t.items?.ecomm?.metrics || [
        { value: '5.2x', label: 'Blended ROAS' },
        { value: '+$520k', label: 'Net Profit Growth' },
        { value: '100%', label: 'P&L Visibility' },
      ],
      hasCta: false,
    },
    {
      id: 'b2b',
      tabLabel: t.tabs?.b2b || '03 // HIGH-TICKET B2B',
      category: t.items?.b2b?.category || 'ENTERPRISE B2B',
      title: t.items?.b2b?.title || 'Lead Velocity & Automated GTM Architecture',
      problem: t.items?.b2b?.challenge || 'High CPL, slow lead response time (>4 hours), and low sales conversion from manual CRM lead handoffs.',
      solution: t.items?.b2b?.solution || 'Rebuilt acquisition funnels coupled with instant 60-second automated CRM lead routing and AI scoring.',
      metrics: t.items?.b2b?.metrics || [
        { value: '+340%', label: 'Qual. Lead Volume' },
        { value: '-42%', label: 'CAC Reduction' },
        { value: '$1.4M', label: 'Pipeline ARR' },
      ],
      hasCta: false,
    },
    {
      id: 'realestate',
      tabLabel: t.tabs?.realestate || '04 // REAL ESTATE DEVELOPMENT',
      category: t.items?.realestate?.category || 'REAL ESTATE & PROPERTY',
      title: t.items?.realestate?.title || 'High-Intent Investor Acquisition System',
      problem: t.items?.realestate?.challenge || 'Untargeted lead spam, high cost per qualified buyer, and zero visibility on broker sales velocity.',
      solution: t.items?.realestate?.solution || 'Targeted investor acquisition funnels, automated financial qualification surveys, and broker SLA tracking.',
      metrics: t.items?.realestate?.metrics || [
        { value: '3.8x', label: 'Qual. Investor Leads' },
        { value: '-35%', label: 'Cost Per Booking' },
        { value: '12m', label: 'Avg Broker Response' },
      ],
      hasCta: false,
    },
  ];

  const activeCase = caseData[activeIdx];

  const getCtaLink = (path?: string) => {
    if (!path) return '#';
    return lang === 'en' ? path : `/${lang}${path}`;
  };

  return (
    <section id="cases" className="cases-section">
      <style jsx>{`
        .cases-section {
          width: 100%;
          position: relative;
          padding: 2rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
          z-index: 5;
        }

        .header-box {
          text-align: center;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-block;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 0.8rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.25);
          color: ${T.accent};
          backdrop-filter: blur(12px);
        }

        .title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
        }

        /* Terminal Shell */
        .terminal-container {
          width: 100%;
          background: rgba(10, 12, 16, 0.85);
          border: 1px solid rgba(0, 229, 153, 0.2);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 153, 0.05);
        }

        .terminal-bar {
          background: rgba(15, 18, 24, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00E599;
          box-shadow: 0 0 10px #00E599;
          display: inline-block;
          margin-right: 8px;
        }

        /* Tabs */
        .tabs-bar {
          display: flex;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(6, 8, 12, 0.6);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          overflow-x: auto;
          scrollbar-width: none;
        }

        .tabs-bar::-webkit-scrollbar {
          display: none;
        }

        .tab-btn {
          padding: 0.65rem 1.1rem;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.25s ease;
          font-family: var(--font-mono, monospace);
        }

        .tab-btn:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
        }

        .tab-btn.active {
          color: #00E599;
          background: rgba(0, 229, 153, 0.1);
          border-color: rgba(0, 229, 153, 0.3);
          box-shadow: 0 0 15px rgba(0, 229, 153, 0.1);
        }

        /* Console Layout */
        .console-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          padding: clamp(1.25rem, 3vw, 2.25rem);
        }

        @media (min-width: 968px) {
          .console-body {
            grid-template-columns: 1.2fr 0.8fr;
            align-items: stretch;
          }
        }

        /* Left Side: Problem & Solution */
        .story-col {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .case-title-box {
          margin-bottom: 0.5rem;
        }

        .category-tag {
          display: inline-block;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #00E599;
          text-transform: uppercase;
          background: rgba(0, 229, 153, 0.1);
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid rgba(0, 229, 153, 0.25);
          margin-bottom: 0.5rem;
        }

        .case-main-title {
          font-size: clamp(1.3rem, 2.2vw, 1.7rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
        }

        .block-card {
          padding: 1rem 1.25rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .problem-card {
          background: rgba(248, 113, 113, 0.04);
          border: 1px solid rgba(248, 113, 113, 0.2);
          border-left: 4px solid #F87171;
        }

        .solution-card {
          background: rgba(0, 229, 153, 0.04);
          border: 1px solid rgba(0, 229, 153, 0.2);
          border-left: 4px solid #00E599;
        }

        .card-label {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: var(--font-mono, monospace);
        }

        .problem-card .card-label { color: #F87171; }
        .solution-card .card-label { color: #00E599; }

        .card-text {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.85);
        }

        /* Right Side: Results Metrics */
        .results-col {
          background: rgba(15, 18, 24, 0.5);
          border: 1px solid rgba(0, 229, 153, 0.15);
          border-radius: 14px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .results-header {
          font-size: 0.65rem;
          font-weight: 700;
          color: ${T.muted};
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          font-family: var(--font-mono, monospace);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 550px) and (max-width: 967px) {
          .metrics-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stat-card {
          background: rgba(6, 8, 12, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 2px;
          transition: border-color 0.2s ease;
        }

        .stat-card:hover {
          border-color: rgba(0, 229, 153, 0.3);
        }

        .stat-value {
          font-size: clamp(1.8rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #00E599;
          font-family: var(--font-mono, monospace);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        /* CTA Link */
        .cta-box {
          margin-top: 1rem;
        }

        .btn-cta,
        .btn-cta:link,
        .btn-cta:visited {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          width: 100% !important;
          padding: 0.75rem 1.25rem !important;
          border-radius: 10px !important;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%) !important;
          color: #06080C !important;
          font-weight: 800 !important;
          font-size: 0.82rem !important;
          text-decoration: none !important;
          transition: all 0.25s ease !important;
        }

        .btn-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 4px 20px rgba(0, 229, 153, 0.3) !important;
        }
      `}</style>

      <div className="container">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="header-box"
        >
          <span className="badge">{t.badge || 'PROVEN ARCHITECTURES'}</span>
          <h2 className="title">{t.title || 'What Can We Show'}</h2>
        </motion.div>

        {/* TERMINAL CONTAINER */}
        <div className="terminal-container">
          
          {/* TOP BAR */}
          <div className="terminal-bar">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="status-dot" />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'var(--font-mono, monospace)', letterSpacing: '0.08em' }}>
                COMMAND_CENTER // CASE_STUDIES
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: T.muted, fontFamily: 'var(--font-mono, monospace)' }}>
              [VERIFIED]
            </span>
          </div>

          {/* TABS */}
          <div className="tabs-bar">
            {caseData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`tab-btn ${activeIdx === idx ? 'active' : ''}`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>

          {/* ACTIVE CASE CONTENT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="console-body"
            >
              
              {/* LEFT COLUMN: PROBLEM + SOLUTION */}
              <div className="story-col">
                <div className="case-title-box">
                  <span className="category-tag">{activeCase.category}</span>
                  <h3 className="case-main-title">{activeCase.title}</h3>
                </div>

                {/* 01 // PROBLEM */}
                <div className="block-card problem-card">
                  <span className="card-label">01 // THE BOTTLENECK (PROBLEM)</span>
                  <p className="card-text">{activeCase.problem}</p>
                </div>

                {/* 02 // SOLUTION */}
                <div className="block-card solution-card">
                  <span className="card-label">02 // ARCHITECTURE FIX (SOLUTION)</span>
                  <p className="card-text">{activeCase.solution}</p>
                </div>
              </div>

              {/* RIGHT COLUMN: RESULTS */}
              <div className="results-col">
                <div>
                  <div className="results-header">
                    <span>03 // SYSTEM IMPACT (RESULTS)</span>
                    <span style={{ color: '#00E599' }}>LIVE</span>
                  </div>

                  <div className="metrics-grid">
                    {activeCase.metrics.map((m: { value: string; label: string }, mi: number) => (
                      <div key={mi} className="stat-card">
                        <span className="stat-value">{m.value}</span>
                        <span className="stat-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* HMS CTA Button */}
                {activeCase.hasCta && (
                  <div className="cta-box">
                    <Link href={getCtaLink(activeCase.ctaLink)} className="btn-cta">
                      <span>{activeCase.ctaText}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
