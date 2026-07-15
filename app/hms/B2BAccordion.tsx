'use client';

import React, { useState, useEffect } from 'react';
import { T } from '../../src/theme/tokens';
import { TabItem } from './types';

// Компонент плавного роллинга цифр для демонстрации динамики
function RollingNumber({ start, end, duration, suffix = '', prefix = '', triggerInfinity = false }: { 
  start: number; 
  end: number; 
  duration: number; 
  suffix?: string;
  prefix?: string;
  triggerInfinity?: boolean;
}) {
  const [count, setCount] = useState(start);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    setIsDone(false);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      
      const current = Math.round(start + easeProgress * (end - start));
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsDone(true);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  if (isDone && triggerInfinity) {
    return <span style={{ color: '#2cb742', fontWeight: 900 }}>∞</span>;
  }

  return <span style={{ color: '#2cb742', fontWeight: 900 }}>{prefix}{count}{suffix}</span>;
}

interface B2BAccordionProps {
  tabs: TabItem[];
  title: string;
}

export default function B2BAccordion({ tabs, title }: B2BAccordionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section style={{ padding: '3rem 0' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      
      {/* Desktop Layout */}
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '380px' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{ 
                flex: isActive ? '4' : '1',
                borderRight: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                padding: '2.5rem 2rem',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                overflow: 'hidden'
              }}
            >
              {/* Номер вкладки */}
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>
                {tab.num}
              </div>

              {/* Блок заголовка (Боль): Всегда в одном лаконичном стиле */}
              <h3 style={{ 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: isActive ? '#fff' : T.sub, 
                margin: 0,
                lineHeight: 1.3,
                transition: 'color 0.3s ease'
              }}>
                {tab.titlePrefix && <span style={{ color: T.sub, marginRight: '0.3rem' }}>{tab.titlePrefix}</span>}
                <span style={{ color: tab.uiType === 'traffic' ? (isActive ? '#666' : '#444') : '#FF4D4D', fontWeight: 800 }}>
                  {tab.titleHighlight}
                </span>{' '}
                {tab.titleSuffix}
              </h3>

              {/* Зона Решения: Появляется бесшовно, убирая пустые пространства. Цифры внедрены прямо в текст подзаголовка */}
              <div style={{ 
                opacity: isActive ? 1 : 0, 
                height: isActive ? 'auto' : 0, 
                transform: isActive ? 'translateY(0)' : 'translateY(10px)', 
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                overflow: 'hidden',
                marginTop: isActive ? '0.5rem' : 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {isActive && (
                  <>
                    {/* Подзаголовок с интегрированным динамическим каунтером */}
                    <div style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: 700, 
                      color: '#fff', 
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em'
                    }}>
                      {tab.uiType === 'sync' && (
                        <>
                          Each reservation locks your entire grid in less than{' '}
                          <RollingCounter start={24} end={1} duration={1000} suffix=" second" />
                        </>
                      )}
                      {tab.uiType === 'revenue' && (
                        <>
                          Integrate a direct booking engine and keep{' '}
                          <RollingCounter start={20} end={100} duration={1200} suffix="% " />
                          of the revenue in-house.
                        </>
                      )}
                      {tab.uiType === 'traffic' && (
                        <>
                          Drive{' '}
                          <RollingCounter start={0} end={99} duration={1100} triggerInfinity={true} />
                          {' '}direct bookings with local search and automated retention campaigns.
                        </>
                      )}
                    </div>

                    {/* Развернутое описание */}
                    <p style={{ color: T.body, fontSize: '0.9rem', lineHeight: 1.6, margin: 0, maxWidth: '90%' }}>
                      {tab.desc}
                    </p>
                  </>
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
                style={{ padding: '1.2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                  <span style={{ fontSize: '0.9rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: isActive ? '#fff' : T.sub, margin: 0, lineHeight: 1.3 }}>
                  {tab.titlePrefix && <span style={{ color: T.sub, marginRight: '0.2rem' }}>{tab.titlePrefix}</span>}
                  <span style={{ color: tab.uiType === 'traffic' ? '#555' : '#FF4D4D', fontWeight: 800 }}>{tab.titleHighlight}</span>{' '}
                  {tab.titleSuffix}
                </h3>
              </div>
              
              <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '0 1.2rem 1.2rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {isActive && (
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
                      {tab.uiType === 'sync' && (
                        <>Each reservation locks your entire grid in less than <RollingCounter start={24} end={1} duration={1000} suffix=" second" /></>
                      )}
                      {tab.uiType === 'revenue' && (
                        <>Integrate a direct booking engine and keep <RollingCounter start={20} end={100} duration={1200} suffix="% " /> of the revenue in-house.</>
                      )}
                      {tab.uiType === 'traffic' && (
                        <>Drive <RollingCounter start={0} end={99} duration={1100} triggerInfinity={true} /> direct bookings with local search and automated retention campaigns.</>
                      )}
                    </div>
                  )}
                  <p style={{ color: T.body, fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{tab.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
