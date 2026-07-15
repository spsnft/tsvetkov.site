'use client';

import React, { useState } from 'react';
import { T } from '../../../src/theme/tokens';
import { TabItem } from '../types';

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
                transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
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
                <div style={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0, transition: 'all 0.4s ease', pointerEvents: isActive ? 'auto' : 'none' }}>
                  <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6 }}>{tab.desc}</p>
                </div>
              </div>

              {/* Data-Driven CSS Metric Component (Concept A) */}
              {isActive && (
                <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: T.bg0, borderRadius: '12px', border: `1px solid ${T.border}`, animation: 'fadeIn 0.5s ease', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '180px' }}>
                  {tab.uiType === 'revenue' && (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                      <div style={{ textAlign: 'center', opacity: 0.4, textDecoration: 'line-through', color: '#FF4D4D' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.2rem' }}>OTA BOOKING</div>
                        <div style={{ fontSize: '2rem', fontWeight: 800 }}>-20%</div>
                      </div>
                      <div style={{ fontSize: '2rem', color: T.border, fontWeight: 300 }}>→</div>
                      <div style={{ textAlign: 'center', color: '#2cb742', textShadow: '0 0 20px rgba(44, 183, 66, 0.2)' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.2rem', letterSpacing: '0.05em' }}>DIRECT KEEP</div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>100%</div>
                      </div>
                    </div>
                  )}
                  {tab.uiType === 'traffic' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.25rem', backgroundColor: T.bg1, borderRadius: '8px', border: `1px solid rgba(0, 163, 255, 0.2)` }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: T.body }}>Google Maps Local Visibilty</span>
                        <span style={{ color: T.acc2, fontSize: '0.85rem', fontWeight: 800 }}>RANK #1</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.25rem', backgroundColor: T.bg1, borderRadius: '8px', border: `1px solid rgba(44, 183, 66, 0.2)` }}>
                        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: T.body }}>Automated Guest Retention</span>
                        <span style={{ color: '#2cb742', fontSize: '0.85rem', fontWeight: 800 }}>LAUNCHED</span>
                      </div>
                    </div>
                  )}
                  {tab.uiType === 'sync' && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0.5rem 1rem' }}>
                      <div>
                        <div style={{ fontSize: '0.75rem', color: T.sub, fontWeight: 700, marginBottom: '0.2rem' }}>GRID DISTRIBUTION</div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>300+ Active OTA Channels</div>
                      </div>
                      <div style={{ backgroundColor: 'rgba(44, 183, 66, 0.08)', color: '#2cb742', padding: '6px 16px', borderRadius: '30px', fontSize: '0.75rem', fontWeight: 800, border: '1px solid rgba(44, 183, 66, 0.2)', boxShadow: '0 0 15px rgba(44, 183, 66, 0.1)' }}>
                        LOCKED IN 0.8s
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
                  <div style={{ padding: '1.2rem', backgroundColor: T.bg0, borderRadius: '8px', border: `1px solid ${T.border}` }}>
                    {tab.uiType === 'revenue' && <div style={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'center', color: '#2cb742' }}>Direct Keeping: 100%</div>}
                    {tab.uiType === 'traffic' && <div style={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'center', color: T.acc2 }}>Google Maps Ranking: #1</div>}
                    {tab.uiType === 'sync' && <div style={{ fontSize: '0.9rem', fontWeight: 800, textAlign: 'center', color: T.accent }}>Live Channels Sync: 0.8s</div>}
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
