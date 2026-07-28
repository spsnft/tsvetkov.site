'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { T } from '@/src/theme/tokens';

interface TimelineFrame {
  id: string;
  systemLabel: string;
  emoji: string;
  tags: string[];
  chipKeys: string[];
}

const FRAMES: TimelineFrame[] = [
  {
    id: '01',
    systemLabel: 'SYSTEM 01 // METRICS',
    emoji: '⚙️',
    tags: ['CAC <$40', 'ROAS 4.2x', 'LTV/CAC >3.0'],
    chipKeys: ['value', 'scale'],
  },
  {
    id: '02',
    systemLabel: 'SYSTEM 02 // AI OPS',
    emoji: '🤖',
    tags: ['14s Lead Route', '150+ Automations', '0 Manual Handoffs'],
    chipKeys: ['automation'],
  },
  {
    id: '03',
    systemLabel: 'SYSTEM 03 // DATA',
    emoji: '📊',
    tags: ['P&L Attribution', 'Cross-Platform Sync', 'Real-Time Dashboards'],
    chipKeys: ['data'],
  },
  {
    id: '04',
    systemLabel: 'SYSTEM 04 // SCALE',
    emoji: '🎯',
    tags: ['+$1.4M Pipeline', 'Omnichannel Ready', 'Weekly P&L Reviews'],
    chipKeys: ['funnels', 'scale'],
  },
];

const FRAME_DURATION = 4000; // 4 секунды на кадр
const FADE_DURATION = 400;   // 400ms фейд

interface HeroTimelineProps {
  activeChip?: string | null;
  onHoverFrame?: (chipKeys: string[]) => void;
  onLeaveFrame?: () => void;
}

export const HeroTimeline: React.FC<HeroTimelineProps> = ({
  activeChip,
  onHoverFrame,
  onLeaveFrame,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const tickRef = useRef<NodeJS.Timeout | null>(null);

  const frame = FRAMES[activeIndex];

  // Определяем, подсвечен ли этот фрейм через чипсы в заголовке
  const isHighlighted = activeChip
    ? frame.chipKeys.includes(activeChip)
    : false;

  // Переключение кадров
  const goToFrame = useCallback(
    (index: number) => {
      setActiveIndex(index);
      setProgress(0);
    },
    []
  );

  // Автопереключение
  const startAutoPlay = useCallback(() => {
    // Очищаем старые интервалы
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (tickRef.current) clearInterval(tickRef.current);

    if (isPaused) return;

    // Тик прогресс-бара каждые 40ms → 100 шагов за 4 секунды
    const tickStep = 100 / (FRAME_DURATION / 40);
    tickRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + tickStep;
      });
    }, 40);

    // Переключение кадра
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FRAMES.length);
      setProgress(0);
    }, FRAME_DURATION);
  }, [isPaused]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [startAutoPlay]);

  // При смене isPaused перезапускаем
  useEffect(() => {
    startAutoPlay();
  }, [isPaused, startAutoPlay]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    onHoverFrame?.(frame.chipKeys);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    onLeaveFrame?.();
  };

  return (
    <div className="timeline-container">
      {/* Прогресс-бар */}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            transition: 'width 40ms linear',
          }}
        />
      </div>

      {/* Точки-индикаторы */}
      <div className="dots-row">
        {FRAMES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => goToFrame(i)}
            aria-label={`Go to frame ${i + 1}`}
          />
        ))}
      </div>

      {/* Основной фрейм */}
      <div
        className={`frame-card ${isHighlighted ? 'active-highlight' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-header">
          <span className="live-dot-wrapper">
            <span className="live-dot-ping" />
            <span className="live-dot" />
          </span>
          <span className="system-label">
            {frame.emoji} {frame.systemLabel}
          </span>
        </div>

        <div className="card-tags">
          {frame.tags.map((tag, i) => (
            <span key={i} className="engine-tag">
              <span className="tag-bullet">•</span>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-container {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          z-index: 3;
        }

        /* Прогресс-бар */
        .progress-track {
          width: 100%;
          height: 2px;
          background: ${T.accent10};
          border-radius: 1px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: ${T.linearGradient};
          border-radius: 1px;
        }

        /* Точки навигации */
        .dots-row {
          display: flex;
          gap: 6px;
          justify-content: flex-end;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          border: none;
          background: ${T.accent20};
          cursor: pointer;
          padding: 0;
          transition: background 0.2s ease;
        }

        .dot.active {
          background: ${T.accent};
          box-shadow: 0 0 6px ${T.accent};
        }

        /* Карточка фрейма */
        .frame-card {
          background: linear-gradient(
            135deg,
            rgba(20, 24, 33, 0.75) 0%,
            rgba(10, 12, 16, 0.85) 100%
          );
          border: 1px solid ${T.accent15};
          border-radius: ${T.radius.lg};
          padding: 1.5rem 1.75rem;
          backdrop-filter: blur(16px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          box-shadow:
            0 10px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }

        .frame-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: ${T.radius.lg};
          padding: 1px;
          background: ${T.linearGradient};
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.2;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .frame-card:hover,
        .frame-card.active-highlight {
          transform: translateY(-3px) scale(1.01);
          border-color: ${T.accent};
          box-shadow: 0 16px 36px -10px ${T.accent25},
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .frame-card:hover::before,
        .frame-card.active-highlight::before {
          opacity: 1;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.1rem;
        }

        .live-dot-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 8px;
          height: 8px;
          flex-shrink: 0;
        }

        .live-dot-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: ${T.accent};
          opacity: 0.75;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.linearGradient};
          box-shadow: 0 0 8px ${T.accent};
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .system-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: ${T.accent};
          font-family: monospace, sans-serif;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .engine-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: ${T.radius.sm};
          background: ${T.accent05};
          border: 1px solid ${T.accent20};
          color: #e2f9f1;
        }

        .tag-bullet {
          color: ${T.accent};
        }
      `}</style>
    </div>
  );
};

export default HeroTimeline;
