'use client';

import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { T } from '../../../src/theme/tokens';

// Единственный вопрос, на который отвечает калькулятор: сколько владелец
// отдаёт OTA в год. Без возврата, без окупаемости — это предмет
// бесплатного Revenue Check, страница не отдаёт его бесплатно.
const OCCUPANCY = 0.65;
const OTA_SHARE = 0.70;
const COMMISSION = 0.17;

// Доля OTA-объёма, которая реально переходит на прямой канал в первый год —
// консервативная оценка для объекта, стартующего без прямого канала. Будет
// уточняться по факту первых клиентов (см. ТЗ №2, п. 3.3)
const YEAR_ONE_RECOVERY_RATE = 0.20;

const UNITS_MIN = 1;
const UNITS_MAX = 60;
const UNITS_DEFAULT = 12;

const ADR_MIN = 30;
const ADR_MAX = 500;
const ADR_STEP = 5;
const ADR_DEFAULT = 100;

function roundTo(value: number, step: number) {
  return Math.round(value / step) * step;
}

function clamp(value: number, min: number, max: number) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

const fmt = (n: number) => n.toLocaleString('en-US');

export interface HeroCalculatorCopy {
  calcUnitsLabel?: string;
  calcAdrLabel?: string;
  calcOutputLabel?: string;
  calcYearLabel?: string;
  calcMonthLabel?: string;
  calcAssumptions?: string;
  calcAssumptionsAria?: string;
  calcRecoveryLabel?: string;
}

