'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        // Отступ от шапки (64px) без гигантских дыр
        paddingTop: 'calc(64px + clamp(1rem, 2.5vw, 2rem))',
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
      }}
    >
      <style>{`
        .hero-grid {
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 2.5rem; 
          width: 100%; 
          max-width: 1200px; 
          margin: 0 auto;
          position: relative; 
          z-index: 4;
        }
        .hero-left { display: flex; flex-direction: column; align-items: center; text-align: center; }
        
        .hero-right { display: none; }
        
        .dt-only { display: inline; }
        .mb-only { display: none; }
        
        @media (max-width: 967px) {
          .dt-only { display: none; }
          .mb-only { display: inline; white-space: nowrap; }
        }
        
        @media (min-width: 968px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 3.5rem; align-items: center; }
          .hero-left { align-items: flex-start; text-align: left; }
          .hero-right { display: flex; width: 100%; }
        }

        /* Окно терминала в едином стиле HMS */
        .terminal-box {
          position: relative; width: 100%; height: 100%; min-height: 380px;
          background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.03) 0%, rgba(12, 14, 20, 0.85) 75%);
          border: 1px solid rgba(255, 255, 255, 0.08); 
          border-radius: 20px;
          box-sizing: border-box; overflow: hidden;
          backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1);
          display: flex; flex-direction: column;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          color: #0A0A0E;
          padding: 0 2.2rem;
          border-radius: 10px;
          font-weight: 800;
          letter-spacing: 0.01em;
          text-decoration: none;
          font-size: 1rem;
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

      {/* ФОНОВОЕ СВЕЧЕНИЕ */}
      <div style={{ position: 'absolute', top: '0%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '400px', borderRadius: '50%', background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`, opacity: 0.5, zIndex: 2, pointerEvents: 'none' }} />

      <div className="hero-grid">
        <motion.div className="hero-left" style={{ y, opacity }}>
          
          {/* ЕДИНЫЙ БЕЙДЖ ПО СТАНДАРТУ */}
          <span style={{ 
            display: 'inline-flex', alignItems: 'center', gap: 8, 
            padding: '0.35rem 0.85rem', borderRadius: 20, marginBottom: '1.25rem', 
            fontSize: '0.7rem', fontWeight: 600, color: T.accent, 
            background: 'rgba(0, 229, 153, 0.05)', border: `1px solid rgba(0, 229, 153, 0.2)`, 
            letterSpacing: '0.15em', textTransform: 'uppercase', backdropFilter: 'blur(8px)' 
          }}>
            TSVETKOV <div style={{ width: 5, height: 5, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} /> FOUNDER-LED AGENCY
          </span>

          <h1 style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', marginBottom: '1.25rem' }}>
            Value Growth<br />
            <span style={{ background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Engineered to Scale
            </span>
          </h1>

          <div style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: T.sub, fontWeight: 400, lineHeight: 1.6, marginBottom: '2rem', maxWidth: 520 }}>
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

            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'space-between' }}>
              
              <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '1rem 1.25rem 0.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 9, color: T.muted }}>
                  <span>TRACKER: MARKETING_ROI</span>
                  <span style={{ color: T.accent, fontWeight: 700, letterSpacing: '0.05em' }}>ROI: 5.2X AVERAGE</span>
                </div>
                
                <div style={{ width: '100%', height: '100px', marginTop: '0.5rem' }}>
                  <svg width="100%" height="100%" viewBox="0 0 340 100" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={T.accent} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={T.accent} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M 0 90 Q 40 80 80 60 T 160 65 T 240 30 T 340 10 L 340 90 L 0 90 Z" fill="url(#chartGlow)" />
                    <line x1="0" y1="30" x2="340" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="0" y1="60" x2="340" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4,4" />
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      d="M 0 90 Q 40 80 80 60 T 160 65 T 240 30 T 340 10" 
                      strokeWidth="2.5" 
                      fill="none" 
                      style={{ stroke: T.accent, filter: `drop-shadow(0 0 8px ${T.accent})` }}
                    />
                    <circle cx="340" cy="10" r="3.5" fill="#fff" style={{ filter: `drop-shadow(0 0 10px ${T.accent})` }} />
                  </svg>
                </div>
              </div>

              <div style={{ height: '110px', overflow: 'hidden', position: 'relative', background: 'rgba(0,0,0,0.2)', borderRadius: 12, padding: '0.75rem 1rem' }}>
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
    </section>
  );
};
