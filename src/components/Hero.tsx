'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Исходная скролл-анимация контента
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const nodeCount = 32;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    // Координаты мыши / тача
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    // Инициализация адаптивных размеров холста
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', resize);
    resize();

    // Генерация нод экосистемы
    const colors = [T.accent, T.acc2, '#C084FC'];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35, // Мягкая скорость базового дрейфа
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1,
        color: colors[i % colors.length],
      });
    }

    // Высокоточный перевод экранных координат в локальные координаты Canvas с учетом скролла
    const updateMouseCoords = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = clientX - rect.left;
      mouse.targetY = clientY - rect.top;
      mouse.active = true;
    };

    // Слушатели десктопного курсора
    const onMouseMove = (e: MouseEvent) => {
      updateMouseCoords(e.clientX, e.clientY);
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };

    // Слушатели мобильного тача (iOS / iPadOS) с полной стабилизацией при скролле
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updateMouseCoords(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const onTouchEnd = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Главный цикл анимации (60 FPS)
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Ускоренное сглаживание координат (0.25 вместо 0.1) — точки догоняют палец мгновенно
      if (mouse.active) {
        if (mouse.x === -1000) {
          mouse.x = mouse.targetX;
          mouse.y = mouse.targetY;
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.25;
          mouse.y += (mouse.targetY - mouse.y) * 0.25;
        }
      } else {
        mouse.x = -1000;
        mouse.y = -1000;
      }

      // 1. Обновление позиций и физики нод
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Мягкий отскок от границ экрана
        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;

        // Взаимодействие с курсором/пальцем (Мощный спортивный магнитный импульс)
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            // Коэффициент притяжения увеличен до 2.2 для максимальной резкости и отзывчивости
            node.x += (dx / dist) * force * 2.2;
            node.y += (dy / dist) * force * 2.2;
          }
        }
      });

      // 2. Отрисовка связей (Линий цифровой сети)
      const connectionDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 255, 179, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // 3. Отрисовка самих светящихся узлов (Нод)
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Полное освобождение ресурсов и памяти при размонтировании
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <section ref={containerRef} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: T.bg0,
      padding: 'clamp(5rem,12vw,9rem) 1rem clamp(4rem,8vw,6rem)',
    }}>

      {/* INTERACTIVE DIGITAL ACCELERATED CANVAS */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', inset: 0, width: '100%', height: '100%', 
          zIndex: 0, pointerEvents: 'none' 
        }} 
      />

      {/* Core base radial glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 'clamp(300px,60vw,650px)', height: 'clamp(300px,60vw,650px)',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${T.glow} 0%, transparent 70%)`,
        opacity: 0.9, zIndex: 1, pointerEvents: 'none'
      }} />

      {/* Cinematic film grain overlay */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="hero-film-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.016 0" />
        </filter>
      </svg>
      <div style={{ position: 'absolute', inset: 0, filter: 'url(#hero-film-noise)', pointerEvents: 'none', zIndex: 2, opacity: 0.6 }} />

      {/* ───────────────────────────────────────────────────────────────
          UI TECH INFRASTRUCTURE ELEMENTS
          ─────────────────────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
        <div style={{ 
          width: '100%', maxWidth: 1040, height: '70vh', maxHeight: 600,
          position: 'relative', margin: '0 1.5rem',
          borderLeft: '1px solid rgba(255,255,255,0.025)',
          borderRight: '1px solid rgba(255,255,255,0.025)',
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
