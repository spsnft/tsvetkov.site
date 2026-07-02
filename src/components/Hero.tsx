'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  
  // Сохраняем исходные трансформации для всего контента
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: T.bg0,
      padding: 'clamp(5rem,12vw,9rem) 1rem clamp(4rem,8vw,6rem)',
    }}>

      {/* ───────────────────────────────────────────────────────────────
          BACKGROUND LAYERS (3D EFFECTS & TEXTURE)
          ─────────────────────────────────────────────────────────────── */}
      
      {/* ИДЕЯ 3: Матовый пленочный микрозернистый шум (Текстура) */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="film-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.022 0" />
        </filter>
      </svg>
      <div style={{ position: 'absolute', inset: 0, filter: 'url(#film-noise)', pointerEvents: 'none', zIndex: 1, opacity: 0.7 }} />

      {/* Исходный Ambient glow orb */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 'clamp(300px,60vw,650px)', height: 'clamp(300px,60vw,650px)',
        borderRadius: '50%',
        background: `radial-gradient(circle,${T.glow} 0%,transparent 70%)`,
        pointerEvents: 'none', zIndex: 2
      }} />

      {/* Дополнительное живое неоновое облако для глубины сферы */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 2 }}>
        <motion.div
          animate={{ x: [-10, 20, -10], y: [-20, 10, -20] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ position: 'absolute', top: '25%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: `${T.accent}04`, filter: 'blur(100px)' }}
        />
      </div>

      {/* ИДЕЯ 1: Бесконечная 3D-сетка в перспективе (Perspective Floor) */}
      <div 
        style={{ 
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '50vh',
          perspective: '450px', perspectiveOrigin: '50% 0%', overflow: 'hidden', zIndex: 3,
          maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
        }}
      >
        <motion.div
          animate={{ backgroundPositionY: ['0px', '40px'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          style={{
            width: '200%', height: '200%', left: '-50%', top: 0, position: 'absolute',
            transform: 'rotateX(65deg)', transformOrigin: '50% 0%',
            backgroundImage: `linear-gradient(to right, ${T.accent}07 1px, transparent 1px), linear-gradient(to bottom, ${T.accent}07 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* ИДЕЯ 2: Векторная 3D-сфера (Интегрирована как адаптивный бэк-элемент) */}
      <style>{`
        .bg-sphere-container {
          position: absolute; z-index: 3; pointer-events: none; opacity: 0.15;
          right: -120px; top: 30%; width: 340px; height: 340px;
        }
        @media (min-width: 1200px) {
          .bg-sphere-container {
            right: 8%; top: 20%; width: 460px; height: 460px; opacity: 0.85;
          }
        }
        @media (min-width: 1440px) {
          .bg-sphere-container {
            right: 12%; width: 500px; height: 500px;
          }
        }
      `}</style>

      <motion.div className="bg-sphere-container" style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '12%']), opacity: useTransform(scrollYProgress, [0, 0.6], [1, 0]) }}>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', filter: `drop-shadow(0 0 30px ${T.accent}15)` }}>
          <motion.circle cx="100" cy="100" r="90" stroke={`${T.accent}10`} strokeWidth="0.5" fill="none" strokeDasharray="4 8" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.ellipse cx="100" cy="100" rx="80" ry="26" stroke={`url(#sphere-grad-1)`} strokeWidth="0.8" fill="none" animate={{ rotateX: [0, 360], rotateZ: [0, 180] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} />
          <motion.ellipse cx="100" cy="100" rx="26" ry="80" stroke={`url(#sphere-grad-2)`} strokeWidth="0.8" fill="none" animate={{ rotateY: [0, 360], rotateZ: [180, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} />
          <motion.circle cx="100" cy="100" r="48" stroke={T.accent} strokeWidth="1.2" fill="none" strokeDasharray="30 120" animate={{ rotate: -360 }} transition={{ duration: 7, repeat: Infinity, ease: 'linear' }} />
          <circle cx="100" cy="100" r="10" fill={`url(#core-glow)`} />
          <motion.circle cx="100" cy="100" r="5" fill="#fff" animate={{ scale: [0.9, 1.1, 0.9] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ filter: `drop-shadow(0 0 6px ${T.accent})` }} />
          <defs>
            <linearGradient id="sphere-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={T.accent} stopOpacity="0.7" />
              <stop offset="50%" stopColor={T.acc2} stopOpacity="0.1" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="sphere-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={T.acc2} stopOpacity="0.8" />
              <stop offset="100%" stopColor={T.accent} stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff" stopOpacity="1" />
              <stop offset="50%" stopColor={T.accent} stopOpacity="0.7" />
              <stop offset="100%" stopColor={T.accent} stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>


      {/* ───────────────────────────────────────────────────────────────
          ИДЕАЛЬНЫЙ СИНХРОНИЗИРОВАННЫЙ КОНТЕНТ (ИЗ ТВОЕЙ АКТУАЛЬНОЙ ВЕРСИИ)
          ─────────────────────────────────────────────────────────────── */}
      
      {/* Адаптивное смещение контента влево на десктопе, чтобы не перекрывать сферу */}
      <style>{`
        .hero-content-box {
          position: relative; z-index: 4; text-align: center; max-width: 960px; width: 100%;
        }
        @media (min-width: 1200px) {
          .hero-content-box {
            text-align: left !important;
            margin-right: auto !important;
            padding-left: 2rem !important;
            max-width: 680px !important;
          }
          .hero-badge-flex, .hero-cta-flex {
            justify-content: flex-start !important;
          }
        }
      `}</style>

      <motion.div className="hero-content-box" style={{ y, opacity }}>

        {/* Agency badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-badge-flex"
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 999,
            background: 'rgba(0,255,179,0.05)', border: `1px solid ${T.accent}20`,
            fontSize: 10, fontWeight: 700, color: T.accent, letterSpacing: '0.15em',
          }}>
            TSVETKOV{' '}
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: T.accent, boxShadow: `0 0 8px ${T.accent}` }} />
            {' '}FOUNDER-LED GROWTH AGENCY
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: 'clamp(2.1rem,6.5vw,4.8rem)', fontWeight: 900, lineHeight: 1.15, letterSpacing: '-0.04em', color: '#fff', marginBottom: '2rem' }}
        >
          Value Growth.<br />
          <span style={{ background: `linear-gradient(135deg,${T.accent} 0%,${T.acc2} 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Engineered to Scale.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{ fontSize: 'clamp(0.9rem,2vw,1.1rem)', color: T.sub, lineHeight: 1.6, maxWidth: 640, margin: '0 auto 3rem', fontWeight: 400 }}
        >
          We eliminate chaos in marketing and digital systems
          <span style={{ display: 'block', marginTop: '1rem', color: T.body, fontWeight: 500 }}>No fluff — just high-performance architectures</span>
          <span style={{ display: 'block', marginTop: '0.25rem', color: T.body, fontWeight: 500 }}>Track every dollar and automate sales flow</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hero-cta-flex"
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${T.glow}` }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '16px 36px', borderRadius: 12, background: `linear-gradient(135deg,${T.accent},${T.acc2})`, color: '#0A0A0C', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
          >
            Audit My Business
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: T.muted, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 auto' }}
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
            style={{ width: 1, height: 36, background: `linear-gradient(to bottom,${T.accent},transparent)` }}
          />
        </motion.div>

      </motion.div>
    </section>
  );
};
