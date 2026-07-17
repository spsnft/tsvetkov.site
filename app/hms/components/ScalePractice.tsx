'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../../src/theme/tokens';

interface ScaleItem {
  pain: string;
  startValue: number;
  endValue: number;
  suffix: string;
  fixText: string;
  desc: string;
}

interface ScalePracticeProps {
  t: {
    scaleTitle: string;
    scaleSub: string;
    scaleItems: ScaleItem[];
  };
}

// Хелпер для подсветки слов, обернутых в **. Подсвечивает чистым белым цветом
function formatDescription(text: string) {
  if (!text) return '';
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: '#fff', fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function RollingCounter({ start, end, duration, suffix, isVisible }: { 
  start: number; 
  end: number; 
  duration: number; 
  suffix: string; 
  isVisible: boolean;
}) {
  const [count, setCount] = useState<string>(start.toString());

  useEffect(() => {
    if (!isVisible) {
      setCount(start.toString());
      return;
    }

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);
      
      const current = start + easeProgress * (end - start);
      setCount(Math.round(current).toString());

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  return <span style={{ fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>{count}{suffix}</span>;
}

export default function ScalePractice({ t }: ScalePracticeProps) {
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

  if (!t?.scaleItems) return null;

  const renderVisual = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '75%', justifyContent: 'space-between' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: T.border }} />
              <div style={{ flex: 1, height: '1px', backgroundColor: T.border, position: 'relative' }}>
                <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: T.accent, top: '-2px', left: '30%', filter: `drop-shadow(0 0 4px ${T.accent})` }} />
              </div>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', border: `1px solid ${T.accent}`, backgroundColor: 'rgba(0, 255, 179, 0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 20px ${T.glow}` }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: T.accent }} />
              </div>
              <div style={{ flex: 1, height: '1px', backgroundColor: T.border, position: 'relative' }}>
                <div style={{ position: 'absolute', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: T.acc2, top: '-2px', right: '40%', filter: `drop-shadow(0 0 4px ${T.acc2})` }} />
              </div>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: T.border }} />
            </div>
          </div>
        );
      case 1:
        return (
          <div style={{ width: '100%', height: '100%', padding: '2rem 2.5rem 0 2.5rem', display: 'flex', alignItems: 'flex-end' }}>
            <svg width="100%" height="80%" viewBox="0 0 200 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
              <path d="M 0 95 Q 40 90 80 60 T 150 40 T 200 5" fill="none" stroke={T.accent} strokeWidth="1.5" style={{ filter: `drop-shadow(0 0 4px ${T.accent})` }} />
              <line x1="0" y1="50" x2="200" y2="50" stroke={T.border} strokeWidth="1" strokeDasharray="4,4" />
              <circle cx="200" cy="5" r="2.5" fill="#fff" />
            </svg>
          </div>
        );
      case 2:
        return (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', padding: '12px', border: `1px solid ${T.border}`, borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.01)' }}>
              {[...Array(8)].map((_, i) => (
                <div key={i} style={{ width: '24px', height: '16px', borderRadius: '3px', border: `1px solid ${i === 2 || i === 5 ? T.accent : T.border}`, backgroundColor: i === 2 || i === 5 ? 'rgba(0, 255, 179, 0.05)' : 'transparent' }} />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section ref={sectionRef} style={{ width: '100%', borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, backgroundColor: 'transparent', margin: '0' }}>
      <style jsx>{`
        .scale-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .scale-col {
          padding: 4.5rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .scale-col:not(:last-child) {
          border-right: 1px solid ${T.border};
        }
        @media (max-width: 992px) {
          .scale-grid {
            grid-template-columns: 1fr !important;
          }
          .scale-col {
            padding: 3rem 1.5rem !important;
          }
          .scale-col:not(:last-child) {
            border-right: none !important;
            border-bottom: 1px solid ${T.border};
          }
        }
      `}</style>

      <div style={{ padding: '5rem 1.5rem 4rem 1.5rem', textAlign: 'center', borderBottom: `1px solid ${T.border}` }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>
          {t.scaleTitle}
        </h2>
        <p style={{ color: T.sub, maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
          {t.scaleSub}
        </p>
      </div>

      <div className="scale-grid">
        {t.scaleItems.map((item, idx) => (
          <div key={idx} className="scale-col">
            
            <div style={{ width: '100%', height: '140px', backgroundColor: 'rgba(0, 0, 0, 0.12)', border: `1px solid ${T.border}`, borderRadius: '8px', overflow: 'hidden' }}>
              {renderVisual(idx)}
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.25rem' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 600, color: T.muted, textDecoration: 'line-through', textDecorationColor: 'rgba(255, 107, 107, 0.25)', marginBottom: '0.1rem' }}>
                {item.pain}
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                <span style={{ color: T.accent, marginRight: '0.3rem' }}>
                  <RollingCounter 
                    start={item.startValue} 
                    end={item.endValue} 
                    duration={1300} 
                    suffix={item.suffix} 
                    isVisible={isVisible} 
                  />
                </span>
                {item.fixText}
              </h3>
              
              {/* textWrap: 'pretty' защищает от одиноких висящих слов */}
              <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6, margin: 0, fontWeight: 500, textWrap: 'pretty' }}>
                {formatDescription(item.desc)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
