'use client';

import React from 'react';

interface BarrierCardProps {
  number: string;
  badge: string;
  title: string;
  description: string;
  impact: string;
}

const BarrierCard: React.FC<BarrierCardProps> = ({
  number,
  badge,
  title,
  description,
  impact,
}) => {
  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(13, 15, 21, 0.6)',
        borderColor: 'rgba(239, 68, 68, 0.15)', // Единый красный бордер
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Hover glow effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(239, 68, 68, 0.08), transparent 40%)',
        }}
      />

      <div>
        {/* Header: Badge & Number */}
        <div className="mb-6 flex items-center justify-between">
          <span
            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#EF4444',
              border: '1px solid rgba(239, 68, 68, 0.2)',
            }}
          >
            {badge}
          </span>
          <span className="font-mono text-sm font-medium text-neutral-500">
            {number}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-xl font-bold tracking-tight text-white md:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
          {description}
        </p>
      </div>

      {/* Impact Footer */}
      <div className="mt-8 border-t border-neutral-800/60 pt-4">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-medium text-neutral-400">Impact:</span>
          <span className="font-semibold text-red-400">{impact}</span>
        </div>
      </div>
    </div>
  );
};

export const Bottleneck: React.FC = () => {
  const barriers = [
    {
      number: '01',
      badge: 'EMPTY TRAFFIC',
      title: 'Traffic Without Profit',
      description:
        'Agencies report clicks and leads, but your sales team gets poor-quality inquiries. Ad budgets keep growing, but net profit stays flat.',
      impact: 'Uncontrolled CAC Inflation',
    },
    {
      number: '02',
      badge: 'UNRELIABLE TRACKING',
      title: 'Broken Data & Unclear Numbers',
      description:
        'Ad platforms, CRM, and actual revenue live in separate places. You end up guessing what works instead of seeing real ROI and true net profit.',
      impact: 'Wasted Marketing Capital',
    },
    {
      number: '03',
      badge: 'MANUAL ROUTINES',
      title: 'Manual Work & Slow Lead Response',
      description:
        'Leads sit untouched for hours due to manual handoffs. Your team wastes time copy-pasting data across tables instead of closing deals.',
      impact: 'Revenue Leakage & High Overhead',
    },
  ];

  return (
    <section
      className="relative w-full"
      style={{
        paddingTop: 0,
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.08)',
              color: '#EF4444',
              border: '1px solid rgba(239, 68, 68, 0.2)',
            }}
          >
            GROWTH BARRIERS
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Why your business isn’t growing
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {barriers.map((barrier) => (
            <BarrierCard key={barrier.number} {...barrier} />
          ))}
        </div>
      </div>
    </section>
  );
};
