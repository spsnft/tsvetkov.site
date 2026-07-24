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
          .hero-grid { grid-template-columns: 1.05fr 0.95fr; gap: 3.5rem; align-items: center; }
          .hero-left { align-items: flex-start; text-align: left; }
          .hero-right { 
            display: flex; 
            width: 100%; 
            height: 100%;
            min-height: 420px;
            align-items: center;
            justify-content: center;
            perspective: 1200px;
          }
        }

        /* --- 3D ENGINE VISUAL (RED -> BLUE -> GREEN) --- */
        .engine-scene {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 380px;
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateY(-16deg) rotateZ(3deg);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-right:hover .engine-scene {
          transform: rotateX(14deg) rotateY(-8deg) rotateZ(1deg) scale(1.02);
        }

        .engine-layer {
          position: absolute;
          width: 100%;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 18px;
          padding: 1.25rem 1.4rem;
          box-sizing: border-box;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }

        /* 1. НИЖНИЙ СЛОЙ (КРАСНЫЙ): Проблема / Хаос / Потери */
        .layer-base {
          bottom: 0;
          height: 110px;
          transform: translateZ(0px);
          background: rgba(28, 12, 16, 0.85);
          border: 1px solid rgba(239, 68, 68, 0.3);
          box-shadow: 
            -12px 24px 40px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(239, 68, 68, 0.08);
        }

        /* 2. СРЕДНИЙ СЛОЙ (СИНИЙ): Починка / Инженерия / Архитектура */
        .layer-middle {
          bottom: 90px;
          height: 125px;
          transform: translateZ(45px);
          background: rgba(10, 18, 30, 0.88);
          border: 1px solid rgba(0, 163, 255, 0.35);
          box-shadow: 
            -14px 28px 45px rgba(0, 0, 0, 0.65),
            0 0 25px rgba(0, 163, 255, 0.12);
        }

        /* 3. ВЕРХНИЙ СЛОЙ (ЗЕЛЕНЫЙ): Результат / Прибыль / Рост */
        .layer-top {
          bottom: 185px;
          height: 145px;
          transform: translateZ(90px);
          background: rgba(12, 24, 20, 0.92);
          border: 1px solid rgba(0, 229, 153, 0.45);
          box-shadow: 
            -18px 35px 55px rgba(0, 0, 0, 0.7),
            0 0 35px rgba(0, 229, 153, 0.18),
            inset 0 1px 1px rgba(255, 255, 255, 0.3);
        }

        .hero-right:hover .layer-base { transform: translateZ(-10px); }
        .hero-right:hover .layer-middle { transform: translateZ(55px); }
        .hero-right:hover .layer-top { transform: translateZ(125px); }

        .layer-tag {
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tag-red { color: #EF4444; }
        .tag-blue { color: #38BDF8; }
        .tag-green { color: ${T.accent}; }

        .nodes-grid {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.6rem;
        }

        .node-chip {
          flex: 1;
          border-radius: 6px;
          padding: 0.45rem 0.3rem;
          font-size: 0.7rem;
          text-align: center;
          font-weight: 600;
          white-space: nowrap;
        }

        .chip-red {
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #FCA5A5;
        }

        .chip-blue {
          background: rgba(0, 163, 255, 0.08);
          border: 1px solid rgba(0, 163, 255, 0.25);
          color: #7DD3FC;
        }

        .pulse-light {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.accent};
          box-shadow: 0 0 10px ${T.accent};
          animation: blink 1.8s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      {/* ФОНОВОЕ СВЕЧЕНИЕ */}
      <div style={{ 
        position: 'absolute', 
        top: '0%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '650px', 
        height: '450px', 
        borderRadius: '50%', 
        background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`, 
        opacity: 0.5, 
        zIndex: 2, 
        pointerEvents: 'none' 
      }} />

      <div className="hero-grid">
        <motion.div className="hero-left" style={{ y, opacity }}>
          
          {/* БЕЙДЖ ПО СТАНДАРТУ */}
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

          <a href="#contact" className="btn-premium-core">
            Audit My Business
          </a>
        </motion.div>

        {/* ПРАВАЯ КОЛОНКА (3D ENGINE: RED -> BLUE -> GREEN) */}
        <div className="hero-right">
          <div className="engine-scene">
            
            {/* 1. Слой 1 (КРАСНЫЙ): Хаос и утечки */}
            <div className="engine-layer layer-base">
              <div className="layer-tag tag-red">
                <span>01. SYSTEM CHAOS & LEAKAGE</span>
                <span style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>HIGH RISK</span>
              </div>
              <div className="nodes-grid">
                <div className="node-chip chip-red">Disjointed Ads</div>
                <div className="node-chip chip-red">Manual CRM</div>
                <div className="node-chip chip-red">Lost Margin</div>
              </div>
            </div>

            {/* 2. Слой 2 (СИНИЙ): Процесс починки и архитектура */}
            <div className="engine-layer layer-middle">
              <div className="layer-tag tag-blue">
                <span>02. ARCHITECTURE & OPTIMIZATION</span>
                <div className="pulse-light" />
              </div>
              <div className="nodes-grid">
                <div className="node-chip chip-blue">E2E Analytics</div>
                <div className="node-chip chip-blue">Auto-Funnels</div>
                <div className="node-chip chip-blue">Unit Economics</div>
              </div>
            </div>

            {/* 3. Слой 3 (ЗЕЛЕНЫЙ): Результат и прибыль */}
            <div className="engine-layer layer-top">
              <div className="layer-tag tag-green">
                <span>03. SYSTEMIC SCALE & PROFIT</span>
                <span style={{ background: 'rgba(0, 229, 153, 0.15)', padding: '2px 6px', borderRadius: '4px' }}>ACTIVE</span>
              </div>
              <div style={{ 
                fontSize: '1.85rem', 
                fontWeight: 800, 
                letterSpacing: '-0.02em', 
                background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`, 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                margin: '0.2rem 0'
              }}>
                5.2x Average ROI
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 500 }}>
                Predictable Revenue • <strong style={{ color: '#fff' }}>Zero Traffic Leakage</strong>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
