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

  const handleCardClick = (id: ActiveCard, e: React.MouseEvent) => {
    e.stopPropagation();
    setActive(prev => (prev === id ? null : id));
  };

  const handleReset = () => setActive(null);

  const getCardStyles = (id: ActiveCard): React.CSSProperties => {
    const isActive = active === id;
    const isDimmed = active !== null && active !== id;

    // Базовые стили
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
      // Default фон
      background: T.bg1,
      border: `1px solid ${T.border}`,
      opacity: isDimmed ? 0.4 : 1,
    };

    // Активное состояние
    if (isActive) {
      base.background = `linear-gradient(135deg, ${T.accent12}, rgba(0, 163, 255, 0.12))`;
      base.border = `1px solid ${T.accent25}`;
      base.backdropFilter = 'blur(16px)';
      base.WebkitBackdropFilter = 'blur(16px)';
      base.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px ${T.accent10}`;
    }

    // Сдвиги
    if (active === 'top') {
      // Верхняя активна — она уезжает вверх
      if (id === 'top') base.transform = 'translateY(-40px)';
    } else if (active === 'bottom') {
      // Нижняя активна — она уезжает вниз
      if (id === 'bottom') base.transform = 'translateY(40px)';
    } else if (active === 'middle') {
      // Средняя активна — верхняя вверх, нижняя вниз
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

  const getTagItemStyle = (): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontSize: '0.85rem',
    color: T.sub,
    whiteSpace: 'nowrap',
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
        }
      `}</style>

      <div className="pill-stack">
        {pills.map((pill, index) => {
          const marginTop = index === 0 ? 0 : -52; // Наезд ~40%

          return (
            <div
              key={pill.id}
              onClick={(e) => handleCardClick(pill.id, e)}
              style={{
                ...getCardStyles(pill.id),
                marginTop,
              }}
            >
              {/* Теги */}
              <div style={getTagsStyle(pill.id)}>
                {pill.tags.map((tag, ti) => (
                  <span key={ti} style={getTagItemStyle()}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: T.accent,
                        flexShrink: 0,
                      }}
                    />
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

      {/* Скрываем на мобильных */}
      <style jsx>{`
        @media (max-width: 767px) {
          .pill-stack {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