export default function HeroCalculator({ t = {} }: { t?: HeroCalculatorCopy }) {
  const [units, setUnits] = useState(UNITS_DEFAULT);
  const [adr, setAdr] = useState(ADR_DEFAULT);
  const [infoOpen, setInfoOpen] = useState(false);
  // Хавер работает только там, где он реально есть — на тач-устройствах
  // (hover: none) иконка живёт исключительно по тапу (см. ТЗ №4, п. 2.5).
  // Начальное значение читается лениво в инициализаторе (не в эффекте) —
  // isTouch не влияет на разметку, только на то, вешать ли hover-обработчики,
  // так что расхождение между SSR и клиентом здесь не создаёт мисматча
  const [isTouch, setIsTouch] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(hover: none)').matches : false
  );
  const tooltipId = useId();
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none)');
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!infoOpen) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (infoRef.current && !infoRef.current.contains(e.target as Node)) {
        setInfoOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [infoOpen]);

  const { annualUsd, monthlyUsd, recoveryUsd } = useMemo(() => {
    const usd = units * 365 * OCCUPANCY * OTA_SHARE * adr * COMMISSION;
    return {
      annualUsd: roundTo(usd, 100),
      monthlyUsd: roundTo(usd / 12, 25),
      recoveryUsd: roundTo(usd * YEAR_ONE_RECOVERY_RATE, 100),
    };
  }, [units, adr]);

  const unitsPct = ((units - UNITS_MIN) / (UNITS_MAX - UNITS_MIN)) * 100;
  const adrPct = ((adr - ADR_MIN) / (ADR_MAX - ADR_MIN)) * 100;

  const trackStyle = (pct: number): React.CSSProperties => ({
    background: `linear-gradient(to right, ${T.accent} 0%, ${T.accent} ${pct}%, rgba(255,255,255,0.12) ${pct}%, rgba(255,255,255,0.12) 100%)`,
  });

  return (
    <div className="hero-calc">
      <style jsx>{`
        .hero-calc {
          width: 100%;
          background: rgba(12, 14, 20, 0.85);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.75rem 1.75rem 1.5rem 1.75rem;
          box-shadow:
            0 30px 60px rgba(0, 0, 0, 0.5),
            inset 0 1px 1px rgba(255, 255, 255, 0.12);
          box-sizing: border-box;
          text-align: left;
        }

        .fields {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .field-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.55rem;
        }

        .field-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: ${T.sub};
        }

        .field-value {
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: #ffffff;
          flex-shrink: 0;
        }

        .field-value :global(input) {
          width: 3.2ch;
          background: none;
          border: none;
          outline: none;
          color: #ffffff;
          font: inherit;
          text-align: right;
          padding: 0;
          -moz-appearance: textfield;
        }
        .field-value :global(input::-webkit-outer-spin-button),
        .field-value :global(input::-webkit-inner-spin-button) {
          -webkit-appearance: none;
          margin: 0;
        }

        .slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          outline: none;
          cursor: pointer;
          display: block;
        }
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${T.accent}, ${T.acc2});
          border: 2px solid #0a0a0c;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${T.accent}, ${T.acc2});
          border: 2px solid #0a0a0c;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
          cursor: pointer;
        }
        .slider::-moz-range-track {
          height: 6px;
          border-radius: 999px;
          background: transparent;
        }

        .output {
          margin-top: 1.5rem;
          padding-top: 1.35rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* Обёртка нужна, чтобы (a) абсолютно спозиционированная подсказка
           на десктопе якорилась на весь ряд, а не только на одну группу,
           и (b) mouseleave закрывал её только когда курсор реально ушёл
           за пределы ряда+подсказки, а не при переходе с ряда на подсказку */
        .output-row-wrap {
          position: relative;
        }

        /* CSS grid, две равные колонки на любой ширине — сетка никогда не
           схлопывается в одну колонку, переносится только содержимое
           внутри колонки (см. ТЗ №6, п. 1.2/1.3) */
        .output-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: stretch;
          gap: 1.25rem;
        }

        .output-group {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* Разделитель между колонками — вертикальный hairline на всех
           размерах экрана, без брейкпоинта, меняющего его ориентацию
           (см. ТЗ №6, п. 1.2) */
        .output-group.keep {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding-left: 1.25rem;
        }

        /* Колонка растянута на всю высоту ряда (align-items: stretch), а
           value-block прижат книзу margin-top: auto — подписи обеих
           колонок оказываются на общей нижней линии независимо от того,
           сколько строк занял лейбл сверху (см. ТЗ №6, п. 1.5) */
        .value-block {
          margin-top: auto;
        }

        .output-value-row {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          column-gap: 0.35em;
        }

        /* Оба лейбла одного стиля и кегля — «you pay» / «you keep» читаются
           как одно предложение (см. ТЗ №4, п. 2.3) */
        .group-label {
          margin: 0 0 0.55rem 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${T.muted};
        }

        .group-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.4rem;
        }

        .group-label-row .group-label {
          margin: 0;
        }

        /* Одна общая иконка на весь ряд — справа от группы «you keep»,
           которая и стоит крайней справа (см. ТЗ №4, п. 2.5) */
        .info-btn {
          width: 32px;
          height: 32px;
          margin: -8px -8px -8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 0;
          color: ${T.muted};
          cursor: pointer;
          flex-shrink: 0;
        }
        .info-btn:hover,
        .info-btn[aria-expanded='true'] {
          color: ${T.sub};
        }
        .info-btn :global(svg) {
          width: 15px;
          height: 15px;
          display: block;
        }

        /* Десктоп: плавающая подсказка под всем рядом, как раньше.
           Тач: панель в потоке, а не поверх контента — плавающий тултип на
           ховере на тач-устройствах не открыть (см. ТЗ №4, п. 2.5) */
        .tooltip {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          right: 0;
          background: rgba(20, 22, 30, 0.98);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 0.75rem 0.9rem;
          font-size: 0.76rem;
          line-height: 1.5;
          color: ${T.sub};
          box-shadow: 0 16px 34px rgba(0, 0, 0, 0.55);
          z-index: 30;
          text-wrap: pretty;
        }

        @media (hover: none) {
          .tooltip {
            position: static;
            margin-top: 14px;
            box-shadow: none;
          }
        }

        .tooltip p {
          margin: 0;
        }

        /* Одна цифра на группу — месячная сумма ушла в строку-подпись
           (см. ТЗ №5, п. 1.2). clamp() держит семизначные суммы на
           предельных значениях слайдеров (60 юнитов × $500) в одной
           строке — минимум кегля заметно ниже прежнего на этот случай */
        .output-value {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(1.15rem, 4vw, 2rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #ffffff;
          animation: calc-pop 180ms ease-out;
          white-space: nowrap;
        }

        /* Правая группа — акцентный цвет (градиент), левая — обычный
           текст. Тот же кегль, что у $101,600 (см. ТЗ №4, п. 2.2/2.3) */
        .output-value.accent {
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* «per year» — мелкий и приглушённый, в одной строке с суммой;
           переносится под неё, если строке не хватает ширины
           (см. ТЗ №6, п. 1.3/1.4) */
        .output-unit {
          font-size: 0.76rem;
          font-weight: 600;
          color: ${T.muted};
          white-space: nowrap;
        }

        .output-sublabel {
          margin-top: 0.4rem;
          font-size: 0.76rem;
          font-weight: 600;
          color: ${T.muted};
          text-wrap: pretty;
        }

        /* Само число красится как основная сумма — читается как число, а
           не как часть служебной подписи. Кегль не меняется, меняется
           только цвет (см. ТЗ №6, п. 1.4) */
        .output-sublabel .figure {
          color: #ffffff;
        }

        @keyframes calc-pop {
          from {
            opacity: 0.45;
            transform: translateY(3px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .output-value {
            animation: none;
          }
        }

        @media (max-width: 480px) {
          .hero-calc {
            padding: 1.4rem 1.25rem 1.25rem 1.25rem;
          }
        }
      `}</style>

      <div className="fields">
        <div className="field">
          <div className="field-head">
            <label className="field-label" htmlFor="hc-units">
              {t.calcUnitsLabel || 'Rooms or villas'}
            </label>
            <span className="field-value">
              <input
                id="hc-units-num"
                type="number"
                inputMode="numeric"
                min={UNITS_MIN}
                max={UNITS_MAX}
                step={1}
                value={units}
                onChange={(e) => setUnits(clamp(Math.round(Number(e.target.value)), UNITS_MIN, UNITS_MAX))}
                aria-label={t.calcUnitsLabel || 'Rooms or villas'}
              />
            </span>
          </div>
          <input
            id="hc-units"
            className="slider"
            type="range"
            min={UNITS_MIN}
            max={UNITS_MAX}
            step={1}
            value={units}
            onChange={(e) => setUnits(Number(e.target.value))}
            style={trackStyle(unitsPct)}
          />
        </div>

        <div className="field">
          <div className="field-head">
            <label className="field-label" htmlFor="hc-adr">
              {t.calcAdrLabel || 'Average nightly rate'}
            </label>
            <span className="field-value">
              $
              <input
                id="hc-adr-num"
                type="number"
                inputMode="numeric"
                min={ADR_MIN}
                max={ADR_MAX}
                step={ADR_STEP}
                value={adr}
                onChange={(e) => setAdr(clamp(Math.round(Number(e.target.value)), ADR_MIN, ADR_MAX))}
                aria-label={t.calcAdrLabel || 'Average nightly rate'}
              />
            </span>
          </div>
          <input
            id="hc-adr"
            className="slider"
            type="range"
            min={ADR_MIN}
            max={ADR_MAX}
            step={ADR_STEP}
            value={adr}
            onChange={(e) => setAdr(Number(e.target.value))}
            style={trackStyle(adrPct)}
          />
        </div>
      </div>

      <div className="output">
        <div
          className="output-row-wrap"
          ref={infoRef}
          onMouseEnter={() => { if (!isTouch) setInfoOpen(true); }}
          onMouseLeave={() => { if (!isTouch) setInfoOpen(false); }}
        >
          <div className="output-row">
            <div className="output-group pay">
              <p className="group-label">{t.calcOutputLabel || 'You pay OTAs'}</p>
              <div className="value-block">
                <div className="output-value-row">
                  <span className="output-value" key={`y-${annualUsd}`}>
                    ${fmt(annualUsd)}
                  </span>
                  <span className="output-unit">{t.calcYearLabel || 'per year'}</span>
                </div>
                <div className="output-sublabel">
                  · <span className="figure">${fmt(monthlyUsd)}</span> {t.calcMonthLabel || 'per month'}
                </div>
              </div>
            </div>

            <div className="output-group keep">
              <div className="group-label-row">
                <p className="group-label">{t.calcRecoveryLabel || 'You keep — year one'}</p>
                <button
                  type="button"
                  className="info-btn"
                  aria-expanded={infoOpen}
                  aria-controls={tooltipId}
                  aria-label={t.calcAssumptionsAria || 'Show calculation assumptions'}
                  onClick={() => setInfoOpen((o) => !o)}
                >
                  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M10 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="10" cy="6.4" r="1" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="value-block">
                <div className="output-value-row">
                  <span className="output-value accent" key={`r-${recoveryUsd}`}>
                    ~${fmt(recoveryUsd)}
                  </span>
                  <span className="output-unit">{t.calcYearLabel || 'per year'}</span>
                </div>
              </div>
            </div>
          </div>

          {infoOpen && (
            <div className="tooltip" id={tooltipId} role="tooltip">
              <p>
                {t.calcAssumptions ||
                  'Based on 65% occupancy, 70% of bookings through OTAs, and 17% average commission. The first-year figure assumes about 20% of your OTA volume moves to direct — conservative for a property starting with no direct channel. Year two and beyond, 30–40% is realistic.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
