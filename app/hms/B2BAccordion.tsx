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
      const easeProgress = progress * (2 - progress);
      
      const current = start + easeProgress * (end - start);
      setCount(current.toFixed(decimals).padStart(padStart, '0'));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration, decimals, padStart]);

  return <span style={{ fontFamily: 'SF Mono, Monaco, Menlo, Consolas, monospace' }}>{count}{suffix}</span>;
}

interface B2BAccordionProps {
  tabs: TabItem[];
  titlePrefix: string;
  titleAccentRed: string;
  titleMiddle: string;
  titleAccentGreen: string;
  titleSuffix: string;
}

export default function B2BAccordion({ 
  tabs, 
  titlePrefix, 
  titleAccentRed, 
  titleMiddle, 
  titleAccentGreen, 
  titleSuffix 
}: B2BAccordionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: '3rem 0', position: 'relative' }}>
      <style jsx global>{`
        body {
          background-color: #0b0b0d !important;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(255, 77, 77, 0.02) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(44, 183, 66, 0.02) 0%, transparent 45%),
            linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
          background-attachment: fixed;
          position: relative;
        }
        body::after {
          content: "";
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          opacity: 0.015;
          pointer-events: none;
          z-index: 9999;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
      `}</style>

      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2.5rem', textAlign: 'center', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
        {titlePrefix}
        <span style={{ color: '#FF4D4D' }}>{titleAccentRed}</span>
        {titleMiddle}
        <span style={{ color: '#2cb742' }}>{titleAccentGreen}</span>
        {titleSuffix}
      </h2>
      
      <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', height: '240px', position: 'relative', alignItems: 'stretch' }}>
        
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)`,
          backgroundSize: '40px 40px', pointerEvents: 'none', zIndex: 0
        }} />

        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div 
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{ 
                flex: isActive ? '3.5' : '1',
                borderRight: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                padding: '0 2rem',
                cursor: isActive ? 'default' : 'pointer',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start' }}>
                <h3 style={{ 
                  gridArea: '1/1/2/2',
                  fontSize: '1.3rem', fontWeight: 700, color: T.sub, margin: 0, lineHeight: 1.4,
                  opacity: isActive ? 0 : 1,
                  transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  whiteSpace: 'nowrap'
                }}>
                  {tab.closedTitle}
                </h3>

                <h3 style={{ 
                  gridArea: '1/1/2/2',
                  fontSize: '1.3rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.4,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(4px)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1) 0.05s'
                }}>
                  {tab.openTitlePrefix && <span>{tab.openTitlePrefix}</span>}
                  <span style={{ color: tab.uiType === 'traffic' ? '#666' : '#FF4D4D', fontWeight: 800 }}>{tab.openTitleAccent}</span>
                  <span>{tab.openTitleSuffix}</span>
                </h3>
              </div>

              <div style={{ 
                opacity: isActive ? 1 : 0, 
                filter: isActive ? 'blur(0)' : 'blur(4px)',
                transform: isActive ? 'translateY(0)' : 'translateY(10px)', 
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1) 0.12s',
                height: isActive ? '80px' : 0,
                overflow: 'hidden',
                marginTop: isActive ? '1rem' : 0
              }}>
                <div style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 700, 
                  color: '#fff', 
                  lineHeight: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.2rem'
                }}>
                  <span>
                    {tab.subLine1Prefix}
                    {tab.uiType === 'sync' && (
                      <span style={{ color: '#2cb742' }}>
                        <RollingCounter start={24} end={1} duration={1400} decimals={2} padStart={5} suffix=" second" isVisible={isVisible && isActive} />
                        {tab.subLine1Suffix}
                      </span>
                    )}
                    {tab.uiType === 'revenue' && <span>{tab.subLine1Suffix}</span>}
                    {tab.uiType === 'traffic' && (
                      <span style={{ color: '#2cb742' }}>
                        <RollingCounter start={0} end={10} duration={1200} suffix="x direct bookings" isVisible={isVisible && isActive} />
                      </span>
                    )}
                  </span>

                  <span style={{ color: T.body, fontWeight: 600 }}>
                    {tab.subLine2Prefix}
                    {tab.uiType === 'revenue' && (
                      <RollingCounter start={20} end={100} duration={1200} suffix="%" isVisible={isVisible && isActive} />
                    )}
                    {tab.subLine2Suffix}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Layout */}
      <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${T.border}`, borderRadius: '12px', backgroundColor: T.bg1, overflow: 'hidden', position: 'relative' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)`,
          backgroundSize: '40px 40px', pointerEvents: 'none', zIndex: 0
        }} />

        {tabs.map((tab, idx) => {
          const isActive = activeTab === idx;
          return (
            <div key={idx} style={{ borderBottom: idx !== tabs.length - 1 ? `1px solid ${T.border}` : 'none', position: 'relative', zIndex: 1 }}>
              <div 
                onClick={() => setActiveTab(idx)}
                style={{ padding: '1.5rem 1.2rem', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '0.5rem', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent', position: 'relative' }}
              >
                <span style={{ position: 'absolute', top: '1.6rem', right: '1.2rem', fontSize: '0.85rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>

                <div style={{ position: 'relative', minHeight: '2rem', paddingRight: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: T.sub, margin: 0, lineHeight: 1.4, position: 'absolute', top: 0, left: 0, opacity: isActive ? 0 : 1, transition: 'all 0.3s' }}>
                    {tab.closedTitle}
                  </h3>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.4, opacity: isActive ? 1 : 0, transition: 'all 0.3s' }}>
                    {tab.openTitlePrefix && <span>{tab.openTitlePrefix}</span>}
                    <span style={{ color: tab.uiType === 'traffic' ? '#555' : '#FF4D4D', fontWeight: 800 }}>{tab.openTitleAccent}</span>
                    <span>{tab.openTitleSuffix}</span>
                  </h3>
                </div>
              </div>
              
              <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                <div style={{ padding: '0 1.2rem 1.5rem 1.2rem' }}>
                  {isActive && (
                    <div style={{ 
                      fontSize: '1.05rem', fontWeight: 700, color: '#fff', lineHeight: 1.5,
                      display: 'flex', flexDirection: 'column', gap: '0.3rem',
                      animation: 'fadeInBlurAhead 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards'
                    }}>
                      <span>
                        {tab.subLine1Prefix}
                        {tab.uiType === 'sync' && <span style={{ color: '#2cb742' }}><RollingCounter start={24} end={1} duration={1400} decimals={2} padStart={5} suffix=" second" isVisible={isVisible && isActive} /></span>}
                        {tab.uiType === 'revenue' && <span>{tab.subLine1Suffix}</span>}
                        {tab.uiType === 'traffic' && <span style={{ color: '#2cb742' }}><RollingCounter start={0} end={10} duration={1200} suffix="x direct bookings" isVisible={isVisible && isActive} /></span>}
                      </span>
                      <span style={{ color: T.body, fontWeight: 600 }}>
                        {tab.subLine2Prefix}
                        {tab.uiType === 'revenue' && <RollingCounter start={20} end={100} duration={1200} suffix="%" isVisible={isVisible && isActive} />}
                        {tab.subLine2Suffix}
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
        @keyframes fadeInBlurAhead {
          from { opacity: 0; filter: blur(3px); transform: translateY(6px); }
          to { opacity: 1; filter: blur(0); transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
