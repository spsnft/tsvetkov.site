'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
      className="hero-engine-wrapper"
      onClick={() => setActiveLayer(null)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '60px',
        perspective: 1200,
        flexWrap: 'wrap',
        cursor: activeLayer ? 'zoom-out' : 'default',
      }}
    >
      <style jsx>{`
        .hero-engine-wrapper {
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
        
        .chip {
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 500;
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }

        .layer-card {
          background: linear-gradient(135deg, rgba(0, 20, 30, 0.85), rgba(0, 30, 20, 0.85));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .layer-top { border-color: rgba(56, 189, 248, 0.2); }
        .layer-middle { border-color: rgba(52, 211, 153, 0.2); }
        .layer-bottom { border-color: rgba(255, 255, 255, 0.08); }

        @media (max-width: 1024px) {
          .hero-engine-wrapper {
            flex-direction: column !important;
            gap: 50px !important;
            max-width: 550px;
          }
        }

        @media (max-width: 767px) {
          .scene-container {
            transform: none !important;
            height: auto !important;
            gap: 10px !important;
          }
          .layer-card {
            position: relative !important;
            margin: 0 !important;
            bottom: auto !important;
            height: auto !important;
            min-height: 100px;
            transform: none !important;
            opacity: 1 !important;
            filter: none !important;
            cursor: default !important;
            z-index: auto !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.5) !important;
          }
        }
      `}</style>

      {/* ---------- ЛЕВАЯ ЧАСТЬ: ТЕКСТ (Она здесь только одна!) ---------- */}
      <div style={{ 
        flex: 1,
        maxWidth: 480,
        minWidth: 280,
        display: 'flex', 
        flexDirection: 'column', 
        gap: 24
      }}>
        {/* Бейдж */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '6px 14px',
          borderRadius: 20,
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255,255,255,0.05)',
          fontSize: '0.75rem',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          width: 'fit-content',
          marginBottom: 8
        }}>
          TSVETKOV • FOUNDER-LED AGENCY
        </div>

        {/* Заголовок */}
        <h1 style={{
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
          fontSize: 'clamp(2.8rem, 5vw, 3.8rem)',
          fontWeight: 700,
          lineHeight: 1.1,
          margin: 0,
          letterSpacing: '-0.03em',
        }}>
          <span style={{ color: '#fff', display: 'block' }}>Value Growth</span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #00E599 0%, #00A3FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Engineered to Scale
          </span>
        </h1>

        {/* Список */}
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1rem',
          lineHeight: 1.5
        }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ color: '#00E599', marginTop: 2 }}>✓</span> <span>We eliminate chaos in <strong style={{ color: '#fff' }}>marketing and digital systems</strong></span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ color: '#00E599', marginTop: 2 }}>✓</span> <span>No fluff — just <strong style={{ color: '#fff' }}>high-performance architectures</strong></span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ color: '#00E599', marginTop: 2 }}>✓</span> <span>Track every dollar and <strong style={{ color: '#fff' }}>automate sales flow</strong></span>
          </li>
        </ul>

        {/* Кнопка */}
        <button style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '14px 28px',
          borderRadius: 12,
          background: 'rgba(0, 229, 153, 0.1)',
          border: '1px solid rgba(0, 229, 153, 0.3)',
          color: '#fff',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          width: 'fit-content',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 20px rgba(0, 229, 153, 0.05)',
          marginTop: 4
        }}>
          Audit My Business <span style={{ color: '#00E599', marginLeft: 2 }}>→</span>
        </button>
      </div>

      {/* ---------- ПРАВАЯ ЧАСТЬ: 3D ПИЛЮЛИ ---------- */}
      <div 
        className="perspective-wrapper"
        style={{
          flex: 1,
          maxWidth: 440,
          minWidth: 280,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <motion.div
          className="scene-container"
          animate={{
            rotateX: activeLayer ? 0 : isHovered ? 8 : 12,
            rotateY: activeLayer ? 0 : isHovered ? -4 : -6,
            rotateZ: activeLayer ? 0 : isHovered ? 0.5 : 1,
          }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
          style={{
            position: 'relative',
            width: '100%',
            height: 380,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* СЛОЙ BOTTOM */}
          <motion.div
            className="layer-card layer-bottom"
            onClick={(e) => handleCardClick('bottom', e)}
            animate={{
              z: activeLayer === 'bottom' ? 120 : activeLayer ? -20 : isHovered ? 5 : 0,
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
              height: 125,
              borderRadius: 16,
              padding: '1.25rem 1.5rem',
              boxSizing: 'border-box',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: activeLayer === 'bottom' 
                ? '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(0, 163, 255, 0.15)'
                : '-8px 16px 30px rgba(0, 0, 0, 0.6)',
              zIndex: activeLayer === 'bottom' ? 40 : 1,
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              01. AUTOMATE & OPTIMIZE
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 0.6rem 0' }}>
              {pills[2].title}
            </h3>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {pills[2].tags.map((tag, i) => <span key={i} className="chip">{tag}</span>)}
            </div>
          </motion.div>

          {/* СЛОЙ MIDDLE */}
          <motion.div
            className="layer-card layer-middle"
            onClick={(e) => handleCardClick('middle', e)}
            animate={{
              z: activeLayer === 'middle' ? 120 : activeLayer ? -10 : isHovered ? 70 : 55,
              y: activeLayer === 'middle' ? -20 : activeLayer === 'top' ? 60 : activeLayer === 'bottom' ? -60 : 0,
              scale: activeLayer === 'middle' ? 1.05 : activeLayer ? 0.92 : 1,
              opacity: activeLayer && activeLayer !== 'middle' ? 0.35 : 1,
              filter: activeLayer && activeLayer !== 'middle' ? 'blur(4px)' : 'blur(0px)',
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            style={{
              position: 'absolute',
              bottom: 95,
              width: '100%',
              height: 125,
              borderRadius: 16,
              padding: '1.25rem 1.5rem',
              boxSizing: 'border-box',
              border: '1px solid rgba(52, 211, 153, 0.15)',
              boxShadow: activeLayer === 'middle' 
                ? '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(0, 229, 153, 0.15)'
                : '-10px 22px 35px rgba(0, 0, 0, 0.6)',
              zIndex: activeLayer === 'middle' ? 40 : 2,
              cursor: 'pointer',
            }}
          >
            <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(82, 211, 153, 0.7)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              02. DATA INTELLIGENCE
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 0.6rem 0' }}>
              {pills[1].title}
            </h3>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {pills[1].tags.map((tag, i) => <span key={i} className="chip">{tag}</span>)}
            </div>
          </motion.div>

          {/* СЛОЙ TOP */}
          <motion.div
            className="layer-card layer-top"
            onClick={(e) => handleCardClick('top', e)}
            animate={{
              z: activeLayer === 'top' ? 120 : activeLayer ? 0 : isHovered ? 135 : 110,
              y: activeLayer === 'top' ? -30 : activeLayer === 'middle' ? -80 : activeLayer === 'bottom' ? -120 : 0,
              scale: activeLayer === 'top' ? 1.05 : activeLayer ? 0.92 : 1,
              opacity: activeLayer && activeLayer !== 'top' ? 0.35 : 1,
              filter: activeLayer && activeLayer !== 'top' ? 'blur(4px)' : 'blur(0px)',
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            style={{
              position: 'absolute',
              bottom: 190,
              width: '100%',
              height: 125,
              borderRadius: 16,
              padding: '1.25rem 1.5rem',
              boxSizing: 'border-box',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              boxShadow: activeLayer === 'top' 
                ? '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(56, 189, 248, 0.15)'
                : '-12px 28px 40px rgba(0, 0, 0, 0.6)',
              zIndex: activeLayer === 'top' ? 40 : 3,
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'rgba(56, 189, 248, 0.7)', textTransform: 'uppercase' }}>
                03. SCALE & REVENUE
              </span>
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', margin: '0 0 0.6rem 0' }}>
              {pills[0].title}
            </h3>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {pills[0].tags.map((tag, i) => <span key={i} className="chip">{tag}</span>)}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
