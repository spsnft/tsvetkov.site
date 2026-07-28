'use client';

import React, { useState } from 'react';
import { T } from '@/src/theme/tokens';

type ActiveCard = 'top' | 'middle' | 'bottom' | null;

interface PillData {
  id: ActiveCard;
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

const TRANSITION = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

// Градиенты — только из существующих токенов
const GRADIENT_DEFAULT = `linear-gradient(135deg, ${T.accent05}, ${T.accent05}, rgba(0, 163, 255, 0.05))`;
const GRADIENT_HOVER = `linear-gradient(135deg, ${T.accent08}, rgba(0, 163, 255, 0.08))`;
const GRADIENT_ACTIVE = `linear-gradient(135deg, ${T.accent15}, rgba(0, 163, 255, 0.15))`;

export const HeroEngine = () => {
  const [active, setActive] = useState<ActiveCard>(null);
  const [hovered, setHovered] = useState<ActiveCard>(null);

  const handleCardClick = (id: ActiveCard, e: React.MouseEvent) => {
    e.stopPropagation();
    setActive(prev => (prev === id ? null : id));
  };

  const handleReset = () => setActive(null);

  const getCardStyles = (id: ActiveCard): React.CSSProperties => {
    const isActive = active === id;
    const isDimmed = active !== null && active !== id;
    const isHovered = hovered === id && active === null;

    // Определяем фон
    let background = GRADIENT_DEFAULT;
    if (isActive) background = GRADIENT_ACTIVE;
    else if (isHovered) background = GRADIENT_HOVER;

    // Определяем бордер
    let border = `1px solid ${T.accent10}`;
    if (isActive) border = `1px solid ${T.accent25}`;
    else if (isHovered) border = `1px solid ${T.accent20}`;

    // Определяем box-shadow
    let boxShadow = `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 0 transparent`;
    if (isActive) boxShadow = `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px ${T.accent12}`;
    else if (isHovered) boxShadow = `0 12px 36px rgba(0, 0, 0, 0.5), 0 0 18px ${T.accent05}`;

    // Определяем transform
    let transform = '';
    if (isActive) {
      if (id === 'top') transform = 'translateY(-40px) scale(1.02)';
      else if (id === 'bottom') transform = 'translateY(40px) scale(1.02)';
      else transform = 'scale(1.02)';
    } else if (isHovered) {
      transform = 'translateY(-2px) scale(1.01)';
    } else if (active === 'middle') {
      if (id === 'top') transform = 'translateY(-40px)';
      else if (id === 'bottom') transform = 'translateY(40px)';
    } else if (active === 'top' && id === 'top') {
      transform = 'translateY(-40px) scale(1.02)';
    } else if (active === 'bottom' && id === 'bottom') {
      transform = 'translateY(40px) scale(1.02)';
    }

    return {
      position: 'relative',
      width: '100%',
      height: 130,
      borderRadius: T.radius.lg,
      padding: '0 1.5rem 24px 1.5rem',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      cursor: 'pointer',
      userSelect: 'none',
      transition: TRANSITION,
      zIndex: isActive ? 10 : ['top', 'middle', 'bottom'].indexOf(id || '') + 1,
      background,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border,
      boxShadow,
      opacity: isDimmed ? 0.4 : 1,
      transform: transform || undefined,
    };
  };

  const getTitleStyle = (id: ActiveCard): React.CSSProperties => ({
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    fontSize: '1.25rem',
    fontWeight: 700,
    lineHeight: 1.25,
    color: active === id ? '#FFFFFF' : T.body,
    transition: TRANSITION,
    margin: 0,
  });

  const getTagsStyle = (id: ActiveCard): React.CSSProperties => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
    opacity: active === id ? 1 : 0.3,
    transition: TRANSITION,
  });

  return (
    <div
      onClick={handleReset}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 420,
        perspective: 800,
        cursor: active ? undefined : 'default',
      }}
    >
      <style jsx>{`
        .pill-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          max-width: 440px;
          position: relative;
          transform: rotateX(6deg);
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pill-stack.has-active {
          transform: rotateX(0deg);
        }

        .pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: ${T.sub};
          white-space: nowrap;
        }

        .pill-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.accent};
          flex-shrink: 0;
          box-shadow: 0 0 6px ${T.accent};
        }

        @media (max-width: 767px) {
          .pill-stack {
            transform: none;
            gap: 12px;
          }
          .pill-stack > div {
            margin-top: 0 !important;
            transform: none !important;
            opacity: 1 !important;
            cursor: default;
            pointer-events: none;
          }
        }
      `}</style>

      <div className={`pill-stack${active ? ' has-active' : ''}`}>
        {pills.map((pill, index) => {
          const marginTop = index === 0 ? 0 : -46;

          return (
            <div
              key={pill.id}
              onClick={(e) => handleCardClick(pill.id, e)}
              onMouseEnter={() => setHovered(pill.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...getCardStyles(pill.id),
                marginTop,
              }}
            >
              {/* Теги */}
              <div style={getTagsStyle(pill.id)}>
                {pill.tags.map((tag, ti) => (
                  <span key={ti} className="pill-tag">
                    <span className="pill-bullet" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Заголовок */}
              <h3 style={getTitleStyle(pill.id)}>{pill.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
