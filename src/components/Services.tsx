'use client';

import { motion } from 'framer-motion';
import { T } from '@/src/theme/tokens';

const offers = [
  {
    num: '01', color: T.accent,
    title: 'Upgraded Sales Engine',
    copy: "Fix the leaks in your sales process and connect everything into one system. Your team gets to focus on closing deals, not copy-pasting data",
    tags: ['CRM Integration', 'Pipeline Auto', 'Lead Routing', 'Analytics Sync'],
  },
  {
    num: '02', color: T.acc2,
    title: 'Precision Ad Scaling',
    copy: "We manage ad campaigns where every single dollar is tracked — stopping budget leaks, cutting waste, and scaling the exact channels that bring paying clients",
    tags: ['Paid Media', 'ROAS Opt', 'Multi-channel', 'Funnel Tracking'],
  },
  {
    num: '03', color: '#C084FC',
    title: 'Practical AI Integration',
    copy: "We implement simple, affordable AI tools that actually work for your daily tasks. Automate the boring routine, speed up your team, and keep your business ahead of the trends without the headache",
    tags: ['AI Automation', 'Workflow Design', 'Tool Deploy', 'Routine Cuts'],
  },
];

export const Services = () => (
  <section id="services" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: 'transparent', borderTop: `1px solid ${T.border}` }}>
    <style>{`
      .services-tag-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
        max-width: 360px;
      }
      @media (min-width: 768px) {
        .services-tag-container {
          display: flex !important;
          flex-wrap: wrap !important;
          max-width: 100% !important;
        }
      }
    `}</style>

    <div style={{ maxWidth: 1200, margin: '0 auto' }}>

      <motion.div 
        initial={{ opacity: 0, y: 16 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <span style={{ 
          display: 'inline-block', padding: '0.35rem 0.85rem', borderRadius: 20, marginBottom: '1rem', 
          fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, 
          background: 'rgba(0, 229, 153, 0.05)', border: '1px solid rgba(0, 229, 153, 0.2)', color: T.accent 
        }}>
          SERVICES & SOLUTIONS
        </span>
        
        <h2 style={{ fontSize: 'clamp(2rem,5vw,3.2rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', color: '#fff', margin: 0 }}>
          Three execution protocols<br />Measurable business outcomes
        </h2>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {offers.map((offer, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
          >
            <div style={{ 
              background: `linear-gradient(135deg, rgba(10, 10, 12, 0.75) 0%, ${offer.color}04 100%)`, 
              border: `1px solid ${offer.color}15`, 
              borderRadius: 20, padding: '2rem', position: 'relative',
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.03)`,
            }}>
              {/* Left accent stripe */}
              <div style={{ position: 'absolute', left: 0, top: '15%', bottom: '15%', width: 2.5, borderRadius: 2, background: `linear-gradient(to bottom,${offer.color},${offer.color}44)` }} />

              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: offer.color }}>{offer.num}</span>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginTop: '0.5rem', marginBottom: '0.75rem' }}>{offer.title}</h3>
              <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6, maxWidth: 750, marginBottom: '1.5rem' }}>{offer.copy}</p>

              {/* Symmetrical grid converting to a row line on desktop */}
              <div className="services-tag-container">
                {offer.tags.map((tag, ti) => (
                  <span key={ti} style={{ padding: '6px 12px', borderRadius: 6, fontSize: '0.75rem', background: `${offer.color}08`, border: `1px solid ${offer.color}15`, color: offer.color, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);
