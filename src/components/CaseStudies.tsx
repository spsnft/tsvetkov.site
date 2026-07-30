'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';

interface Metric {
  value: string;
  label: string;
}

interface CaseItem {
  category: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  tags: string[];
}

interface CaseStudiesProps {
  dict?: {
    cases?: {
      badge: string;
      title: string;
      hmsBadge: string;
      hmsCategory: string;
      hmsTitle: string;
      hmsDesc: string;
      hmsCta: string;
      hmsImpactTitle: string;
      hmsMetric1Value: string;
      hmsMetric1Label: string;
      hmsMetric2Value: string;
      hmsMetric2Label: string;
      hmsFeature: string;
      issueLabel?: string;
      fixLabel?: string;
      items: CaseItem[];
    };
    [key: string]: any;
  } | null;
  lang?: string;
}

export const CaseStudies = ({ dict, lang = 'en' }: CaseStudiesProps) => {
  const t = dict?.cases;

  if (!t) return null;

  const hmsLink = lang === 'en' ? '/hms' : `/${lang}/hms`;

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
          margin-bottom: 3.5rem;
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

        .cases-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        /* HMS HERO CARD */
        .hms-hero-card {
          background: radial-gradient(
            circle at 85% 20%,
            rgba(0, 163, 255, 0.12) 0%,
            rgba(0, 229, 153, 0.06) 35%,
            rgba(10, 12, 16, 0.95) 100%
          );
          border: 1px solid rgba(0, 229, 153, 0.3);
          border-radius: 20px;
          padding: clamp(1.5rem, 3.5vw, 2.5rem);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .hms-hero-card:hover {
          border-color: rgba(0, 229, 153, 0.5);
          box-shadow: 0 25px 55px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 229, 153, 0.15);
        }

        .hms-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 900px) {
          .hms-grid {
            grid-template-columns: 1.2fr 0.8fr;
            align-items: center;
          }
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          width: 100%;
        }

        @media (min-width: 868px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* CASE CARD */
        .case-card {
          background: rgba(12, 12, 16, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: clamp(1.25rem, 2.5vw, 1.75rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          backdrop-filter: blur(14px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          box-sizing: border-box;
        }

        .case-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 229, 153, 0.35);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 229, 153, 0.08);
        }

        .btn-hms {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #0A0A0E;
          font-weight: 800;
          font-size: 0.88rem;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 20px rgba(0, 229, 153, 0.25);
          width: fit-content;
        }

        .btn-hms:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 229, 153, 0.4);
        }

        .issue-tag {
          color: #F87171;
          font-weight: 700;
        }

        .fix-tag {
          color: ${T.accent};
          font-weight: 700;
        }
      `}</style>

      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="header-box"
        >
          <span className="badge">{t.badge}</span>
          <h2 className="title">{t.title}</h2>
        </motion.div>

        <div className="cases-container">
          
          {/* SPECIALIZED OFFER / HMS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="hms-hero-card"
          >
            <div className="hms-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      color: '#00E599',
                      textTransform: 'uppercase',
                      background: 'rgba(0, 229, 153, 0.12)',
                      padding: '4px 9px',
                      borderRadius: 6,
                      border: '1px solid rgba(0, 229, 153, 0.3)',
                    }}
                  >
                    {t.hmsBadge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 800, letterSpacing: '0.08em' }}>
                    {t.hmsCategory}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '0.85rem',
                    lineHeight: 1.2,
                  }}
                >
                  {t.hmsTitle}
                </h3>

                <p style={{ margin: 0, fontSize: '0.9rem', color: T.sub, lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '640px' }}>
                  {t.hmsDesc}
                </p>

                <Link href={hmsLink} className="btn-hms">
                  <span>{t.hmsCta}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div
                style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                  border: '1px solid rgba(0, 229, 153, 0.2)',
                  borderRadius: 16,
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
                }}
              >
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.45)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {t.hmsImpactTitle}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.08)', paddingRight: '0.5rem' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#00E599', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1 }}>
                      {t.hmsMetric1Value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.35rem', fontWeight: 500 }}>
                      {t.hmsMetric1Label}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'var(--font-mono, monospace)', lineHeight: 1 }}>
                      {t.hmsMetric2Value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: T.sub, marginTop: '0.35rem', fontWeight: 500 }}>
                      {t.hmsMetric2Label}
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.75rem', color: T.muted, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#00E599', fontWeight: 800 }}>✓</span> {t.hmsFeature}
                </div>
              </div>
            </div>
          </motion.div>

          {/* GENERAL B2B CASE STUDIES */}
          <div className="pillars-grid">
            {(t.items || []).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                className="case-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span
                      style={{
                        fontSize: '0.62rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        color: T.accent,
                        textTransform: 'uppercase',
                        background: 'rgba(0, 229, 153, 0.08)',
                        padding: '3px 8px',
                        borderRadius: 5,
                        border: '1px solid rgba(0, 229, 153, 0.2)',
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '0.85rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.title}
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1.5rem' }}>
                    <p style={{ margin: 0, fontSize: '0.83rem', color: T.sub, lineHeight: 1.5 }}>
                      <span className="issue-tag">{t.issueLabel || 'Issue:'}</span> {item.challenge}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.83rem', color: T.sub, lineHeight: 1.5 }}>
                      <span className="fix-tag">{t.fixLabel || 'Fix:'}</span> {item.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      background: 'rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 12,
                      padding: '0.85rem 0.4rem',
                      marginBottom: '1rem',
                      textAlign: 'center',
                    }}
                  >
                    {(item.metrics || []).map((m, mi) => (
                      <div 
                        key={mi}
                        style={{
                          borderRight: mi !== item.metrics.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                          padding: '0 0.25rem',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '1.2rem',
                            fontWeight: 800,
                            color: T.accent,
                            fontFamily: 'var(--font-mono, monospace)',
                            lineHeight: 1.1,
                            marginBottom: '0.25rem',
                          }}
                        >
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.65rem', fontWeight: 500, color: T.muted, lineHeight: 1.2 }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {(item.tags || []).map((tag, ti) => (
                      <span
                        key={ti}
                        style={{
                          padding: '3px 8px',
                          borderRadius: 5,
                          fontSize: '0.65rem',
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
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
