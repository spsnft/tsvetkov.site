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

  // Формируем данные кейсов динамически из словаря локализации
  const caseData = [
    {
      id: 'hms',
      tabLabel: t.tabs?.hms || '01 // HOSPITALITY / HMS',
      category: t.hmsCategory || 'SPECIALIZED OFFER / HOSPITALITY',
      title: t.items?.hms?.title || 'Direct Booking Architecture & OTA Elimination',
      challenge: t.items?.hms?.challenge || 'High OTA commissions (18–25%), total loss of guest data ownership, and low direct channel conversion.',
      solution: t.items?.hms?.solution || 'Turnkey HMS deployment: direct booking funnels, automated WhatsApp CRM sync, and zero-commission engine.',
      architecture: t.items?.hms?.architecture || [
        'WhatsApp Instant Booking AI Engine',
        'Direct Payment Gateway Integration',
        'Zero-Leakage Guest Data Pipeline',
        'Automated Retargeting & Upsell Triggers',
      ],
      metrics: t.items?.hms?.metrics || [
        { value: '+40%', label: 'Direct Bookings' },
        { value: '0%', label: 'OTA Commission Leakage' },
        { value: '100%', label: 'Guest Data Ownership' },
      ],
      telemetryLogs: t.items?.hms?.telemetryLogs || [
        '> OTA LEAKAGE: REDUCED TO 0%',
        '> WHATSAPP CRM SYNC: ACTIVE (60s SLA)',
        '> MARGIN BOOST: +22% NET PROFIT',
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
      challenge: t.items?.ecomm?.challenge || 'Ad spend scaled across 5 channels with zero net profit visibility, broken tracking, and ballooning CAC.',
      solution: t.items?.ecomm?.solution || 'End-to-end data pipeline linking ad accounts directly to live net-margin P&L attribution dashboards.',
      architecture: t.items?.ecomm?.architecture || [
        'Real-Time Blended ROAS Attribution',
        'Automated LTV Cohort Analytics',
        'Dynamic Ad Budget Re-allocation Rules',
        'Server-Side Conversions API (CAPI)',
      ],
      metrics: t.items?.ecomm?.metrics || [
        { value: '5.2x', label: 'Blended ROAS' },
        { value: '+$520k', label: 'Net Profit Growth' },
        { value: '100%', label: 'P&L Visibility' },
      ],
      telemetryLogs: t.items?.ecomm?.telemetryLogs || [
        '> ATTRIBUTION PIPELINE: SYNCHRONIZED',
        '> DATA ACCURACY: 99.8%',
        '> CAC OPTIMIZATION: AUTOMATED',
      ],
      hasCta: false,
    },
    {
      id: 'b2b',
      tabLabel: t.tabs?.b2b || '03 // HIGH-TICKET B2B',
      category: t.items?.b2b?.category || 'ENTERPRISE B2B',
      title: t.items?.b2b?.title || 'Lead Velocity & Automated GTM Architecture',
      challenge: t.items?.b2b?.challenge || 'High CPL, slow lead response time (>4 hours), and low sales conversion from manual CRM lead handoffs.',
      solution: t.items?.b2b?.solution || 'Rebuilt acquisition funnels coupled with instant 60-second automated CRM lead routing and AI scoring.',
      architecture: t.items?.b2b?.architecture || [
        'Instant Lead Speed Routing (<60s)',
        'Enriched B2B Prospect Profiling',
        'Automated Sales Pipeline Triggers',
        'Executive P&L Forecast Dashboards',
      ],
      metrics: t.items?.b2b?.metrics || [
        { value: '+340%', label: 'Qual. Lead Volume' },
        { value: '-42%', label: 'CAC Reduction' },
        { value: '$1.4M', label: 'Pipeline ARR' },
      ],
      telemetryLogs: t.items?.b2b?.telemetryLogs || [
        '> LEAD VELOCITY: <60s RESPONSE TIME',
        '> CRM ROUTING: AUTOMATED',
        '> PIPELINE HEALTH: OPTIMIZED',
      ],
      hasCta: false,
    },
    {
      id: 'realestate',
      tabLabel: t.tabs?.realestate || '04 // REAL ESTATE DEVELOPMENT',
      category: t.items?.realestate?.category || 'REAL ESTATE & PROPERTY',
      title: t.items?.realestate?.title || 'High-Intent Investor Acquisition System',
      challenge: t.items?.realestate?.challenge || 'Untargeted lead spam, high cost per qualified buyer, and zero visibility on broker sales velocity.',
      solution: t.items?.realestate?.solution || 'Targeted investor acquisition funnels, automated financial qualification surveys, and broker SLA tracking.',
      architecture: t.items?.realestate?.architecture || [
        'Financial Qualification Micro-Funnels',
        'Broker SLA & Pipeline Dashboard',
        'WhatsApp VIP Concierge Automation',
        'Multi-Currency ROAS Analytics',
      ],
      metrics: t.items?.realestate?.metrics || [
        { value: '3.8x', label: 'Qual. Investor Leads' },
        { value: '-35%', label: 'Cost Per Booking' },
        { value: '12m', label: 'Avg Broker Response' },
      ],
      telemetryLogs: t.items?.realestate?.telemetryLogs || [
        '> QUALIFICATION RATE: 84%',
        '> BROKER SLA: TRACKED LIVE',
        '> INVESTOR FUNNEL: HIGH-INTENT',
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
          padding: 1.5rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
          z-index: 5;
        }

        .header-box {
          text-align: center;
          margin-bottom: 3rem;
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

        .terminal-container {
          width: 100%;
          background: rgba(10, 12, 16, 0.75);
          border: 1px solid rgba(0, 229, 153, 0.2);
          border-radius: 20px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 229, 153, 0.05);
        }

        .terminal-bar {
          background: rgba(15, 18, 24, 0.9);
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

        .console-body {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          padding: clamp(1.5rem, 3.5vw, 2.5rem);
        }

        @media (min-width: 968px) {
          .console-body {
            grid-template-columns: 1.15fr 0.85fr;
          }
        }

        .btn-hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 0.85rem 1.8rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #06080C;
          font-weight: 800;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 25px rgba(0, 229, 153, 0.35), 0 0 15px rgba(0, 163, 255, 0.2);
          width: fit-content;
          margin-top: 1.5rem;
        }

        .btn-hero-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 32px rgba(0, 229, 153, 0.5), 0 0 25px rgba(0, 163, 255, 0.3);
        }

        .sparkline-svg {
          width: 100%;
          height: 50px;
          stroke: #00E599;
          stroke-width: 2;
          fill: none;
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
          <span className="badge">{t.badge || 'CASE STUDIES'}</span>
          <h2 className="title">{t.title || 'What Can We Show'}</h2>
        </motion.div>

        {/* TELEMETRY COMMAND CENTER MODULE */}
        <div className="terminal-container">
          
          {/* TOP BAR */}
          <div className="terminal-bar">
            <div style={{ display: 'flex', border: 'none', alignItems: 'center' }}>
              <span className="status-dot" />
              <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'var(--font-mono, monospace)', letterSpacing: '0.08em' }}>
                {t.terminalBarTitle || 'TELEMETRY ENGINE // LIVE SYSTEM DATA'}
              </span>
            </div>
            <span style={{ fontSize: '0.65rem', color: T.muted, fontFamily: 'var(--font-mono, monospace)' }}>
              v2.4 [VERIFIED]
            </span>
          </div>

          {/* TABS NAVIGATION */}
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

          {/* TAB CONTENT PANEL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="console-body"
            >
              
              {/* LEFT COLUMN: ARCHITECTURE BRIEF */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Category Tag */}
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: '#00E599',
                      textTransform: 'uppercase',
                      background: 'rgba(0, 229, 153, 0.12)',
                      padding: '4px 10px',
                      borderRadius: 6,
                      border: '1px solid rgba(0, 229, 153, 0.3)',
                      marginBottom: '1rem',
                    }}
                  >
                    {activeCase.category}
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '1rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {activeCase.title}
                  </h3>

                  {/* Challenge & Solution */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
                    <div
                      style={{
                        background: 'rgba(248, 113, 113, 0.05)',
                        borderLeft: '3px solid #F87171',
                        padding: '0.75rem 1rem',
                        borderRadius: '0 8px 8px 0',
                      }}
                    >
                      <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#F87171', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '2px' }}>
                        {t.bottleneckLabel || 'THE BOTTLENECK //'}
                      </span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.5 }}>
                        {activeCase.challenge}
                      </p>
                    </div>

                    <div
                      style={{
                        background: 'rgba(0, 229, 153, 0.05)',
                        borderLeft: '3px solid #00E599',
                        padding: '0.75rem 1rem',
                        borderRadius: '0 8px 8px 0',
                      }}
                    >
                      <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#00E599', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '2px' }}>
                        {t.solutionLabel || 'ENGINEERED FIX //'}
                      </span>
                      <p style={{ margin: 0, fontSize: '0.85rem', color: '#ffffff', fontWeight: 500, lineHeight: 1.5 }}>
                        {activeCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Deployed Architecture List */}
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.65rem' }}>
                      {t.infraLabel || 'DEPLOYED INFRASTRUCTURE //'}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem' }}>
                      {activeCase.architecture.map((arch: string, ai: number) => (
                        <div key={ai} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                          <span style={{ color: '#00E599', fontWeight: 800 }}>✓</span>
                          <span>{arch}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* HERO CTA BUTTON (ONLY FOR HMS TAB) */}
                {activeCase.hasCta && (
                  <div>
                    <Link href={getCtaLink(activeCase.ctaLink)} className="btn-hero-cta">
                      <span>{activeCase.ctaText}</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: LIVE TELEMETRY & METRICS DASHBOARD */}
              <div
                style={{
                  background: 'rgba(6, 8, 12, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 16,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                }}
              >
                {/* Metrics Grid */}
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>{t.metricsTitle || 'SYSTEM IMPACT METRICS'}</span>
                    <span style={{ color: '#00E599' }}>[ ACTIVE ]</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                    {activeCase.metrics.map((m: { value: string; label: string }, mi: number) => (
                      <div
                        key={mi}
                        style={{
                          background: 'rgba(15, 18, 24, 0.8)',
                          border: '1px solid rgba(0, 229, 153, 0.15)',
                          borderRadius: 12,
                          padding: '0.85rem 1.1rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span style={{ fontSize: '0.78rem', color: T.sub, fontWeight: 500 }}>{m.label}</span>
                        <span
                          style={{
                            fontSize: '1.6rem',
                            fontWeight: 800,
                            color: '#00E599',
                            fontFamily: 'var(--font-mono, monospace)',
                            lineHeight: 1,
                          }}
                        >
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth Sparkline & Telemetry Terminal Logs */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
                  <div style={{ fontSize: '0.62rem', fontWeight: 700, color: T.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {t.logsLabel || 'TRAJECTORY & TELEMETRY LOGS //'}
                  </div>

                  {/* Sparkline Visual */}
                  <div style={{ marginBottom: '0.75rem', opacity: 0.8 }}>
                    <svg className="sparkline-svg" viewBox="0 0 300 40">
                      <path
                        d="M0,35 Q40,32 80,25 T160,18 T240,8 T300,3"
                        fill="none"
                        stroke="#00E599"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M0,35 Q40,32 80,25 T160,18 T240,8 T300,3 L300,40 L0,40 Z"
                        fill="url(#grad)"
                        opacity="0.15"
                      />
                      <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E599" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Terminal Text Logs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'var(--font-mono, monospace)', fontSize: '0.68rem', color: 'rgba(0, 229, 153, 0.85)' }}>
                    {activeCase.telemetryLogs.map((log: string, li: number) => (
                      <div key={li}>{log}</div>
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
