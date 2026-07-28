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
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const activeIndexRef = useRef(0);
  const isPausedRef = useRef(false);
  const frameChangeRef = useRef(onFrameChange);

  // Держим актуальные refs
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    frameChangeRef.current = onFrameChange;
  }, [onFrameChange]);

  const frame = FRAMES[activeIndex];
  const isHighlighted = activeChip ? frame.chipKeys.includes(activeChip) : false;

  // Основной цикл анимации
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (isPausedRef.current) {
        rafRef.current = requestAnimationFrame(animate);
        return;
      }

      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const rawProgress = Math.min((elapsed / FRAME_DURATION) * 100, 100);

      if (rawProgress >= 100) {
        // Переключение кадра
        const nextIndex = (activeIndexRef.current + 1) % FRAMES.length;

        // Запускаем transition
        setIsTransitioning(true);
        setProgress(100);

        setTimeout(() => {
          setActiveIndex(nextIndex);
          setIsTransitioning(false);
          setProgress(0);
          startTimeRef.current = 0;
          frameChangeRef.current(
            FRAMES[nextIndex].chipKeys,
            FRAMES[nextIndex].highlightLineKey
          );
        }, 300);
      } else {
        setProgress(rawProgress);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []); // Пустой массив — animate не пересоздаётся

  // При внешнем ховере на чипс
  useEffect(() => {
    if (activeChip) {
      const matchingIndex = FRAMES.findIndex((f) => f.chipKeys.includes(activeChip));
      if (matchingIndex !== -1 && matchingIndex !== activeIndexRef.current) {
        setIsPaused(true);
        setActiveIndex(matchingIndex);
        setProgress(100);
        startTimeRef.current = 0;
        frameChangeRef.current(
          FRAMES[matchingIndex].chipKeys,
          FRAMES[matchingIndex].highlightLineKey
        );
      }
    } else {
      setIsPaused(false);
      startTimeRef.current = 0;
    }
  }, [activeChip]);

  const handleFrameClick = () => {
    if (frame.link) {
      router.push(`/${lang}${frame.link}`);
    }
  };

  // Прогресс от 0 до 1
  const p = progress / 100;

  // Фазы обхода:
  // 0.00–0.25: нижняя граница, из центра влево и вправо
  // 0.25–0.50: левая и правая границы снизу вверх
  // 0.50–0.75: верхняя граница, слева и справа к центру
  const bottomHalf = Math.min(p / 0.25, 1); // 0→1 за первые 25%
  const sideProgress = Math.max(0, Math.min((p - 0.25) / 0.25, 1)); // 0→1 за 25-50%
  const topProgress = Math.max(0, Math.min((p - 0.5) / 0.25, 1)); // 0→1 за 50-75%

  return (
    <div
      className="ticker-wrapper"
      onMouseEnter={() => {
        setIsPaused(true);
        startTimeRef.current = 0;
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        startTimeRef.current = 0;
      }}
    >
      <div
        className={`ticker-track ${isHighlighted ? 'highlighted' : ''} ${frame.link ? 'clickable' : ''}`}
        onClick={handleFrameClick}
      >
        {/* Обводка-прогресс */}
        <div className="border-overlay">
          {/* Нижняя: из центра влево и вправо */}
          <div className="border-bottom">
            <div
              className="border-segment border-bottom-left"
              style={{ width: `${bottomHalf * 50}%` }}
            />
            <div className="border-gap" />
            <div
              className="border-segment border-bottom-right"
              style={{ width: `${bottomHalf * 50}%` }}
            />
          </div>

          {/* Левая: снизу вверх */}
          <div className="border-left">
            <div
              className="border-segment border-left-fill"
              style={{ height: `${sideProgress * 100}%` }}
            />
          </div>

          {/* Правая: снизу вверх */}
          <div className="border-right">
            <div
              className="border-segment border-right-fill"
              style={{ height: `${sideProgress * 100}%` }}
            />
          </div>

          {/* Верхняя: с краёв к центру */}
          <div className="border-top">
            <div
              className="border-segment border-top-left"
              style={{ width: `${topProgress * 50}%` }}
            />
            <div className="border-gap" />
            <div
              className="border-segment border-top-right"
              style={{ width: `${topProgress * 50}%` }}
            />
          </div>
        </div>

        {/* Контент */}
        <div
          className={`ticker-slide ${isTransitioning ? 'slide-out' : ''}`}
        >
          <span className="frame-title">
            {frame.title}
            {frame.link && <span className="link-arrow"> →</span>}
          </span>

          <div className="ticker-tags">
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

        /* Контент */
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

        /* Обводка-прогресс */
        .border-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 3;
        }

        .border-segment {
          background: ${T.linearGradient};
          transition: width 30ms linear, height 30ms linear;
        }

        .border-gap {
          width: 0;
        }

        /* Нижняя граница */
        .border-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          display: flex;
        }

        .border-bottom-left {
          height: 100%;
          margin-left: auto;
        }

        .border-bottom-right {
          height: 100%;
        }

        /* Левая граница */
        .border-left {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 2px;
          height: 100%;
        }

        .border-left-fill {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        /* Правая граница */
        .border-right {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 2px;
          height: 100%;
        }

        .border-right-fill {
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        /* Верхняя граница */
        .border-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          display: flex;
        }

        .border-top-left {
          height: 100%;
          margin-left: auto;
        }

        .border-top-right {
          height: 100%;
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
