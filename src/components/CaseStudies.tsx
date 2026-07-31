'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { T } from '@/src/theme/tokens';

interface CaseStudiesProps {
  dict?: any;
  lang?: string;
}

const ICON_PROPS = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 14,
  height: 14,
};

const Icons = {
  Building2: () => (
    <svg {...ICON_PROPS}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  ),
  ShoppingCart: () => (
    <svg {...ICON_PROPS}>
      <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  ),
  Briefcase: () => (
    <svg {...ICON_PROPS}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  ),
  Home: () => (
    <svg {...ICON_PROPS}>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </svg>
  ),
  AlertTriangle: () => (
    <svg {...ICON_PROPS}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" x2="12" y1="9" y2="13" /><line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  ),
  Zap: () => (
    <svg {...ICON_PROPS}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
};

const CASE_ORDER = ['hms', 'ecomm', 'b2b', 'realestate'] as const;

const CASE_META: Record<string, { hasCta?: boolean; ctaLink?: string }> = {
  hms: { hasCta: true, ctaLink: '/hms' },
  ecomm: {},
  b2b: {},
  realestate: {},
};

function TabIcon({ id }: { id: string }) {
  switch (id) {
    case 'hms':
      return <Icons.Building2 />;
    case 'ecomm':
      return <Icons.ShoppingCart />;
    case 'b2b':
      return <Icons.Briefcase />;
    case 'realestate':
      return <Icons.Home />;
    default:
      return null;
  }
}

function Panel({
  tone,
  icon: Icon,
  num,
  label,
  items,
}: {
  tone: 'red' | 'emerald';
  icon: React.ComponentType;
  num: string;
  label: string;
  items: string[];
}) {
  return (
    <div className={`panel panel--${tone}`}>
      <div className="panel-label">
        <Icon />
        <span>{`${num} // ${label}`}</span>
      </div>
      <ul className="panel-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <style jsx>{`
        .panel {
          border: 1px solid ${T.border};
          border-left: 2px solid;
          border-radius: ${T.radius.md};
          padding: 1.25rem;
          background: ${T.bg1};
        }
        .panel--red {
          border-left-color: ${T.red};
        }
        .panel--emerald {
          border-left-color: ${T.accent};
        }
        .panel-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .panel--red .panel-label {
          color: ${T.red};
        }
        .panel--emerald .panel-label {
          color: ${T.accent};
        }
        .panel-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .panel-list li {
          position: relative;
          padding-left: 1.1rem;
          font-size: 0.9rem;
          line-height: 1.5;
          color: ${T.body};
        }
        .panel-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }
        .panel--red .panel-list li::before {
          background: ${T.red};
        }
        .panel--emerald .panel-list li::before {
          background: ${T.accent};
        }
      `}</style>
    </div>
  );
}

export const CaseStudies = ({ dict, lang = 'en' }: CaseStudiesProps) => {
  const [activeId, setActiveId] = useState<string>('hms');
  const t = dict?.cases;

  if (!t) return null;

  const CASES = CASE_ORDER.map((id) => ({
    id,
    label: t.tabs?.[id],
    ...CASE_META[id],
    ...t.items?.[id],
  }));

  const active = CASES.find((c) => c.id === activeId) || CASES[0];

  const getCtaLink = (path: string) => (lang === 'en' ? path : `/${lang}${path}`);

  return (
    <section id="cases" className="cases-section">
      <style jsx>{`
        .cases-section {
          width: 100%;
          position: relative;
          padding: ${T.section.topPad} 0 ${T.section.bottomPad} 0;
          background: transparent;
          z-index: 5;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 1.25rem;
          }
        }

        .header-box {
          text-align: center;
          margin-bottom: ${T.section.titleGap};
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          margin-bottom: ${T.section.badgeGap};
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${T.accent};
          background: ${T.accent05};
          border: 1px solid ${T.accent25};
          backdrop-filter: blur(12px);
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${T.accent};
          box-shadow: 0 0 8px ${T.accent};
          animation: pulseDot 1.8s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% {
            opacity: 0.4;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .title {
          font-size: ${T.section.titleSize};
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin: 0;
        }

        .terminal {
          border: 1px solid ${T.accent15};
          border-radius: ${T.radius.xl};
          overflow: hidden;
          background: rgba(10, 10, 12, 0.5);
          backdrop-filter: blur(8px) saturate(140%);
          -webkit-backdrop-filter: blur(8px) saturate(140%);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);
        }

        .tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 1rem;
          border-bottom: 1px solid ${T.border};
          background: ${T.bg1};
        }

        .tab {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.55rem 1rem;
          border-radius: ${T.radius.md};
          border: 1px solid transparent;
          background: transparent;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 0.72rem;
          letter-spacing: 0.05em;
          color: ${T.muted};
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab:hover {
          color: ${T.sub};
          background: rgba(255, 255, 255, 0.04);
        }

        .tab.active {
          border-color: ${T.accent};
          color: ${T.accent};
          background: ${T.accent10};
        }

        .content {
          padding: clamp(1.25rem, 3vw, 2rem);
        }

        .title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.75rem;
        }

        .title-row :global(.btn-primary) {
          flex-shrink: 0;
          height: 44px;
          padding: 0 1.5rem;
          font-size: 0.85rem;
          gap: 8px;
        }

        .title-row :global(.btn-primary:hover) .btn-arrow {
          transform: translateX(4px);
        }

        .btn-arrow {
          transition: transform 0.2s ease;
        }

        .case-title {
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
        }

        .panels-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .panels-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .infra-metrics-box {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid ${T.accent15};
          border-radius: ${T.radius.lg};
          background: ${T.bg1};
          margin-top: 1rem;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .infra-metrics-box {
            grid-template-columns: 3fr 2fr;
          }
        }

        .im-col {
          padding: clamp(1.1rem, 2.5vw, 1.5rem);
        }

        .im-col:first-child {
          border-bottom: 1px solid ${T.border};
        }

        @media (min-width: 768px) {
          .im-col:first-child {
            border-bottom: none;
            border-right: 1px solid ${T.border};
          }
        }

        .box-label {
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-size: 0.72rem;
          font-weight: 700;
          color: ${T.muted};
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .infra-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 0.65rem;
        }

        .infra-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: ${T.body};
        }

        .infra-check {
          color: ${T.accent};
          font-weight: 800;
          flex-shrink: 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
          gap: 0.75rem;
        }

        .metric-card {
          border: 1px solid ${T.border};
          border-radius: ${T.radius.md};
          padding: 1rem 0.75rem;
          text-align: center;
          background: ${T.bg0};
        }

        .metric-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.35rem, 3vw, 1.7rem);
          font-weight: 800;
          color: ${T.accent};
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .metric-label {
          font-size: 0.76rem;
          color: ${T.muted};
          margin-top: 0.5rem;
          line-height: 1.35;
        }

      `}</style>

      <div className="container">
        <div className="header-box">
          <span className="badge">
            <span className="badge-dot" />
            {t.badge}
          </span>
          <h2 className="title">{t.title}</h2>
        </div>

        <div className="terminal">
          <div className="tabs">
            {CASES.map((c) => {
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveId(c.id)}
                  className={`tab${c.id === activeId ? ' active' : ''}`}
                >
                  <TabIcon id={c.id} />
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>

          <div className="content">
            <div className="title-row">
              <h3 className="case-title">{active.title}</h3>
              {active.hasCta && active.ctaLink && (
                <Link href={getCtaLink(active.ctaLink)} className="btn-primary">
                  <span>{t.hmsCta}</span>
                  <svg
                    className="btn-arrow"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              )}
            </div>

            <div className="panels-grid">
              <Panel tone="red" icon={Icons.AlertTriangle} num="01" label={t.bottleneckLabel} items={active.challenge} />
              <Panel tone="emerald" icon={Icons.Zap} num="02" label={t.solutionLabel} items={active.solution} />
            </div>

            <div className="infra-metrics-box">
              <div className="im-col">
                <div className="box-label">{t.infraLabel}</div>
                <div className="infra-grid">
                  {active.architecture?.map((item: string, i: number) => (
                    <div key={i} className="infra-item">
                      <span className="infra-check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="im-col">
                <div className="box-label">{t.metricsTitle}</div>
                <div className="metrics-grid">
                  {active.metrics?.map((m: { value: string; label: string }, i: number) => (
                    <div key={i} className="metric-card">
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
