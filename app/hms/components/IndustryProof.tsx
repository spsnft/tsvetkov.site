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
    proofTitle: string;
    proofMetrics: MetricItem[];
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

  if (!t?.proofMetrics) return null;

  return (
    <section ref={sectionRef} className="proof-section">
      <style jsx>{`
        .proof-section {
          width: 100%;
          background-color: transparent;
          padding: 5rem 1.5rem 0 1.5rem; /* 80px сверху до заголовка */
        }

        .proof-header {
          text-align: center;
          margin-bottom: 3rem; /* 48px до сетки плашек */
        }

        .proof-title {
          font-size: 2.4rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
        }

        .proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          max-width: 1280px;
          margin: 0 auto;
          border-top: 1px solid ${T.border};
        }
        
        .proof-col {
          padding: 3.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: center;
          align-items: center;
        }

        .proof-col:not(:last-child) {
          border-right: 1px solid ${T.border};
        }
        
        .metric-number {
          font-size: clamp(2.4rem, 3.5vw, 3.2rem);
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
          font-size: 0.95rem;
          line-height: 1.4;
          margin: 0 auto;
          font-weight: 500;
          text-wrap: pretty;
          max-width: 220px;
        }

        @media (max-width: 1150px) {
          .proof-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .proof-col {
            padding: 3rem 1.5rem;
          }
          .proof-col:nth-child(odd) {
            border-right: 1px solid ${T.border};
          }
          .proof-col:nth-child(even) {
            border-right: none;
          }
          .proof-col:nth-child(1), .proof-col:nth-child(2) {
            border-bottom: 1px solid ${T.border};
          }
        }

        @media (max-width: 576px) {
          .proof-grid {
            grid-template-columns: 1fr;
          }
          .proof-col:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid ${T.border};
          }
          .proof-col {
            padding: 2.5rem 1rem;
          }
        }
      `}</style>

      <div className="proof-header">
        <h2 className="proof-title">
          {t.proofTitle}
        </h2>
      </div>

      <div className="proof-grid">
        {t.proofMetrics.map((item, idx) => (
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
    </section>
  );
}
