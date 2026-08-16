'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

export interface CalcCopy {
  calcUnitLabel?: string;
  calcKeepInline?: string;
  calcLossInline?: string;
  calcFullMark?: string;
  calcPayLabel?: string;
  calcMonthValue?: string;
  calcYearValue?: string;
  calcRecoverLabel?: string;
  calcRecoverValue?: string;
  calcRecoverHint?: string;
  calcRecoverHintAria?: string;
  calcFootnote?: string;
}

// "$2,790/mo" -> { prefix: "$", amount: 2790, suffix: "/mo" }
function parseAmount(value: string) {
  const match = /^([^0-9]*)([0-9][0-9,.\s ]*)(.*)$/.exec(value);
  if (!match) return { prefix: value, amount: 0, suffix: '' };
  return {
    prefix: match[1],
    amount: Number(match[2].replace(/[^0-9]/g, '')) || 0,
    suffix: match[3]
  };
}

// Монтируется только когда анимация разрешена — при reduced-motion значение
// выводится статикой, поэтому здесь не нужен путь «без анимации»
function CountUp({ value }: { value: string }) {
  const { prefix, amount, suffix } = parseAmount(value);
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

  return <span>{prefix}{count.toLocaleString('en-US')}{suffix}</span>;
}

export default function RevenueCalc({ t }: { t: CalcCopy }) {
  const [countUp, setCountUp] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  // Подсказка открывается по тапу/клику, а не по ховеру: на телефоне ховера
  // нет. Закрывается тапом мимо и Escape
  useEffect(() => {
    if (!hintOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!hintRef.current?.contains(event.target as Node)) setHintOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setHintOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [hintOpen]);

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

        /* Лейбл полоски разбивки, не отдельный заголовок — прижат к треку */
        .unit-label {
          margin: 0 0 0.5rem 0;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0;
          text-transform: none;
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

        /* Суммы не переносятся, поэтому колонка обязана уметь сжиматься:
           иначе на 320px её минимальная ширина растягивает всю карточку */
        .totals > div {
          min-width: 0;
        }

        /* Обе подписи держат две строки: правая длиннее левой, и без общей
           высоты суммы в колонках встают на разных уровнях */
        .total-label {
          margin: 0 0 0.3rem 0;
          min-height: 2.7em;
          font-size: 0.72rem;
          font-weight: 600;
          line-height: 1.35;
          color: ${T.sub};
          text-wrap: pretty;
        }

        .total-value {
          font-size: clamp(18px, 6vw, 32px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          white-space: nowrap;
          background: linear-gradient(100deg, ${T.mint}, ${T.sky});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Годовая сумма — та же величина, шаг мельче: главная цифра одна */
        .total-value.year {
          font-size: clamp(14px, 4.2vw, 22px);
          margin-top: 0.35rem;
        }

        /* Возврат — уточнение, а не главная цифра: без градиента и мельче */
        .recover {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .recover-value {
          font-size: clamp(14px, 4.2vw, 22px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.01em;
          white-space: nowrap;
          color: ${T.body};
        }

        /* Обёртка подсказки: кнопка визуально 18px, тап-зона — 44×44 */
        .hint {
          position: relative;
          flex: none;
          margin: -13px;
        }

        .hint-btn {
          width: 44px;
          height: 44px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: ${T.muted};
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: color 0.2s ease;
        }

        .hint-btn:hover,
        .hint-btn[aria-expanded='true'] {
          color: ${T.accent};
        }

        .hint-btn:focus-visible {
          outline: 2px solid ${T.accent};
          outline-offset: -10px;
          border-radius: 50%;
        }

        .hint-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 1px solid currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          font-style: italic;
          line-height: 1;
        }

        /* Всплывает над иконкой: под карточкой уже нет места на мобильном */
        .hint-pop {
          position: absolute;
          right: 0;
          bottom: calc(100% - 8px);
          z-index: 30;
          width: 268px;
          max-width: calc(100vw - 3rem);
          padding: 0.85rem 0.9rem;
          border-radius: 12px;
          background: #14171C;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.55);
          font-size: 12.5px;
          line-height: 1.5;
          font-weight: 400;
          color: ${T.body};
          text-align: left;
          text-wrap: pretty;
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

        /* Только Hero-версия карточки (bento, ≥1025px) видна на этой ширине —
           карточка внутри IndustryProof скрыта своим же родителем на
           ≥1025px, так что этот брейкпоинт не задевает мобильный стек */
        @media (min-width: 1025px) {
          .calc {
            display: grid;
            /* Трек нуждается в больше места, чем колонка сумм: у сумм текст
               короче и переносится, а «−$17» в узкой колонке обрезается */
            grid-template-columns: 1.4fr 1fr;
            grid-template-areas:
              "label    totals"
              "track    totals"
              "footnote footnote";
            column-gap: 2rem;
            align-items: start;
          }

          .unit-label {
            grid-area: label;
          }

          .track-wrap {
            grid-area: track;
          }

          .seg {
            font-size: 11px;
          }

          .seg-keep {
            padding-left: 10px;
          }

          .totals {
            grid-area: totals;
            grid-template-columns: 1fr;
            gap: 1.1rem;
            margin-top: 0;
            padding-top: 0;
            border-top: none;
          }

          .total-label {
            min-height: 0;
          }

          /* Одна узкая колонка вместо половины неразделённой карточки —
             $2,790/mo обрезался при базовом clamp(…, 32px) */
          .total-value {
            font-size: 24px;
          }

          .footnote {
            grid-area: footnote;
            margin-top: 1.4rem;
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
          <p className="total-label">{t.calcPayLabel}</p>
          <div className="total-value">
            {countUp
              ? <CountUp value={t.calcMonthValue || ''} />
              : t.calcMonthValue}
          </div>
          <div className="total-value year">{t.calcYearValue}</div>
        </div>

        <div>
          <p className="total-label">{t.calcRecoverLabel}</p>
          <div className="recover">
            <span className="recover-value">{t.calcRecoverValue}</span>

            {t.calcRecoverHint && (
              <div className="hint" ref={hintRef}>
                <button
                  type="button"
                  className="hint-btn"
                  aria-expanded={hintOpen}
                  aria-label={t.calcRecoverHintAria || 'How we get this number'}
                  onClick={() => setHintOpen((open) => !open)}
                >
                  <span className="hint-icon" aria-hidden="true">i</span>
                </button>

                {hintOpen && (
                  <div className="hint-pop" role="tooltip">
                    {t.calcRecoverHint}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="footnote">{t.calcFootnote}</p>
    </div>
  );
}
