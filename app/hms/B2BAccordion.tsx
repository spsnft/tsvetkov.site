'use client';

import React, { useState, useEffect, useRef } from 'react';
import { T } from '../../src/theme/tokens';
import { TabItem } from './types';

function RollingCounter({ start, end, duration, decimals = 0, padStart = 0, suffix = '', isVisible }: { 
  start: number; 
  end: number; 
  duration: number; 
  decimals?: number;
  padStart?: number;
  suffix?: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState<string>(start.toFixed(decimals).padStart(padStart, '0'));

  useEffect(() => {
    if (!isVisible) {
      setCount(start.toFixed(decimals).padStart(padStart, '0'));
      return;
    }

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      
      const current = start + easeProgress * (end - start);
      setCount(current.toFixed(decimals).padStart(padStart, '0'));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration, decimals, padStart]);

  return <span style={{ color: '#2cb742', fontWeight: 800 }}>{count}{suffix}</span>;
}

interface B2BAccordionProps {
  tabs: TabItem[];
  title: string;
}

export default function B2BAccordion({ tabs, title }: B2BAccordionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Триггер при видимости 20% блока
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '3rem 0', position: 'relative' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      
      {/* Desktop Layout - Убран minHeight, добавлен абстрактный PMS-Grid фон */}
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', position: 'relative' }}>
        
        {/* Тематический бэкграунд: PMS Grid Matrix */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{ 
                flex: isActive ? '3.2' : '1',
                borderRight: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                padding: '2.5rem 2rem',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub, marginBottom: '1.5rem' }}>
                {tab.num}
              </div>
              
              {/* Контейнер заголовков (Закрытый vs Открытый) */}
              <div style={{ position: 'relative', minHeight: '3.5rem' }}>
                {/* Закрытый заголовок */}
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  color: T.sub, 
                  margin: 0, 
                  lineHeight: 1.4,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: isActive ? 0 : 1,
                  pointerEvents: isActive ? 'none' : 'auto',
                  transition: 'all 0.3s ease',
                  whiteSpace: 'nowrap'
                }}>
                  {tab.closedTitle}
                </h3>

                {/* Открытый заголовок с акцентом */}
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  color: '#fff', 
                  margin: 0, 
                  lineHeight: 1.4,
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? 'auto' : 'none',
                  transition: 'all 0.3s ease 0.1s', // Небольшая задержка для плавности
                }}>
                  {tab.openTitlePrefix && <span>{tab.openTitlePrefix}</span>}
                  <span style={{ color: '#FF4D4D' }}>{tab.openTitleAccent}</span>
                  <span>{tab.openTitleSuffix}</span>
                </h3>
              </div>

              {/* Зона Решения (Blur-in + Slide-up) ЕДИНЫЙ размер текста */}
              <div style={{ 
                opacity: isActive ? 1 : 0, 
                filter: isActive ? 'blur(0)' : 'blur(6px)',
                transform: isActive ? 'translateY(0)' : 'translateY(15px)', 
                transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.1s',
                marginTop: '1.5rem',
                display: isActive ? 'block' : 'none' // Скрываем из DOM когда неактивно для фикса высоты
              }}>
                <div style={{ 
                  fontSize: '1.25rem', // Единый размер текста
                  fontWeight: 600, 
                  color: T.body, 
                  lineHeight: 1.6,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  {tab.subLine1 && <span>{tab.subLine1}</span>}
                  
                  <span>
                    {tab.subPrefix}
                    {tab.uiType === 'sync' && (
                      <RollingCounter start={24} end={1} duration={1200} suffix=" second" isVisible={isVisible && isActive} />
                    )}
                    {tab.uiType === 'revenue' && (
                      <RollingCounter start={20} end={100} duration={1200} suffix="%" isVisible={isVisible && isActive} />
                    )}
                    {tab.uiType === 'traffic' && (
                      <RollingCounter start={0} end={10} duration={1200} suffix="x direct bookings" isVisible={isVisible && isActive} />
                    )}
                    {tab.subSuffix}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${T.border}`, borderRadius: '12px', backgroundColor: T.bg1, overflow: 'hidden', position: 'relative' }}>
        
        {/* Тематический бэкграунд для мобайла */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div key={idx} style={{ borderBottom: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none', position: 'relative', zIndex: 1 }}>
              <div 
                onClick={() => setActiveTab(idx)}
                style={{ padding: '1.2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                  <span style={{ fontSize: '0.9rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                </div>

                <div style={{ position: 'relative', minHeight: '2.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: T.sub, margin: 0, lineHeight: 1.4, position: 'absolute', top: 0, left: 0, opacity: isActive ? 0 : 1, transition: 'all 0.3s' }}>
                    {tab.closedTitle}
                  </h3>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.4, opacity: isActive ? 1 : 0, transition: 'all 0.3s' }}>
                    {tab.openTitlePrefix && <span>{tab.openTitlePrefix}</span>}
                    <span style={{ color: '#FF4D4D' }}>{tab.openTitleAccent}</span>
                    <span>{tab.openTitleSuffix}</span>
                  </h3>
                </div>
              </div>
              
              <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '0 1.2rem 1.5rem 1.2rem' }}>
                  {isActive && (
                    <div style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: 600, 
                      color: T.body, 
                      lineHeight: 1.6,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      animation: 'fadeInSlideUp 0.5s ease forwards'
                    }}>
                      {tab.subLine1 && <span>{tab.subLine1}</span>}
                      <span>
                        {tab.subPrefix}
                        {tab.uiType === 'sync' && <RollingCounter start={24} end={1} duration={1200} suffix=" second" isVisible={isVisible && isActive} />}
                        {tab.uiType === 'revenue' && <RollingCounter start={20} end={100} duration={1200} suffix="%" isVisible={isVisible && isActive} />}
                        {tab.uiType === 'traffic' && <RollingCounter start={0} end={10} duration={1200} suffix="x direct bookings" isVisible={isVisible && isActive} />}
                        {tab.subSuffix}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx global>{`
        @keyframes fadeInSlideUp {
          from { opacity: 0; filter: blur(4px); transform: translateY(10px); }
          to { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
