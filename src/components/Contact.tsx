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
    background: 'rgba(255,255,255,0.03)', border: `1px solid ${T.brd2}`,
    borderRadius: 10, color: '#fff', fontSize: '0.95rem',
    fontFamily: 'inherit', outline: 'none', transition: 'border-color .2s',
  };

  return (
    <section id="contact" style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.25rem,5vw,2.5rem)', background: 'transparent', borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 460, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-block', padding: '3px 12px', borderRadius: 999, marginBottom: '1rem', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', background: `${T.accent}18`, border: `1px solid ${T.accent}40`, color: T.accent }}>Contact</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', margin: '0 0 1rem' }}>Ready to scale?</h2>
          <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.6 }}>
            Drop your details below or message directly on Telegram.<br />
            We respond within 24 hours.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <motion.a
            href="https://t.me/advertisment_th"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(39,174,228,0.15)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 28px', borderRadius: 12,
              background: 'linear-gradient(135deg,rgba(39,174,228,0.1),rgba(39,174,228,0.04))',
              border: '1px solid rgba(39,174,228,0.3)',
              color: '#27AEE4', textDecoration: 'none',
              fontSize: '0.95rem', fontWeight: 700,
            }}
          >
            Message directly on Telegram
          </motion.a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ color: T.muted, fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>or leave your details</span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0,255,179,0.03)', border: `1px solid ${T.accent}20`, borderRadius: 16 }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>You&apos;re on our radar.</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem' }}>We&apos;ll reach out within 24 hours. Talk soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Name</label>
                <input type="text" required placeholder="Your name" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: T.muted, fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Contact Info (Email / Telegram)</label>
                <input type="text" required placeholder="How should we reach you?" value={form.contact} onChange={e => setForm(p => ({ ...p, contact: e.target.value }))} style={inputStyle} />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.01, boxShadow: `0 0 30px ${T.glow}` }}
                whileTap={{ scale: 0.99 }}
                style={{
                  padding: '14px 28px', borderRadius: 12, border: 'none', fontFamily: 'inherit', fontWeight: 700, fontSize: '1rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer', background: `linear-gradient(135deg,${T.accent},${T.acc2})`, color: '#0A0A0C',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: '0.5rem',
                }}
              >
                {status === 'sending' ? 'Sending…' : 'Get in touch'}
              </motion.button>
            </form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
