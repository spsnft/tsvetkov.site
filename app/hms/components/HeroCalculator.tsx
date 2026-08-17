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
  calcRecoveryPctLabel?: string;
  calcRecoveryNote?: string;
  calcRecoveryTooltip?: string;
}

export default function HeroCalculator({ t = {} }: { t?: HeroCalculatorCopy }) {
  const [units, setUnits] = useState(UNITS_DEFAULT);
  const [adr, setAdr] = useState(ADR_DEFAULT);
  const [infoOpen, setInfoOpen] = useState(false);
  const tooltipId = useId();
  const infoRef = useRef<HTMLDivElement>(null);

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

  // Процент — сама константа, а не отношение двух независимо округлённых
  // сумм: иначе округление могло бы показать «19%» или «21%» вместо
  // заявленной ставки
  const recoveryPct = Math.round(YEAR_ONE_RECOVERY_RATE * 100);

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

        .output-head {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.15rem;
          margin-bottom: 0.9rem;
        }

        .output-label {
          margin: 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${T.muted};
        }

        .info-btn {
          width: 44px;
          height: 44px;
          margin: -14px -14px -14px -8px;
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

        .tooltip {
          position: absolute;
          top: calc(100% + 4px);
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

        .tooltip p {
          margin: 0;
        }

        .tooltip p + p {
          margin-top: 0.6rem;
        }

        .output-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .output-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .output-col.second {
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          padding-left: 1.1rem;
          margin-left: 1.1rem;
        }

        .output-value {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(1.5rem, 4.5vw, 2rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: #ffffff;
          animation: calc-pop 180ms ease-out;
          white-space: nowrap;
        }

        .output-sublabel {
          margin-top: 0.4rem;
          font-size: 0.76rem;
          font-weight: 600;
          color: ${T.muted};
        }

        /* Уровень 2 — заметно меньше уровня 1, акцентный цвет: возврат,
           а не потеря. Годовые, той же единицей, что и «You pay OTAs» —
           не смешивать с /mo, иначе аргумент читается как «33 тысячи
           против пятисот» (см. ТЗ №2, п. 3.4) */
        .recovery {
          margin-top: 1.1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .recovery-label {
          margin: 0 0 0.35rem 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: ${T.muted};
        }

        .recovery-value {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(1.1rem, 3.2vw, 1.35rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
          color: ${T.accent};
          animation: calc-pop 180ms ease-out;
        }

        .recovery-pct {
          margin: 0.3rem 0 0 0;
          font-size: 0.74rem;
          font-weight: 600;
          color: ${T.accent};
          opacity: 0.75;
        }

        /* Уровень 3 — статичная микро-строка, самая тихая на карточке */
        .recovery-note {
          margin: 0.75rem 0 0 0;
          font-size: 0.7rem;
          line-height: 1.45;
          color: ${T.muted};
          opacity: 0.75;
          text-wrap: pretty;
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
        <div className="output-head" ref={infoRef}>
          <p className="output-label">{t.calcOutputLabel || 'You pay OTAs'}</p>
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
          {infoOpen && (
            <div className="tooltip" id={tooltipId} role="tooltip">
              <p>
                {t.calcAssumptions ||
                  'Based on 65% occupancy, 70% of bookings via OTA, 17% average commission.'}
              </p>
              <p>
                {t.calcRecoveryTooltip ||
                  'Assumes about 20% of your OTA volume moves to direct bookings in year one — a conservative figure for a property starting with no direct channel. The shift builds over time, so year one is the slowest.'}
              </p>
            </div>
          )}
        </div>

        <div className="output-grid">
          <div className="output-col">
            <div className="output-value" key={`y-${annualUsd}`}>
              ${fmt(annualUsd)}
            </div>
            <div className="output-sublabel">{t.calcYearLabel || 'per year'}</div>
          </div>
          <div className="output-col second">
            <div className="output-value" key={`m-${monthlyUsd}`}>
              ${fmt(monthlyUsd)}
            </div>
            <div className="output-sublabel">{t.calcMonthLabel || 'per month'}</div>
          </div>
        </div>

        <div className="recovery">
          <p className="recovery-label">{t.calcRecoveryLabel || 'You keep back in year one'}</p>
          <div className="recovery-value" key={`r-${recoveryUsd}`}>
            ~${fmt(recoveryUsd)}
          </div>
          <p className="recovery-pct">
            {(t.calcRecoveryPctLabel || '≈ {pct}% of what you pay now').replace(
              '{pct}',
              String(recoveryPct)
            )}
          </p>
        </div>

        <p className="recovery-note">
          {t.calcRecoveryNote ||
            'Year two and beyond, 30–40% is realistic once direct traffic builds.'}
        </p>
      </div>
    </div>
  );
}
