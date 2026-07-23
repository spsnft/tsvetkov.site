'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(6rem,12vw,9rem) 1rem clamp(4rem,8vw,6rem)',
        transform: 'translate3d(0, 0, 0)', WebkitTransform: 'translate3d(0, 0, 0)',
      }}
    >
      <style>{`
        .hero-grid {
          display: grid; grid-template-columns: 1fr; gap: 3rem; width: 100%; max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 4;
        }
        .hero-left { display: flex; flex-direction: column; align-items: center; text-align: center; }
        
        .hero-right { display: none; }
        .scroll-indicator { position: absolute; bottom: 2.5rem; display: flex; } 
        
        .dt-only { display: inline; }
        .mb-only { display: none; }
        
        @media (max-width: 967px) {
          .dt-only { display: none; }
          .mb-only { display: inline; white-space: nowrap; }
        }
        
        @media (min-width: 968px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: stretch; }
          .hero-left { align-items: flex-start; text-align: left; justify-content: center; }
          .hero-right { display: flex; width: 100%; }
          .scroll-indicator { display: none !important; }
        }

        /* Окно терминала в стиле Bento Card / HMS */
        .terminal-box {
          position: relative; width: 100%; height: 100%;
          background: rgba(12, 14, 20, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1); 
          border-radius: 20px;
          box-sizing: border-box; overflow: hidden;
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.12);
          display: flex; flex-direction: column;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 54px;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #0A0A0E;
          padding: 0 2.4rem;
          border-radius: 10px;
          font-weight: 800;
          letter-spacing: 0.01em;
          text-decoration: none;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          box-shadow: 0 4px 20px rgba(0, 229, 153, 0.25);
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 229, 153, 0.45);
        }

        .log-stream {
          display: flex; flex-direction: column; gap: 6px;
          animation: scrollLogs 20s linear infinite;
        }

        @keyframes scrollLogs {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .terminal-cursor {
          display: inline-block; width: 6px; height: 12px; background: ${T.accent};
          animation: blinkCursor 1s step-end infinite;
          vertical-align: middle; margin-left: 4px;
        }

        @keyframes blinkCursor {
          from, to { background-color: transparent }
          50% { background-color: ${T.accent} }
        }
      `}</style>

      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`, opacity: 0.6, zIndex: 2, pointerEvents: 'none' }} />

      <div className="hero-grid">
        <motion.div className="hero-left" style={{ y, opacity }}>
          
          {/* КАПСУЛА В СТИЛЕ HMS */}
          <span style={{ 
            display: 'inline-flex', alignItems: 'center', gap: 8, 
            padding: '0.35rem 0.85rem', borderRadius: 20, marginBottom: '1.5rem', 
            fontSize: '0.7rem', fontWeight: 600, color: T.accent, 
            background: 'rgba(0, 229, 153, 0.05)', border: `1px solid rgba(0, 229, 153, 0.2)`, 
            letterSpacing: '0.15em', textTransform: 'uppercase', backdropFilter: 'blur(8px)' 
          }}>
            TSVETKOV <div style={{ width: 5, height: 5, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} /> FOUNDER-LED AGENCY
          </span>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.5rem' }}>
            Value Growth<br />
            <span style={{ background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Engineered to Scale
            </span>
          </h1>

          <div style={{ fontSize: 'clamp(1.05rem, 1.7vw, 1.2rem)', color: '#CBD5E1', fontWeight: 400, lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: 520 }}>
            <span style={{ display: 'block' }}>
              <span className="dt-only">We eliminate chaos in marketing and digital systems</span>
              <span className="mb-only">We eliminate marketing & digital chaos</span>
            </span>
            <span style={{ display: 'block' }}>No fluff — just high-performance architectures</span>
            <span style={{ display: 'block' }}>Track every dollar and automate sales flow</span>
          </div>

          <a href="#contact" className="btn-primary-hero">
            Audit My Business
          </a>
        </motion.div>

        {/* ПРАВАЯ КОЛОНКА (КИБЕР-ТЕРМИНАЛ) */}
        <div className="hero-right">
          <div className="terminal-box">
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', opacity: 0.6 }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B', opacity: 0.6 }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', opacity: 0.6 }} />
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: T.muted, letterSpacing: '0.05em' }}>
                fedor@tsvetkov.site: ~/performance-core
              </span>
              <div style={{ width: 24 }} />
            </div>

            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'space-between' }}>
              
              <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '1.25rem 1.25rem 0.75rem', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 9, color: T.muted }}>
                  <span>TRACKER: MARKETING_ROI</span>
                  <span style={{ color: T.accent, fontWeight: 700, letterSpacing: '0.05em' }}>ROI: 5.2X AVERAGE</span>
                </div>
                
                <div style={{ width: '100%', height: '110px', marginTop: '1rem' }}>
                  <svg width="100%" height="100%" viewBox="0 0 340 110" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={T.accent} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={T.accent} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 100 Q 40 90 80 70 T 160 75 T 240 35 T 340 10 L 340 110 L 0 110 Z" fill="url(#chartGlow)" />
                    <line x1="0" y1="35" x2="340" y2="35" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="0" y1="70" x2="340" y2="70" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,4" />
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      d="M 0 100 Q 40 90 80 70 T 160 75 T 240 35 T 340 10" 
                      strokeWidth="2.5" 
                      fill="none" 
                      style={{ stroke: T.accent, filter: `drop-shadow(0 0 8px ${T.accent})` }}
                    />
                    <circle cx="340" cy="10" r="3.5" fill="#fff" style={{ filter: `drop-shadow(0 0 10px ${T.accent})` }} />
                  </svg>
                </div>
              </div>

              <div style={{ height: '120px', overflow: 'hidden', position: 'relative', background: 'rgba(0,0,0,0.2)', borderRadius: 12, padding: '0.75rem 1rem' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0C0E14 0%, transparent 15%, transparent 85%, #0C0E14 100%)', zIndex: 2, pointerEvents: 'none' }} />
                
                <div className="log-stream">
                  {[...Array(2)].map((_, outerIdx) => (
                    <React.Fragment key={outerIdx}>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted, lineHeight: 1.4 }}>
                        <span style={{ color: T.accent }}>[init]</span> Establishing end-to-end analytics sync...
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>
                        <span style={{ color: '#10B981' }}>[ok]</span> CRM synchronized across departments
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted, lineHeight: 1.4 }}>
                        <span style={{ color: T.acc2 }}>[calib]</span> Restructuring auction bidding logic
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#fff', fontWeight: 600, lineHeight: 1.4 }}>
                        <span style={{ color: T.accent }}>[data]</span> Unit economics matched to true net margin
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted, lineHeight: 1.4 }}>
                        <span style={{ color: T.accent }}>[proc]</span> Deploying behavior-driven targeting vectors
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>
                        <span style={{ color: '#10B981' }}>[ok]</span> Traffic leakage eliminated completely
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted, lineHeight: 1.4 }}>
                        <span style={{ color: T.acc2 }}>[scale]</span> Omnichannel scaling infrastructure: ACTIVE
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.accent, fontWeight: 700, lineHeight: 1.4 }}>
                        <span style={{ color: '#fff' }}>[system]</span> System architecture stabilized.<span className="terminal-cursor" />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" style={{ flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10 }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: T.muted }}>SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${T.accent}, transparent)` }} />
      </div>
    </section>
  );
};
