'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface ScalePracticeProps {
  // t is the full page contentData blob, same pattern as sibling sections
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t?: any;
}

// Три пары «проблема → решение», деньги первыми, операционка последней.
// EN-дефолты; RU/TH пока не локализованы под новую структуру (см. ТЗ) —
// старые scaleCmpNow/scaleCmpAfter массивы в constants.ts остаются
// нетронутыми, но больше не читаются этим компонентом.
const DEFAULT_PAIRS = [
  {
    problem: "15–20% of every booking goes to the platform",
    solution: "Direct bookings at 0% commission, forever",
  },
  {
    problem: "Your guests belong to the platform",
    solution: "Your guest list belongs to you",
  },
  {
    problem: "Rates updated by hand, around the clock",
    solution: "One calendar, synced across 300+ channels",
  },
];

export default function ScalePractice({ t }: ScalePracticeProps) {
  const pairs = DEFAULT_PAIRS.map((fallback, i) => ({
    problem: t?.[`scalePair${i + 1}Problem`] || fallback.problem,
    solution: t?.[`scalePair${i + 1}Solution`] || fallback.solution,
  }));

  return (
    <section id="how-it-works" className="scale-section">
      <style jsx>{`
        .scale-section {
          width: 100%;
          padding: ${T.hms.sectionPad} 0;
          background: ${T.hms.tint};
          scroll-margin-top: 80px;
        }

        .scale-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .scale-eyebrow {
          margin: 0 0 ${T.hms.eyebrowGap} 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          opacity: 0.8;
        }

        .scale-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
          text-wrap: balance;
        }

        .pairs {
          max-width: 640px;
          margin: 0 auto;
        }

        /* Шапка колонок — один раз над первой парой, тем же паттерном
           «маркер + строка», что и сами пары, только мельче: это подпись
           к двум сторонам стопки, а не полноценная третья пара */
        .col-headers {
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 10px;
        }

        .col-headers .row + .row {
          margin-top: 5px;
        }

        .col-header {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .col-header.today {
          color: ${T.muted};
        }

        .col-header.with {
          color: ${T.accent};
        }

        .pair {
          padding: 10px 0;
        }

        .pair + .pair {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .row {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .marker {
          flex: 0 0 6px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.accent};
        }

        .marker.empty {
          background: transparent;
        }

        /* Today — приглушённая колонка, без акцентного цвета */
        .problem {
          margin: 0 0 7px 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.45;
          color: ${T.muted};
        }

        /* With your own system — акцентный цвет дизайн-системы */
        .solution {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
          color: ${T.accent};
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .scale-header {
            margin-bottom: 2.5rem;
          }
          .scale-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 767px) {
          .scale-header {
            margin-bottom: 2.25rem;
          }
          .scale-title {
            font-size: 1.75rem;
          }
          /* 18px переносит две из трёх строк на 390px — на мобильном чуть
             мельче, чтобы соблюсти «ни одна строка не переносится» */
          .solution {
            font-size: 15px;
          }
          .row {
            gap: 6px;
          }
        }
      `}</style>

      <div className="container">
        <div className="scale-header">
          {t?.scaleLabel && <p className="scale-eyebrow">{t.scaleLabel}</p>}
          <h2 className="scale-title">{t?.scaleTitle || "What changes when bookings come direct"}</h2>
        </div>

        <div className="pairs">
          <div className="col-headers" aria-hidden="true">
            <div className="row">
              <span className="marker empty" />
              <span className="col-header today">{t?.scaleColToday || "Today"}</span>
            </div>
            <div className="row">
              <span className="marker" />
              <span className="col-header with">{t?.scaleColWith || "With your own system"}</span>
            </div>
          </div>

          {pairs.map((pair, i) => (
            <div className="pair" key={i}>
              <div className="row">
                <span className="marker empty" aria-hidden="true" />
                <p className="problem">{pair.problem}</p>
              </div>
              <div className="row">
                <span className="marker" aria-hidden="true" />
                <p className="solution">{pair.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
