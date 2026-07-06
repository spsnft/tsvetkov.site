'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Стейт для интерактивного наклона ядра мышкой
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Расчет движения мыши для интерактивного 3D-наклона
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const box = cardRef.current.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotateX(-y * 0.08); // Угол наклона по вертикали
    setRotateY(x * 0.08);  // Угол наклона по горизонтали
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

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
        
        /* Правая колонка с 3D ядром */
        .hero-right { display: none; position: relative; width: 100%; height: 420px; justify-content: center; align-items: center; }
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
          .hero-right { display: flex; }
          .scroll-indicator { display: none !important; }
        }

        /* Стилизация 3D слоев ядра */
        .core-container {
          position: relative; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          perspective: 1000px;
        }
        .core-wrapper {
          position: relative; width: 320px; height: 320px; transform-style: preserve-3d; transition: transform 0.2s ease-out;
        }
        .core-ring {
          position: absolute; inset: 0; border: 1px solid rgba(255,255,255,0.03); border-radius: 50%; transform-style: preserve-3d;
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

        {/* ПРАВАЯ КОЛОНКА (ПК) — ИНТЕРАКТИВНОЕ 3D ЯДРО СИСТЕМЫ */}
        <div className="hero-right" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <div className="core-container">
            <motion.div 
              className="core-wrapper"
              style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
            >
              
              {/* Слой 1: Внешнее технологическое кольцо разметки */}
              <motion.div 
                className="core-ring"
                animate={{ rotateZ: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
                style={{ border: `1px dashed ${T.accent}20`, padding: '10px' }}
              >
                <div style={{ position: 'absolute', top: 0, left: '50%', width: 4, height: 4, background: T.accent, borderRadius: '50%', boxShadow: `0 0 10px ${T.accent}` }} />
                <div style={{ position: 'absolute', bottom: 0, right: '50%', width: 4, height: 4, background: T.acc2, borderRadius: '50%' }} />
              </motion.div>

              {/* Слой 2: Горизонтальная орбита AXIS_X */}
              <motion.div 
                className="core-ring"
                animate={{ rotateX: [20, 20], rotateY: [0, 360] }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                style={{ border: `1px solid ${T.accent}40`, boxShadow: `inset 0 0 15px ${T.accent}10, 0 0 15px ${T.accent}10` }}
              />

              {/* Слой 3: Вертикальная орбита AXIS_Y */}
              <motion.div 
                className="core-ring"
                animate={{ rotateX: [70, 70], rotateY: [360, 0] }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                style={{ border: `1px solid ${T.acc2}40`, boxShadow: `inset 0 0 15px ${T.acc2}10, 0 0 15px ${T.acc2}10` }}
              />

              {/* Слой 4: Диагональное текстурное кольцо с точками данных */}
              <motion.div 
                className="core-ring"
                animate={{ rotateX: [45, 45], rotateZ: [0, 360] }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                style={{ border: '1px double rgba(255,255,255,0.05)' }}
              >
                <svg width="100%" height="100%" style={{ transform: 'rotate(45deg)', opacity: 0.4 }}>
                  <circle cx="50%" cy="10%" r="2" fill="#fff" />
                  <circle cx="90%" cy="50%" r="2" fill={T.accent} />
                  <circle cx="10%" cy="50%" r="1.5" fill="#fff" />
                </svg>
              </motion.div>

              {/* Слой 5: Центральное объемное светящееся ядро (Core Engine) */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                width: '80px', height: '80px',
                transform: 'translate3d(-50%, -50%, 0)',
                display: 'flex', alignItems: 'center', justifyComponents: 'center',
                transformStyle: 'preserve-3d'
              }}>
                {/* Внутреннее размытое неоновое свечение */}
                <motion.div 
                  animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', background: `radial-gradient(circle, ${T.accent} 0%, transparent 70%)`, filter: 'blur(8px)', pointerEvents: 'none' }}
                />
                {/* Плотная физическая текстурная сфера */}
                <div style={{ 
                  width: '40px', height: '40px', margin: '0 auto', borderRadius: '50%',
                  background: `linear-gradient(135deg, #fff 0%, ${T.acc2} 50%, #060608 100%)`,
                  boxShadow: `0 0 30px ${T.accent}, inset 2px 2px 5px rgba(255,255,255,0.4)`
                }} />
              </div>

              {/* Слой 6: Цифровой маркер состояния системы вокруг ядра */}
              <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%) translateZ(40px)', fontFamily: 'monospace', fontSize: 9, color: T.muted, letterSpacing: '0.1em', whiteSpace: 'nowrap', background: '#0A0A0C', padding: '2px 8px', borderRadius: 4, border: '1px solid rgba(255,255,255,0.05)' }}>
                CORE_ENGINE // <span style={{ color: T.accent }}>ACTIVE</span>
              </div>

            </motion.div>
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
