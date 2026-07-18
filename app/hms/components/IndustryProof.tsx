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
    <span style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', fontWeight: 700 }}>
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
    <section ref={sectionRef} style={{ width: '100%', borderBottom: `1px solid ${T.border}`, backgroundColor: 'transparent' }}>
      <style jsx>{`
        .proof-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .proof-col {
          padding: 4.5rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: left;
        }
        .proof-col:not(:last-child) {
          border-right: 1px solid ${T.border};
        }
        
        .metric-label {
          color: ${T.sub};
          font-size: 0.9rem;
          line-height: 1.4;
          margin: 0;
          font-weight: 500;
          text-wrap: pretty;
        }

        @media (max-width: 1150px) {
          .proof-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .proof-col {
            padding: 3.5rem 2.5rem !important;
          }
          .proof-col:nth-child(odd) {
            border-right: 1px solid ${T.border} !important;
          }
          .proof-col:nth-child(even) {
            border-right: none !important;
          }
          .proof-col:nth-child(1), .proof-col:nth-child(2) {
            border-bottom: 1px solid ${T.border};
          }
        }
        @media (max-width: 576px) {
          .proof-grid {
            grid-template-columns: 1fr !important;
          }
          .proof-col:not(:last-child) {
            border-right: none !important;
            border-bottom: 1px solid ${T.border} !important;
          }
          .proof-col {
            padding: 2.5rem 1.5rem !important;
          }
        }
      `}</style>

      <div style={{ padding: '5rem 1.5rem 4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: 0, lineHeight: 1.2 }}>
          {t.proofTitle}
        </h2>
      </div>

      <div className="proof-grid" style={{ borderTop: `1px solid ${T.border}` }}>
        {t.proofMetrics.map((item, idx) => (
          <div key={idx} className="proof-col">
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.03em' }}>
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
