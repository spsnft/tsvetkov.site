'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Contact = () => {
  const [form, setForm] = useState({ contact: '', website: '', budget: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращаем триггер mailto при клике конкретно на копирование
    e.stopPropagation();
    navigator.clipboard.writeText('hi@tsvetkov.site');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
        .contact-select option {
          background: #0C0C0F;
          color: #fff;
        }
        @media (min-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr; gap: 4rem;
          }
        }
      `}</style>

      <div className="contact-grid">
        
        {/* ЛЕВАЯ КОЛОНКА: ДОВЕРИТЕЛЬНЫЕ B2B КАНАЛЫ СВЯЗИ */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ display: 'inline-block', alignSelf: 'flex-start', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Contact Protocols</span>
          
          <h2 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1.25rem', lineHeight: 1.15 }}>
            Ready to scale your systems?
          </h2>
          
          <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 2.5rem', maxWidth: 440 }}>
            Choose your preferred communication node. We baseline operations within 24 hours. No fluff, no endless alignment loops.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: 360 }}>
            
            {/* Кнопка Календаря */}
            <motion.a
              href="#book-call" 
              whileHover={{ scale: 1.01, boxShadow: `0 0 30px ${T.glow}` }} whileTap={{ scale: 0.99 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: `linear-gradient(135deg, ${T.accent}, ${T.acc2})`, color: '#0A0A0C', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}
            >
              <span>Book a 15-Min Strategy Call</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0C" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </motion.a>

            {/* LinkedIn с аккуратной векторной иконкой под общий стиль */}
            <motion.a
              href="https://linkedin.com/in/YOUR_PROFILE"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.01, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.99 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s, border-color 0.2s' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>Connect on LinkedIn</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </motion.a>

            {/* Email с исправленной геометрией конверта и кнопкой быстрого копирования */}
            <motion.a
              href="mailto:hi@tsvetkov.site"
              whileHover={{ scale: 1.01, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.99 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s, border-color 0.2s' }}
            >
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>hi@tsvetkov.site</span>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Кнопка Копирования (Pill-badge дизайн) */}
                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'transparent', padding: '4px 10px', borderRadius: 6,
                    fontSize: '11px', fontWeight: 700, color: copied ? T.accent : 'rgba(255,255,255,0.4)',
                    cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
                    backgroundColor: copied ? 'rgba(0,255,179,0.06)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${copied ? `${T.accent}30` : 'rgba(255,255,255,0.08)'}`,
                    transition: 'all 0.2s', fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => { if (!copied) e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { if (!copied) e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>

                {/* Исправленная иконка почты: идеальные стыки без нахлестов линий */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="m3 7 9 6 9-6"/>
                </svg>
              </div>
            </motion.a>

          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: ОПТИМИЗИРОВАННАЯ 3-ПОЛЬНАЯ ФОРМА (ИЗУМРУДНЫЙ ТОН) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            width: '100%',
            background: `linear-gradient(135deg, rgba(12, 12, 15, 0.8) 0%, ${T.accent}03 100%)`, 
            border: `1px solid ${T.accent}16`, 
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
                    <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Contact Email</label>
                    <input className="contact-input" type="email" required placeholder="john@company.com" value={form.contact} onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} style={inputStyle} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Website / Socials</label>
                    <input className="contact-input" type="text" required placeholder="company.com or linkedin.com/in/..." value={form.website} onChange={e => setForm(p => ({ ...p, website: e.target.value }))} style={inputStyle} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Monthly Ad Budget</label>
                    <select 
                      className="contact-input contact-select" 
                      required 
                      value={form.budget} 
                      onChange={e => setForm(p => ({ ...p, budget: e.target.value }))} 
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="" disabled hidden>Select your budget range</option>
                      <option value="under-5k">Under $5,000 / mo</option>
                      <option value="5k-20k">$5,000 - $20,000 / mo</option>
                      <option value="20k-50k">$20,000 - $50,000 / mo</option>
                      <option value="50k-plus">$50,000+ / mo</option>
                    </select>
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
