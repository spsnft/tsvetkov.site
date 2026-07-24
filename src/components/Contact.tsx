'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { T } from '@/src/theme/tokens';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', contact: '', website: '', budget: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } else {
        await new Promise((res) => setTimeout(res, 1000));
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('fedor@tsvetkov.site');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', 
    padding: '14px 18px',
    background: 'rgba(0, 0, 0, 0.3)', 
    border: `1px solid rgba(255, 255, 255, 0.08)`,
    borderRadius: 10, 
    color: '#fff', 
    fontSize: '0.9rem',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', 
    outline: 'none', 
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    boxSizing: 'border-box'
  };

  return (
    <section 
      id="contact" 
      style={{ 
        width: '100%',
        position: 'relative', 
        paddingTop: 0,
        paddingBottom: 'clamp(3rem, 6vw, 6rem)',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
        background: 'transparent', 
        overflow: 'hidden' 
      }}
    >
      
      <style>{`
        .contact-grid {
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 3rem; 
          width: 100%; 
          max-width: 1000px; 
          margin: 0 auto;
        }

        /* Интерактивный фокус терминала */
        .contact-input:focus {
          border-color: ${T.accent} !important;
          background: rgba(0, 229, 153, 0.03) !important;
          box-shadow: 0 0 15px rgba(0, 229, 153, 0.15), inset 0 0 10px rgba(0, 229, 153, 0.05);
        }

        .contact-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(0,229,153,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 18px center !important;
        }

        .contact-select option {
          background: #0C0C0F; 
          color: #fff;
          font-family: sans-serif;
        }

        .element-wrapper {
          width: 100%; 
          max-width: 420px; 
          margin: 0 auto; 
          display: flex; 
          flex-direction: column; 
          justify-content: center;
          box-sizing: border-box;
        }

        .element-wrapper * {
          box-sizing: border-box !important;
        }

        .contact-card {
          width: 100%; 
          height: auto;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(0, 229, 153, 0.05) 0%,
            rgba(12, 18, 22, 0.9) 80%
          ); 
          border: 1px solid rgba(0, 229, 153, 0.25); 
          border-radius: 20px; 
          padding: 2.5rem 2rem;
          backdrop-filter: blur(14px); 
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.65), inset 0 1px 0 0 rgba(255, 255, 255, 0.05);
          box-sizing: border-box;
          display: flex; 
          flex-direction: column; 
          justify-content: center;
        }

        @media (min-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr 1.1fr; 
            gap: 4rem;
            align-items: stretch;
          }
          .element-wrapper {
            margin: 0; 
            max-width: 100%; 
            height: 100%;
          }
          .contact-card {
            height: 100% !important;
          }
        }

        .calendar-frame {
          width: 100%; 
          height: 100%; 
          border: none; 
          background: transparent;
          -webkit-overflow-scrolling: touch;
        }

        /* Премиальная кнопка с эффектом Glass & Glow */
        .btn-glass-glow {
          background: rgba(0, 229, 153, 0.06);
          border: 1px solid rgba(0, 229, 153, 0.4);
          color: #fff;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
        }

        .btn-glass-glow:hover {
          background: rgba(0, 229, 153, 0.15);
          border-color: ${T.accent};
          box-shadow: 0 0 25px rgba(0, 229, 153, 0.35);
          color: #fff;
        }

        /* Акцентная сабмит-кнопка в инженерном стиле */
        .btn-submit-glow {
          background: linear-gradient(135deg, rgba(0, 229, 153, 0.9) 0%, rgba(0, 163, 255, 0.9) 100%);
          border: 1px solid rgba(0, 229, 153, 0.5);
          color: #0A0A0E;
          font-weight: 800;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 229, 153, 0.25);
        }

        .btn-submit-glow:hover {
          box-shadow: 0 6px 30px rgba(0, 229, 153, 0.45);
          transform: translateY(-1px);
        }
      `}</style>

      <div className="contact-grid">
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="element-wrapper">
            <span style={{ 
              display: 'inline-block', 
              alignSelf: 'flex-start', 
              padding: '0.35rem 0.85rem', 
              borderRadius: 20, 
              marginBottom: '1rem', 
              fontSize: '0.7rem', 
              fontWeight: 700, 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              background: 'rgba(0, 229, 153, 0.08)', 
              border: '1px solid rgba(0, 229, 153, 0.25)', 
              color: T.accent 
            }}>
              Contact Protocols
            </span>
            
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1.25rem', lineHeight: 1.15 }}>
              Ready to scale your systems?
            </h2>
            
            <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6, margin: '0 0 2.5rem' }}>
              Choose your preferred communication node
              <br />
              We baseline operations within 24 hours
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              
              {/* Премиальная кнопка Calendly (Glass + Glow) */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileTap={{ scale: 0.99 }}
                className="btn-glass-glow"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '14px 20px', 
                  borderRadius: 12, 
                  fontWeight: 700, 
                  fontSize: '0.95rem', 
                  cursor: 'pointer', 
                  fontFamily: 'inherit' 
                }}
              >
                <span>Book a 15-Min Strategy Call</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </motion.button>

              <motion.a
                href="https://linkedin.com/in/tsvetkov-marketing/"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.2)' }} 
                whileTap={{ scale: 0.99 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s, border-color 0.2s' }}
              >
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>Connect on LinkedIn</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </motion.a>

              <motion.a
                href="mailto:fedor@tsvetkov.site"
                whileHover={{ scale: 1.01, background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.2)' }} 
                whileTap={{ scale: 0.99 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderRadius: 12, background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'background 0.2s, border-color 0.2s' }}
              >
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>fedor@tsvetkov.site</span>
                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'transparent', 
                    padding: '4px 10px', 
                    borderRadius: 6,
                    fontSize: '11px', 
                    fontWeight: 700, 
                    color: copied ? T.accent : 'rgba(255,255,255,0.4)',
                    cursor: 'pointer', 
                    display: 'inline-flex', 
                    alignItems: 'center',
                    backgroundColor: copied ? 'rgba(0,255,179,0.06)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${copied ? `${T.accent}30` : 'rgba(255,255,255,0.08)'}`,
                    transition: 'all 0.2s', 
                    fontFamily: 'inherit'
                  }}
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </motion.a>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА (Форма) */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div className="element-wrapper" style={{ width: '100%' }}>
            <div className="contact-card">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '2rem' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,255,179,0.08)', border: `1px solid ${T.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Protocol Initialized.</h3>
                    <p style={{ color: T.sub, fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>We have captured your request. Expect intercept within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Your Name</label>
                      <input className="contact-input" type="text" required placeholder="John Doe" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputStyle} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Contact Email</label>
                      <input className="contact-input" type="email" required placeholder="john@company.com" value={form.contact} onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} style={inputStyle} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Website / Socials</label>
                      <input className="contact-input" type="text" required placeholder="company.com or @company" value={form.website} onChange={e => setForm(p => ({ ...p, website: e.target.value }))} style={inputStyle} />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Monthly Ad Budget</label>
                      <select 
                        className="contact-input contact-select" 
                        required 
                        value={form.budget} 
                        onChange={e => setForm(p => ({ ...p, budget: e.target.value }))} 
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="" disabled hidden>Select your budget range</option>
                        <option value="under-3k">Under $3,000 / mo</option>
                        <option value="3k-10k">$3,000 - $10,000 / mo</option>
                        <option value="10k-25k">$10,000 - $25,000 / mo</option>
                        <option value="25k-plus">$25,000+ / mo</option>
                      </select>
                    </div>

                    {/* Акцентная сабмит-кнопка в инженерном стиле */}
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileTap={{ scale: 0.99 }}
                      className="btn-submit-glow"
                      style={{
                        padding: '14px 28px', 
                        borderRadius: 12, 
                        fontFamily: 'inherit', 
                        fontSize: '0.95rem',
                        cursor: status === 'sending' ? 'not-allowed' : 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: 8, 
                        marginTop: '0.5rem', 
                        width: '100%'
                      }}
                    >
                      {status === 'sending' ? 'Transmitting…' : 'Submit Audit Request'}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      {/* CALENDLY MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '1rem' }}>
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', inset: 0, background: 'rgba(5, 5, 7, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              style={{
                position: 'relative', 
                width: '100%', 
                maxWidth: '840px', 
                height: '90vh', 
                maxHeight: '680px',
                background: '#0C0C0F', 
                border: `1px solid rgba(0, 255, 179, 0.25)`,
                borderRadius: 24, 
                display: 'flex', 
                flexDirection: 'column', 
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.85)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: T.accent }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Secure Scheduling Protocol</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  style={{ background: 'transparent', border: 'none', color: T.muted, cursor: 'pointer' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
              <div style={{ flex: 1, position: 'relative' }}>
                <iframe 
                  className="calendar-frame"
                  src="https://calendly.com/fediatsvetkov/15min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0c0c0f&text_color=ffffff&primary_color=00ffb3"
                  title="B2B Strategy Scheduler"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
