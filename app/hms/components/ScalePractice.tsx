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

  const labelOn = t?.scaleLabelToday || 'on OTAs';
  const labelDirect = t?.scaleLabelDirect || 'direct';

  return (
    <section id="how-it-works" className="scale-section">
      <style jsx>{`
        .scale-section {
          width: 100%;
          padding: ${T.hms.sectionPadTop} 0 ${T.hms.sectionPadBottom} 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .scale-header {
          text-align: center;
          /* Единый отступ «заголовок секции → первый контент» на всей
             странице — согласовано с заказчиком по итогам аудита (ТЗ №4):
             было 3.5rem/56px, приводим к общему 48px вместе с
             PRICING/HOW IT WORKS/FAQ/WHO'S BEHIND THIS/GET STARTED */
          margin-bottom: 48px;
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

        @media (min-width: 768px) and (max-width: 1024px) {
          .scale-title {
            font-size: 2rem;
          }
        }

        /* Один вариант вёрстки на обоих брейкпоинтах — раньше desktop был
           колонками с общей шапкой, mobile парами с инлайн-метками;
           колоночный вариант убран целиком (см. ТЗ №5, п. 2.1). Без
           рамок и подложек — группировка держится на воздухе между
           парами и hairline снизу (см. ТЗ №4, п. 3.1) */
        .pairs {
          display: flex;
          flex-direction: column;
          max-width: 640px;
          margin: 0 auto;
        }

        /* 40px между парами, hairline точно по центру (20 + 20) — раньше
           padding-bottom (20) и flex-gap (28) давали разные 20/28 по обе
           стороны линии, из-за чего три пары читались как шесть отдельных
           строк (см. ТЗ №10, п. A3) */
        .pair:not(:last-child) {
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Метка — колонка фиксированной ширины: текст всех шести строк
           стартует с одной вертикальной оси, а не «пляшет» по ширине
           лейбла (см. ТЗ №5, п. 2.2). Явный gap — при выравнивании метки
           вправо (см. ниже) её текст упирается в правый край колонки
           метки, и без зазора текст строки шёл бы вплотную (см. ТЗ №10, п. A4) */
        .pair-row {
          display: flex;
          align-items: baseline;
          gap: 10px;
        }

        /* 8px внутри пары (см. ТЗ №10, п. A3) */
        .pair-row + .pair-row {
          margin-top: 8px;
        }

        /* 72px — самый длинный лейбл («on OTAs») всё ещё в одну строку,
           освобождённые ~16px уходят тексту строки. Выравнивание вправо:
           у «on OTAs» и «direct» разная длина, слева это давало рваный
           правый край колонки меток; справа оба упираются в одну
           вертикаль и жёлоб между колонкой и текстом становится ровным
           (см. ТЗ №10, п. A4) */
        .micro-label {
          flex: 0 0 72px;
          width: 72px;
          text-align: right;
        }

        /* Регистр не несёт смысла — различие держится на цвете и весе
           (см. ТЗ №5, п. 2.3) */
        .micro-label.today {
          font-weight: 500;
          color: ${T.muted};
        }

        .micro-label.direct {
          font-weight: 700;
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* on OTAs — приглушённая строка, без акцентного цвета */
        .problem {
          flex: 1 1 auto;
          min-width: 0;
          margin: 0;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.45;
          color: ${T.muted};
        }

        /* direct — почти белый, высокий контраст. Плоский зелёный на
           тексте убран — градиент живёт только на самом лейбле direct */
        .solution {
          flex: 1 1 auto;
          min-width: 0;
          margin: 0;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.92);
        }

        @media (max-width: 767px) {
          .scale-section {
            padding: ${T.hms.sectionPadTopMobile} 0 ${T.hms.sectionPadBottomMobile} 0;
          }
          .scale-title {
            font-size: 1.75rem;
          }
          /* 18px переносит две из трёх строк на 390px — на мобильном чуть
             мельче, чтобы соблюсти «ни одна строка не переносится». 13.5px,
             не 14px — gap между меткой и текстом (10px) отъедает часть
             ширины, которую раньше давал пустой хвост левой метки при
             выравнивании влево (см. ТЗ №10, п. A4) */
          .solution {
            font-size: 13.2px;
          }
        }
      `}</style>

      <div className="container">
        <div className="scale-header">
          {t?.scaleLabel && <p className="scale-eyebrow">{t.scaleLabel}</p>}
          <h2 className="scale-title">{t?.scaleTitle || "What changes when bookings come direct"}</h2>
        </div>

        <div className="pairs">
          {pairs.map((pair, i) => (
            <div className="pair" key={i}>
              <div className="pair-row">
                <span className="micro-label today">{labelOn}</span>
                <p className="problem">{pair.problem}</p>
              </div>
              <div className="pair-row">
                <span className="micro-label direct">{labelDirect}</span>
                <p className="solution">{pair.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
