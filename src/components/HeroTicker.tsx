'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animTimerRef = useRef<NodeJS.Timeout | null>(null);

  const onFrameChangeRef = useRef(onFrameChange);
  useEffect(() => {
    onFrameChangeRef.current = onFrameChange;
  }, [onFrameChange]);

  const frame = FRAMES[activeIndex];
  const isHighlighted =
    (activeChip && frame.chipKeys.includes(activeChip)) ||
    (highlightedLine && frame.highlightLineKey === highlightedLine);

  // Очистка таймеров
  const clearAllTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (animTimerRef.current) clearTimeout(animTimerRef.current);
  };

  // Автопереключение
  useEffect(() => {
    if (isPaused || activeChip) return;

    timerRef.current = setTimeout(() => {
      setIsTransitioning(true);

      animTimerRef.current = setTimeout(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % FRAMES.length;
          onFrameChangeRef.current(FRAMES[next].chipKeys, FRAMES[next].highlightLineKey);
          return next;
        });
        setIsTransitioning(false);
      }, 300);
    }, FRAME_DURATION);

    return () => clearAllTimers();
  }, [activeIndex, isPaused, activeChip]);

  // Синхронизация при внешнем выборе чипса
  useEffect(() => {
    if (!activeChip) return;

    const matchingIndex = FRAMES.findIndex((f) => f.chipKeys.includes(activeChip));
    if (matchingIndex !== -1 && matchingIndex !== activeIndex) {
      clearAllTimers();
      setIsTransitioning(false);
      setActiveIndex(matchingIndex);
      onFrameChangeRef.current(
        FRAMES[matchingIndex].chipKeys,
        FRAMES[matchingIndex].highlightLineKey
      );
    }
  }, [activeChip]);

  const handleFrameClick = () => {
    onManualSelect(frame.chipKeys, frame.highlightLineKey);
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
      <div
        className={`ticker-track ${isHighlighted ? 'highlighted' : ''} ${frame.link ? 'clickable' : ''}`}
        onClick={handleFrameClick}
      >
        <div className={`ticker-slide ${isTransitioning ? 'slide-out' : ''}`}>
          <div className="title-group">
            <span className="frame-id">{frame.id}</span>
            <span className="frame-title">
              {frame.title}
              {frame.link && <span className="link-arrow"> →</span>}
            </span>
          </div>

          <div className="ticker-tags">
            {frame.tags.map((tag, i) => (
              <span key={i} className="ticker-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Полоска прогресса */}
        <div className={`progress-bar ${isPaused || activeChip ? 'paused' : ''}`} key={activeIndex} />
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
          position: relative;
          border-radius: ${T.radius.lg};
          background: linear-gradient(
            135deg,
            rgba(20, 24, 33, 0.75) 0%,
            rgba(10, 12, 16, 0.85) 100%
          );
          border: 1px solid ${T.accent15};
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease;
          overflow: hidden;
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

        .ticker-slide {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.5rem 1.75rem;
          position: relative;
          z-index: 2;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }

        .ticker-slide.slide-out {
          transform: translateX(-25px);
          opacity: 0;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .frame-id {
          font-size: 0.8rem;
          font-weight: 700;
          color: ${T.accent};
          opacity: 0.7;
          font-family: monospace;
        }

        .frame-title {
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .link-arrow {
          color: ${T.accent};
          font-weight: 700;
        }

        .ticker-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .ticker-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 5px 12px;
          border-radius: ${T.radius.sm};
          background: ${T.accent05};
          border: 1px solid ${T.accent20};
          color: #e2f9f1;
          white-space: nowrap;
        }

        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: ${T.linearGradient};
          animation: ticker-progress ${FRAME_DURATION}ms linear;
        }

        .progress-bar.paused {
          animation-play-state: paused;
        }

        @keyframes ticker-progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .ticker-slide {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1.25rem;
          }

          .ticker-tags {
            justify-content: flex-start;
          }

          .frame-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroTicker;
