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

              {/* Concept B: Transformation Animated Area */}
              {isActive && (
                <div style={{ marginTop: '2rem', padding: '2.5rem', backgroundColor: T.bg0, borderRadius: '12px', border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px', position: 'relative', overflow: 'hidden' }}>
                  
                  {/* Tab 01: Overbooking Sync Transformation */}
                  {tab.uiType === 'sync' && (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px', position: 'relative' }}>
                      <div className="anim-pain-sync" style={{ position: 'absolute', color: '#FF4D4D', fontSize: '1.8rem', fontWeight: 800, letterSpacing: '0.05em', textAlign: 'center' }}>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,77,77,0.6)', marginBottom: '0.3rem' }}>CHANNEL CONFLICT</div>
                        OVERBOOKING DETECTED
                      </div>
                      <div className="anim-success-sync" style={{ position: 'absolute', color: '#2cb742', fontSize: '2.4rem', fontWeight: 900, textAlign: 'center', opacity: 0, textShadow: '0 0 30px rgba(44,183,66,0.3)' }}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(44,183,66,0.7)', fontWeight: 700, marginBottom: '0.4rem', letterSpacing: '0.1em' }}>GRID DISTRIBUTION</div>
                        0 OVERBOOKINGS
                      </div>
                    </div>
                  )}

                  {/* Tab 02: Commission Slash Transformation */}
                  {tab.uiType === 'revenue' && (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px', position: 'relative' }}>
                      <div className="anim-pain-revenue" style={{ position: 'absolute', color: '#FF4D4D', fontSize: '3.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        -20%
                        <div className="anim-slash-line" style={{ position: 'absolute', height: '6px', backgroundColor: '#FF4D4D', left: '-10%', right: '-10%', borderRadius: '4px', transform: 'rotate(-15deg) scaleX(0)', transformOrigin: 'left' }} />
                      </div>
                      <div className="anim-success-revenue" style={{ position: 'absolute', color: '#2cb742', fontSize: '2.6rem', fontWeight: 900, opacity: 0, textAlign: 'center', textShadow: '0 0 30px rgba(44,183,66,0.3)' }}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(44,183,66,0.7)', fontWeight: 700, marginBottom: '0.4rem', letterSpacing: '0.1em' }}>MERCHANT ЭКВАЙРИНГ</div>
                        100% KEPT
                      </div>
                    </div>
                  )}

                  {/* Tab 03: Traffic Zero to Hero Transformation */}
                  {tab.uiType === 'traffic' && (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px', position: 'relative' }}>
                      <div className="anim-pain-traffic" style={{ position: 'absolute', color: '#fff', opacity: 0.2, fontSize: '1.8rem', fontWeight: 800 }}>
                        DIRECT VISITS: 0%
                      </div>
                      <div className="anim-success-traffic" style={{ position: 'absolute', color: T.acc2, fontSize: '2.6rem', fontWeight: 900, opacity: 0, textAlign: 'center', textShadow: `0 0 30px rgba(0, 163, 255, 0.3)` }}>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(0, 163, 255, 0.7)', fontWeight: 700, marginBottom: '0.4rem', letterSpacing: '0.1em' }}>LOCAL SEARCH ARCHITECTURE</div>
                        GOOGLE MAPS #1
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
                  
                  {/* Mobile Static Metric Preview */}
                  <div style={{ padding: '1.2rem', backgroundColor: T.bg0, borderRadius: '8px', border: `1px solid ${T.border}` }}>
                    {tab.uiType === 'sync' && <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#2cb742', textAlign: 'center' }}>0 Overbookings / 300+ Channels</div>}
                    {tab.uiType === 'revenue' && <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#2cb742', textAlign: 'center' }}>Revenue Kept: 100%</div>}
                    {tab.uiType === 'traffic' && <div style={{ fontSize: '0.9rem', fontWeight: 800, color: T.acc2, textAlign: 'center' }}>Google Maps Visibility: #1</div>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Concept B Global CSS Transformation Keyframes */}
      <style jsx global>{`
        /* 1. Sync Box Animations */
        .anim-pain-sync {
          animation: flashRed 0.8s ease-in-out infinite alternate, fadeOutMetric 0.4s ease forwards 1.4s;
        }
        .anim-success-sync {
          animation: fadeInMetric 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.7s;
        }

        /* 2. Revenue Box Animations */
        .anim-pain-revenue {
          animation: fadeOutMetric 0.4s ease forwards 1.5s;
        }
        .anim-slash-line {
          animation: drawSlash 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.4s;
        }
        .anim-success-revenue {
          animation: fadeInMetric 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.8s;
        }

        /* 3. Traffic Box Animations */
        .anim-pain-traffic {
          animation: blurOut 0.5s ease forwards 1.2s;
        }
        .anim-success-traffic {
          animation: fadeInMetric 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.5s;
        }

        /* Keyframes Library */
        @keyframes flashRed {
          from { opacity: 0.4; }
          to { opacity: 1; text-shadow: 0 0 15px rgba(255,77,77,0.4); }
        }
        @keyframes drawSlash {
          to { transform: rotate(-15deg) scaleX(1); }
        }
        @keyframes fadeOutMetric {
          to { opacity: 0; transform: scale(0.9); filter: blur(8px); }
        }
        @keyframes blurOut {
          to { opacity: 0; filter: blur(6px); transform: scale(0.95); }
        }
        @keyframes fadeInMetric {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
