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
        
        /* Правая колонка: Карта потоков данных */
        .hero-right { display: none; }
        .scroll-indicator { position: absolute; bottom: 3rem; display: flex; } 
        
        .dt-only { display: inline; }
        .mb-only { display: none; }
        
        @media (max-width: 967px) {
          .dt-only { display: none; }
          .mb-only { display: inline; white-space: nowrap; }
        }
        
        @media (min-width: 968px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr; gap: 4rem; align-items: center; }
          .hero-left { align-items: flex-start; text-align: left; }
          .hero-right { display: flex; width: 100%; }
          .scroll-indicator { display: none !important; }
        }

        /* Высокотехнологичная интерактивная карточка-планшет */
        .blueprint-card {
          position: relative; width: 100%;
          background: linear-gradient(135deg, rgba(12, 12, 15, 0.7) 0%, rgba(255, 255, 255, 0.01) 100%);
          border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 20px;
          padding: 1.5rem; box-sizing: border-box; overflow: hidden;
          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02);
          background-image: 
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        /* Бегущие линии передачи информации */
        .flow-line {
          animation: flowAnimation 1.5s linear infinite;
        }

        @keyframes flowAnimation {
          to {
            stroke-dashoffset: -18;
          }
        }

        /* Пульсация узлов накопления */
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.6); opacity: 0.7; }
        }
      `}</style>

      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`, opacity: 0.6, zIndex: 2, pointerEvents: 'none' }} />

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

        {/* ПРАВАЯ КОЛОНКА (ПК) — СИСТЕМНАЯ АРХИТЕКТУРА И КАРТА ПОТОКОВ */}
        <div className="hero-right">
          <div className="blueprint-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontFamily: 'monospace', fontSize: 10, color: T.muted }}>
              <span>SYSTEM_ARCHITECTURE: ONLINE</span>
              <span style={{ color: T.accent, display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} />
                LIVE_FLOW
              </span>
            </div>

            <div style={{ position: 'relative', width: '100%', height: '260px' }}>
              <svg width="100%" height="100%" viewBox="0 0 400 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
                
                {/* Статические фоновые трубопроводы */}
                <path d="M 55 130 L 200 65 M 55 130 L 200 195 M 200 65 L 345 130 M 200 195 L 345 130" stroke="rgba(255,255,255,0.03)" strokeWidth="3" fill="none" />
                
                {/* Живые пульсирующие потоки трафика и лидов */}
                <path className="flow-line" d="M 55 130 L 200 65" stroke={T.accent} strokeWidth="1.5" strokeDasharray="6, 12" fill="none" opacity="0.7" />
                <path className="flow-line" d="M 55 130 L 200 195" stroke={T.accent} strokeWidth="1.5" strokeDasharray="6, 12" fill="none" opacity="0.7" />
                <path className="flow-line" d="M 200 65 L 345 130" stroke={T.acc2} strokeWidth="1.5" strokeDasharray="6, 12" fill="none" opacity="0.7" />
                <path className="flow-line" d="M 200 195 L 345 130" stroke={T.acc2} strokeWidth="1.5" strokeDasharray="6, 12" fill="none" opacity="0.7" />

                {/* Свечение на пересечениях */}
                <circle cx="55" cy="130" r="12" fill={`${T.accent}05`} style={{ transformOrigin: '55px 130px', animation: 'pulseDot 2s infinite ease-in-out' }} />
                <circle cx="345" cy="130" r="16" fill={`${T.acc2}08`} style={{ transformOrigin: '345px 130px', animation: 'pulseDot 2.5s infinite ease-in-out' }} />

                {/* NODE 1: Входной поток (Хаос трафика) */}
                <g transform="translate(15, 110)">
                  <rect width="80" height="40" rx="6" fill="#0C0C0F" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                  <rect width="4" height="40" rx="2" fill={T.accent} />
                  <text x="12" y="18" fill={T.muted} fontSize="8" fontWeight="700" fontFamily="monospace">SOURCE</text>
                  <text x="12" y="29" fill="#fff" fontSize="10" fontWeight="800" fontFamily="monospace">INBOUND</text>
                </g>

                {/* NODE 2: CRM & Сквозная аналитика */}
                <g transform="translate(150, 45)">
                  <rect width="100" height="40" rx="6" fill="#0C0C0F" stroke={`${T.accent}30`} strokeWidth="1" style={{ filter: `drop-shadow(0 0 8px ${T.accent}10)` }} />
                  <circle cx="12" cy="20" r="3" fill={T.accent} />
                  <text x="24" y="18" fill={T.accent} fontSize="8" fontWeight="700" fontFamily="monospace">PROCESSING</text>
                  <text x="24" y="29" fill="#fff" fontSize="10" fontWeight="800" fontFamily="monospace">CRM & SYNC</text>
                </g>

                {/* NODE 3: Инфраструктурная автоматизация */}
                <g transform="translate(150, 175)">
                  <rect width="100" height="40" rx="6" fill="#0C0C0F" stroke={`${T.accent}30`} strokeWidth="1" style={{ filter: `drop-shadow(0 0 8px ${T.accent}10)` }} />
                  <circle cx="12" cy="20" r="3" fill={T.accent} />
                  <text x="24" y="18" fill={T.accent} fontSize="8" fontWeight="700" fontFamily="monospace">ROUTING</text>
                  <text x="24" y="29" fill="#fff" fontSize="10" fontWeight="800" fontFamily="monospace">AUTOMATION</text>
                </g>

                {/* NODE 4: Маржа бизнеса (Выходной контролируемый узел) */}
                <g transform="translate(305, 110)">
                  <rect width="85" height="40" rx="6" fill="#0C0C0F" stroke={`${T.acc2}40`} strokeWidth="1" style={{ filter: `drop-shadow(0 0 12px ${T.acc2}15)` }} />
                  <rect x="81" y="0" width="4" height="40" rx="2" fill={T.acc2} />
                  <text x="10" y="18" fill={T.acc2} fontSize="8" fontWeight="700" fontFamily="monospace">OUTPUT</text>
                  <text x="10" y="29" fill="#fff" fontSize="10" fontWeight="800" fontFamily="monospace">NET MARGIN</text>
                </g>

              </svg>
            </div>
            
            {/* Логи состояния терминала */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.03)', fontFamily: 'monospace', fontSize: 9, color: T.muted }}>
              <span style={{ color: T.accent }}>[OK] CAPTURE_ACTIVE</span>
              <span>[INTEGRATION]: 100%</span>
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
