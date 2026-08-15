'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

export interface CalcCopy {
  calcUnitLabel?: string;
  calcKeepInline?: string;
  calcLossInline?: string;
  calcFullMark?: string;
  calcMonthLabel?: string;
  calcMonthValue?: string;
  calcYearLabel?: string;
  calcYearValue?: string;
  calcFootnote?: string;
}

// "$2,790" -> { prefix: "$", amount: 2790 }
function parseAmount(value: string) {
  const firstDigit = value.search(/[0-9]/);
  return {
    prefix: firstDigit === -1 ? '' : value.slice(0, firstDigit),
    amount: Number(value.replace(/[^0-9]/g, '')) || 0
  };
}

// Монтируется только когда анимация разрешена — при reduced-motion значение
// выводится статикой, поэтому здесь не нужен путь «без анимации»
function CountUp({ value }: { value: string }) {
  const { prefix, amount } = parseAmount(value);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let frame = 0;
    let startTime: number | null = null;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress * (2 - progress);
      setCount(Math.floor(eased * amount));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [amount]);

  return <span>{prefix}{count.toLocaleString('en-US')}</span>;
}

export default function RevenueCalc({ t }: { t: CalcCopy }) {
  const [countUp, setCountUp] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Конечные значения — состояние по умолчанию разметки: так карточка
  // выглядит и на сервере, и при prefers-reduced-motion, и без JS.
  // Анимация только отматывает трек в стартовое положение и отпускает.
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const track = trackRef.current;
    if (!track) return;
    track.classList.add('is-start');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        // Даём кадр на отрисовку стартовой ширины, иначе transition не сыграет
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            track.classList.remove('is-start');
            setCountUp(true);
          })
        );
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="calc" ref={ref}>
      <style jsx>{`
        .calc {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          min-width: 0;
        }

        .unit-label {
          margin: 0 0 1.1rem 0;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${T.muted};
        }

        /* Место сверху занимает отметка полной суммы, вынесенная над треком */
        .track-wrap {
          position: relative;
          padding-top: 30px;
        }

        /* Докуда доходила бы полоса без комиссии */
        .full-mark {
          position: absolute;
          right: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          pointer-events: none;
        }

        .full-mark-label {
          font-size: 11px;
          line-height: 1.2;
          font-weight: 500;
          white-space: nowrap;
          color: ${T.muted};
        }

        .full-mark-line {
          width: 0;
          height: 12px;
          margin-top: 4px;
          border-right: 1px dashed rgba(255, 255, 255, 0.25);
        }

        .track {
          display: flex;
          height: 40px;
          border-radius: 8px;
          overflow: hidden;
        }

        .seg {
          display: flex;
          align-items: center;
          height: 100%;
          min-width: 0;
          box-sizing: border-box;
          font-size: 12.5px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          transition: width 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Заполненная часть — главный цветовой акцент карточки, сплошная заливка */
        .seg-keep {
          width: 83%;
          justify-content: flex-start;
          padding-left: 12px;
          border-radius: 8px 0 0 8px;
          background: linear-gradient(100deg, #6EE7A8, #5BB8F0);
          color: #06210F;
        }

        /* Хвост — штриховка на нейтральном фоне, без тревожного цвета */
        .seg-lost {
          width: 17%;
          justify-content: center;
          border-radius: 0 8px 8px 0;
          background-color: rgba(255, 255, 255, 0.02);
          background-image: repeating-linear-gradient(
            115deg,
            rgba(255, 255, 255, 0.06) 0 5px,
            transparent 5px 10px
          );
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-left: none;
          color: #868C95;
        }

        .totals {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.25rem;
          padding-top: 1.1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .total-label {
          margin: 0 0 0.3rem 0;
          font-size: 0.72rem;
          font-weight: 600;
          color: ${T.sub};
        }

        .total-value {
          font-size: clamp(26px, 5vw, 34px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          background: linear-gradient(100deg, ${T.mint}, ${T.sky});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Сноска держится в одну строку на всех ширинах вплоть до 320px */
        .footnote {
          margin: 1.1rem 0 0 0;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: clamp(8.5px, 2.6vw, 11.5px);
          line-height: 1.5;
          font-weight: 500;
          color: ${T.muted};
          white-space: nowrap;
        }

        /* Стартовое положение анимации: вся сумма ещё у объекта */
        .track.is-start .seg-keep {
          width: 100%;
        }

        .track.is-start .seg-lost {
          width: 0%;
        }

        @media (prefers-reduced-motion: reduce) {
          .seg {
            transition: none;
          }
        }
      `}</style>

      <p className="unit-label">{t.calcUnitLabel}</p>

      <div className="track-wrap">
        <div className="full-mark" aria-hidden="true">
          <span className="full-mark-label">{t.calcFullMark}</span>
          <span className="full-mark-line" />
        </div>

        <div className="track" ref={trackRef}>
          <div className="seg seg-keep">{t.calcKeepInline}</div>
          <div className="seg seg-lost">{t.calcLossInline}</div>
        </div>
      </div>

      <div className="totals">
        <div>
          <p className="total-label">{t.calcMonthLabel}</p>
          <div className="total-value">
            {countUp
              ? <CountUp value={t.calcMonthValue || ''} />
              : t.calcMonthValue}
          </div>
        </div>
        <div>
          <p className="total-label">{t.calcYearLabel}</p>
          <div className="total-value">
            {countUp
              ? <CountUp value={t.calcYearValue || ''} />
              : t.calcYearValue}
          </div>
        </div>
      </div>

      <p className="footnote">{t.calcFootnote}</p>
    </div>
  );
}
