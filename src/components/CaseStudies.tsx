'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';

const cases = [
  {
    category: 'HIGH-TICKET B2B',
    title: 'Scaling Lead Velocity & GTM Architecture',
    challenge: 'High CPL & low sales conversion from manual CRM handoffs.',
    solution: 'Rebuilt acquisition funnels + automated instant CRM routing.',
    metrics: [
      { value: '+340%', label: 'Qual. Leads' },
      { value: '-42%', label: 'CAC' },
      { value: '$1.4M', label: 'Pipeline ARR' },
    ],
    tags: ['GTM Strategy', 'CRM Routing', 'CAC Scale'],
  },
  {
    category: 'REAL ESTATE & E-COMM',
    title: 'P&L Attribution & Omnichannel Scale',
    challenge: 'Ad spend across 5 channels with zero net profit visibility.',
    solution: 'End-to-end data pipeline linking ad spend to net P&L.',
    metrics: [
      { value: '5.2x', label: 'Blended ROAS' },
      { value: '100%', label: 'Data Clear' },
      { value: '+$520k', label: 'Net Margin' },
    ],
    tags: ['Attribution', 'Unit Economics', 'P&L Dashboards'],
  },
  {
    category: 'AI & OPERATIONS',
    title: 'Zero-Leakage Sales Automation',
    challenge: 'Leads untouched for 6h. Reps wasted 40% time on copy-paste.',
    solution: 'Custom AI lead parsing + auto-assignment in < 90 seconds.',
    metrics: [
      { value: '< 90s', label: 'Speed to Lead' },
      { value: '80%', label: 'Auto Tasks' },
      { value: '2.3x', label: 'Close Rate' },
    ],
    tags: ['AI Lead Scoring', 'CRM Workflows', 'Automation'],
  },
];

export const CaseStudies = () => (
  <section
    id="cases"
    style={{
      width: '100%',
      position: 'relative',
      paddingTop: 0,
      paddingBottom: 'clamp(3rem, 6vw, 6rem)',
      paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
      paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
      background: 'transparent',
    }}
  >
    <style jsx>{`
      .cases-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }

      @media (min-width: 868px) {
        .cases-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
      }

      .case-card {
        background: radial-gradient(
          circle at 50% 0%,
          rgba(0, 229, 153, 0.04) 0%,
          rgba(12, 22, 20, 0.85) 75%
        );
        border: 1px solid rgba(0, 229, 153, 0.18);
        border-radius: 18px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        box-sizing: border-box;
      }

      .case-card:hover {
        transform: translateY(-3px);
        border-color: rgba(0, 229, 153, 0.4);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 229, 153, 0.12);
      }

      /* Промо-карточка оффера /hms */
      .hms-card {
        background: radial-gradient(
          circle at 80% 0%,
          rgba(0, 163, 255, 0.12) 0%,
          rgba(0, 229, 153, 0.08) 40%,
          rgba(10, 18, 24, 0.95) 100%
        );
        border: 1px solid rgba(0, 229, 153, 0.35);
        border-radius: 18px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 229, 153, 0.1);
        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        position: relative;
        overflow: hidden;
      }

      .hms-card:hover {
        transform: translateY(-3px);
        border-color: rgba(0, 229, 153, 0.6);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.65), 0 0 30px rgba(0, 229, 153, 0.2);
      }

      .btn-hms {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 0.65rem 1.25rem;
        border-radius: 10px;
        background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
        color: #0A0A0E;
        font-weight: 700;
        font-size: 0.85rem;
        text-decoration: none;
        transition: all 0.25s ease;
        box-shadow: 0 4px 15px rgba(0, 229, 153, 0.25);
        width: fit-content;
      }

      .btn-hms:hover {
        transform: translateY(-1px);
        box-shadow: 0 6px 20px rgba(0, 229, 153, 0.4);
      }
    `}</style>

    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <span
          style={{
            display: 'inline-block',
            padding: '0.35rem 0.85rem',
            borderRadius: 20,
            marginBottom: '1rem',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'rgba(0, 229, 153, 0.08)',
            border: '1px solid rgba(0, 229, 153, 0.25)',
            color: T.accent,
          }}
        >
          PROOF OF EXECUTION & INDUSTRY SOLUTIONS
        </span>

        <h2
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: 0,
          }}
        >
          Proven Growth Architectures
        </h2>
      </motion.div>

      {/* 2x2 Bento Grid Layout */}
      <div className="cases-grid">
        {/* 3 Стандартных кейса */}
        {cases.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="case-card"
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                <span
                  style={{
                    fontSize: '0.625rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: T.accent,
                    textTransform: 'uppercase',
                    background: 'rgba(0, 229, 153, 0.1)',
                    padding: '3px 8px',
                    borderRadius: 5,
                    border: '1px solid rgba(0, 229, 153, 0.25)',
                  }}
                >
                  {item.category}
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                <p style={{ margin: 0, fontSize: '0.825rem', color: T.sub, lineHeight: 1.5 }}>
                  <strong style={{ color: '#EF4444' }}>Issue:</strong> {item.challenge}
                </p>
                <p style={{ margin: 0, fontSize: '0.825rem', color: T.sub, lineHeight: 1.5 }}>
                  <strong style={{ color: T.accent }}>Fix:</strong> {item.solution}
                </p>
              </div>
            </div>

            <div>
              {/* Метрики */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: '0.75rem 0.5rem',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}
              >
                {item.metrics.map((m, mi) => (
                  <div key={mi}>
                    <div
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: T.accent,
                        lineHeight: 1.1,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.675rem', fontWeight: 500, color: T.muted, lineHeight: 1.2 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Теги */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {item.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    style={{
                      padding: '3px 8px',
                      borderRadius: 5,
                      fontSize: '0.675rem',
                      fontWeight: 500,
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: T.sub,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* 4-я карточка: ФОКУСНЫЙ СПЕЦ-ОФФЕР ДЛЯ HORECA / HMS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="hms-card"
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
              <span
                style={{
                  fontSize: '0.625rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: '#00E599',
                  textTransform: 'uppercase',
                  background: 'rgba(0, 229, 153, 0.15)',
                  padding: '3px 8px',
                  borderRadius: 5,
                  border: '1px solid rgba(0, 229, 153, 0.4)',
                }}
              >
                SPECIALIZED OFFER
              </span>
              <span style={{ fontSize: '0.7rem', color: '#38BDF8', fontWeight: 700, letterSpacing: '0.05em' }}>
                HOSPITALITY / HMS
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '0.6rem',
                lineHeight: 1.25,
              }}
            >
              Hospitality Growth Solutions
            </h3>

            <p style={{ margin: 0, fontSize: '0.85rem', color: T.sub, lineHeight: 1.55, marginBottom: '1.25rem' }}>
              Dedicated GTM architecture for Luxury Resorts, Hotels, and Villas. We eliminate OTA commissions and build high-margin direct booking funnels.
            </p>
          </div>

          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem',
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(0, 229, 153, 0.15)',
                borderRadius: 12,
                padding: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#00E599' }}>+40%</div>
                <div style={{ fontSize: '0.675rem', color: T.muted }}>Direct Bookings</div>
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#38BDF8' }}>0%</div>
                <div style={{ fontSize: '0.675rem', color: T.muted }}>OTA Leakage</div>
              </div>
            </div>

            <Link href="/hms" className="btn-hms">
              <span>Explore HMS System</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  </section>
);

export default CaseStudies;
