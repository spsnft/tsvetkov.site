'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { T } from '@/src/theme/tokens';

interface TickerFrame {
  id: string;
  title: string;
  tags: string[];
  chipKeys: string[];
  highlightLineKey?: string;
  link?: string;
}

const FRAMES: TickerFrame[] = [
  {
    id: '01',
    title: 'Scale & Revenue',
    tags: ['Smart Funnels', 'Unit Economics', 'Profit Tracking'],
    chipKeys: ['value', 'scale', 'funnels'],
  },
  {
    id: '02',
    title: 'BI & Attribution',
    tags: ['Live Dashboards', 'Cross-Platform Sync', 'Clean Data'],
    chipKeys: ['data'],
    highlightLineKey: 'data',
  },
  {
    id: '03',
    title: 'AI & Sales Automation',
    tags: ['Auto-Routing', 'AI Workflows', 'Lead Scoring'],
    chipKeys: ['automation'],
  },
  {
    id: '04',
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

  // Вычисляем stroke-dashoffset для кругового прогресса
  // Идём от нижнего центра → в обе стороны → сходимся в верхнем центре
  const circumference = 100; // для stroke-dasharray
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className="ticker-wrapper"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`ticker-track ${isHighlighted ? 'highlighted' : ''} ${frame.link ? 'clickable' : ''}`}
        onClick={handleFrameClick}
      >
        {/* SVG круговая обводка — прогресс */}
        <svg
          className="border-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            rx="8"
            ry="8"
            fill="none"
            stroke={T.accent15}
            strokeWidth="0.8"
            vectorEffect="non-scaling-stroke"
          />
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            rx="8"
            ry="8"
            fill="none"
            stroke="url(#tickerGradient)"
            strokeWidth="1.2"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{
              transition: `stroke-dashoffset ${TICK_INTERVAL}ms linear`,
            }}
          />
          <defs>
            <linearGradient id="tickerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={T.accent} />
              <stop offset="100%" stopColor={T.acc2} />
            </linearGradient>
          </defs>
        </svg>

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
          {/* Заголовок слева */}
          <div className="ticker-zone ticker-zone-left">
            <span className="frame-title">{frame.title}</span>
            {frame.link && <span className="link-arrow">→</span>}
          </div>

          {/* Теги справа */}
          <div className="ticker-zone ticker-zone-right">
            {frame.tags.map((tag, i) => (
              <span key={i} className="ticker-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
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
          border: 1px solid transparent;
          border-radius: ${T.radius.lg};
          overflow: hidden;
          position: relative;
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: box-shadow 0.35s ease;
          padding: 1.25rem 1.5rem;
        }

        .ticker-track.highlighted {
          box-shadow: 0 16px 36px -10px ${T.accent25},
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .ticker-track.clickable {
          cursor: pointer;
        }

        .ticker-track.clickable:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px -10px ${T.accent25};
        }

        /* SVG поверх всего */
        .border-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
        }

        .ticker-slide {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          position: relative;
          z-index: 1;
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
          gap: 8px;
          flex-shrink: 0;
        }

        .ticker-zone-right {
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .frame-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .link-arrow {
          font-size: 1rem;
          color: ${T.accent};
          font-weight: 700;
        }

        .ticker-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: ${T.radius.sm};
          background: ${T.accent05};
          border: 1px solid ${T.accent20};
          color: #e2f9f1;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .ticker-track {
            padding: 1rem 1.25rem;
          }

          .ticker-slide {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .ticker-zone-right {
            justify-content: flex-start;
          }

          .frame-title {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroTicker;
