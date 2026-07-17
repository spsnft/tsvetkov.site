'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

function RollingCounter({ start, end, duration, decimals = 0, suffix = '', isVisible }: { 
  start: number; 
  end: number; 
  duration: number; 
  decimals?: number;
  suffix?: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState<string>(start.toFixed(decimals));

  useEffect(() => {
    if (!isVisible) {
      setCount(start.toFixed(decimals));
      return;
    }

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);
      
      const current = start + easeProgress * (end - start);
      setCount(current.toFixed(decimals));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration, decimals]);

  return <span style={{ fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>{count}{suffix}</span>;
}

interface BentoItem {
  pain: string;
  counterSuffix: string;
  fixText: string;
  subText: string;
  uiType: string;
}

interface BentoGridProps {
  t: {
    bentoTitlePrefix: string;
    bentoTitleAccentRed: string;
    bentoTitleMiddle: string;
    bentoTitleAccentGreen: string;
    bentoTitleSuffix: string;
    bentoItems: BentoItem[];
  };
}

export default function BentoGrid({ t }: BentoGridProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCounterLimits = (uiType: string) => {
    switch (uiType) {
      case 'sync': return { start: 24, end: 1 };
      case 'revenue': return { start: 20, end: 100 };
      case 'traffic': return { start: 0, end: 10 };
      default: return { start: 0, end: 0 };
    }
  };

  const renderBentoVisual = (uiType: string) => {
    switch (uiType) {
      case 'sync':
        return (
          <svg viewBox="0 0 100 40" style={{ width: '100%', height: '40px', color: '#00E599', opacity: 0.25 }}>
            <rect x="0" y="5" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="28" y="5" width="20" height="12" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1" />
            <rect x="56" y="5" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
            <rect x="84" y="5" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M10 24 L90 24" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="38" cy="11" r="1.5" fill="#0b0b0d" />
          </svg>
        );
      case 'revenue':
        return (
          <svg viewBox="0 0 100 40" style={{ width: '100%', height: '40px', color: '#00E599', opacity: 0.25 }}>
            <path d="M5 20 Q 25 5, 50 20 T 95 20" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="20" r="3" fill="currentColor" />
            <line x1="50" y1="20" x2="50" y2="38" stroke="currentColor" strokeWidth="0.75" strokeDasharray="1 2" />
          </svg>
        );
      case 'traffic':
        return (
          <svg viewBox="0 0 100 40" style={{ width: '100%', height: '40px', color: '#00E599', opacity: 0.25 }}>
            <path d="M5 35 L 25 30 L 45 20 L 65 25 L 95 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="95" cy="5" r="2.5" fill="currentColor" />
            <path d="M5 35 L 25 30 L 45 20 L 65 25 L 95 5 L 95 35 Z" fill="cyan" opacity="0.05" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} style={{ padding: '3rem 0', position: 'relative' }}>
      <style jsx>{`
        @media (max-width: 992px) {
          .bento-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.3, color: '#fff' }}>
        {t.bentoTitlePrefix}
        <span style={{ color: '#FF6B6B' }}>{t.bentoTitleAccentRed}</span>
        {t.bentoTitleMiddle}
        <span style={{ color: '#00E599' }}>{t.bentoTitleAccentGreen}</span>
        {t.bentoTitleSuffix}
      </h2>
      
      <div className="bento-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
        {t.bentoItems.map((tab, idx) => {
          const limits = getCounterLimits(tab.uiType);
          return (
            <div 
              key={idx}
              style={{ 
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                backgroundColor: T.bg1,
                border: `1px solid ${T.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                minHeight: '310px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#888888', textDecoration: 'line-through', textDecorationColor: 'rgba(255, 107, 107, 0.4)' }}>
                {tab.pain}
              </div>

              <div style={{ color: '#00E599', fontSize: '1.4rem', fontWeight: 800, lineHeight: 1 }}>
                ↓
              </div>

              <div style={{ marginTop: 'auto', marginBottom: '0.5rem' }}>
                {renderBentoVisual(tab.uiType)}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 }}>
                  <span style={{ color: '#00E599', marginRight: '0.3rem' }}>
                    <RollingCounter 
                      start={limits.start} 
                      end={limits.end} 
                      duration={1300} 
                      decimals={0} 
                      suffix={tab.counterSuffix} 
                      isVisible={isVisible} 
                    />
                  </span>
                  {tab.fixText}
                </h3>
                
                <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  {tab.subText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
