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
        position: 'relative', overflow: 'hidden', // Пункт 3: жесткая обрезка вылетающих пикселей
        padding: 'clamp(5rem,12vw,9rem) 1rem clamp(4rem,8vw,6rem)',
        transform: 'translate3d(0, 0, 0)', WebkitTransform: 'translate3d(0, 0, 0)', // Аппаратное ускорение
      }}
    >
      <style>{`
        .hero-grid {
          display: grid; grid-template-columns: 1fr; gap: 3rem; width: 100%; max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 4;
        }
        .hero-left { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .live-tracker { display: none; }
        
        /* Пункт 2: Смещение скролла выше на мобилке */
        .scroll-indicator { position: absolute; bottom: 3rem; display: flex; } 
        
        @media (min-width: 968px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }
          .hero-left { align-items: flex-start; text-align: left; }
          .live-tracker { display: flex; }
          .scroll-indicator { display: none !important; }
        }
      `}</style>

      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`, opacity: 0.6, zIndex: 2, pointerEvents: 'none' }} />

      <div className="hero-grid">
        <motion.div className="hero-left" style={{ y, opacity }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, marginBottom: '2rem', fontSize: 10, fontWeight: 700, color: T.accent, background: 'rgba(0,255,179,0.05)', border: `1px solid ${T.accent}20`, letterSpacing: '0.15em' }}>
            TSVETKOV <div style={{ width: 5, height: 5, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} /> FOUNDER-LED GROWTH AGENCY
          </span>

          <h1 style={{ fontSize: 'clamp(2.1rem,6.5vw,4.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', color: '#fff', marginBottom: '2rem' }}>
            Value Growth.<br />
            <span style={{ background: `linear-gradient(135deg,${T.accent} 0%,${T.acc2} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Engineered to Scale.</span>
          </h1>

          {/* Пункт 4: Разделение подзаголовка на строки */}
          <div style={{ fontSize: 'clamp(1rem,2vw,1.1rem)', color: T.sub, lineHeight: 1.8, marginBottom: '3rem', maxWidth: 520 }}>
            <span style={{ display: 'block' }}>We eliminate chaos in marketing and digital systems.</span>
            <span style={{ display: 'block', color: T.body, fontWeight: 500 }}>No fluff — just high-performance architectures.</span>
            <span style={{ display: 'block', color: T.body, fontWeight: 500 }}>Track every dollar and automate sales flow.</span>
          </div>

          {/* Пункт 1: Кнопка возвращена в исходный вид (градиент + текст) */}
          <a href="#contact" style={{ 
            display: 'inline-flex', padding: '16px 36px', borderRadius: 12, 
            background: `linear-gradient(135deg,${T.accent},${T.acc2})`, 
            color: '#0A0A0C', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' 
          }}>
            Audit My Business
          </a>
        </motion.div>

        {/* ПРАВАЯ КОЛОНКА (ПК) */}
        <div className="live-tracker">
          <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: 10, color: T.muted }}>
              <span>SYSTEM_STATUS: ONLINE</span>
              <span>LIVE_DATA</span>
            </div>
            {[
              { label: 'AD_SPEND', val: '$2.4M', sign: '▲' },
              { label: 'CAC_REDUCTION', val: '-42.6%', sign: '▼' },
              { label: 'AUTOMATION', val: '100%', sign: '◆' },
            ].map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                <span style={{ fontFamily: 'monospace', color: T.sub, fontSize: 12 }}>{m.label}</span>
                <span style={{ fontFamily: 'monospace', color: '#fff', fontSize: 12, fontWeight: 700 }}>{m.sign} {m.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Пункт 2: Скролл поднят выше */}
      <div className="scroll-indicator" style={{ flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10 }}>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.2em', color: T.muted }}>SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: 1, height: 32, background: `linear-gradient(to bottom, ${T.accent}, transparent)` }} />
      </div>
    </section>
  );
};
