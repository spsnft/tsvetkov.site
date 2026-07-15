'use client';

import React, { useState } from 'react';
import { T } from '../../src/theme/tokens';
import { TabItem } from './types';

interface B2BAccordionProps {
  tabs: TabItem[];
  title: string;
}

export default function B2BAccordion({ tabs, title }: B2BAccordionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section style={{ padding: '4rem 0' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
        {title}
      </h2>
      
      {/* Desktop Layout (Avikto Horizontal Pattern with Inline Transformation) */}
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '460px' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{ 
                flex: isActive ? '3.8' : '1',
                borderRight: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                padding: '3.5rem 2.5rem',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
              }}
            >
              {/* Верхняя часть: Интегрированные анимированные заголовки */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub, transition: 'color 0.3s' }}>
                  {tab.num}
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem' }}>
                  
                  {/* Контейнер трансформации цифр */}
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', lineHeight: 0.9 }}>
                    
                    {tab.titlePrefix && (
                      <span style={{ fontSize: isActive ? '1.4rem' : '1rem', fontWeight: 700, color: T.sub, transition: 'all 0.4s' }}>
                        {tab.titlePrefix}
                      </span>
                    )}

                    {/* ЦИФРА БОЛИ (Изменяется/перечеркивается при активации) */}
                    <span 
                      className={isActive ? `pain-glow-${tab.uiType}` : ''}
                      style={{ 
                        fontSize: isActive ? '4.5rem' : '2rem', 
                        fontWeight: 900, 
                        color: tab.uiType === 'traffic' ? (isActive ? '#444' : '#333') : '#FF4D4D',
                        transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                        letterSpacing: '-0.04em',
                        fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace',
                        position: 'relative',
                        textDecoration: isActive && tab.uiType === 'revenue' ? 'line-through' : 'none',
                        opacity: isActive && tab.uiType === 'revenue' ? 0.2 : 1
                      }}
                    >
                      {tab.titleHighlight}
                    </span>

                    {/* ДИНАМИЧЕСКИЙ СТРЕЛОЧНЫЙ ПЕРЕХОД К РЕШЕНИЮ */}
                    {isActive && (
                      <span style={{ fontSize: '2rem', color: T.border, fontWeight: 300, padding: '0 0.2rem', animation: 'fadeIn 0.3s ease forwards 0.2s', opacity: 0 }}>
                        →
                      </span>
                    )}

                    {/* ЦИФРА РЕШЕНИЯ (Проявляется только в активном состоянии) */}
                    {isActive && (
                      <span 
                        style={{ 
                          fontSize: '4.8rem', 
                          fontWeight: 900, 
                          color: '#2cb742', 
                          letterSpacing: '-0.04em',
                          fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace',
                          animation: 'scaleInSolution 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.3s',
                          opacity: 0,
                          transform: 'scale(0.8)',
                          textShadow: '0 0 40px rgba(44, 183, 66, 0.2)'
                        }}
                      >
                        {tab.uiType === 'sync' && '<1s'}
                        {tab.uiType === 'revenue' && '100%'}
                        {tab.uiType === 'traffic' && '∞'}
                      </span>
                    )}
                  </div>

                  {/* Текстовый суффикс заголовка */}
                  <span style={{ 
                    fontSize: isActive ? '1.2rem' : '1rem', 
                    fontWeight: 700, 
                    color: isActive ? '#fff' : T.sub,
                    transition: 'all 0.4s',
                    lineHeight: 1.3,
                    marginTop: '0.3rem'
                  }}>
                    {tab.titleSuffix}
                  </span>
                </div>
              </div>

              {/* Нижняя часть: Текст-решение. Открывается в чистое пространство (Negative Space) */}
              <div style={{ 
                opacity: isActive ? 1 : 0, 
                height: isActive ? 'auto' : 0, 
                transform: isActive ? 'translateY(0)' : 'translateY(10px)', 
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                paddingTop: isActive ? '2rem' : 0
              }}>
                {isActive && (
                  <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6, margin: 0, maxWidth: '85%' }}>
                    {tab.desc}
                  </p>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Mobile Layout (Vertical Progressive Disclosure Pattern) */}
      <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${T.border}`, borderRadius: '12px', backgroundColor: T.bg1, overflow: 'hidden' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div key={idx} style={{ borderBottom: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none' }}>
              <div 
                onClick={() => setActiveTab(idx)}
                style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                  <span style={{ fontSize: '1rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                </div>

                {/* Мобильная адаптация встроенной трансформации */}
                <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.3rem', lineHeight: 0.9 }}>
                  {tab.titlePrefix && (
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: T.sub }}>{tab.titlePrefix}</span>
                  )}
                  <span style={{ 
                    fontSize: isActive ? '2.8rem' : '1.6rem', 
                    fontWeight: 900, 
                    color: tab.uiType === 'traffic' ? (isActive ? '#444' : '#333') : '#FF4D4D',
                    textDecoration: isActive && tab.uiType === 'revenue' ? 'line-through' : 'none',
                    opacity: isActive && tab.uiType === 'revenue' ? 0.3 : 1,
                    fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace'
                  }}>
                    {tab.titleHighlight}
                  </span>
                  
                  {isActive && <span style={{ color: T.sub, padding: '0 0.1rem', fontSize: '1.2rem' }}>→</span>}
                  
                  {isActive && (
                    <span style={{ fontSize: '3rem', fontWeight: 900, color: '#2cb742', fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>
                      {tab.uiType === 'sync' && '<1s'}
                      {tab.uiType === 'revenue' && '100%'}
                      {tab.uiType === 'traffic' && '∞'}
                    </span>
                  )}

                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isActive ? '#fff' : T.sub, marginLeft: '0.2rem' }}>
                    {tab.titleSuffix}
                  </span>
                </div>
              </div>
              
              <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                  <p style={{ color: T.body, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{tab.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global CSS Animation Core Layer */}
      <style jsx global>{`
        @keyframes scaleInSolution {
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .pain-glow-sync {
          text-shadow: 0 0 30px rgba(255, 77, 77, 0.1);
        }
        .pain-glow-traffic {
          text-shadow: none;
        }
      `}</style>
    </section>
  );
}
