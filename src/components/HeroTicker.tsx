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

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const activeIndexRef = useRef(activeIndex);

  // Держим актуальный индекс в ref для использования внутри RAF
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

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

  // Основной цикл анимации через requestAnimationFrame
  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = (elapsed / FRAME_DURATION) * 100;

      if (rawProgress >= 100) {
        // Переключение кадра
        startTimeRef.current = timestamp;
        const nextIndex = (activeIndexRef.current + 1) % FRAMES.length;
        goToFrame(nextIndex, 'left');
        setProgress(0);
      } else {
        setProgress(rawProgress);
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [goToFrame]
  );

  // Запуск / остановка анимации
  useEffect(() => {
    if (isPaused) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    startTimeRef.current = 0;
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isPaused, animate]);

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
      <div
        className={`ticker-track ${isHighlighted ? 'highlighted' : ''} ${frame.link ? 'clickable' : ''}`}
        onClick={handleFrameClick}
      >
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
          <span className="frame-title">
            {frame.title}
            {frame.link && <span className="link-arrow"> →</span>}
          </span>

          {/* Теги справа */}
          <div className="ticker-tags">
            {frame.tags.map((tag, i) => (
              <span key={i} className="ticker-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Прогресс-бар по нижнему краю */}
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
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
          border: 1px solid ${T.accent15};
          border-radius: ${T.radius.lg};
          overflow: hidden;
          position: relative;
          backdrop-filter: blur(16px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: border-color 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease;
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
          padding: 1.5rem 1.75rem 1.75rem 1.75rem;
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

        /* Прогресс-бар по нижнему краю */
        .progress-track {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: ${T.accent08};
        }

        .progress-fill {
          height: 100%;
          background: ${T.linearGradient};
          border-radius: 0 1px 1px 0;
          transition: width 30ms linear;
        }

        @media (max-width: 640px) {
          .ticker-slide {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 1.25rem 1.25rem 1.5rem 1.25rem;
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
