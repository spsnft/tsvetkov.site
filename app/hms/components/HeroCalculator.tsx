'use client';

import React, { useMemo, useState } from 'react';
import { T } from '../../../src/theme/tokens';

// Единственный вопрос, на который отвечает калькулятор: сколько владелец
// отдаёт OTA в год. Без возврата, без окупаемости — это предмет
// бесплатного Revenue Check, страница не отдаёт его бесплатно.
const OCCUPANCY = 0.65;
const OTA_SHARE = 0.70;
const COMMISSION = 0.17;

// Курс зафиксирован константой — вынесен в одно место для лёгкой правки,
// без похода в API
const THB_PER_USD = 36;

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
}

export default function HeroCalculator({ t = {} }: { t?: HeroCalculatorCopy }) {
  const [units, setUnits] = useState(UNITS_DEFAULT);
  const [adr, setAdr] = useState(ADR_DEFAULT);

  const { annualUsd, annualThb, monthlyThb } = useMemo(() => {
    const usd = units * 365 * OCCUPANCY * OTA_SHARE * adr * COMMISSION;
    const thbRaw = usd * THB_PER_USD;
    return {
      annualUsd: roundTo(usd, 100),
      annualThb: roundTo(thbRaw, 10000),
      monthlyThb: roundTo(thbRaw / 12, 1000),
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

        .output-label {
          margin: 0 0 0.5rem 0;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${T.muted};
        }

        .output-thb {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 800;
          font-size: clamp(1.7rem, 4.2vw, 2.35rem);
          letter-spacing: -0.02em;
          line-height: 1.1;
          background: linear-gradient(100deg, ${T.mint}, ${T.sky});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: calc-pop 180ms ease-out;
        }
        .output-thb .unit {
          font-size: 0.5em;
          font-weight: 600;
          -webkit-text-fill-color: ${T.sub};
        }

        .output-usd {
          margin-top: 0.3rem;
          font-size: 0.98rem;
          font-weight: 600;
          color: ${T.sub};
        }

        .output-month {
          margin-top: 0.65rem;
          font-size: 0.85rem;
          font-weight: 500;
          color: ${T.muted};
        }
        .output-month .unit {
          font-weight: 500;
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
          .output-thb {
            animation: none;
          }
        }

        .assumptions {
          margin: 1rem 0 0 0;
          font-size: 0.74rem;
          line-height: 1.5;
          color: ${T.muted};
          text-wrap: pretty;
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
        <p className="output-label">{t.calcOutputLabel || 'You pay OTAs'}</p>
        <div className="output-thb" key={annualThb}>
          ฿{fmt(annualThb)} <span className="unit">{t.calcYearLabel || '/ year'}</span>
        </div>
        <div className="output-usd">≈ ${fmt(annualUsd)}</div>
        <div className="output-month">
          ฿{fmt(monthlyThb)} <span className="unit">{t.calcMonthLabel || '/ month'}</span>
        </div>
      </div>

      <p className="assumptions">
        {t.calcAssumptions ||
          'Based on 65% occupancy, 70% of bookings via OTA, 17% average commission.'}
      </p>
    </div>
  );
}
