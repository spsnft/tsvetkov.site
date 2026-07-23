'use client';

import React from 'react';

interface CapabilityCardProps {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  icon,
  badge,
  title,
  description,
  tags,
}) => {
  return (
    <div
      className="group relative flex flex-col justify-between rounded-2xl border p-6 md:p-8 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(13, 15, 21, 0.6)',
        borderColor: 'rgba(16, 185, 129, 0.15)', // Единый зеленый бордер
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Hover glow effect */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.08), transparent 40%)',
        }}
      />

      <div>
        {/* Header: Icon & Badge */}
        <div className="mb-6 flex items-center justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              color: '#10B981',
            }}
          >
            {icon}
          </div>
          <span
            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              color: '#10B981',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            {badge}
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

      {/* Tags Grid */}
      <div className="mt-8 border-t border-neutral-800/60 pt-6">
        <div className="grid grid-cols-2 gap-2">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="rounded-lg px-3 py-2 text-center text-xs font-medium text-neutral-300 transition-colors group-hover:border-emerald-500/30 group-hover:text-white"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Expertise: React.FC = () => {
  const capabilities = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      badge: 'GROWTH ENGINE',
      title: 'Go-To-Market & Growth Strategy',
      // Обновленное описание с акцентом на квалификацию и чистый профит
      description:
        'Designing high-intent acquisition funnels that filter out junk traffic, target qualified buyers, and turn ad spend into predictable net profit.',
      tags: ['GTM Strategy', 'Funnel Architecture', 'Omnichannel Scale', 'CAC Optimization'],
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      badge: 'UNIT ECONOMICS',
      title: 'Data & Revenue Intelligence',
      description:
        'End-to-end attribution bridging marketing spend directly with net P&L, cohort retention, and true customer LTV.',
      tags: ['P&L Attribution', 'Unit Economics', 'BI Dashboards', 'LTV & Cohorts'],
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 010 4m-6 8a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 010-4m0 4v2m0-6V4" />
        </svg>
      ),
      badge: 'SYSTEM AUTOMATION',
      title: 'CRM & AI Automation',
      description:
        'Architecting zero-leakage CRM workflows and AI processing to slash operational overhead and accelerate deal cycles.',
      // Заменен AI Lead Scoring на Instant Lead Routing
      tags: ['CRM Architecture', 'Instant Lead Routing', 'Process Automation', 'Retention Loops'],
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
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              color: '#10B981',
              border: '1px solid rgba(16, 185, 129, 0.2)',
            }}
          >
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Architecting Growth <br className="hidden sm:inline" />
            Engineering Scalable Revenue
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.badge} {...capability} />
          ))}
        </div>
      </div>
    </section>
  );
};
