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
      
      {/* Desktop Layout (Avikto Horizontal Pattern) */}
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '440px' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{ 
                flex: isActive ? '3.5' : '1',
                borderRight: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                padding: '3.5rem 2.5rem',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden'
              }}
            >
              {/* Заголовок с встроенными крупными цифрами */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub, transition: 'color 0.3s' }}>
                  {tab.num}
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '0.4rem',
                  transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
                }}>
                  {/* Строка с префиксом и гигантской цифрой */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', lineHeight: 0.9 }}>
                    {tab.titlePrefix && (
                      <span style={{ 
                        fontSize: isActive ? '1.5rem' : '1rem', 
                        fontWeight: 700, 
                        color: T.sub,
                        transition: 'all 0.5s ease',
                        marginRight: '0.2rem'
                      }}>
                        {tab.titlePrefix}
                      </span>
                    )}
                    <span style={{ 
                      fontSize: isActive ? '5rem' : '2rem', 
                      fontWeight: 900, 
                      color: tab.uiType === 'traffic' ? (isActive ? '#555' : '#333') : '#FF4D4D', // 0 direct - серый, остальные - красная боль
                      transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                      letterSpacing: '-0.04em',
                      fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace'
                    }}>
                      {tab.titleHighlight}
                    </span>
                  </div>

                  {/* Суффикс заголовка */}
                  <span style={{ 
                    fontSize: isActive ? '1.3rem' : '1rem', 
                    fontWeight: 700, 
                    color: isActive ? '#fff' : T.sub,
                    transition: 'all 0.5s ease',
                    lineHeight: 1.2,
                    whiteSpace: isActive ? 'normal' : 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%'
                  }}>
                    {tab.titleSuffix}
                  </span>
                </div>
              </div>

              {/* Нижняя часть: Описание. Выезжает плавно в свободное пространство */}
              <div style={{ 
                opacity: isActive ? 1 : 0, 
                height: isActive ? 'auto' : 0, 
                transform: isActive ? 'translateY(0)' : 'translateY(15px)', 
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                paddingTop: isActive ? '2rem' : 0
              }}>
                {isActive && (
                  <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6, margin: 0, maxWidth: '90%' }}>
                    {tab.desc}
                  </p>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* Mobile Layout (Avikto Vertical Accordion Pattern) */}
      <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${T.border}`, borderRadius: '12px', backgroundColor: T.bg1, overflow: 'hidden' }}>
        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div key={idx} style={{ borderBottom: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none' }}>
              <div 
                onClick={() => setActiveTab(idx)}
                style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.75rem', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                  <span style={{ fontSize: '1rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', lineHeight: 0.9 }}>
                  {tab.titlePrefix && (
                    <span style={{ fontSize: isActive ? '1.1rem' : '0.9rem', fontWeight: 700, color: T.sub }}>
                      {tab.titlePrefix}
                    </span>
                  )}
                  <span style={{ 
                    fontSize: isActive ? '3.5rem' : '1.8rem', 
                    fontWeight: 900, 
                    color: tab.uiType === 'traffic' ? (isActive ? '#555' : '#333') : '#FF4D4D',
                    transition: 'all 0.3s ease',
                    fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace'
                  }}>
                    {tab.titleHighlight}
                  </span>
                  <span style={{ 
                    fontSize: isActive ? '1.1rem' : '0.9rem', 
                    fontWeight: 700, 
                    color: isActive ? '#fff' : T.sub,
                    marginLeft: '0.2rem'
                  }}>
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
    </section>
  );
}
