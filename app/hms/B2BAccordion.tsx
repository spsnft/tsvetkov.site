'use client';

import React, { useState, useEffect } from 'react';
import { T } from '../../src/theme/tokens';
import { TabItem } from './types';

// Отдельный микро-компонент для красивого олдскульного каунтера
function RollingCounter({ start, end, duration, suffix = '', prefix = '', isInfinity = false }: { 
  start: number; 
  end: number; 
  duration: number; 
  suffix?: string;
  prefix?: string;
  isInfinity?: boolean;
}) {
  const [count, setCount] = useState(start);
  const [showInfinity, setShowInfinity] = useState(false);

  useEffect(() => {
    let startTime: number | null = null;
    setShowInfinity(false);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing curve (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      
      const currentCount = Math.round(start + easeProgress * (end - start));
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (isInfinity) {
        setShowInfinity(true);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, isInfinity]);

  if (showInfinity) {
    return <span style={{ color: '#2cb742' }}>∞</span>;
  }

  return <span>{prefix}{count}{suffix}</span>;
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
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '400px' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{ 
                flex: isActive ? '3.8' : '1',
                borderRight: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                padding: '2rem 2rem', // Ужатый внутренний паддинг карточки
                cursor: isActive ? 'default' : 'pointer',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
              }}
            >
              {/* Верхняя часть: Заголовок-Боль */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}> {/* Компактный gap */}
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>
                  {tab.num}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', lineHeight: 1.1 }}>
                    {tab.titlePrefix && (
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: T.sub, marginRight: '0.1rem' }}>
                        {tab.titlePrefix}
                      </span>
                    )}
                    <span style={{ 
                      fontSize: '1.8rem', // Строгий фиксированный размер боли в заголовке
                      fontWeight: 800, 
                      color: tab.uiType === 'traffic' ? '#555' : '#FF4D4D',
                      letterSpacing: '-0.03em',
                      fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace'
                    }}>
                      {tab.titleHighlight}
                    </span>
                  </div>

                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isActive ? '#fff' : T.sub, lineHeight: 1.2 }}>
                    {tab.titleSuffix}
                  </span>
                </div>
              </div>

              {/* Средняя часть: Интерактивный Подзаголовок-Решение (Выезжает снизу вверх) */}
              <div style={{ 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1) 0.1s',
                height: isActive ? 'auto' : 0,
                overflow: 'hidden',
                margin: isActive ? '1rem 0' : '0' // Минимальный компактный отступ
              }}>
                {isActive && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    
                    {/* Гигантский Динамический Счетчик Результата */}
                    <div style={{ 
                      fontSize: '4.5rem', 
                      fontWeight: 900, 
                      color: '#2cb742', 
                      lineHeight: 0.9, 
                      letterSpacing: '-0.04em',
                      fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace',
                      textShadow: '0 0 40px rgba(44, 183, 66, 0.15)'
                    }}>
                      {tab.uiType === 'sync' && (
                        <RollingCounter start={24} end={1} duration={1000} prefix="<" suffix="s" />
                      )}
                      {tab.uiType === 'revenue' && (
                        <RollingCounter start={20} end={100} duration={1200} suffix="%" />
                      )}
                      {tab.uiType === 'traffic' && (
                        <RollingCounter start={0} end={99} duration={1100} isInfinity={true} />
                      )}
                    </div>

                    {/* Поясняющий хедлайн решения */}
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#2cb742', letterSpacing: '-0.01em' }}>
                      {tab.uiType === 'sync' && 'Instant Autonomous Lock'}
                      {tab.uiType === 'revenue' && 'Revenue In-House'}
                      {tab.uiType === 'traffic' && 'Uncapped Guest Capital'}
                    </div>
                  </div>
                )}
              </div>

              {/* Нижняя часть: Описание */}
              <div style={{ 
                opacity: isActive ? 1 : 0, 
                height: isActive ? 'auto' : 0, 
                transition: 'all 0.3s ease 0.2s'
              }}>
                {isActive && (
                  <p style={{ color: T.body, fontSize: '0.9rem', lineHeight: 1.5, margin: 0, maxWidth: '95%' }}>
                    {tab.desc}
                  </p>
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
                style={{ padding: '1.2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.4rem', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                  <span style={{ fontSize: '0.9rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.2rem', lineHeight: 1.1 }}>
                  {tab.titlePrefix && (
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: T.sub }}>{tab.titlePrefix}</span>
                  )}
                  <span style={{ fontSize: '1.4rem', fontWeight: 800, color: tab.uiType === 'traffic' ? '#555' : '#FF4D4D', fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>
                    {tab.titleHighlight}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isActive ? '#fff' : T.sub, marginLeft: '0.1rem' }}>
                    {tab.titleSuffix}
                  </span>
                </div>
              </div>
              
              <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '0 1.2rem 1.2rem 1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  
                  {/* Мобильный счетчик */}
                  {isActive && (
                    <div>
                      <div style={{ fontSize: '3rem', fontWeight: 900, color: '#2cb742', lineHeight: 1, fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>
                        {tab.uiType === 'sync' && <RollingCounter start={24} end={1} duration={1000} prefix="<" suffix="s" />}
                        {tab.uiType === 'revenue' && <RollingCounter start={20} end={100} duration={1200} suffix="%" />}
                        {tab.uiType === 'traffic' && <RollingCounter start={0} end={99} duration={1100} isInfinity={true} />}
                      </div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#2cb742', marginTop: '0.1rem' }}>
                        {tab.uiType === 'sync' && 'Instant Autonomous Lock'}
                        {tab.uiType === 'revenue' && 'Revenue In-House'}
                        {tab.uiType === 'traffic' && 'Uncapped Guest Capital'}
                      </div>
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
