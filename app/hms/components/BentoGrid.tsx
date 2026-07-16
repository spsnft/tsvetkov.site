'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

// Вспомогательный компонент для плакающих цифр (эффект счетчика)
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

interface DeliverableItem {
  title: string;
  desc: string;
}

interface BentoGridProps {
  t: {
    bentoTitlePrefix: string;
    bentoTitleAccentRed: string;
    bentoTitleMiddle: string;
    bentoTitleAccentGreen: string;
    bentoTitleSuffix: string;
    bentoItems: BentoItem[];
    offerTitle: string;
    offerSub: string;
    deliverables: DeliverableItem[];
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

  return (
    <section ref={sectionRef} style={{ padding: '3rem 0', position: 'relative' }}>
      
      {/* Стили для адаптивности сеток на мобильных устройствах */}
      <style jsx>{`
        @media (max-width: 992px) {
          .bento-grid-container {
            grid-template-columns: 1fr !important;
          }
          .deliverables-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* ЗАГОЛОВОК СЕКЦИИ БОЛЕЙ */}
      <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.3, color: '#fff' }}>
        {t.bentoTitlePrefix}
        <span style={{ color: '#FF6B6B' }}>{t.bentoTitleAccentRed}</span>
        {t.bentoTitleMiddle}
        <span style={{ color: '#00E599' }}>{t.bentoTitleAccentGreen}</span>
        {t.bentoTitleSuffix}
      </h2>
      
      {/* СЕТКА BENTO (БОЛЬ -> РЕШЕНИЕ) */}
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
                gap: '1.5rem',
                minHeight: '260px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Боль (зачеркнутая) */}
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#888888', textDecoration: 'line-through', textDecorationColor: 'rgba(255, 107, 107, 0.4)' }}>
                {tab.pain}
              </div>

              {/* Стрелка перехода */}
              <div style={{ color: '#00E599', fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>
                ↓
              </div>

              {/* Решение и счетчик */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: 'auto' }}>
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

      {/* ЗАГОЛОВОК СЕКЦИИ ЭТАПОВ */}
      <div style={{ margin: '7rem 0 3.5rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em', color: '#fff' }}>{t.offerTitle}</h2>
        <p style={{ color: T.sub, margin: 0, fontSize: '1.1rem' }}>{t.offerSub}</p>
      </div>

      {/* СЕТКА ЭТАПОВ (DELIVERABLES) */}
      <div className="deliverables-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', zIndex: 1, position: 'relative' }}>
        {t.deliverables.map((item, idx) => (
          <div 
            key={idx}
            style={{
              padding: '2.5rem 2rem',
              borderRadius: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.01)',
              border: `1px solid ${T.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: T.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              0{idx + 1} / Phase
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', margin: 0 }}>
              {item.title}
            </h3>
            <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
