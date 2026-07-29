'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDictionary } from '@/src/locales/getDictionary';
import { T } from '@/src/theme/tokens';

const RED_ACCENT = '#FF5555';

type BottleneckProps = {
  lang?: string;
};

export const Bottleneck = ({ lang = 'en' }: BottleneckProps) => {
  const dict = useDictionary(lang);

  // Скелетон во избежание CLS
  if (!dict) {
    return (
      <section
        className="bottleneck-section"
        style={{
          width: '100%',
          position: 'relative',
          padding: '1rem 0 clamp(3rem, 6vw, 6rem) 0',
          background: 'transparent',
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="header-box" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
                background: 'rgba(0, 229, 153, 0.05)',
                border: '1px solid rgba(0, 229, 153, 0.25)',
                color: T.accent,
              }}
            >
              &nbsp;
            </span>
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#ffffff',
                margin: 0,
              }}
            >
              &nbsp;
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: 320,
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: 'rgba(14, 14, 18, 0.55)',
                }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const t = dict.bottleneck;

  // Варианты анимаций Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="problems" className="bottleneck-section">
      <style jsx>{`
        .bottleneck-section {
          width: 100%;
          position: relative;
          padding: 1rem 0 clamp(3rem, 6vw, 6rem) 0;
          background: transparent;
          z-index: 5;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 1.25rem;
          }
        }

        .header-box {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${T.accent};
          background: rgba(0, 229, 153, 0.05);
          border: 1px solid rgba(0, 229, 153, 0.25);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 15px rgba(0, 229, 153, 0.08);
        }

        .badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${T.accent};
          box-shadow: 0 0 6px ${T.accent};
        }

        .title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
          text-wrap: balance;
        }

        /* Использование :global гарантирует, что motion.div сработает со стилями 100% */
        :global(.bt-grid) {
          display: grid !important;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          :global(.bt-grid) {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        :global(.bt-card) {
          position: relative !important;
          overflow: hidden !important;
          padding: 2rem !important;
          border-radius: 16px !important;
          background: rgba(14, 14, 18, 0.6) !important;
          backdrop-filter: blur(16px) !important;
          -webkit-backdrop-filter: blur(16px) !important;
          border: 1px solid rgba(255, 255, 255, 0.07) !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          box-sizing: border-box !important;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        :global(.bt-card:hover) {
          border-color: rgba(255, 85, 85, 0.4) !important;
          transform: translateY(-4px) !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 85, 85, 0.08) !important;
        }

        .watermark {
          position: absolute;
          top: 8px;
          right: 18px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 4.8rem;
          font-weight: 900;
          line-height: 1;
          color: rgba(255, 85, 85, 0.06);
          pointer-events: none;
          user-select: none;
          z-index: 0;
          transition: color 0.3s ease;
        }

        :global(.bt-card:hover) .watermark {
          color: rgba(255, 85, 85, 0.14);
        }

        .card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .tag-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: ${RED_ACCENT};
          text-transform: uppercase;
          background: rgba(255, 85, 85, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid rgba(255, 85, 85, 0.2);
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 2rem 0;
          text-wrap: pretty;
        }

        .highlight-text {
          color: #ffffff;
          font-weight: 600;
        }

        .impact-footer {
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .impact-label {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        .impact-value {
          color: ${RED_ACCENT};
          font-weight: 700;
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

        <motion.div
          className="bt-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {t.items.map((item: any, i: number) => (
            <motion.div key={i} variants={cardVariants} className="bt-card">
              <div className="watermark">{item.num}</div>

              <div className="card-inner">
                <div>
                  <span className="tag-badge">{item.tag}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">
                    {item.descStart}
                    {item.descHighlight1 && (
                      <strong className="highlight-text">{item.descHighlight1}</strong>
                    )}
                    {item.descMiddle}
                    {item.descHighlight2 && (
                      <strong className="highlight-text">{item.descHighlight2}</strong>
                    )}
                    {item.descEnd}
                  </p>
                </div>

                <div className="impact-footer">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={RED_ACCENT}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                    <polyline points="17 18 23 18 23 12" />
                  </svg>
                  <span className="impact-label">
                    {t.impactLabel} <span className="impact-value">{item.impact}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Bottleneck;
