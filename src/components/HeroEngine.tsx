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

    const base: React.CSSProperties = {
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
      // Стеклянный фон по умолчанию
      background: 'rgba(18, 18, 20, 0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: `1px solid ${T.border}`,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      opacity: isDimmed ? 0.4 : 1,
    };

    // Активное состояние
    if (isActive) {
      base.background = `linear-gradient(135deg, ${T.accent12}, rgba(0, 163, 255, 0.12))`;
      base.border = `1px solid ${T.accent25}`;
      base.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px ${T.accent10}`;
      base.transform = 'scale(1.02)';
    }

    // Ховер (только когда ничего не активно)
    if (isHovered) {
      base.transform = 'translateY(-2px) scale(1.01)';
      base.border = `1px solid rgba(255, 255, 255, 0.15)`;
      base.boxShadow = '0 12px 36px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 229, 153, 0.06)';
    }

    // Сдвиги при активации
    if (active === 'top') {
      if (id === 'top') base.transform = 'translateY(-40px) scale(1.02)';
    } else if (active === 'bottom') {
      if (id === 'bottom') base.transform = 'translateY(40px) scale(1.02)';
    } else if (active === 'middle') {
      if (id === 'top') base.transform = 'translateY(-40px)';
      if (id === 'bottom') base.transform = 'translateY(40px)';
    }

    return base;
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

        /* Мобильные: упрощённый список без интерактива */
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
