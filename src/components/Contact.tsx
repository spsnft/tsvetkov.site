'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', contact: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await fetch('YOUR_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.02)', border: `1px solid rgba(255,255,255,0.06)`,
    borderRadius: 10, color: '#fff', fontSize: '0.95rem',
    fontFamily: 'inherit', outline: 'none', transition: 'border-color .2s, background-color .2s',
  };

  return (
    <section id="contact" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: 'transparent', borderTop: `1px solid ${T.border}` }}>
      
      <style>{`
        .contact-grid {
          display: grid; grid-template-columns: 1fr; gap: 3rem; width: 100%; maxWidth: 1000px; margin: 0 auto;
        }
        .contact-input:focus {
          border-color: ${T.accent}50 !important;
          background: rgba(255,255,255,0.04) !important;
        }
        @media (min-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr; gap: 4rem;
          }
        }
      `}</style>

      <div className="contact-grid">
        
        {/* ЛЕВАЯ КОЛОНКА: ПРЕЗЕНТАЦИЯ ФАНДЕРА И ПРЯМЫЕ КАНАЛЫ (TRUST LOOP) */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Contact Protocols</span>
          
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1.25rem', lineHeight: 1.15 }}>
            Ready to scale your systems?
          </h2>
          
          <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 2.5rem', maxWidth: 440 }}>
            Choose your preferred communication node. We baseline operations within 24 hours. No fluff, no endless alignment loops.
          </p>

          {/* Стек B2B-каналов связи */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 360 }}>
            
            {/* 1. Бронирование звонка (Основной B2B триггер) */}
            <motion.a
              href="https://calendly.com/YOUR_LINK" // Сюда потом вставишь Calendly или Cal.com
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.01, boxShadow: `0 0 30px ${T.glow}` }} whileTap={{ scale: 0.99 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: `linear-gradient(135deg, ${T.accent}, ${T.acc2})`, color: '#0A0A0C', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}
            >
              <span>Book a 15-Min Strategy Call</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0C" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </motion.a>

            {/* 2. LinkedIn (Пруф экспертности) */}
            <motion.a
              href="https://linkedin.com/in/YOUR_PROFILE" // Твой личный линкедин
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.01, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.99 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s, border-color 0.2s' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>Connect on LinkedIn</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: T.acc2, letterSpacing: '0.05em' }}>OFFICIAL PRO</span>
            </motion.a>

            {/* 3. Корпоративный Email */}
            <motion.a
              href="mailto:hi@tsvetkov.site" // Твоя рабочая почта
              whileHover={{ scale: 1.01, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.99 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s, border-color 0.2s' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>hi@tsvetkov.site</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </motion.a>

          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: СТИЛИЗОВАННАЯ ФОРМА (DATA ARCHITECTURE) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            width: '100%',
            background: `linear-gradient(135deg, rgba(12, 12, 15, 0.8) 0%, #C084FC03 100%)`, 
            border: `1px solid rgba(192, 132, 252, 0.16)`, // Фиолетовый оттенок стекла под форму
            borderRadius: 20, padding: '2rem',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            boxShadow: `0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 0 rgba(255,255,255,0.03)`,
          }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,255,179,0.08)', border: `1px solid ${T.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Protocol Initialized.</h3>
                  <p style={{ color: T.sub, fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>We have captured your request and are compiling initialization vectors. Expect intercept within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Name / Company</label>
                    <input className="contact-input" type="text" required placeholder="John Doe" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Secure Corporate Contact (Email)</label>
                    <input className="contact-input" type="email" required placeholder="john@company.com" value={form.contact} onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} style={inputStyle} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                    style={{
                      padding: '14px 28px', borderRadius: 12, border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '0.95rem',
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer', background: '#fff', color: '#0A0A0C',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: '0.5rem', transition: 'box-shadow 0.2s'
                    }}
                  >
                    {status === 'sending' ? 'Transmitting…' : 'Submit Audit Request'}
                  </motion.button>

                  {status === 'error' && (
                    <span style={{ color: '#EF4444', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.25rem' }}>
                      Transmission failed. Please utilize direct links.
                    </span>
                  )}
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
