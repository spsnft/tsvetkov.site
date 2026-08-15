'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';
import RevenueCalc, { type CalcCopy } from './RevenueCalc';

interface IndustryProofProps {
  t: {
    otaCostBadge?: string;
  } & CalcCopy;
}

/**
 * Мобильный и планшетный близнец карточки расчёта из героя.
 * На десктопе (≥1025px) скрыт — там тот же расчёт живёт в bento-карточке.
 */
export default function IndustryProof({ t }: IndustryProofProps) {
  return (
    <section className="proof-section">
      <style jsx>{`
        /* Бейдж переехал внутрь карточки, освободившееся место отдано
           отступу от кнопки героя */
        .proof-section {
          width: 100%;
          background-color: transparent;
          padding: 2.75rem 0 0 0;
        }

        @media (min-width: 1025px) {
          .proof-section {
            display: none !important;
          }
        }

        /* Бейдж в верхнем левом углу карточки, 20px до подписи расчёта */
        .proof-badge-row {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
        }

        .proof-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: ${T.accent};
          background: ${T.accent08};
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid ${T.accent25};
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: ${T.accent};
          border-radius: 50%;
          box-shadow: 0 0 8px ${T.accent};
          flex-shrink: 0;
        }

        .proof-card {
          background: rgba(12, 14, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem 1.35rem;
          box-sizing: border-box;
        }

        @media (max-width: 480px) {
          .proof-section {
            padding: 2.25rem 0 0 0;
          }
          .proof-card {
            padding: 1.25rem 1.1rem;
            border-radius: 16px;
          }
        }

        /* На 320px боковые паддинги карточки — это те самые пиксели, которых
           не хватает сноске, чтобы уместиться в одну строку */
        @media (max-width: 360px) {
          .proof-card {
            padding: 1.1rem 0.7rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="proof-card">
          <div className="proof-badge-row">
            <span className="proof-badge">
              <span className="pulse-dot" /> {t?.otaCostBadge}
            </span>
          </div>

          <RevenueCalc t={t} />
        </div>
      </div>
    </section>
  );
}
