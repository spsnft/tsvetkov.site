'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

export interface CalcCopy {
  calcUnitLabel?: string;
  calcDirectName?: string;
  calcDirectAmount?: string;
  calcDirectInner?: string;
  calcOtaName?: string;
  calcOtaAmount?: string;
  calcOtaKeep?: string;
  calcOtaLoss?: string;
  calcMonthLabel?: string;
  calcMonthValue?: string;
  calcYearLabel?: string;
  calcYearValue?: string;
  calcFootnote?: string;
}

// "$5,570" -> { prefix: "$", amount: 5570 }
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
  const [inView, setInView] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // prefers-reduced-motion: конечные значения показываем сразу, без count-up и роста баров
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setInView(true);
        if (!reduced) setAnimate(true);
        observer.disconnect();
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

        .bars {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bar-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
          font-size: 0.82rem;
          font-weight: 600;
          min-width: 0;
        }

        .bar-name {
          color: #CBD5E1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .bar-amount {
          font-weight: 700;
          flex-shrink: 0;
        }

        .bar-amount.keep {
          color: ${T.mint};
        }

        .bar-amount.lost {
          color: ${T.muted};
        }

        .track {
          display: flex;
          height: 34px;
          border-radius: 8px;
          overflow: hidden;
        }

        .seg {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-width: 0;
          box-sizing: border-box;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          transition: width 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .seg-keep {
          background: linear-gradient(100deg, rgba(110, 231, 168, 0.22), rgba(91, 184, 240, 0.22));
          border: 1px solid rgba(110, 231, 168, 0.3);
          color: ${T.mint};
        }

        .track-direct .seg-keep {
          border-radius: 8px;
          width: 100%;
        }

        .track-ota .seg-keep {
          border-radius: 8px 0 0 8px;
          border-right: none;
        }

        /* Потеря — штриховка на нейтральном сером, без тревожного цвета */
        .seg-lost {
          border-radius: 0 8px 8px 0;
          background-color: rgba(255, 255, 255, 0.05);
          background-image: repeating-linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.08) 0,
            rgba(255, 255, 255, 0.08) 3px,
            transparent 3px,
            transparent 7px
          );
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: ${T.sub};
          font-size: 0.68rem;
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

        .footnote {
          margin: 1.1rem 0 0 0;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.7rem;
          line-height: 1.5;
          font-weight: 500;
          color: ${T.muted};
          text-wrap: pretty;
        }

        @media (prefers-reduced-motion: reduce) {
          .seg {
            transition: none;
          }
        }

        @media (max-width: 480px) {
          .bar-head {
            font-size: 0.78rem;
          }
          .seg {
            font-size: 0.66rem;
          }
          .seg-lost {
            font-size: 0.62rem;
          }
        }
      `}</style>

      <p className="unit-label">{t.calcUnitLabel}</p>

      <div className="bars">
        <div>
          <div className="bar-head">
            <span className="bar-name">{t.calcDirectName}</span>
            <span className="bar-amount keep">{t.calcDirectAmount}</span>
          </div>
          <div className="track track-direct">
            <div className="seg seg-keep">{t.calcDirectInner}</div>
          </div>
        </div>

        <div>
          <div className="bar-head">
            <span className="bar-name">{t.calcOtaName}</span>
            <span className="bar-amount lost">{t.calcOtaAmount}</span>
          </div>
          <div className="track track-ota">
            <div className="seg seg-keep" style={{ width: animate || inView ? '83%' : '100%' }}>
              {t.calcOtaKeep}
            </div>
            <div className="seg seg-lost" style={{ width: animate || inView ? '17%' : '0%' }}>
              {t.calcOtaLoss}
            </div>
          </div>
        </div>
      </div>

      <div className="totals">
        <div>
          <p className="total-label">{t.calcMonthLabel}</p>
          <div className="total-value">
            {animate
              ? <CountUp value={t.calcMonthValue || ''} />
              : t.calcMonthValue}
          </div>
        </div>
        <div>
          <p className="total-label">{t.calcYearLabel}</p>
          <div className="total-value">
            {animate
              ? <CountUp value={t.calcYearValue || ''} />
              : t.calcYearValue}
          </div>
        </div>
      </div>

      <p className="footnote">{t.calcFootnote}</p>
    </div>
  );
}
