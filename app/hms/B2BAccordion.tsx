'use client';

import React, { useState, useEffect } from 'react';
import { T } from '../../src/theme/tokens';
import { TabItem } from './types';

function RollingCounter({ start, end, duration, isInfinity = false }: { 
  start: number; 
  end: number; 
  duration: number; 
  isInfinity?: boolean;
}) {
  const [count, setCount] = useState(start);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    setIsDone(false);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.round(start + easeProgress * (end - start)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsDone(true);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  if (isDone && isInfinity) {
    return <span style={{ fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>∞</span>;
  }

  return <span style={{ fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>{count}</span>;
}

interface B2BAccordionProps {
  tabs: TabItem[];
  title: string;
}

export default function B2BAccordion({ tabs, title }: B2BAccordionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section style={{ padding: '3rem 0' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      
      {/* Desktop Layout */}
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '340px' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{ 
                flex: isActive ? '3.5' : '1',
                borderRight: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                padding: '2.5rem 2rem',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub, marginBottom: '1.5rem' }}>
                {tab.num}
              </div>
              
              {/* Заголовок (Боль) */}
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 700, 
                color: isActive ? '#fff' : T.sub, 
                margin: 0, 
                lineHeight: 1.4,
                transition: 'color 0.3s ease'
              }}>
                {tab.titlePrefix && <span>{tab.titlePrefix}</span>}
                <span style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: 900, 
                  color: tab.uiType === 'traffic' ? (isActive ? '#666' : '#444') : '#FF4D4D', 
                  verticalAlign: 'middle',
                  padding: '0 0.3rem',
                  fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace',
                  letterSpacing: '-0.03em'
                }}>
                  {tab.titleAccent}
                </span>
                <span>{tab.titleSuffix}</span>
              </h3>

              {/* Подзаголовок (Решение) - Бесшовная интеграция акцентов */}
              <div style={{ 
                opacity: isActive ? 1 : 0, 
                height: isActive ? 'auto' : 0, 
                transform: isActive ? 'translateY(0)' : 'translateY(10px)', 
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                overflow: 'hidden',
                marginTop: isActive ? '1.5rem' : 0
              }}>
                {isActive && (
                  <div style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: 700, 
                    color: '#fff', 
                    lineHeight: 1.4 
                  }}>
                    {tab.subPrefix && <span>{tab.subPrefix}</span>}
                    <span style={{ 
                      fontSize: '2.5rem', 
                      fontWeight: 900, 
                      color: '#2cb742', 
                      verticalAlign: 'middle',
                      padding: '0 0.3rem',
                      letterSpacing: '-0.03em'
                    }}>
                      {tab.uiType === 'sync' && <RollingCounter start={24} end={1} duration={1000} />}
                      {tab.uiType === 'revenue' && <RollingCounter start={20} end={100} duration={1200} />}
                      {tab.uiType === 'traffic' && <RollingCounter start={0} end={99} duration={1100} isInfinity={true} />}
                    </span>
                    <span>{tab.subSuffix}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${T.border}`, borderRadius: '12px', backgroundColor: T.bg1, overflow: 'hidden' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div key={idx} style={{ borderBottom: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none' }}>
              <div 
                onClick={() => setActiveTab(idx)}
                style={{ padding: '1.2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                  <span style={{ fontSize: '0.9rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: isActive ? '#fff' : T.sub, margin: 0, lineHeight: 1.4 }}>
                  {tab.titlePrefix && <span>{tab.titlePrefix}</span>}
                  <span style={{ 
                    fontSize: '2rem', 
                    fontWeight: 900, 
                    color: tab.uiType === 'traffic' ? '#555' : '#FF4D4D', 
                    verticalAlign: 'middle',
                    padding: '0 0.2rem',
                    fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace'
                  }}>
                    {tab.titleAccent}
                  </span>
                  <span>{tab.titleSuffix}</span>
                </h3>
              </div>
              
              <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '0 1.2rem 1.2rem 1.2rem' }}>
                  {isActive && (
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginTop: '0.5rem' }}>
                      {tab.subPrefix && <span>{tab.subPrefix}</span>}
                      <span style={{ 
                        fontSize: '2rem', 
                        fontWeight: 900, 
                        color: '#2cb742', 
                        verticalAlign: 'middle',
                        padding: '0 0.2rem' 
                      }}>
                        {tab.uiType === 'sync' && <RollingCounter start={24} end={1} duration={1000} />}
                        {tab.uiType === 'revenue' && <RollingCounter start={20} end={100} duration={1200} />}
                        {tab.uiType === 'traffic' && <RollingCounter start={0} end={99} duration={1100} isInfinity={true} />}
                      </span>
                      <span>{tab.subSuffix}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
