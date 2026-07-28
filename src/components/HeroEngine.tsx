'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

type LayerId = 'top' | 'middle' | 'bottom' | null;

interface PillData {
  id: LayerId;
  title: string;
  tags: string[];
}

const pills: PillData[] = [
  {
    id: 'top',
    title: 'Convert Traffic into Revenue',
    tags: ['Smart Funnels', 'Zero Waste Ads', 'Live Unit Economics'],
  },
  {
    id: 'middle',
    title: 'Grow with Data & Intelligence',
    tags: ['Actionable Analytics', 'Real-Time Attribution', 'Performance Reports'],
  },
  {
    id: 'bottom',
    title: 'Automate Sales & Eliminate Manual Work',
    tags: ['Instant CRM Routing', 'AI Sales Workflows', 'Zero-Leakage Ops'],
  },
];

export const HeroEngine = () => {
  const [activeLayer, setActiveLayer] = useState<LayerId>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (id: LayerId, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveLayer(prev => (prev === id ? null : id));
  };

  return (
    <div 
      className="perspective-wrapper"
      onClick={() => setActiveLayer(null)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: 1200,
        minHeight: 420,
        cursor: activeLayer ? 'zoom-out' : 'pointer',
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
        }

        /* Адаптив для мобильных - убираем 3D и клики */
        @media (max-width: 767px) {
          .perspective-wrapper {
            perspective: none;
            min-height: auto;
            padding: 20px 0;
          }
          .scene-container {
            transform: none !important;
            height: auto !important;
          }
          .layer-card {
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
            box-shadow: 0 8px 24px rgba(0,0,0,0.4) !important;
          }
        }
      `}</style>

      {/* 3D Сцена */}
      <motion.div
        className="scene-container"
        animate={{
          rotateX: activeLayer ? 0 : isHovered ? 14 : 18,
          rotateY: activeLayer ? 0 : isHovered ? -8 : -12,
          rotateZ: activeLayer ? 0 : isHovered ? 1 : 2,
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
        {/* ==================== СЛОЙ 1: BOTTOM (Голубой/Технологичный) ==================== */}
        <motion.div
          className="layer-card"
          onClick={(e) => handleCardClick('bottom', e)}
          animate={{
            z: activeLayer === 'bottom' ? 120 : activeLayer ? -40 : isHovered ? 10 : 0,
            y: activeLayer === 'bottom' ? -10 : activeLayer === 'middle' ? 60 : activeLayer === 'top' ? 100 : 0,
            scale: activeLayer === 'bottom' ? 1.05 : activeLayer ? 0.92 : 1,
            opacity: activeLayer && activeLayer !== 'bottom' ? 0.35 : 1,
            filter: activeLayer && activeLayer !== 'bottom' ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 135,
            backdropFilter: 'blur(16px)',
            borderRadius: 18,
            padding: '1.25rem 1.4rem',
            boxSizing: 'border-box',
            background: 'rgba(10, 16, 26, 0.9)',
            border: activeLayer === 'bottom' 
              ? '1px solid rgba(0, 163, 255, 0.8)' 
              : '1px solid rgba(0, 163, 255, 0.25)',
            boxShadow: activeLayer === 'bottom'
              ? '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(0, 163, 255, 0.25)'
              : '-12px 24px 35px rgba(0, 0, 0, 0.5)',
            zIndex: activeLayer === 'bottom' ? 40 : 1,
            cursor: 'pointer',
          }}
        >
          {/* Заголовок слоя (как в старом коде) */}
          <div style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: '#38BDF8', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            01. AUTOMATE & OPTIMIZE
          </div>
          
          {/* Основной текст (из нового контента) */}
          <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.25, color: '#fff', margin: '0 0 0.6rem 0' }}>
            {pills[2].title}
          </h3>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {pills[2].tags.map((tag, i) => (
              <span key={i} className="chip" style={{ background: 'rgba(0, 163, 255, 0.08)', border: '1px solid rgba(0, 163, 255, 0.2)', color: '#7DD3FC' }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ==================== СЛОЙ 2: MIDDLE (Зеленый/Результат) ==================== */}
        <motion.div
          className="layer-card"
          onClick={(e) => handleCardClick('middle', e)}
          animate={{
            z: activeLayer === 'middle' ? 120 : activeLayer ? -20 : isHovered ? 65 : 50,
            y: activeLayer === 'middle' ? -20 : activeLayer === 'top' ? 60 : activeLayer === 'bottom' ? -60 : 0,
            scale: activeLayer === 'middle' ? 1.05 : activeLayer ? 0.92 : 1,
            opacity: activeLayer && activeLayer !== 'middle' ? 0.35 : 1,
            filter: activeLayer && activeLayer !== 'middle' ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          style={{
            position: 'absolute',
            bottom: 90,
            width: '100%',
            height: 130,
            backdropFilter: 'blur(16px)',
            borderRadius: 18,
            padding: '1.25rem 1.4rem',
            boxSizing: 'border-box',
            background: 'rgba(10, 20, 16, 0.92)',
            border: activeLayer === 'middle' 
              ? '1px solid rgba(0, 229, 153, 0.8)' 
              : '1px solid rgba(0, 229, 153, 0.35)',
            boxShadow: activeLayer === 'middle'
              ? '0 20px 40px rgba(0,0,0,0.8), 0 0 35px rgba(0, 229, 153, 0.3)'
              : '-14px 28px 40px rgba(0, 0, 0, 0.55)',
            zIndex: activeLayer === 'middle' ? 40 : 2,
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: T.accent, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            02. DATA INTELLIGENCE
          </div>
          
          <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.25, color: '#fff', margin: '0 0 0.6rem 0' }}>
            {pills[1].title}
          </h3>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {pills[1].tags.map((tag, i) => (
              <span key={i} className="chip" style={{ background: 'rgba(0, 229, 153, 0.08)', border: '1px solid rgba(0, 229, 153, 0.2)', color: '#6EE7B7' }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ==================== СЛОЙ 3: TOP (Фиолетовый/Проблема - для контраста) ==================== */}
        <motion.div
          className="layer-card"
          onClick={(e) => handleCardClick('top', e)}
          animate={{
            z: activeLayer === 'top' ? 120 : activeLayer ? 0 : isHovered ? 125 : 100,
            y: activeLayer === 'top' ? -30 : activeLayer === 'middle' ? -80 : activeLayer === 'bottom' ? -120 : 0,
            scale: activeLayer === 'top' ? 1.05 : activeLayer ? 0.92 : 1,
            opacity: activeLayer && activeLayer !== 'top' ? 0.35 : 1,
            filter: activeLayer && activeLayer !== 'top' ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          style={{
            position: 'absolute',
            bottom: 185,
            width: '100%',
            height: 130,
            backdropFilter: 'blur(16px)',
            borderRadius: 18,
            padding: '1.25rem 1.4rem',
            boxSizing: 'border-box',
            background: 'rgba(18, 10, 12, 0.88)',
            border: activeLayer === 'top' 
              ? '1px solid rgba(239, 68, 68, 0.8)' 
              : '1px solid rgba(239, 68, 68, 0.25)',
            boxShadow: activeLayer === 'top'
              ? '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(239, 68, 68, 0.25)'
              : '-18px 35px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.05)',
            zIndex: activeLayer === 'top' ? 40 : 3,
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: '#EF4444', textTransform: 'uppercase' }}>
              03. SCALE & REVENUE
            </span>
          </div>
          
          <h3 style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.25, color: '#fff', margin: '0 0 0.6rem 0' }}>
            {pills[0].title}
          </h3>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {pills[0].tags.map((tag, i) => (
              <span key={i} className="chip" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#FCA5A5' }}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
