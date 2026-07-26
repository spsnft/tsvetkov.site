'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '@/src/theme/tokens';

type LayerId = 'problem' | 'process' | 'result' | null;

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
      `}</style>

      {/* 3D Сцена */}
      <motion.div
        animate={{
          rotateX: activeLayer ? 0 : isHovered ? 14 : 20,
          rotateY: activeLayer ? 0 : isHovered ? -8 : -16,
          rotateZ: activeLayer ? 0 : isHovered ? 1 : 3,
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
        {/* ==================== СЛОЙ 1: PROBLEM (Красный) ==================== */}
        <motion.div
          onClick={(e) => handleCardClick('problem', e)}
          animate={{
            z: activeLayer === 'problem' ? 120 : activeLayer ? -40 : isHovered ? 10 : 0,
            y: activeLayer === 'problem' ? 40 : activeLayer === 'process' ? 80 : activeLayer === 'result' ? 120 : 0,
            scale: activeLayer === 'problem' ? 1.05 : activeLayer ? 0.92 : 1,
            opacity: activeLayer && activeLayer !== 'problem' ? 0.35 : 1,
            filter: activeLayer && activeLayer !== 'problem' ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 115,
            backdropFilter: 'blur(16px)',
            borderRadius: 18,
            padding: '1.25rem 1.4rem',
            boxSizing: 'border-box',
            background: 'rgba(18, 10, 12, 0.88)',
            border: activeLayer === 'problem' 
              ? '1px solid rgba(239, 68, 68, 0.8)' 
              : '1px solid rgba(239, 68, 68, 0.25)',
            boxShadow: activeLayer === 'problem'
              ? '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(239, 68, 68, 0.25)'
              : '-12px 24px 35px rgba(0, 0, 0, 0.5)',
            zIndex: activeLayer === 'problem' ? 40 : 1,
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: '#EF4444', textTransform: 'uppercase' }}>
              01. SYSTEM CHAOS & LEAKAGE
            </span>
            <span style={{ fontSize: '0.6rem', fontWeight: 800, color: '#EF4444', background: 'rgba(239, 68, 68, 0.12)', padding: '2px 6px', borderRadius: 4, border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              HIGH RISK
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="chip" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#FCA5A5' }}>
              Disjointed Ads
            </span>
            <span className="chip" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#FCA5A5' }}>
              Manual CRM
            </span>
            <span className="chip" style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#FCA5A5' }}>
              Lost Margin
            </span>
          </div>
        </motion.div>

        {/* ==================== СЛОЙ 2: PROCESS (Синий) ==================== */}
        <motion.div
          onClick={(e) => handleCardClick('process', e)}
          animate={{
            z: activeLayer === 'process' ? 120 : activeLayer ? -20 : isHovered ? 65 : 45,
            y: activeLayer === 'process' ? -20 : activeLayer === 'result' ? 60 : activeLayer === 'problem' ? -60 : 0,
            scale: activeLayer === 'process' ? 1.05 : activeLayer ? 0.92 : 1,
            opacity: activeLayer && activeLayer !== 'process' ? 0.35 : 1,
            filter: activeLayer && activeLayer !== 'process' ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          style={{
            position: 'absolute',
            bottom: 90,
            width: '100%',
            height: 125,
            backdropFilter: 'blur(16px)',
            borderRadius: 18,
            padding: '1.25rem 1.4rem',
            boxSizing: 'border-box',
            background: 'rgba(10, 16, 26, 0.9)',
            border: activeLayer === 'process' 
              ? '1px solid rgba(0, 163, 255, 0.8)' 
              : '1px solid rgba(0, 163, 255, 0.25)',
            boxShadow: activeLayer === 'process'
              ? '0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(0, 163, 255, 0.25)'
              : '-14px 28px 40px rgba(0, 0, 0, 0.55)',
            zIndex: activeLayer === 'process' ? 40 : 2,
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: '#38BDF8', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
            02. ARCHITECTURE & OPTIMIZATION
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="chip" style={{ background: 'rgba(0, 163, 255, 0.08)', border: '1px solid rgba(0, 163, 255, 0.2)', color: '#7DD3FC' }}>
              E2E Analytics
            </span>
            <span className="chip" style={{ background: 'rgba(0, 163, 255, 0.08)', border: '1px solid rgba(0, 163, 255, 0.2)', color: '#7DD3FC' }}>
              Auto-Funnels
            </span>
            <span className="chip" style={{ background: 'rgba(0, 163, 255, 0.08)', border: '1px solid rgba(0, 163, 255, 0.2)', color: '#7DD3FC' }}>
              Unit Economics
            </span>
          </div>
        </motion.div>

        {/* ==================== СЛОЙ 3: RESULT (Зеленый) ==================== */}
        <motion.div
          onClick={(e) => handleCardClick('result', e)}
          animate={{
            z: activeLayer === 'result' ? 120 : activeLayer ? 0 : isHovered ? 125 : 90,
            y: activeLayer === 'result' ? -60 : activeLayer === 'process' ? -80 : activeLayer === 'problem' ? -120 : 0,
            scale: activeLayer === 'result' ? 1.05 : activeLayer ? 0.92 : 1,
            opacity: activeLayer && activeLayer !== 'result' ? 0.35 : 1,
            filter: activeLayer && activeLayer !== 'result' ? 'blur(4px)' : 'blur(0px)',
          }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
          style={{
            position: 'absolute',
            bottom: 185,
            width: '100%',
            height: 145,
            backdropFilter: 'blur(16px)',
            borderRadius: 18,
            padding: '1.25rem 1.4rem',
            boxSizing: 'border-box',
            background: 'rgba(10, 20, 16, 0.92)',
            border: activeLayer === 'result' 
              ? '1px solid rgba(0, 229, 153, 0.8)' 
              : '1px solid rgba(0, 229, 153, 0.35)',
            boxShadow: activeLayer === 'result'
              ? '0 20px 40px rgba(0,0,0,0.8), 0 0 35px rgba(0, 229, 153, 0.3)'
              : '-18px 35px 50px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
            zIndex: activeLayer === 'result' ? 40 : 3,
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
            <span style={{ fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.12em', color: T.accent, textTransform: 'uppercase' }}>
              03. SYSTEMIC SCALE & PROFIT
            </span>
          </div>

          <div style={{ fontSize: '1.85rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
            5.2x <span style={{ color: T.accent }}>Average ROI</span>
          </div>
          <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
            Predictable Revenue • Zero Traffic Leakage
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
