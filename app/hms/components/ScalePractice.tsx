'use client';

import React from 'react';

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
    solution: "Your own traffic and returning guests",
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
          padding: 3rem 0 3.5rem 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .scale-header {
          text-align: center;
          margin-bottom: 3.5rem;
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
          background: #5DCAA5;
        }

        .marker.empty {
          background: transparent;
        }

        /* Проблема — тише решения: мельче, легче, приглушённый красный
           поверх констелляции на фоне */
        .problem {
          margin: 0 0 7px 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.45;
          color: #C97B74;
        }

        .solution {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
          color: #ffffff;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .scale-section {
            padding: 2.5rem 0 3rem 0;
          }
          .scale-header {
            margin-bottom: 2.5rem;
          }
          .scale-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 767px) {
          .scale-section {
            padding: 2.25rem 0 2.75rem 0;
          }
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
          <h2 className="scale-title">{t?.scaleTitle || "What it costs you — and what changes"}</h2>
        </div>

        <div className="pairs">
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
