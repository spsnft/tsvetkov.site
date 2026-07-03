'use client';

import React, { useRef, useEffect } from 'react';
import { T } from '@/src/theme/tokens';

export const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const nodeCount = 45; // Чуть увеличили количество нод, так как они теперь на весь сайт
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', resize);
    resize();

    const colors = [T.accent, T.acc2, '#C084FC'];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.30, 
        vy: (Math.random() - 0.5) * 0.30,
        radius: Math.random() * 1.5 + 1,
        color: colors[i % colors.length],
      });
    }

    // Так как фон fixed, координаты мыши всегда идеальны без учета прокрутки
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => { mouse.active = false; };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.active = true;
      }
    };
    const onTouchEnd = () => { mouse.active = false; };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

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

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > window.innerWidth) node.vx *= -1;
        if (node.y < 0 || node.y > window.innerHeight) node.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            node.x += (dx / dist) * force * 2.2;
            node.y += (dy / dist) * force * 2.2;
          }
        }
      });

      const connectionDist = 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.10;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 255, 179, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

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
    <>
      {/* Фиксированный Canvas на заднем плане */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'fixed', inset: 0, width: '100vw', height: '100vh', 
          zIndex: 0, pointerEvents: 'none', background: T.bg0 
        }} 
      />

      {/* Инженерное пленочное зерно поверх всего сайта */}
      <svg style={{ position: 'fixed', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="global-film-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.015 0" />
        </filter>
      </svg>
      <div style={{ position: 'fixed', inset: 0, filter: 'url(#global-film-noise)', pointerEvents: 'none', zIndex: 1, opacity: 0.6 }} />
    </>
  );
};
