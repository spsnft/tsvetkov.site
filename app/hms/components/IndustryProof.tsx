'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

interface OtaCostRow {
  value: string;
  unit: string;
  detail: string;
}

interface IndustryProofProps {
  t: {
    otaCostBadge?: string;
    otaCostRows?: OtaCostRow[];
    otaCostCaption?: string;
  };
}

// "$18,000" -> { prefix: "$", amount: 18000 }
function parseAmount(value: string) {
  const digits = value.replace(/[^0-9]/g, '');
  const prefix = value.slice(0, value.search(/[0-9]/) === -1 ? 0 : value.search(/[0-9]/));
  return { prefix, amount: Number(digits) || 0 };
}

function CostCounter({ value, duration, isVisible }: {
  value: string;
  duration: number;
  isVisible: boolean;
}) {
  const { prefix, amount } = parseAmount(value);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);

      setCount(Math.floor(easeProgress * amount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, amount, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString('en-US')}
    </span>
  );
}

export default function IndustryProof({ t }: IndustryProofProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rows: OtaCostRow[] = t?.otaCostRows || [];

  if (rows.length === 0) return null;

  return (
    <section ref={sectionRef} className="proof-section">
      <style jsx>{`
        .proof-section {
          width: 100%;
          background-color: transparent;
          /* Верхний отступ оставляем от Hero, нижний полностью убираем для стыковки с Marquee */
          padding: 1.5rem 0 0 0;
        }

        /* СКРЫВАЕМ НА ПК (от 1025px) — там эти же цифры живут в карточке героя */
        @media (min-width: 1025px) {
          .proof-section {
            display: none !important;
          }
        }

        .proof-badge-row {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .proof-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: ${T.accent};
          background: ${T.accent08};
          padding: 0.35rem 0.75rem;
          border-radius: 20px;
          border: 1px solid ${T.accent25};
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background-color: ${T.accent};
          border-radius: 50%;
          box-shadow: 0 0 8px ${T.accent};
          flex-shrink: 0;
        }

        /* Три строки в столбец на всех разрешениях */
        .proof-grid {
          display: flex;
          flex-direction: column;
          width: 100%;
          border-top: 1px solid ${T.border};
          border-bottom: 1px solid ${T.border};
        }

        .proof-col {
          padding: 1.35rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          text-align: center;
          align-items: center;
          border-bottom: 1px solid ${T.border};
        }

        .proof-col:last-child {
          border-bottom: none;
        }

        .metric-number {
          font-size: clamp(2rem, 6vw, 2.6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          white-space: nowrap;
        }

        .metric-unit {
          color: ${T.sub};
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.3;
          margin: 0;
        }

        .metric-detail {
          color: ${T.muted};
          font-size: 0.75rem;
          line-height: 1.35;
          margin: 0;
          text-wrap: pretty;
          max-width: 320px;
        }

        .proof-caption {
          margin: 0.9rem 0 0;
          padding-bottom: 0.25rem;
          font-size: 0.72rem;
          line-height: 1.45;
          font-weight: 500;
          color: ${T.muted};
          text-align: center;
          text-wrap: pretty;
        }

        @media (max-width: 768px) {
          .proof-section {
            padding: 1rem 0 0 0;
          }
          .proof-col {
            padding: 1.15rem 0.5rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="proof-badge-row">
          <span className="proof-badge">
            <span className="pulse-dot" /> {t?.otaCostBadge}
          </span>
        </div>

        <div className="proof-grid">
          {rows.map((item, idx) => (
            <div key={idx} className="proof-col">
              <div className="metric-number">
                <CostCounter value={item.value} duration={1400} isVisible={isVisible} />
              </div>
              <p className="metric-unit">{item.unit}</p>
              <p className="metric-detail">{item.detail}</p>
            </div>
          ))}
        </div>
        <p className="proof-caption">{t?.otaCostCaption}</p>
      </div>
    </section>
  );
}
