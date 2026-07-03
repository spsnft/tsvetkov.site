'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { T } from '@/src/theme/tokens';

// Vertex Shader: Базовый каркас для отрисовки 2D-плоскости
const vsSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Fragment Shader: Математический просчет жидких неоновых волн (WebGL Fluid Engine)
const fsSource = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
    vec2 mouse = (u_mouse * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

    // Искажение пространства от положения курсора
    float mouseDist = length(p - mouse);
    p += (p / (mouseDist + 0.6)) * 0.08 * smoothstep(1.2, 0.0, mouseDist);

    // Математическая симуляция перетекания плазмы/жидкости (Fluid Math)
    float t = u_time * 0.25;
    for(float i = 1.0; i < 4.0; i++) {
      p.x += sin(p.y + t + mouse.x * 0.2) * 0.45 / i;
      p.y += cos(p.x + t + mouse.y * 0.2) * 0.35 / i;
    }

    // Фирменные цвета агентства (RGB)
    vec3 colAccent = vec3(0.0, 1.0, 0.7); // T.accent (#00FFB3)
    vec3 colAcc2   = vec3(0.0, 0.77, 1.0); // T.acc2 (#00C6FF)
    vec3 colPurple = vec3(0.75, 0.52, 0.98); // #C084FC

    // Смешивание слоев жидкости
    float k = sin(p.x + p.y) * 0.5 + 0.5;
    vec3 fluidColor = mix(colAccent, colAcc2, k);
    fluidColor = mix(fluidColor, colPurple, cos(p.x * 0.4) * 0.5 + 0.5);

    // Виньетка и мягкое затухание к краям для премиального темного тона
    float edgeMask = smoothstep(1.1, 0.2, length(uv - vec2(0.5)));
    
    // Мягкая интенсивность свечения (удерживаем 0.09, чтобы фон не слепил глаза)
    gl_FragColor = vec4(fluidColor * 0.09 * edgeMask, 1.0);
  }
`;

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

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Сборка и компиляция шейдеров
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Буфер плоскости (Full-screen quad)
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Поиск униформ-переменных шейдера
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const mouseLoc = gl.getUniformLocation(program, 'u_mouse');

    let animationFrameId: number;
    let lastMouseX = window.innerWidth / 2;
    let lastMouseY = window.innerHeight / 2;
    let currentMouseX = lastMouseX;
    let currentMouseY = lastMouseY;

    // Отслеживание размеров
    const resize = () => {
      if (!canvas || !gl) return;
      const dpr = Math.min(window.devicePixelRatio, 2); // Ограничиваем DPR для экономии батареи мобильных устройств
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resize);
    resize();

    // Отслеживание курсора
    const handleMouseMove = (e: MouseEvent) => {
      currentMouseX = e.clientX;
      currentMouseY = window.innerHeight - e.clientY; // Инвертируем Y для WebGL осей
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Рендер-цикл (60 FPS)
    const render = (time: number) => {
      if (!gl || !canvas) return;

      // Плавная интерполяция мыши (смягчает рывки курсора)
      lastMouseX += (currentMouseX - lastMouseX) * 0.08;
      lastMouseY += (currentMouseY - lastMouseY) * 0.08;

      const dpr = Math.min(window.devicePixelRatio, 2);
      gl.uniform1f(timeLoc, time * 0.001);
      gl.uniform2f(mouseLoc, lastMouseX * dpr, lastMouseY * dpr);

      gl.clearColor(0.04, 0.04, 0.047, 1.0); // T.bg0 (#0A0A0C)
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Чистка памяти при размонтировании
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      }
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

      {/* ───────────────────────────────────────────────────────────────
          WEBGL LIQUID ENGINE LAYER
          ─────────────────────────────────────────────────────────────── */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', inset: 0, width: '100%', height: '100%', 
          zIndex: 0, pointerEvents: 'none' 
        }} 
      />

      {/* Матовый пленочный шум поверх WebGL для текстурности */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="hero-film-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.016 0" />
        </filter>
      </svg>
      <div style={{ position: 'absolute', inset: 0, filter: 'url(#hero-film-noise)', pointerEvents: 'none', zIndex: 1, opacity: 0.6 }} />

      {/* ───────────────────────────────────────────────────────────────
          UI INFRASTRUCTURE ELEMENTS (СТРОГАЯ ГЕОМЕТРИЯ)
          ─────────────────────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 2 }}>
        <div style={{ 
          width: '100%', maxWidth: 1040, height: '70vh', maxHeight: 600,
          position: 'relative', margin: '0 1.5rem',
          borderLeft: '1px solid rgba(255,255,255,0.025)',
          borderRight: '1px solid rgba(255,255,255,0.025)',
        }}>
          {/* Инженерные засечки (+) по углам виртуального контейнера */}
          <span style={{ position: 'absolute', top: -6, left: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          <span style={{ position: 'absolute', top: -6, right: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          <span style={{ position: 'absolute', bottom: -6, left: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          <span style={{ position: 'absolute', bottom: -6, right: -6, fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.15)', userSelect: 'none' }}>+</span>
          
          {/* Статусный маркер дизайн-системы */}
          <div style={{ position: 'absolute', top: 12, left: 16, display: 'flex', gap: 4, opacity: 0.3 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: T.accent }} />
            <div style={{ width: 12, height: 1, background: 'rgba(255,255,255,0.4)', marginTop: 1.5 }} />
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────────
          СИНХРОНИЗИРОВАННЫЙ ИСХОДНЫЙ КОНТЕНТ (БЕЗ ИЗМЕНЕНИЙ)
          ─────────────────────────────────────────────────────────────── */}
      <style>{`
        .hero-content-box {
          position: relative; z-index: 3; text-align: center; max-width: 960px; width: 100%;
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
