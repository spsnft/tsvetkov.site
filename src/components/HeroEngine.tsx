'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

interface PillData {
  id: number;
  label: string;
  title: string;
  tags: string[];
  accentClass: 'green' | 'blue' | 'red';
}

const pills: PillData[] = [
  {
    id: 0,
    label: '01. DATA INTELLIGENCE',
    title: 'Grow with Data & Intelligence',
    tags: ['Actionable Analytics', 'Real-Time Attribution'],
    accentClass: 'green',
  },
  {
    id: 1,
    label: '02. SALES AUTOMATION',
    title: 'Automate Sales & Eliminate Manual Work',
    tags: ['Instant CRM Routing', 'AI Sales Workflows'],
    accentClass: 'blue',
  },
  {
    id: 2,
    label: '03. SCALE & REVENUE',
    title: 'Convert Traffic into Revenue',
    tags: ['Smart Funnels', 'Live Unit Economics'],
    accentClass: 'red',
  },
];

const accentColors = {
  green: { color: T.accent, border: T.accent20, activeBorder: T.accent40, glow: 'rgba(0, 229, 153, 0.3)' },
  blue: { color: '#38BDF8', border: 'rgba(56, 189, 248, 0.2)', activeBorder: 'rgba(56, 189, 248, 0.5)', glow: 'rgba(56, 189, 248, 0.25)' },
  red: { color: '#EF4444', border: 'rgba(239, 68, 68, 0.2)', activeBorder: 'rgba(239, 68, 68, 0.5)', glow: 'rgba(239, 68, 68, 0.25)' },
};

const AUTOPLAY_INTERVAL = 4000;

export const HeroEngine = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Авто-ротация
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pills.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Сброс таймера при ручном клике
  const handleCardClick = useCallback((index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(index);
    // Кратковременная пауза для сброса таймера
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPaused(false);
  };

  const handleReset = () => setActiveIndex(0);

  const getCardStyles = (index: number) => {
    const isActive = index === activeIndex;
    const accent = accentColors[pills[index].accentClass];

    return {
      position: 'absolute' as const,
      bottom: 0,
      width: '100%',
      height: 135,
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius: 18,
      padding: '1.25rem 1.4rem',
      boxSizing: 'border-box' as const,
      background: 'linear-gradient(135deg, rgba(0, 18, 20, 0.95), rgba(0, 25, 18, 0.95))',
      border: isActive
        ? `1px solid ${accent.activeBorder}`
        : `1px solid ${accent.border}`,
      boxShadow: isActive
        ? `0 20px 40px rgba(0, 0, 0, 0.8), 0 0 35px ${accent.glow}`
        : `-12px 24px 35px rgba(0, 0, 0, 0.5)`,
      cursor: 'pointer',
      userSelect: 'none' as const,
    };
  };

  return (
    <div
      className="perspective-wrapper"
      onClick={handleReset}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: 1200,
        minHeight: 420,
        cursor: 'default',
      }}
    >
      <style jsx>{`
        .perspective-wrapper {
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .chip {
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1024px) {
          .perspective-wrapper {
            padding: 30px 0;
            min-height: auto;
          }
        }

        @media (max-width: 767px) {
          .perspective-wrapper {
            perspective: none;
            min-height: auto;
            padding: 20px 0;
          }
          .perspective-wrapper :global(.scene-container) {
            transform: none !important;
            height: auto !important;
          }
          .perspective-wrapper :global(.layer-card) {
            position: relative !important;
            margin-top: -12px !important;
            bottom: auto !important;
            height: auto !important;
            min-height: 100px;
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
            cursor: default !important;
            z-index: auto !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4) !important;
          }
        }
      `}</style>

      {/* 3D Сцена */}
      <motion.div
        className="scene-container"
        animate={{
          rotateX: isHovered ? 14 : 18,
          rotateY: isHovered ? -8 : -12,
          rotateZ: isHovered ? 1 : 2,
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 440,
          height: 380,
          transformStyle: 'preserve-3d',
        }}
      >
        {pills.map((pill, index) => {
          const isActive = index === activeIndex;
          const accent = accentColors[pill.accentClass];
          // Каскадное смещение: активная наверху, остальные сдвинуты вниз
          const baseOffset = index * 90; // базовое положение
          const activeOffset = -30; // активная уезжает вверх

          return (
            <motion.div
              key={pill.id}
              className="layer-card"
              onClick={(e) => handleCardClick(index, e)}
              animate={{
                zIndex: isActive ? 30 : 10 - index,
                y: isActive ? activeOffset : index * 16,
                scale: isActive ? 1.02 : 0.96,
                opacity: isActive ? 1 : 0.45,
                filter: isActive ? 'blur(0px)' : 'blur(3px)',
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                ...getCardStyles(index),
                bottom: baseOffset,
              }}
            >
              {/* Лейбл */}
              <div
                style={{
                  fontSize: '0.64rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  color: accent.color,
                  textTransform: 'uppercase',
                  marginBottom: '0.6rem',
                }}
              >
                {pill.label}
              </div>

              {/* Заголовок */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: 1.25,
                  color: '#fff',
                  margin: '0 0 0.6rem 0',
                }}
              >
                {pill.title}
              </h3>

              {/* Теги */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {pill.tags.map((tag, i) => (
                  <span key={i} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
