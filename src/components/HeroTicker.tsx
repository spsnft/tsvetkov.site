'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { T } from '@/src/theme/tokens';

interface TickerFrame {
  id: string;
  systemLabel: string;
  emoji: string;
  tags: string[];
  highlightMetric: string;
  chipKeys: string[];
  highlightLineKey?: string; // для подсветки строки "clean data architecture"
}

const FRAMES: TickerFrame[] = [
  {
    id: '01',
    systemLabel: 'SYSTEM 01 // METRICS',
    emoji: '⚙️',
    tags: ['CAC <$40', 'ROAS 4.2x', 'LTV/CAC >3.0'],
    highlightMetric: '+340%',
    chipKeys: ['value'],
  },
  {
    id: '02',
    systemLabel: 'SYSTEM 02 // AI OPS',
    emoji: '🤖',
    tags: ['14s Lead Route', '150+ Automations', '0 Manual Handoffs'],
    highlightMetric: '14s',
    chipKeys: ['automation'],
  },
  {
    id: '03',
    systemLabel: 'SYSTEM 03 // DATA',
    emoji: '📊',
    tags: ['P&L Attribution', 'Cross-Platform Sync', 'Real-Time BI'],
    highlightMetric: '100%',
    chipKeys: ['data'],
    highlightLineKey: 'data',
  },
  {
    id: '04',
    systemLabel: 'SYSTEM 04 // SCALE',
    emoji: '🎯',
    tags: ['+$1.4M Pipeline', 'Omnichannel Ready', 'Weekly P&L'],
    highlightMetric: '$1.4M',
    chipKeys: ['scale', 'funnels'],
  },
];

const FRAME_DURATION = 4000;
const TICK_INTERVAL = 40;
const TOTAL_TICKS = FRAME_DURATION / TICK_INTERVAL; // 100

interface HeroTickerProps {
  activeChip: string | null;
  highlightedLine: string | null;
  onFrameChange: (chipKeys: string[], highlightLineKey?: string) => void;
  onManualSelect: (chipKeys: string[], highlightLineKey?: string) => void;
}

