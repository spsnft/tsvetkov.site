'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../src/theme/tokens';
import { BentoItem, DeliverableItem } from './types';

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

interface B2BAccordionProps {
  tabs: BentoItem[];
  titlePrefix: string;
  titleAccentRed: string;
  titleMiddle: string;
  titleAccentGreen: string;
  titleSuffix: string;
  offerTitle: string;
  offerSub: string;
  deliverables: DeliverableItem[];
}

export default function B2BAccordion({ 
  tabs, 
  titlePrefix, 
  titleAccentRed, 
  titleMiddle, 
  titleAccentGreen, 
  titleSuffix,
  offerTitle,
  offerSub,
  deliverables
}: B2BAccordionProps) {
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
      <style jsx global>{`
        body {
          background-color: #0b0b0d !important;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(255, 107, 107, 0.015) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(0, 229, 153, 0.015) 0%, transparent 45%),
            linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
          background-attachment: fixed;
          position: relative;
        }
        body::after {
          content: "";
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          opacity: 0.012;
          pointer-events: none;
          z-index: 9999;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        @media (max-width: 992px) {
          .bento-grid-container {
            grid-template-columns: 1fr !important;
          }
          .deliverables-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
        {titlePrefix}
        <span style={{ color: '#FF6B6B' }}>{titleAccentRed}</span>
        {titleMiddle}
        <span style={{ color: '#00E599' }}>{titleAccentGreen}</span>
        {titleSuffix}
      </h2>
      
      <div className="bento-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', position: 'relative', zIndex: 1 }}>
        {tabs.map((tab, idx) => {
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
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#888888', textDecoration: 'line-through', textDecorationColor: 'rgba(255, 107, 107, 0.4)' }}>
                {tab.pain}
              </div>

              <div style={{ color: '#00E599', fontSize: '1.6rem', fontWeight: 800, lineHeight: 1 }}>
                ↓
              </div>

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

      <div style={{ margin: '7rem 0 3.5rem 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{offerTitle}</h2>
        <p style={{ color: T.sub, margin: 0, fontSize: '1.1rem' }}>{offerSub}</p>
      </div>

      <div className="deliverables-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', zIndex: 1, position: 'relative' }}>
        {deliverables.map((item, idx) => (
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
