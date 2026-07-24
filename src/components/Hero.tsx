'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Hero = () => {
  return (
    <section
      style={{
        width: '100%',
        position: 'relative',
        paddingTop: 'clamp(4rem, 8vw, 8rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
        background: 'transparent',
        overflow: 'hidden',
      }}
    >
      <style jsx>{`
        /* Стили для Glassmorphic CTA кнопки */
        .btn-glass-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0.9rem 1.8rem;
          border-radius: 14px;
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid rgba(0, 229, 153, 0.4);
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
          text-decoration: none;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 0 20px rgba(0, 0, 229, 153, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .btn-glass-cta:hover {
          background: rgba(0, 229, 153, 0.16);
          border-color: rgba(0, 229, 153, 0.8);
          box-shadow: 0 0 30px rgba(0, 229, 153, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4);
          transform: translateY(-2px);
        }

        .btn-glass-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        .cta-arrow {
          transition: transform 0.25s ease;
        }

        /* --- 3D ИЗОМЕТРИЧЕСКИЙ ДВИЖОК --- */
        .3d-perspective-wrapper {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          min-height: 400px;
        }

        .engine-scene {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 380px;
          transform-style: preserve-3d;
          transform: rotateX(20deg) rotateY(-16deg) rotateZ(3deg);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .3d-perspective-wrapper:hover .engine-scene {
          transform: rotateX(14deg) rotateY(-8deg) rotateZ(1deg) scale(1.02);
        }

        .layer-card-3d {
          position: absolute;
          width: 100%;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 18px;
          padding: 1.25rem 1.4rem;
          box-sizing: border-box;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }

        /* Слой 1: PROBLEM (Красный - Низ) */
        .layer-base {
          bottom: 0;
          height: 110px;
          transform: translateZ(0px);
          background: rgba(24, 12, 14, 0.88);
          border: 1px solid rgba(239, 68, 68, 0.3);
          box-shadow: 
            -12px 24px 40px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(239, 68, 68, 0.08);
          z-index: 1;
        }

        /* Слой 2: PROCESS (Синий - Центр) */
        .layer-middle {
          bottom: 90px;
          height: 125px;
          transform: translateZ(45px);
          background: rgba(10, 18, 30, 0.9);
          border: 1px solid rgba(0, 163, 255, 0.35);
          box-shadow: 
            -14px 28px 45px rgba(0, 0, 0, 0.65),
            0 0 25px rgba(0, 163, 255, 0.12);
          z-index: 2;
        }

        /* Слой 3: RESULT (Зеленый - Верх) */
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
          z-index: 3;
        }

        .3d-perspective-wrapper:hover .layer-base { transform: translateZ(-10px); }
        .3d-perspective-wrapper:hover .layer-middle { transform: translateZ(55px); }
        .3d-perspective-wrapper:hover .layer-top { transform: translateZ(125px); }

        /* Чипы систем */
        .chip {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          white-space: nowrap;
        }
      `}</style>

      {/* ФОНОВОЕ СВЕЧЕНИЕ */}
      <div
        style={{
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
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 4,
        }}
      >
        {/* ЛЕВАЯ КОЛОНКА: Смысловой оффер */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Верхний бейдж */}
          <div style={{ marginBottom: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: T.accent,
                background: 'rgba(0, 229, 153, 0.08)',
                padding: '5px 12px',
                borderRadius: 20,
                border: '1px solid rgba(0, 229, 153, 0.25)',
              }}
            >
              TSVETKOV • FOUNDER-LED AGENCY
            </span>
          </div>

          {/* H1 Заголовок */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              color: '#fff',
              margin: '0 0 1.5rem 0',
            }}
          >
            Value Growth<br />
            <span
              style={{
                background: `linear-gradient(135deg, ${T.accent} 0%, ${T.acc2} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 20px rgba(0, 229, 153, 0.2))',
              }}
            >
              Engineered to Scale
            </span>
          </h1>

          {/* Дескриптор с ритмом и буллитами */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: T.sub }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>We eliminate chaos in <strong style={{ color: '#fff' }}>marketing and digital systems</strong></span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: T.sub }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>No fluff — just <strong style={{ color: '#fff' }}>high-performance architectures</strong></span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.95rem', color: T.sub }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Track every dollar and <strong style={{ color: '#fff' }}>automate sales flow</strong></span>
            </div>
          </div>

          {/* Glassmorphic CTA */}
          <a href="#contact" className="btn-glass-cta">
            <span>Audit My Business</span>
            <svg className="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </motion.div>

        {/* ПРАВАЯ КОЛОНКА: 3D Изометрический Engine */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="3d-perspective-wrapper"
        >
          <div className="engine-scene">
            {/* СЛОЙ 1: PROBLEM (Красный) */}
            <div className="layer-card-3d layer-base">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: '#EF4444', textTransform: 'uppercase' }}>
                  01. SYSTEM CHAOS & LEAKAGE
                </span>
                <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#EF4444', background: 'rgba(239, 68, 68, 0.12)', padding: '2px 6px', borderRadius: 4, border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  HIGH RISK
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="chip" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#FCA5A5' }}>
                  Disjointed Ads
                </span>
                <span className="chip" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#FCA5A5' }}>
                  Manual CRM
                </span>
                <span className="chip" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#FCA5A5' }}>
                  Lost Margin
                </span>
              </div>
            </div>

            {/* СЛОЙ 2: PROCESS (Синий) */}
            <div className="layer-card-3d layer-middle">
              <div style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: '#38BDF8', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                02. ARCHITECTURE & OPTIMIZATION
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="chip" style={{ background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.25)', color: '#7DD3FC' }}>
                  E2E Analytics
                </span>
                <span className="chip" style={{ background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.25)', color: '#7DD3FC' }}>
                  Auto-Funnels
                </span>
                <span className="chip" style={{ background: 'rgba(0, 163, 255, 0.12)', border: '1px solid rgba(0, 163, 255, 0.25)', color: '#7DD3FC' }}>
                  Unit Economics
                </span>
              </div>
            </div>

            {/* СЛОЙ 3: RESULT (Зеленый) */}
            <div className="layer-card-3d layer-top">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: T.accent, textTransform: 'uppercase' }}>
                  03. SYSTEMIC SCALE & PROFIT
                </span>
              </div>

              <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                5.2x <span style={{ color: T.accent }}>Average ROI</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 500 }}>
                Predictable Revenue • Zero Traffic Leakage
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
