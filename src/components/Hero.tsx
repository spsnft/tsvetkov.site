'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { T } from '@/src/theme/tokens';

// Configuration array for smooth ambient glowing particles
const particles = [
  { id: 1, size: 280, color: T.accent, opacity: 0.05, top: '15%', left: '20%', duration: 18, delay: 0, xRange: [0, 40, -20, 0], yRange: [0, -30, 20, 0] },
  { id: 2, size: 340, color: T.acc2, opacity: 0.04, top: '45%', right: '15%', duration: 22, delay: 1, xRange: [0, -50, 30, 0], yRange: [0, 40, -20, 0] },
  { id: 3, size: 220, color: '#C084FC', opacity: 0.03, bottom: '20%', left: '35%', duration: 25, delay: 2, xRange: [0, 30, -30, 0], yRange: [0, -25, 30, 0] },
];

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  
  // Base content parallax transformations
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
          GLOW PARTICLES LAYERS
          ─────────────────────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              x: p.xRange,
              y: p.yRange,
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: p.top,
              left: p.left,
              right: p.right,
              bottom: p.bottom,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${p.color} 100%, transparent 70%)`,
              opacity: p.opacity,
              filter: 'blur(80px)',
              willChange: 'transform',
            }}
          />
        ))}

        {/* Core base radial glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
          width: 'clamp(300px,60vw,650px)', height: 'clamp(300px,60vw,650px)',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`,
          opacity: 0.8,
        }} />
      </div>

      {/* Cinematic film grain overlay */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="hero-film-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.018 0" />
        </filter>
      </svg>
      <div style={{ position: 'absolute', inset: 0, filter: 'url(#hero-film-noise)', pointerEvents: 'none', zIndex: 1, opacity: 0.6 }} />

      {/* ───────────────────────────────────────────────────────────────
          UI TECH INFRASTRUCTURE ELEMENTS
          ─────────────────────────────────────────────────────────────── */}
      {/* Subtle Dot Matrix Background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: `radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
        maskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 40%, black 30%, transparent 85%)',
      }} />

      {/* Structural Framing Container */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
        <div style={{ 
          width: '100%', maxWidth: 1040, height: '70vh', maxHeight: 600,
          position: 'relative', margin: '0 1.5rem',
          borderLeft: '1px solid rgba(255,255,255,0.02)',
          borderRight: '1px solid rgba(255,255,255,0.02)',
        }}>
          {/* Engineering Crosshairs (+) */}
          <span style={{ position: 'absolute', top: -6, left: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          <span style={{ position: 'absolute', top: -6, right: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          <span style={{ position: 'absolute', bottom: -6, left: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          <span style={{ position: 'absolute', bottom: -6, right: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          
          {/* Top-Left Status Nodes */}
          <div style={{ position: 'absolute', top: 12, left: 16, display: 'flex', gap: 4, opacity: 0.3 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: T.accent }} />
            <div style={{ width: 12, height: 1, background: 'rgba(255,255,255,0.4)', marginTop: 1.5 }} />
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────
          SYNCHRONIZED CONTENT GRAPH
          ─────────────────────────────────────────────────────────────── */}
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
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: T.muted, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}
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
