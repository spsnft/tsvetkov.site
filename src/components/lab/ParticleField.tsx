'use client';

/**
 * ParticleField — self-contained animated background: dark canvas with
 * floating glowing particles (optionally connected by faint lines).
 *
 * Extracted: 2026-09-13
 * Source: tsvetkov.site, pre-rewrite version — src/components/NetworkBackground.tsx
 *   (the background used on the main landing page at the time of extraction).
 * Purpose: archive / reusable copy. This file has zero imports from the
 *   original project (no design tokens, no other local modules) — only
 *   `react` — so it can be copied into any other project as-is.
 */

import { useEffect, useRef } from 'react';

export interface ParticleFieldProps {
  /** Canvas background color. Accepts 'transparent'. */
  backgroundColor?: string;
  /** Palette particles are drawn from, cycled in order. */
  particleColors?: string[];
  /**
   * Particle count on viewports ≥768px wide. Defaults to 60.
   * Below 768px, `mobileParticleCount` is used instead — always, even
   * when this prop is set (they're independent, not a single override).
   */
  particleCount?: number;
  /** Particle count below 768px width. Defaults to 35. */
  mobileParticleCount?: number;
  /** Multiplier applied to particle velocity. */
  speed?: number;
  /** Minimum particle radius, in px. */
  minSize?: number;
  /** Maximum particle radius, in px. */
  maxSize?: number;
  /** Draw faint lines between nearby particles. */
  connectionLines?: boolean;
  /** Extra class name for the canvas element. */
  className?: string;
}

const DEFAULT_COLORS = ['#00E599', '#00A3FF', '#C084FC'];
const MOBILE_BREAKPOINT = 768;
const DESKTOP_PARTICLE_COUNT = 60;
const MOBILE_PARTICLE_COUNT = 35;
const CONNECTION_DISTANCE = 140;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

export default function ParticleField({
  backgroundColor = '#0A0A0C',
  particleColors = DEFAULT_COLORS,
  particleCount,
  mobileParticleCount = MOBILE_PARTICLE_COUNT,
  speed = 1,
  minSize = 1,
  maxSize = 2.5,
  connectionLines = true,
  className,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Below 768px, mobileParticleCount always applies — independent of
    // particleCount, which only governs ≥768px.
    const resolvedCount =
      window.innerWidth < MOBILE_BREAKPOINT
        ? mobileParticleCount
        : (particleCount ?? DESKTOP_PARTICLE_COUNT);

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let animationFrameId: number | null = null;

    const createParticles = () => {
      particles = Array.from({ length: resolvedCount }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3 * speed,
        vy: (Math.random() - 0.5) * 0.3 * speed,
        radius: Math.random() * (maxSize - minSize) + minSize,
        color: particleColors[i % particleColors.length],
      }));
    };

    const applyCanvasBackingSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      if (connectionLines) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < CONNECTION_DISTANCE) {
              const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 0.8;
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      ctx.globalAlpha = 1;
    };

    const step = () => {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });
      drawFrame();
      animationFrameId = requestAnimationFrame(step);
    };

    const startLoop = () => {
      if (animationFrameId !== null) return;
      animationFrameId = requestAnimationFrame(step);
    };

    const stopLoop = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Initial size comes from the parent's own box, read directly rather
    // than via canvas.clientWidth/clientHeight — the canvas fills it via
    // CSS 100%/100%, but we size the backing store from the source of
    // truth so it doesn't depend on that CSS relationship at all.
    const initialRect = parent.getBoundingClientRect();
    width = Math.round(initialRect.width);
    height = Math.round(initialRect.height);
    applyCanvasBackingSize();
    createParticles();
    drawFrame();

    // Resize never recreates particles — existing positions are rescaled
    // proportionally to the new size so motion continues smoothly instead
    // of jumping to a fresh random layout.
    const handleResize = (newWidthRaw: number, newHeightRaw: number) => {
      const newWidth = Math.round(newWidthRaw);
      const newHeight = Math.round(newHeightRaw);
      if (newWidth <= 0 || newHeight <= 0) return;
      if (newWidth === width && newHeight === height) return;

      if (width > 0 && height > 0) {
        const scaleX = newWidth / width;
        const scaleY = newHeight / height;
        particles.forEach((p) => {
          p.x *= scaleX;
          p.y *= scaleY;
        });
      }

      width = newWidth;
      height = newHeight;
      applyCanvasBackingSize();
      drawFrame();
    };

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width: w, height: h } = entry.contentRect;
      handleResize(w, h);
    });
    resizeObserver.observe(parent);

    let observer: IntersectionObserver | null = null;

    if (!prefersReducedMotion) {
      if (typeof IntersectionObserver !== 'undefined') {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) startLoop();
            else stopLoop();
          },
          { threshold: 0 }
        );
        observer.observe(canvas);
      } else {
        startLoop();
      }
    }
    // else: prefers-reduced-motion — leave the static frame already drawn above.

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      observer?.disconnect();
    };
  }, [
    backgroundColor,
    particleColors,
    particleCount,
    mobileParticleCount,
    speed,
    minSize,
    maxSize,
    connectionLines,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        background: backgroundColor,
      }}
    />
  );
}
