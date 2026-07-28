'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';

interface TickerFrame {
  id: string;
  systemLabel: string;
  title: string;
  tags: string[];
  chipKeys: string[];
  highlightLineKey?: string;
  link?: string;
}

const FRAMES: TickerFrame[] = [
  {
    id: '01',
    systemLabel: 'SYSTEM 01 // PERFORMANCE',
    title: 'Scale & Revenue',
    tags: ['Smart Funnels', 'Unit Economics', 'Profit Tracking'],
    chipKeys: ['value', 'scale', 'funnels'],
  },
  {
    id: '02',
    systemLabel: 'SYSTEM 02 // DATA CORE',
    title: 'BI & Attribution',
    tags: ['Live Dashboards', 'Cross-Platform Sync', 'Clean Data'],
    chipKeys: ['data'],
    highlightLineKey: 'data',
  },
  {
    id: '03',
    systemLabel: 'SYSTEM 03 // INTELLIGENCE',
    title: 'AI & Sales Automation',
    tags: ['Auto-Routing', 'AI Workflows', 'Lead Scoring'],
    chipKeys: ['automation'],
  },
  {
    id: '04',
    systemLabel: 'SYSTEM 04 // HOSPITALITY',
    title: 'Direct Booking Engine',
    tags: ['0% OTA Commissions', 'Cloud PMS', 'WhatsApp CRM Sync'],
    chipKeys: ['data'],
    highlightLineKey: 'data',
    link: '/hms',
  },
];

const FRAME_DURATION = 3000;
const TICK_INTERVAL = 30;
const TOTAL_TICKS = FRAME_DURATION / TICK_INTERVAL;

interface HeroTickerProps {
  lang: string;
  activeChip: string | null;
  highlightedLine: string | null;
  onFrameChange: (chipKeys: string[], highlightLineKey?: string) => void;
  onManualSelect: (chipKeys: string[], highlightLineKey?: string) => void;
}

export const HeroTicker: React.FC<HeroTickerProps> = ({
  lang,
  activeChip,
  highlightedLine,
  onFrameChange,
  onManualSelect,
}) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const tickRef = useRef<NodeJS.Timeout | null>(null);

  const frame = FRAMES[activeIndex];

  const isHighlighted = activeChip ? frame.chipKeys.includes(activeChip) : false;

  const goToFrame = useCallback(
    (index: number, direction: 'left' | 'right' = 'left') => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setSlideDirection(direction);
      setProgress(0);

      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
        onFrameChange(FRAMES[index].chipKeys, FRAMES[index].highlightLineKey);
      }, 300);
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

  // При внешнем ховере на чипс — пауза + показ нужного кадра
  useEffect(() => {
    if (activeChip) {
      const matchingIndex = FRAMES.findIndex((f) => f.chipKeys.includes(activeChip));
      if (matchingIndex !== -1 && matchingIndex !== activeIndex) {
        setIsPaused(true);
        setActiveIndex(matchingIndex);
        setProgress(100);
        onFrameChange(FRAMES[matchingIndex].chipKeys, FRAMES[matchingIndex].highlightLineKey);
      }
    } else {
      setIsPaused(false);
    }
  }, [activeChip, activeIndex, onFrameChange]);

  const handleFrameClick = () => {
    if (frame.link) {
      router.push(`/${lang}${frame.link}`);
    }
  };

  return (
    <div
      className="ticker-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Тикер-полоса */}
      <div
        className={`ticker-track ${isHighlighted ? 'highlighted' : ''} ${frame.link ? 'clickable' : ''}`}
        onClick={handleFrameClick}
      >
        {/* Прогресс-бар по верхней рамке */}
        <div
          className="border-progress"
          style={{ width: `${progress}%` }}
        />

        {/* Слайд */}
        <div
          className={`ticker-slide ${
            isTransitioning
              ? slideDirection === 'left'
                ? 'slide-out-left'
                : 'slide-out-right'
              : ''
          }`}
        >
          {/* Левая зона: система */}
          <div className="ticker-zone ticker-zone-left">
            <span className="live-dot-wrapper">
              <span className="live-dot-ping" />
              <span className="live-dot" />
            </span>
            <div className="system-info">
              <span className="system-label">{frame.systemLabel}</span>
              <span className="system-title">{frame.title}</span>
            </div>
          </div>

          {/* Центр: теги */}
          <div className="ticker-zone ticker-zone-center">
            {frame.tags.map((tag, i) => (
              <span key={i} className="ticker-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Индикатор ссылки для 4-го кадра */}
          {frame.link && (
            <div className="ticker-zone ticker-zone-right">
              <span className="link-indicator">
                Explore <span className="link-arrow">→</span>
              </span>
            </div>
          )}
        </div>

        {/* Точки внутри */}
        <div className="dots-row">
          {FRAMES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                const direction = i > activeIndex ? 'left' : 'right';
                goToFrame(i, direction);
                onManualSelect(FRAMES[i].chipKeys, FRAMES[i].highlightLineKey);
              }}
              aria-label={`System ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0;
          z-index: 3;
          user-select: none;
        }

        .ticker-track {
          width: 100%;
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
          padding: 1rem 1.25rem 2.5rem 1.25rem;
        }

        .ticker-track.highlighted {
          border-color: ${T.accent};
          box-shadow: 0 16px 36px -10px ${T.accent25},
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .ticker-track.clickable {
          cursor: pointer;
        }

        .ticker-track.clickable:hover {
          border-color: ${T.accent};
          transform: translateY(-2px);
          box-shadow: 0 16px 36px -10px ${T.accent25};
        }

        /* Прогресс-бар по верхней рамке */
        .border-progress {
          position: absolute;
          top: -1px;
          left: -1px;
          height: 2px;
          background: ${T.linearGradient};
          border-radius: ${T.radius.lg} ${T.radius.lg} 0 0;
          z-index: 5;
          transition: width ${TICK_INTERVAL}ms linear;
          box-shadow: 0 0 8px ${T.accent};
        }

        .ticker-slide {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }

        .ticker-slide.slide-out-left {
          transform: translateX(-25px);
          opacity: 0;
        }

        .ticker-slide.slide-out-right {
          transform: translateX(25px);
          opacity: 0;
        }

        .ticker-zone {
          display: flex;
          align-items: center;
        }

        .ticker-zone-left {
          gap: 10px;
          min-width: 240px;
        }

        .ticker-zone-center {
          flex: 1;
          gap: 0.6rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .ticker-zone-right {
          min-width: 80px;
          justify-content: flex-end;
          flex-shrink: 0;
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
          75%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .system-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .system-label {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: ${T.accent};
          font-family: 'Space Grotesk', monospace, sans-serif;
          text-transform: uppercase;
        }

        .system-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .ticker-tag {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: ${T.radius.sm};
          background: ${T.accent05};
          border: 1px solid ${T.accent20};
          color: #e2f9f1;
          white-space: nowrap;
        }

        .link-indicator {
          font-size: 0.72rem;
          font-weight: 700;
          color: ${T.accent};
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .link-arrow {
          font-size: 1rem;
        }

        /* Точки */
        .dots-row {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 6px;
          height: 6px;
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
          box-shadow: 0 0 8px ${T.accent};
          transform: scale(1.4);
        }

        @media (max-width: 768px) {
          .ticker-zone-center {
            display: none;
          }

          .ticker-zone-left {
            min-width: 0;
          }

          .system-label {
            font-size: 0.58rem;
          }

          .system-title {
            font-size: 0.75rem;
          }

          .ticker-track {
            padding: 0.85rem 1rem 2.2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroTicker;
