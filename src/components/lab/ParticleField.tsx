'use client';

/**
 * ParticleField — self-contained animated background: dark canvas with
 * floating glowing particles (optionally connected by faint lines, and
 * optionally attracted toward the pointer/touch).
 *
 * Extracted: 2026-09-13
 * Source: tsvetkov.site, pre-rewrite version — src/components/NetworkBackground.tsx
 *   (the background used on the main landing page at the time of extraction).
 * Purpose: archive / reusable copy. This file has zero imports from the
 *   original project (no design tokens, no other local modules) — only
 *   `react` — so it can be copied into any other project as-is.
 *
 * Pointer attraction physics (radius, strength, pointer-position smoothing)
 * are ported 1:1 from NetworkBackground.tsx, not reinvented.
 */

import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

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
  /**
   * When `connectionLines` is on: restrict lines to particles within the
   * pointer's attraction radius (nothing drawn at rest), fading toward the
   * radius edge, instead of the default always-on global proximity lines.
   */
  linesNearPointerOnly?: boolean;
  /** Connection line color. */
  lineColor?: string;
  /** Connection line peak alpha (at zero distance). */
  lineAlpha?: number;
  /**
   * Element whose pointer/touch events drive the attraction effect.
   * Defaults to the canvas itself — correct as long as nothing with
   * pointer-events:none sits on top of it. Pass a ref to an ancestor
   * when the canvas is a non-interactive background layer instead.
   */
  interactionTarget?: RefObject<HTMLElement | null>;
  /** Extra class name for the canvas element. */
  className?: string;
}

const DEFAULT_COLORS = ['#00E599', '#00A3FF', '#C084FC'];
const MOBILE_BREAKPOINT = 768;
const DESKTOP_PARTICLE_COUNT = 60;
const MOBILE_PARTICLE_COUNT = 35;
const CONNECTION_DISTANCE = 140;
const DEFAULT_LINE_COLOR = '#ffffff';
const DEFAULT_LINE_ALPHA = 0.15;

// Pointer attraction — ported as-is from NetworkBackground.tsx.
const ATTRACTION_RADIUS = 200;
const ATTRACTION_STRENGTH = 2.2;
const POINTER_LERP = 0.25;

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
  linesNearPointerOnly = false,
  lineColor = DEFAULT_LINE_COLOR,
  lineAlpha = DEFAULT_LINE_ALPHA,
  interactionTarget,
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

    // Pointer/touch attraction state — mirrors NetworkBackground.tsx's
    // `mouse` object. x/y is the smoothed attractor position actually used
    // for the force; targetX/targetY is the raw last-known pointer
    // position it eases toward.
    const pointer = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false };

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
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.5;

        if (linesNearPointerOnly) {
          // Nothing at rest — only particles within the attraction radius
          // get connected, fading out toward the radius edge.
          if (pointer.active) {
            for (let i = 0; i < particles.length; i++) {
              const p1 = particles[i];
              const d1 = Math.hypot(pointer.x - p1.x, pointer.y - p1.y);
              if (d1 > ATTRACTION_RADIUS) continue;

              for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const d2 = Math.hypot(pointer.x - p2.x, pointer.y - p2.y);
                if (d2 > ATTRACTION_RADIUS) continue;

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist >= CONNECTION_DISTANCE) continue;

                const proximity = 1 - (d1 + d2) / 2 / ATTRACTION_RADIUS;
                const alpha = Math.max(0, proximity) * lineAlpha;
                if (alpha <= 0) continue;

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.globalAlpha = alpha;
                ctx.stroke();
              }
            }
          }
        } else {
          // Default — always on, independent of the pointer.
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const p1 = particles[i];
              const p2 = particles[j];
              const dx = p1.x - p2.x;
              const dy = p1.y - p2.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < CONNECTION_DISTANCE) {
                ctx.globalAlpha = (1 - dist / CONNECTION_DISTANCE) * lineAlpha;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }

        ctx.globalAlpha = 1;
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
      // Ease the attractor toward the last-known pointer position — snap
      // on the first active frame, same as the original.
      if (pointer.active) {
        if (pointer.x === -1000) {
          pointer.x = pointer.targetX;
          pointer.y = pointer.targetY;
        } else {
          pointer.x += (pointer.targetX - pointer.x) * POINTER_LERP;
          pointer.y += (pointer.targetY - pointer.y) * POINTER_LERP;
        }
      } else {
        pointer.x = -1000;
        pointer.y = -1000;
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < ATTRACTION_RADIUS) {
            const force = (ATTRACTION_RADIUS - dist) / ATTRACTION_RADIUS;
            p.x += (dx / dist) * force * ATTRACTION_STRENGTH;
            p.y += (dy / dist) * force * ATTRACTION_STRENGTH;
          }
        }
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
    // else: prefers-reduced-motion — leave the static frame already drawn
    // above, and skip attaching the pointer/touch listeners below entirely
    // (no attraction).

    const target: HTMLElement = interactionTarget?.current ?? canvas;
    let removeInteractionListeners: (() => void) | null = null;

    if (!prefersReducedMotion) {
      // Mouse — via Pointer Events, ignoring touch input (handled
      // separately below via Touch Events, so a touch gesture that starts
      // scrolling and fires pointercancel doesn't lose tracking).
      const onPointerMove = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        const rect = canvas.getBoundingClientRect();
        pointer.targetX = e.clientX - rect.left;
        pointer.targetY = e.clientY - rect.top;
        pointer.active = true;
      };
      const onPointerDown = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        onPointerMove(e);
      };
      const onPointerDeactivate = (e: PointerEvent) => {
        if (e.pointerType === 'touch') return;
        pointer.active = false;
      };

      target.addEventListener('pointermove', onPointerMove, { passive: true });
      target.addEventListener('pointerdown', onPointerDown, { passive: true });
      target.addEventListener('pointerup', onPointerDeactivate, { passive: true });
      target.addEventListener('pointerleave', onPointerDeactivate, { passive: true });
      target.addEventListener('pointercancel', onPointerDeactivate, { passive: true });

      // Touch — via Touch Events (as in NetworkBackground.tsx), not
      // Pointer Events: on touch devices, native scrolling fires
      // pointercancel and pointermove stops, but touchmove keeps firing
      // for the whole gesture, so attraction keeps tracking the finger
      // while the page scrolls.
      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          const rect = canvas.getBoundingClientRect();
          pointer.targetX = e.touches[0].clientX - rect.left;
          pointer.targetY = e.touches[0].clientY - rect.top;
          pointer.active = true;
        }
      };
      const onTouchEnd = () => {
        pointer.active = false;
      };

      target.addEventListener('touchstart', onTouchMove, { passive: true });
      target.addEventListener('touchmove', onTouchMove, { passive: true });
      target.addEventListener('touchend', onTouchEnd, { passive: true });

      removeInteractionListeners = () => {
        target.removeEventListener('pointermove', onPointerMove);
        target.removeEventListener('pointerdown', onPointerDown);
        target.removeEventListener('pointerup', onPointerDeactivate);
        target.removeEventListener('pointerleave', onPointerDeactivate);
        target.removeEventListener('pointercancel', onPointerDeactivate);
        target.removeEventListener('touchstart', onTouchMove);
        target.removeEventListener('touchmove', onTouchMove);
        target.removeEventListener('touchend', onTouchEnd);
      };
    }

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      observer?.disconnect();
      removeInteractionListeners?.();
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
    linesNearPointerOnly,
    lineColor,
    lineAlpha,
    interactionTarget,
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
