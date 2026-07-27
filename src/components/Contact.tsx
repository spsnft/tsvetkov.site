'use client';

import React, { useState } from 'react';
import { T } from '@/src/theme/tokens';

const ACCENT = '#00E599';

interface ContactProps {
  dict: {
    contact: {
      badge: string;
      title: string;
      desc: string;
      callBtn: string;
      formTitle: string;
      nameLabel: string;
      emailLabel: string;
      websiteLabel: string;
      budgetLabel: string;
      submitBtn: string;
    };
  } | null;
}

export const Contact = ({ dict }: ContactProps) => {
  const [form, setForm] = useState({ name: '', contact: '', website: '', budget: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const t = dict?.contact ?? {
    badge: 'GET IN TOUCH',
    title: 'Ready to scale your business?',
    desc: 'Book a quick intro call or fill out the request form. We review every project and get back to you within 24 hours.',
    callBtn: 'Book a 15-Min Strategy Call',
    formTitle: 'Request an Audit',
    nameLabel: 'Your Name',
    emailLabel: 'Contact Email',
    websiteLabel: 'Website or Socials',
    budgetLabel: 'Monthly Ad Budget',
    submitBtn: 'Submit Audit Request',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Error ${res.status}`);
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleCalendlyPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/fediatsvetkov/15min'
      });
    } else {
      window.open('https://calendly.com/fediatsvetkov/15min', '_blank');
    }
  };

  return (
    <section
      id="contact"
      style={{
        width: '100%',
        position: 'relative',
        paddingTop: 'clamp(2rem, 4vw, 4rem)',
        paddingBottom: '2rem',
        paddingLeft: 'clamp(1rem, 4vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 4vw, 2.5rem)',
        background: 'transparent',
      }}
    >
      <style>{`
        .contact-input {
          width: 100%;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          color: #fff;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-input:focus {
          border-color: ${ACCENT};
          box-shadow: 0 0 0 1px ${ACCENT};
        }
        .contact-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .btn-submit {
          width: 100%;
          background: ${ACCENT};
          color: #000;
          font-weight: 700;
          padding: 0.9rem 1.5rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .btn-submit:hover {
          background: #00c785;
          transform: translateY(-1px);
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .contact-link-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          color: #fff;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .contact-link-card:hover {
          border-color: rgba(0, 229, 153, 0.4);
          background: rgba(0, 229, 153, 0.04);
        }
        .success-message {
          text-align: center;
          padding: 2rem;
        }
        .success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(0, 229, 153, 0.08);
          border: 1px solid ${ACCENT};
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .error-message {
          text-align: center;
          padding: 2rem;
        }
        .error-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid #EF4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        
        {/* Main Section Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start', marginBottom: '4rem' }}>
          
          {/* Left Column: Copy & Quick Actions */}
          <div>
            <span
              style={{
                display: 'inline-block',
                padding: '0.35rem 0.85rem',
                borderRadius: 20,
                marginBottom: '1rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                background: 'rgba(0, 229, 153, 0.08)',
                border: '1px solid rgba(0, 229, 153, 0.25)',
                color: ACCENT,
              }}
            >
              {t.badge}
            </span>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                color: '#fff',
                marginBottom: '1rem',
              }}
            >
              {t.title}
            </h2>

            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: T.sub, marginBottom: '2rem', maxWidth: '450px' }}>
              {t.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '400px' }}>
              <button
                type="button"
                onClick={handleCalendlyPopup}
                className="contact-link-card"
                style={{ borderColor: 'rgba(0, 229, 153, 0.3)', background: 'rgba(0, 229, 153, 0.05)' }}
              >
                <span>{t.callBtn}</span>
                <span style={{ color: ACCENT }}>→</span>
              </button>

              <a href="https://linkedin.com/in/tsvetkov-marketing/" target="_blank" rel="noopener noreferrer" className="contact-link-card">
                <span>Connect on LinkedIn</span>
                <span style={{ color: T.sub }}>in</span>
              </a>

              <a href="mailto:fedor@tsvetkov.site" className="contact-link-card">
                <span>fedor@tsvetkov.site</span>
                <span style={{ color: T.sub }}>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Audit Request Form */}
          <div className="card-matte" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>
              {t.formTitle}
            </h3>

            {status === 'success' ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Request Submitted.</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.5, margin: 0, color: T.sub }}>We will get back to you within 24 hours.</p>
              </div>
            ) : status === 'error' ? (
              <div className="error-message">
                <div className="error-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Submission Failed.</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.5, margin: '0 0 1.5rem', color: T.sub }}>There was an error sending your request.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-submit"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="audit-name" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {t.nameLabel}
                  </label>
                  <input
                    id="audit-name"
                    type="text"
                    placeholder="John Doe"
                    className="contact-input"
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="audit-email" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {t.emailLabel}
                  </label>
                  <input
                    id="audit-email"
                    type="email"
                    placeholder="john@company.com"
                    className="contact-input"
                    required
                    value={form.contact}
                    onChange={e => setForm(p => ({ ...p, contact: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="audit-website" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {t.websiteLabel}
                  </label>
                  <input
                    id="audit-website"
                    type="text"
                    placeholder="company.com or @company"
                    className="contact-input"
                    value={form.website}
                    onChange={e => setForm(p => ({ ...p, website: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="audit-budget" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {t.budgetLabel}
                  </label>
                  <select
                    id="audit-budget"
                    className="contact-input"
                    style={{ color: '#fff' }}
                    value={form.budget}
                    onChange={e => setForm(p => ({ ...p, budget: e.target.value }))}
                  >
                    <option value="" style={{ background: '#090B0E' }}>Select your budget range</option>
                    <option value="5k-10k" style={{ background: '#090B0E' }}>$5,000 – $10,000</option>
                    <option value="10k-50k" style={{ background: '#090B0E' }}>$10,000 – $50,000</option>
                    <option value="50k+" style={{ background: '#090B0E' }}>$50,000+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-submit"
                  style={{ marginTop: '0.5rem' }}
                >
                  {status === 'sending' ? 'Sending…' : t.submitBtn}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Legal Micro-Footer */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.35)',
        }}>
          <div>© 2026 TSVETKOV. All rights reserved.</div>
          <div>
            <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>
              Privacy Policy
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
