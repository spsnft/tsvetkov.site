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
    solution: "Direct bookings at 0% commission — forever",
  },
  {
    problem: "Every guest arrives through a channel you don't own",
    solution: "Your own search traffic and returning guests",
  },
  {
    problem: "Rates and availability updated by hand, around the clock",
    solution: "One room calendar, synced across 300+ channels",
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
          padding: 22px 0;
        }

        .pair + .pair {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .problem {
          margin: 0 0 14px 0;
          font-size: 1.1rem;
          font-weight: 600;
          line-height: 1.45;
          /* Приглушённый красный: тот же акцент, что и у Bottleneck-раздела,
             но на пониженной непрозрачности, чтобы не читаться как алерт */
          color: rgba(255, 85, 85, 0.72);
          text-wrap: pretty;
        }

        .solution {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.45;
          color: #ffffff;
          text-wrap: pretty;
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
          .pair {
            padding: 18px 0;
          }
          .problem {
            font-size: 1rem;
            margin-bottom: 11px;
          }
          .solution {
            font-size: 1rem;
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
              <p className="problem">{pair.problem}</p>
              <p className="solution">{pair.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
