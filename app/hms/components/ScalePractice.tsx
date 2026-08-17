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

  const labelOn = t?.scaleLabelToday || 'ON OTAS';
  const labelDirect = t?.scaleLabelDirect || 'DIRECT';

  return (
    <section id="how-it-works" className="scale-section">
      <style jsx>{`
        .scale-section {
          width: 100%;
          padding: ${T.hms.sectionPad} 0;
          background: transparent;
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

        /* ================= DESKTOP: stacked pairs + shared column header ================= */
        .pairs-desktop {
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

        /* DIRECT — фирменный градиент, единственное цветное пятно в блоке.
           Всё остальное (маркеры, разделитель) — нейтральный серый, не
           градиент (см. ТЗ №4, п. 3.4) */
        .col-header.direct {
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pair {
          position: relative;
          padding: 10px 0;
        }

        .pair + .pair::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
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
          background: rgba(255, 255, 255, 0.3);
        }

        .marker.empty {
          background: transparent;
        }

        /* On OTAs — приглушённая колонка, без акцентного цвета */
        .problem {
          margin: 0 0 7px 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.45;
          color: ${T.muted};
        }

        /* Direct — почти белый, высокий контраст. Плоский зелёный на
           тексте убран — градиент живёт только на самом лейбле DIRECT */
        .solution {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.92);
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .scale-header {
            margin-bottom: 2.5rem;
          }
          .scale-title {
            font-size: 2rem;
          }
        }

        /* ================= MOBILE: без рамок, метки инлайново ================= */
        .pairs-mobile {
          display: none;
        }

        @media (max-width: 767px) {
          .scale-section {
            padding: ${T.hms.sectionPadMobile} 0;
          }
          .scale-header {
            margin-bottom: 2.25rem;
          }
          .scale-title {
            font-size: 1.75rem;
          }
          .solution {
            font-size: 15px;
          }

          /* Колонок на мобиле нет — общая шапка над шестью оторванными
             строками не читается (см. ТЗ №3, п. 3.1). Вместо неё три пары
             без рамок и подложек: группировка держится на воздухе между
             парами и hairline снизу, не на контуре (см. ТЗ №4, п. 3.1) */
          .pairs-desktop {
            display: none;
          }

          .pairs-mobile {
            display: flex;
            flex-direction: column;
            gap: 28px;
            max-width: 480px;
            margin: 0 auto;
          }

          .pair-card:not(:last-child) {
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }

          .problem {
            margin: 0 0 8px 0;
          }

          /* Метка — инлайновый префикс перед текстом строки, в одну
             строку с ним, а не блок над ней (см. ТЗ №4, п. 3.3) */
          .micro-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            margin-right: 6px;
          }

          .micro-label.today {
            color: ${T.muted};
          }

          .micro-label.direct {
            background: ${T.linearGradient};
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      `}</style>

      <div className="container">
        <div className="scale-header">
          {t?.scaleLabel && <p className="scale-eyebrow">{t.scaleLabel}</p>}
          <h2 className="scale-title">{t?.scaleTitle || "What changes when bookings come direct"}</h2>
        </div>

        <div className="pairs-desktop">
          <div className="col-headers" aria-hidden="true">
            <div className="row">
              <span className="marker empty" />
              <span className="col-header today">{labelOn}</span>
            </div>
            <div className="row">
              <span className="marker" />
              <span className="col-header direct">{labelDirect}</span>
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

        <div className="pairs-mobile">
          {pairs.map((pair, i) => (
            <div className="pair-card" key={i}>
              <p className="problem">
                <span className="micro-label today">{labelOn}</span>
                {pair.problem}
              </p>
              <p className="solution">
                <span className="micro-label direct">{labelDirect}</span>
                {pair.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
