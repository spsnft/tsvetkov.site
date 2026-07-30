'use client';

import React, { useState } from 'react';
import { Building2, ShoppingCart, Briefcase, Home, AlertTriangle, Zap } from 'lucide-react';
import Link from 'next/link';

interface CaseStudiesProps {
  dict?: any;
  lang?: string;
}

const STATUS_TONES: Record<string, string> = {
  amber: 'border-amber-700 text-amber-300',
  neutral: 'border-neutral-700 text-neutral-500',
};

function StatusBadge({ tone, text }: { tone: string; text: string }) {
  return (
    <span className={`font-mono tracking-widest text-xs border rounded px-2 py-1 ${STATUS_TONES[tone] || STATUS_TONES.neutral}`}>
      [{text}]
    </span>
  );
}

function Panel({
  tone,
  icon: Icon,
  num,
  label,
  items,
}: {
  tone: 'red' | 'emerald';
  icon: any;
  num: string;
  label: string;
  items: string[];
}) {
  const border = tone === 'red' ? 'border-l-red-500' : 'border-l-emerald-400';
  const text = tone === 'red' ? 'text-red-400' : 'text-emerald-400';
  
  return (
    <div className={`border border-neutral-800 border-l-2 ${border} rounded-lg p-5 bg-neutral-950`}>
      <div className={`flex items-center gap-2 text-xs font-mono tracking-widest mb-3 ${text}`}>
        <Icon className="w-3.5 h-3.5" />
        <span>{num} // {label}</span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-neutral-300 flex gap-2">
            <span className="text-neutral-600">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const CaseStudies = ({ dict, lang = 'en' }: CaseStudiesProps) => {
  const [activeId, setActiveId] = useState('hms');

  const t = dict?.cases || {};

  const CASES = [
    {
      id: 'hms',
      num: '01',
      label: t.tabs?.hms || 'HOSPITALITY / HMS',
      icon: Building2,
      offerTag: t.hmsCategory || 'SPECIALIZED OFFER / HOSPITALITY',
      status: 'TARGET MODEL · PRE-LAUNCH',
      statusTone: 'amber',
      title: t.items?.hms?.title || 'Direct Booking Architecture & OTA Elimination',
      meta: 'SEGMENT — independent hotels, villas & condos, TH  ·  CURRENT STATE — fully OTA-reliant',
      problem: t.items?.hms?.problemList || [
        'OTA commissions eating 18–25% of every booking',
        'Channels out of sync — double bookings, manual firefighting',
        'TM30 & guest reporting still filed by hand',
      ],
      execution: t.items?.hms?.executionList || [
        'Direct booking engine + WhatsApp CRM sync, zero commission',
        'Live channel-manager sync across every OTA',
        'TM30 filing automated into the check-in flow',
      ],
      hero: {
        value: '+35–45%',
        label: 'target share of direct bookings',
        caption: 'projected within 6 months of HMS launch',
      },
      byDesign: [
        { value: '0%', label: 'OTA leakage on direct channel' },
        { value: '100%', label: 'guest data ownership' },
        { value: '✓', label: 'TM30 auto-filed' },
      ],
      bar: { before: 100, after: 58 },
      hasCta: true,
      ctaLink: '/hms',
      ctaText: t.hmsCta || 'Explore HMS System',
    },
    {
      id: 'ecom',
      num: '02',
      label: t.tabs?.ecomm || 'E-COMMERCE & SCALING',
      icon: ShoppingCart,
      offerTag: 'CASE STUDY / E-COMMERCE',
      status: 'PLACEHOLDER',
      statusTone: 'neutral',
      title: t.items?.ecomm?.title || '[ case title ]',
      meta: '[ segment · region · starting state ]',
      problem: t.items?.ecomm?.problemList || ['[ pain point ]', '[ pain point ]', '[ pain point ]'],
      execution: t.items?.ecomm?.executionList || ['[ what you built ]', '[ what you built ]', '[ what you built ]'],
      hero: { value: '[+XX%]', label: '[ headline metric ]', caption: '[ timeframe / baseline ]' },
      byDesign: [
        { value: '[X]', label: '[ supporting fact ]' },
        { value: '[X]', label: '[ supporting fact ]' },
        { value: '[X]', label: '[ supporting fact ]' },
      ],
      bar: null,
      hasCta: false,
    },
    {
      id: 'b2b',
      num: '03',
      label: t.tabs?.b2b || 'HIGH-TICKET B2B',
      icon: Briefcase,
      offerTag: 'CASE STUDY / B2B',
      status: 'PLACEHOLDER',
      statusTone: 'neutral',
      title: t.items?.b2b?.title || '[ case title ]',
      meta: '[ segment · region · starting state ]',
      problem: t.items?.b2b?.problemList || ['[ pain point ]', '[ pain point ]', '[ pain point ]'],
      execution: t.items?.b2b?.executionList || ['[ what you built ]', '[ what you built ]', '[ what you built ]'],
      hero: { value: '[+XX%]', label: '[ headline metric ]', caption: '[ timeframe / baseline ]' },
      byDesign: [
        { value: '[X]', label: '[ supporting fact ]' },
        { value: '[X]', label: '[ supporting fact ]' },
        { value: '[X]', label: '[ supporting fact ]' },
      ],
      bar: null,
      hasCta: false,
    },
    {
      id: 'realestate',
      num: '04',
      label: t.tabs?.realestate || 'REAL ESTATE DEVELOPMENT',
      icon: Home,
      offerTag: 'CASE STUDY / REAL ESTATE',
      status: 'PLACEHOLDER',
      statusTone: 'neutral',
      title: t.items?.realestate?.title || '[ case title ]',
      meta: '[ segment · region · starting state ]',
      problem: t.items?.realestate?.problemList || ['[ pain point ]', '[ pain point ]', '[ pain point ]'],
      execution: t.items?.realestate?.executionList || ['[ what you built ]', '[ what you built ]', '[ what you built ]'],
      hero: { value: '[+XX%]', label: '[ headline metric ]', caption: '[ timeframe / baseline ]' },
      byDesign: [
        { value: '[X]', label: '[ supporting fact ]' },
        { value: '[X]', label: '[ supporting fact ]' },
        { value: '[X]', label: '[ supporting fact ]' },
      ],
      bar: null,
      hasCta: false,
    },
  ];

  const active = CASES.find((c) => c.id === activeId) || CASES[0];

  const getCtaLink = (path?: string) => {
    if (!path) return '#';
    return lang === 'en' ? path : `/${lang}${path}`;
  };

  return (
    <section id="cases" className="bg-black py-12 px-4 md:px-10 font-sans text-left">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {t.title || 'What Can We Show'}<span className="text-emerald-400">.</span>
          </h2>
        </div>

        {/* Terminal Container */}
        <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-black shadow-2xl">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-3 px-4 md:px-5 py-3 border-b border-neutral-800 bg-neutral-950">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              COMMAND_CENTER // CASE_STUDIES
            </div>
            <StatusBadge tone={active.statusTone} text={active.status} />
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2 p-4 border-b border-neutral-800 bg-neutral-950/50">
            {CASES.map((c) => {
              const isActive = c.id === activeId;
              const Icon = c.icon;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveId(c.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs tracking-wide border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                    isActive
                      ? 'border-emerald-400 text-emerald-300 bg-emerald-950/80'
                      : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{c.num} // {c.label}</span>
                </button>
              );
            })}
          </div>

          {/* Case Content */}
          <div className="p-5 md:p-8">
            <span className="inline-block text-xs font-mono tracking-widest text-emerald-400 border border-emerald-700/60 rounded-full px-3 py-1 mb-4 bg-emerald-950/30">
              {active.offerTag}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{active.title}</h3>
            <p className="text-xs font-mono text-neutral-500 mb-8">{active.meta}</p>

            {/* Panels Grid: Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Panel
                tone="red"
                icon={AlertTriangle}
                num="01"
                label="THE BOTTLENECK (PROBLEM)"
                items={active.problem}
              />
              <Panel
                tone="emerald"
                icon={Zap}
                num="02"
                label="ARCHITECTURE FIX (EXECUTION)"
                items={active.execution}
              />
            </div>

            {/* Target Impact Section */}
            <div className="border border-neutral-800 rounded-xl p-5 md:p-6 bg-neutral-950">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono tracking-widest text-neutral-500">03 // TARGET IMPACT</span>
                <StatusBadge tone={active.statusTone} text={active.status} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div>
                  <div className="text-5xl md:text-6xl font-black text-emerald-400 tabular-nums leading-none">
                    {active.hero.value}
                  </div>
                  <div className="text-sm text-neutral-300 mt-2 font-medium">{active.hero.label}</div>
                  <div className="text-xs font-mono text-neutral-500 mt-1">{active.hero.caption}</div>
                </div>

                <div className="grid grid-cols-3 gap-3 flex-1">
                  {active.byDesign.map((d, i) => (
                    <div key={i} className="border border-neutral-800 rounded-lg px-3 py-3 text-center bg-black">
                      <div className="text-xl font-bold text-white font-mono">{d.value}</div>
                      <div className="text-xs text-neutral-500 mt-1 leading-tight">{d.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Bar (HMS specific) */}
              {active.bar && (
                <div className="mt-6 pt-6 border-t border-neutral-800 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-neutral-500 mb-1">
                      <span>OTA-BOOKED SHARE — TODAY</span>
                      <span>{active.bar.before}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-neutral-500" style={{ width: `${active.bar.before}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono text-neutral-500 mb-1">
                      <span>OTA-BOOKED SHARE — TARGET</span>
                      <span>{active.bar.after}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-emerald-400" style={{ width: `${active.bar.after}%` }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Optional CTA Link for HMS */}
              {active.hasCta && active.ctaLink && (
                <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
                  <Link
                    href={getCtaLink(active.ctaLink)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-400 text-black font-extrabold text-xs tracking-wider uppercase hover:bg-emerald-300 transition-colors"
                  >
                    <span>{active.ctaText}</span>
                    <span>→</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
