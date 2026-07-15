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
      
      {/* Desktop Layout (Avikto Horizontal Accordion Pattern) */}
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '480px' }}>
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
              {/* Верхняя часть: Номер и Заголовок таба (видны всегда) */}
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub, marginBottom: '1.5rem', transition: 'color 0.3s' }}>
                  {tab.num}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', whiteSpace: 'nowrap' }}>
                  {tab.title}
                </h3>
              </div>

              {/* Никаких рамок и коробок. Контент раскрывается плавно в свободное пространство */}
              <div style={{ 
                opacity: isActive ? 1 : 0, 
                height: isActive ? '100%' : 0, 
                transform: isActive ? 'translateY(0)' : 'translateY(15px)', 
                transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexGrow: 1,
                gap: '2rem'
              }}>
                {isActive && (
                  <>
                    {/* Текстовый блок слева */}
                    <div style={{ flex: '1.2', paddingBottom: '1rem' }}>
                      <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        {tab.desc}
                      </p>
                    </div>

                    {/* Правая часть: Брутальная дата-типографика без контейнеров */}
                    <div style={{ 
                      flex: '1', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'flex-end', 
                      justifyContent: 'flex-end',
                      lineHeight: 0.85,
                      fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace'
                    }}>
                      {tab.uiType === 'sync' && (
                        <>
                          <span style={{ fontSize: '9.5rem', fontWeight: 900, color: '#FF4D4D', letterSpacing: '-0.05em' }}>
                            ∞
                          </span>
                          <span style={{ fontSize: '0.65rem', color: T.sub, fontWeight: 700, letterSpacing: '0.1rem', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                            Human Error Margin
                          </span>
                        </>
                      )}
                      {tab.uiType === 'revenue' && (
                        <>
                          <span style={{ fontSize: '8.5rem', fontWeight: 900, color: '#FF4D4D', letterSpacing: '-0.05em' }}>
                            20%
                          </span>
                          <span style={{ fontSize: '0.65rem', color: T.sub, fontWeight: 700, letterSpacing: '0.1rem', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                            Third-Party Commission Leak
                          </span>
                        </>
                      )}
                      {tab.uiType === 'traffic' && (
                        <>
                          <span style={{ fontSize: '8.5rem', fontWeight: 900, color: '#3A3A3A', letterSpacing: '-0.05em' }}>
                            0%
                          </span>
                          <span style={{ fontSize: '0.65rem', color: T.sub, fontWeight: 700, letterSpacing: '0.1rem', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                            Direct Guest Retention Share
                          </span>
                        </>
                      )}
                    </div>
                  </>
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
                style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{tab.title}</h3>
                </div>
                <span style={{ fontSize: '1.2rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
              </div>
              
              <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <p style={{ color: T.body, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{tab.desc}</p>
                  
                  {/* Мобильный плоский акцент без рамок */}
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', lineHeight: 1 }}>
                    {tab.uiType === 'sync' && <span style={{ fontSize: '4.5rem', fontWeight: 900, color: '#FF4D4D' }}>∞</span>}
                    {tab.uiType === 'revenue' && <span style={{ fontSize: '4.5rem', fontWeight: 900, color: '#FF4D4D' }}>20%</span>}
                    {tab.uiType === 'traffic' && <span style={{ fontSize: '4.5rem', fontWeight: 900, color: '#3A3A3A' }}>0%</span>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
