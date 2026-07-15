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
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '520px' }}>
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
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub, marginBottom: '1.5rem' }}>
                  {tab.num}
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', whiteSpace: 'nowrap' }}>
                  {tab.title}
                </h3>
                <div style={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0, transform: isActive ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.4s ease', pointerEvents: isActive ? 'auto' : 'none' }}>
                  <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6 }}>{tab.desc}</p>
                </div>
              </div>

              {/* Concept B: High-End Bold Typography Metrics */}
              {isActive && (
                <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: T.bg0, borderRadius: '12px', border: `1px solid ${T.border}`, animation: 'fadeIn 0.4s ease', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
                  
                  {/* Tab 01: Overbookings -> Stark 0 */}
                  {tab.uiType === 'sync' && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(4rem, 7vw, 6rem)', fontWeight: 900, color: '#2cb742', lineHeight: 1, letterSpacing: '-0.05em', textShadow: '0 0 40px rgba(44, 183, 66, 0.15)' }}>
                        0
                      </div>
                      <div style={{ fontSize: '0.7rem', color: T.sub, fontWeight: 700, letterSpacing: '0.1em', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                        Overbooking Errors Permitted
                      </div>
                    </div>
                  )}

                  {/* Tab 02: Commission -> Aggressive -20% */}
                  {tab.uiType === 'revenue' && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontWeight: 900, color: '#FF4D4D', lineHeight: 1, letterSpacing: '-0.05em' }}>
                        -20%
                      </div>
                      <div style={{ fontSize: '0.7rem', color: T.sub, fontWeight: 700, letterSpacing: '0.1em', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                        Leaked to Third-Party OTAs
                      </div>
                    </div>
                  )}

                  {/* Tab 03: Traffic -> Muted 0% Loss Chart */}
                  {tab.uiType === 'traffic' && (
                    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                        <div style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontWeight: 900, color: '#4A4A4A', lineHeight: 1, letterSpacing: '-0.05em' }}>
                          0%
                        </div>
                        <span style={{ color: '#FF4D4D', fontSize: '1.5rem', fontWeight: 700 }}>↓</span>
                      </div>
                      <div style={{ fontSize: '0.7rem', color: T.sub, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Direct Guest Retention Share
                      </div>
                    </div>
                  )}

                </div>
              )}
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
                <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                  <p style={{ color: T.body, fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>{tab.desc}</p>
                  
                  {/* Mobile CSS Metric solution preview */}
                  <div style={{ padding: '1.5rem', backgroundColor: T.bg0, borderRadius: '8px', border: `1px solid ${T.border}`, display: 'flex', justifyContent: 'center' }}>
                    {tab.uiType === 'sync' && <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#2cb742' }}>0 OVERBOOKINGS</div>}
                    {tab.uiType === 'revenue' && <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FF4D4D' }}>-20% COMMISSION</div>}
                    {tab.uiType === 'traffic' && <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#4A4A4A' }}>0% DIRECT SHARE</div>}
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
