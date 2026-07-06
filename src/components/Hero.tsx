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
        padding: 'clamp(5rem,12vw,9rem) 1rem clamp(4rem,8vw,6rem)',
        transform: 'translate3d(0, 0, 0)', WebkitTransform: 'translate3d(0, 0, 0)',
      }}
    >
      <style>{`
        .hero-grid {
          display: grid; grid-template-columns: 1fr; gap: 3rem; width: 100%; max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 4;
        }
        .hero-left { display: flex; flex-direction: column; align-items: center; text-align: center; }
        
        /* Правая колонка: Кибер-терминал */
        .hero-right { display: none; }
        .scroll-indicator { position: absolute; bottom: 3rem; display: flex; } 
        
        .dt-only { display: inline; }
        .mb-only { display: none; }
        
        @media (max-width: 967px) {
          .dt-only { display: none; }
          .mb-only { display: inline; white-space: nowrap; }
        }
        
        @media (min-width: 968px) {
          .hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: center; }
          .hero-left { align-items: flex-start; text-align: left; }
          .hero-right { display: flex; width: 100%; }
          .scroll-indicator { display: none !important; }
        }

        /* Окно терминала с эффектом стеклянного прибора */
        .terminal-box {
          position: relative; width: 100%;
          background: rgba(10, 10, 12, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px;
          box-sizing: border-box; overflow: hidden;
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03);
        }

        /* Анимация бегущей строки логов консоли */
        .log-stream {
          display: flex; flex-direction: column; gap: 6px;
          animation: scrollLogs 18s linear infinite;
        }

        @keyframes scrollLogs {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        /* Мерцание курсора терминала */
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
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`, opacity: 0.5, zIndex: 2, pointerEvents: 'none' }} />

      <div className="hero-grid">
        <motion.div className="hero-left" style={{ y, opacity }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, marginBottom: '2rem', fontSize: 10, fontWeight: 700, color: T.accent, background: 'rgba(0,255,179,0.05)', border: `1px solid ${T.accent}20`, letterSpacing: '0.15em' }}>
            TSVETKOV <div style={{ width: 5, height: 5, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} /> FOUNDER-LED AGENCY
          </span>

          <h1 style={{ fontSize: 'clamp(2.1rem,6.5vw,4.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', color: '#fff', marginBottom: '2rem' }}>
            Value Growth<br />
            <span style={{ background: `linear-gradient(135deg,${T.accent} 0%,${T.acc2} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Engineered to Scale</span>
          </h1>

          <div style={{ fontSize: 'clamp(1rem,2vw,1.1rem)', color: T.body, fontWeight: 500, lineHeight: 1.8, marginBottom: '3rem', maxWidth: 520 }}>
            <span style={{ display: 'block' }}>
              <span className="dt-only">We eliminate chaos in marketing and digital systems</span>
              <span className="mb-only">We eliminate marketing & digital chaos</span>
            </span>
            <span style={{ display: 'block' }}>No fluff — just high-performance architectures</span>
            <span style={{ display: 'block' }}>Track every dollar and automate sales flow</span>
          </div>

          <a href="#contact" style={{ 
            display: 'inline-flex', padding: '16px 36px', borderRadius: 12, 
            background: `linear-gradient(135deg,${T.accent},${T.acc2})`, 
            color: '#0A0A0C', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' 
          }}>
            Audit My Business
          </a>
        </motion.div>

        {/* ПРАВАЯ КОЛОНКА (ПК) — КИБЕР-ТЕРМИНАЛ С УПРАВЛЕНИЕМ ПОТОКАМИ */}
        <div className="hero-right">
          <div className="terminal-box">
            
            {/* Хедер окна терминала (Mac Style Dots) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444', opacity: 0.4 }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B', opacity: 0.4 }} />
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', opacity: 0.4 }} />
              </div>
              <span style={{ fontFamily: 'monospace', fontSize: 10, color: T.muted, letterSpacing: '0.05em' }}>
                feedia@tsvetkov: ~/growth-core
              </span>
              <div style={{ width: 24 }} />
            </div>

            {/* Тело терминала */}
            <div style={{ padding: '1.25rem' }}>
              
              {/* Секция 1: Живой графический монитор (Интеграция ROAS) */}
              <div style={{ marginBottom: '1.25rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.03)', borderRadius: 8, padding: '1rem 1rem 0.5rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', fontSize: 9, color: T.muted, marginBottom: '0.75rem' }}>
                  <span>METRIC: SCALE_VELOCITY</span>
                  <span style={{ color: T.accent, fontWeight: 700 }}>ROAS +214.8%</span>
                </div>
                
                {/* Векторный живой неоновый график */}
                <div style={{ width: '100%', height: '80px' }}>
                  <svg width="100%" height="100%" viewBox="0 0 340 80" preserveAspectRatio="none" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={T.accent} stopOpacity="0.15" />
                        <stop offset="100%" stopColor={T.accent} stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Градиентная подложка */}
                    <path d="M 0 70 Q 40 65 80 50 T 160 55 T 240 25 T 340 5 L 340 80 L 0 80 Z" fill="url(#chartGlow)" />
                    {/* Сетка монитора */}
                    <line x1="0" y1="25" x2="340" y2="25" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="4,4" />
                    <line x1="0" y1="50" x2="340" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="4,4" />
                    {/* Главная светящаяся траектория */}
                    <motion.path 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      d="M 0 70 Q 40 65 80 50 T 160 55 T 240 25 T 340 5" 
                      stroke={`linear-gradient(90deg, ${T.accent}, ${T.acc2})`}
                      strokeWidth="2" 
                      fill="none" 
                      style={{ stroke: T.accent, filter: `drop-shadow(0 0 6px ${T.accent})` }}
                    />
                    {/* Финальная пульсирующая точка */}
                    <circle cx="340" cy="5" r="3" fill="#fff" style={{ filter: `drop-shadow(0 0 8px ${T.accent})` }} />
                  </svg>
                </div>
              </div>

              {/* Секция 2: Поток системных логов */}
              <div style={{ height: '110px', overflow: 'hidden', position: 'relative', background: 'rgba(0,0,0,0.15)', borderRadius: 8, padding: '0.75rem 1rem' }}>
                {/* Эффект затухания логов сверху и снизу */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, #0C0C0F 0%, transparent 15%, transparent 85%, #0C0C0F 100%)', zIndex: 2, pointerEvents: 'none' }} />
                
                <div className="log-stream">
                  {/* Дублируем массив дважды для бесшовного зацикливания */}
                  {[...Array(2)].map((_, outerIdx) => (
                    <React.Fragment key={outerIdx}>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted }}>
                        <span style={{ color: T.accent }}>[init]</span> Establishing end-to-end analytics sync...
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>
                        <span style={{ color: '#10B981' }}>[ok]</span> CRM synchronized across 3 departments
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted }}>
                        <span style={{ color: T.acc2 }}>[calib]</span> Restructuring auction bidding logic
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#fff', fontWeight: 600 }}>
                        <span style={{ color: T.accent }}>[data]</span> Unit economics matched to true net margin
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted }}>
                        <span style={{ color: T.accent }}>[proc]</span> Deploying behavior-driven targeting vectors
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.8)' }}>
                        <span style={{ color: '#10B981' }}>[ok]</span> Traffic leakage eliminated completely
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.muted }}>
                        <span style={{ color: T.acc2 }}>[scale]</span> Omnichannel funnels: ACTIVE // 40+ markets
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: 11, color: T.accent, fontWeight: 700 }}>
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

      {/* Скролл */}
      <div className="scroll-indicator" style={{ flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10 }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: T.muted }}>SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${T.accent}, transparent)` }} />
      </div>
    </section>
  );
};