export const HeroTicker: React.FC<HeroTickerProps> = ({
  activeChip,
  highlightedLine,
  onFrameChange,
  onManualSelect,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>(
    'left'
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const tickRef = useRef<NodeJS.Timeout | null>(null);

  const frame = FRAMES[activeIndex];

  // Определяем, подсвечен ли фрейм через чипсы извне
  const isHighlighted = activeChip
    ? frame.chipKeys.includes(activeChip)
    : false;

  const goToFrame = useCallback(
    (index: number, direction: 'left' | 'right' = 'left') => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setSlideDirection(direction);
      setProgress(0);

      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
        onFrameChange(
          FRAMES[index].chipKeys,
          FRAMES[index].highlightLineKey
        );
      }, 350); // длительность анимации слайда
    },
    [isTransitioning, onFrameChange]
  );

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (tickRef.current) clearInterval(tickRef.current);

    if (isPaused) return;

    let tick = 0;
    tickRef.current = setInterval(() => {
      tick++;
      setProgress((tick / TOTAL_TICKS) * 100);
    }, TICK_INTERVAL);

    intervalRef.current = setInterval(() => {
      goToFrame((activeIndex + 1) % FRAMES.length, 'left');
    }, FRAME_DURATION);
  }, [isPaused, activeIndex, goToFrame]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, [startAutoPlay]);

  useEffect(() => {
    startAutoPlay();
  }, [isPaused, startAutoPlay]);

  // Если активный чипс извне совпадает — ставим на паузу и показываем нужный кадр
  useEffect(() => {
    if (activeChip) {
      const matchingIndex = FRAMES.findIndex((f) =>
        f.chipKeys.includes(activeChip)
      );
      if (matchingIndex !== -1 && matchingIndex !== activeIndex) {
        setIsPaused(true);
        setActiveIndex(matchingIndex);
        setProgress(100);
        onFrameChange(
          FRAMES[matchingIndex].chipKeys,
          FRAMES[matchingIndex].highlightLineKey
        );
      }
    } else {
      setIsPaused(false);
    }
  }, [activeChip, activeIndex, onFrameChange]);

  return (
    <div
      className="ticker-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Прогресс-бар */}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            transition: `width ${TICK_INTERVAL}ms linear`,
          }}
        />
      </div>

      {/* Точки навигации */}
      <div className="dots-row">
        {FRAMES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => {
              const direction = i > activeIndex ? 'left' : 'right';
              goToFrame(i, direction);
              onManualSelect(
                FRAMES[i].chipKeys,
                FRAMES[i].highlightLineKey
              );
            }}
            aria-label={`System ${i + 1}`}
          />
        ))}
      </div>

      {/* Тикер-полоса */}
      <div className="ticker-track">
        <div
          className={`ticker-slide ${
            isTransitioning
              ? slideDirection === 'left'
                ? 'slide-out-left'
                : 'slide-out-right'
              : ''
          } ${isHighlighted ? 'highlighted' : ''}`}
        >
          {/* Левая зона: система */}
          <div className="ticker-zone ticker-zone-left">
            <span className="live-dot-wrapper">
              <span className="live-dot-ping" />
              <span className="live-dot" />
            </span>
            <span className="system-label">
              {frame.emoji} {frame.systemLabel}
            </span>
          </div>

          {/* Центр: теги */}
          <div className="ticker-zone ticker-zone-center">
            {frame.tags.map((tag, i) => (
              <span key={i} className="ticker-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Правая зона: главная метрика */}
          <div className="ticker-zone ticker-zone-right">
            <span className="highlight-metric">{frame.highlightMetric}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          z-index: 3;
          user-select: none;
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

        /* Точки */
        .dots-row {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: ${T.accent20};
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .dot:hover {
          background: ${T.accent40};
        }

        .dot.active {
          background: ${T.accent};
          box-shadow: 0 0 10px ${T.accent};
          transform: scale(1.3);
        }

        /* Тикер-полоса */
        .ticker-track {
          width: 100%;
          height: 68px;
          background: linear-gradient(
            135deg,
            rgba(20, 24, 33, 0.75) 0%,
            rgba(10, 12, 16, 0.85) 100%
          );
          border: 1px solid ${T.accent15};
          border-radius: ${T.radius.lg};
          overflow: hidden;
          position: relative;
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .ticker-track:has(.highlighted) {
          border-color: ${T.accent};
          box-shadow: 0 16px 36px -10px ${T.accent25},
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .ticker-slide {
          display: flex;
          align-items: center;
          height: 100%;
          padding: 0 1.5rem;
          gap: 1.5rem;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 0.35s ease;
        }

        .ticker-slide.slide-out-left {
          transform: translateX(-30px);
          opacity: 0;
        }

        .ticker-slide.slide-out-right {
          transform: translateX(30px);
          opacity: 0;
        }

        .ticker-zone {
          display: flex;
          align-items: center;
        }

        .ticker-zone-left {
          gap: 10px;
          min-width: 220px;
        }

        .ticker-zone-center {
          flex: 1;
          gap: 1rem;
          justify-content: center;
        }

        .ticker-zone-right {
          min-width: 100px;
          justify-content: flex-end;
        }

        /* Пульсирующая точка */
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
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: ${T.accent};
          font-family: 'Space Grotesk', monospace, sans-serif;
        }

        .ticker-tag {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: ${T.radius.sm};
          background: ${T.accent05};
          border: 1px solid ${T.accent20};
          color: #e2f9f1;
          white-space: nowrap;
        }

        .highlight-metric {
          font-size: 1.4rem;
          font-weight: 800;
          font-family: 'Space Grotesk', monospace, sans-serif;
          background: ${T.linearGradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Адаптив: на планшете центрируем, на мобилке скрываем центр */
        @media (max-width: 768px) {
          .ticker-zone-center {
            display: none;
          }

          .ticker-zone-left {
            min-width: 0;
          }

          .system-label {
            font-size: 0.65rem;
          }

          .ticker-slide {
            padding: 0 1rem;
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroTicker;
