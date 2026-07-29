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

const FRAME_DURATION = 3500;
const UPDATE_INTERVAL = 30;

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

  const onFrameChangeRef = useRef(onFrameChange);
  useEffect(() => {
    onFrameChangeRef.current = onFrameChange;
  }, [onFrameChange]);

  const frame = FRAMES[activeIndex];

  const isHighlighted =
    (activeChip && frame.chipKeys.includes(activeChip)) ||
    (highlightedLine && frame.highlightLineKey === highlightedLine);

  useEffect(() => {
    onFrameChangeRef.current(frame.chipKeys, frame.highlightLineKey);
  }, [activeIndex, frame]);

  useEffect(() => {
    if (isPaused || activeChip) return;

    const step = (UPDATE_INTERVAL / FRAME_DURATION) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          setActiveIndex((current) => (current + 1) % FRAMES.length);
          return 0;
        }
        return prev + step;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, activeChip]);

  useEffect(() => {
    if (!activeChip) return;
    const matchingIndex = FRAMES.findIndex((f) => f.chipKeys.includes(activeChip));
    if (matchingIndex !== -1 && matchingIndex !== activeIndex) {
      setActiveIndex(matchingIndex);
      setProgress(0);
    }
  }, [activeChip, activeIndex]);

  const handleSegmentClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex(index);
    setProgress(0);
    onManualSelect(FRAMES[index].chipKeys, FRAMES[index].highlightLineKey);
  };

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
        className={`ticker-track ${isHighlighted ? 'highlighted' : ''} ${
          frame.link ? 'clickable' : ''
        }`}
        onClick={handleFrameClick}
      >
        <div className="stories-progress-bar">
          {FRAMES.map((f, i) => {
            let fillWidth = 0;
            if (i < activeIndex) fillWidth = 100;
            else if (i === activeIndex) fillWidth = progress;

            return (
              <div
                key={f.id}
                className="story-segment"
                onClick={(e) => handleSegmentClick(i, e)}
                title={`Go to ${f.title}`}
              >
                <div
                  className="story-segment-fill"
                  style={{
                    width: `${fillWidth}%`,
                    transition: i === activeIndex ? 'width 0.03s linear' : 'none',
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="ticker-slide">
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
            rgba(18, 22, 30, 0.85) 0%,
            rgba(10, 12, 16, 0.92) 100%
          );
          border: 1px solid ${T.accent15};
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 32px -10px rgba(0, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease;
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

        .stories-progress-bar {
          display: flex;
          gap: 6px;
          width: 100%;
          padding: 12px 18px 4px 18px;
        }

        .story-segment {
          flex: 1;
          height: 3px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 2px;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.2s ease, height 0.2s ease;
        }

        .story-segment:hover {
          background: rgba(255, 255, 255, 0.25);
          height: 4px;
        }

        .story-segment-fill {
          height: 100%;
          background: linear-gradient(90deg, ${T.accent} 0%, #00a3ff 100%);
          border-radius: 2px;
        }

        .ticker-slide {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1rem 1.5rem 1.25rem 1.5rem;
          position: relative;
          z-index: 2;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .frame-id {
          font-size: 0.75rem;
          font-weight: 800;
          color: ${T.accent};
          opacity: 0.8;
          font-family: monospace;
          background: ${T.accent08};
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid ${T.accent20};
        }

        .frame-title {
          font-size: clamp(1.05rem, 1.8vw, 1.3rem);
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
          gap: 0.4rem;
          flex-wrap: wrap;
          justify-content: flex-end;
          flex-shrink: 0;
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
          .ticker-slide {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
            padding: 0.85rem 1.25rem 1.1rem 1.25rem;
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
