'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

interface MetricItem {
  endValue: number;
  prefix: string;
  suffix: string;
  label: string;
}

interface IndustryProofProps {
  t: {
    proofTitle?: string;
    proofMetrics?: MetricItem[];
    [key: string]: any;
  };
}

function ProofCounter({ end, duration, prefix, suffix, isVisible }: { 
  end: number; 
  duration: number; 
  prefix: string; 
  suffix: string; 
  isVisible: boolean; 
}) {
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
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span>
      {prefix}{count}{suffix}
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

  // Метрики по умолчанию, если в t не переданы
  const metrics = t?.proofMetrics || [
    { endValue: 40, prefix: "+", suffix: "%", label: "Direct Revenue" },
    { endValue: 60, prefix: "+", suffix: "%", label: "Margin per Guest" },
    { endValue: 300, prefix: "+", suffix: "%", label: "Google Traffic" },
    { endValue: 35, prefix: "+", suffix: "%", label: "Repeat Bookings" },
  ];

  const title = t?.proofTitle || "System Impact";

  return (
    <section ref={sectionRef} className="proof-section">
      <style jsx>{`
        .proof-section {
          width: 100%;
          background-color: transparent;
          padding: 0 0 3.5rem 0; 
        }

        /* СКРЫВАЕМ НА ПК (на экранах от 1025px), так как там отображается Bento-дашборд в Hero */
        @media (min-width: 1025px) {
          .proof-section {
            display: none !important;
          }
        }

        .proof-header {
          text-align: center;
          margin-bottom: 2.5rem; 
        }

        .proof-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
        }

        /* --- ПЛАНШЕТЫ (по умолчанию для видимого блока) - Сетка 4x1 --- */
        .proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          width: 100%;
          border-top: 1px solid ${T.border};
          border-bottom: 1px solid ${T.border};
        }
        
        .proof-col {
          padding: 2.5rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: center;
          align-items: center;
          border-right: 1px solid ${T.border};
        }

        .proof-col:last-child {
          border-right: none;
        }
        
        .metric-number {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 700; 
          line-height: 1.1; 
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          white-space: nowrap;
        }

        .metric-label {
          color: ${T.sub};
          font-size: 0.85rem;
          line-height: 1.3;
          margin: 0 auto;
          font-weight: 500;
          text-wrap: pretty;
          max-width: 180px;
        }

        /* --- МОБИЛЬНЫЕ УСТРОЙСТВА (до 768px) - Сетка 2x2 --- */
        @media (max-width: 768px) {
          .proof-section {
            padding-bottom: 2.5rem;
          }
          .proof-header {
            margin-bottom: 2rem;
          }
          .proof-title {
            font-size: 1.6rem;
          }
          
          .proof-grid {
            grid-template-columns: repeat(2, 1fr); 
            border-bottom: none; /* Убираем общую рамку, передаем ее ячейкам */
          }
          
          .proof-col {
            padding: 1.8rem 0.5rem;
            border-right: none; /* Сбрасываем рамки от 4 колонок */
          }

          /* Восстанавливаем рамки специально для сетки 2x2 */
          .proof-col:nth-child(odd) {
            border-right: 1px solid ${T.border};
          }
          .proof-col:nth-child(1), .proof-col:nth-child(2) {
            border-bottom: 1px solid ${T.border};
          }
          .proof-col:nth-child(3), .proof-col:nth-child(4) {
            border-bottom: 1px solid ${T.border};
          }
        }
      `}</style>

      <div className="container">
        <div className="proof-header">
          <h2 className="proof-title">
            {title}
          </h2>
        </div>

        <div className="proof-grid">
          {metrics.map((item, idx) => (
            <div key={idx} className="proof-col">
              <div className="metric-number">
                <ProofCounter 
                  end={item.endValue} 
                  duration={1400} 
                  prefix={item.prefix} 
                  suffix={item.suffix} 
                  isVisible={isVisible} 
                />
              </div>
              <p className="metric-label">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
