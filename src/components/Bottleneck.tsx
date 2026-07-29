'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

interface BottleneckProps {
  dict?: any;
}

export const Bottleneck = ({ dict }: BottleneckProps) => {
  const t = dict?.bottleneck ?? {
    sectionBadge: 'SCALING BARRIERS',
    title: "Why your business isn't growing",
    cards: [
      {
        num: '01',
        tag: 'EMPTY TRAFFIC',
        title: 'Traffic Without Profit',
        desc: 'Agencies report clicks and leads, but your sales team gets <strong>poor-quality inquiries</strong>. Ad budgets keep growing, but <strong>net profit stays flat</strong>.',
        impact: 'Uncontrolled CAC Inflation',
      },
      {
        num: '02',
        tag: 'UNRELIABLE TRACKING',
        title: 'Broken Data & Blind Scaling',
        desc: 'Ad platforms, CRM, and actual revenue live in <strong>separate places</strong>. You end up guessing what works instead of seeing <strong>real ROI and true net profit</strong>.',
        impact: 'Wasted Marketing Capital',
      },
      {
        num: '03',
        tag: 'PROCESS FRICTION',
        title: 'Manual Work & Slow Sales',
        desc: 'Leads sit untouched for hours due to <strong>manual CRM handoffs</strong>. Your team wastes time managing spreadsheets instead of <strong>closing deals</strong>.',
        impact: 'Revenue Leakage & High Overhead',
      },
    ],
  };

  // Варианты анимаций Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bottleneck-section">
      <style jsx>{`
        .bottleneck-section {
          width: 100%;
          position: relative;
          padding: clamp(3.5rem, 6vw, 6rem) 0;
          box-sizing: border-box;
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

        /* ШАПКА СЕКЦИИ */
        .section-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: clamp(2.5rem, 4vw, 4rem);
        }

        /* Фирменный изумрудный шильдик-оглавление */
        .brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${T.accent};
          background: rgba(0, 229, 153, 0.05);
          border: 1px solid rgba(0, 229, 153, 0.25);
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 1.25rem;
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

        .section-title {
          font-size: clamp(2rem, 4vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin: 0;
          text-wrap: balance;
        }

        /* СЕТКА КАРТОЧЕК */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* GLASSMORPHISM КАРТОЧКА */
        .card {
          position: relative;
          background: rgba(14, 14, 18, 0.55);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: clamp(1.5rem, 2.5vw, 2rem);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 60, 90, 0.35);
          box-shadow: 0 12px 30px -10px rgba(255, 40, 80, 0.12),
                      inset 0 0 20px rgba(255, 40, 80, 0.03);
        }

        /* Градиентный бордер сверху для объема */
        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.15),
            transparent
          );
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* Бейдж проблемы (Красный) */
        .tag-danger {
          display: inline-flex;
          align-items: center;
          font-size: 0.62rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ff4d6d;
          background: rgba(255, 40, 80, 0.08);
          border: 1px solid rgba(255, 40, 80, 0.22);
          padding: 4px 10px;
          border-radius: 6px;
        }

        /* Объемная цифра на фоне */
        .card-num {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.02) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
          user-select: none;
        }

        .card-body {
          position: relative;
          z-index: 2;
          margin-bottom: 2rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.85rem 0;
          line-height: 1.3;
        }

        .card-desc {
          font-size: 0.88rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .card-desc :global(strong) {
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
        }

        /* Impact индикатор внизу */
        .card-footer {
          position: relative;
          z-index: 2;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .impact-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff3355;
          box-shadow: 0 0 8px #ff3355;
          flex-shrink: 0;
          animation: pulseRed 2s infinite ease-in-out;
        }

        @keyframes pulseRed {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }

        .impact-text {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
        }

        .impact-text span {
          color: #ff5577;
          font-weight: 700;
        }
      `}</style>

      <div className="container">
        {/* Заголовок секции */}
        <div className="section-header">
          <div className="brand-badge">
            <span className="badge-dot" />
            {t.sectionBadge}
          </div>
          <h2 className="section-title">{t.title}</h2>
        </div>

        {/* Интерактивная сетка с повторной анимацией на каждый скролл */}
        <motion.div
          className="cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {t.cards.map((card: any, idx: number) => (
            <motion.div key={idx} variants={cardVariants} className="card">
              <div>
                <div className="card-top">
                  <span className="tag-danger">{card.tag}</span>
                  <span className="card-num">{card.num}</span>
                </div>

                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p
                    className="card-desc"
                    dangerouslySetInnerHTML={{ __html: card.desc }}
                  />
                </div>
              </div>

              <div className="card-footer">
                <div className="impact-dot" />
                <div className="impact-text">
                  Impact: <span>{card.impact}</span>
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
