'use client';

import React, { useState } from 'react';
import { T } from '@/src/theme/tokens';
import { useCalendlyPopup } from '@/src/components/useCalendlyPopup';

const ACCENT = '#00E599';

interface ContactProps {
  dict: {
    contact: {
      badge: string;
      titleLine1: string;
      titleLine2: string;
      desc: string;
      desc2: string;
      callBtn: string;
      formTitle: string;
      nameLabel: string;
      emailLabel: string;
      websiteLabel: string;
      submitBtn: string;
    };
  } | null;
}

export const Contact = ({ dict }: ContactProps) => {
  const [form, setForm] = useState({ name: '', contact: '', website: '', company: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { calendlyReady, popupLoading, openPopup } = useCalendlyPopup('https://calendly.com/fediatsvetkov/15min');

  const t = dict?.contact ?? {
    badge: 'GET IN TOUCH',
    titleLine1: 'Ready to scale',
    titleLine2: 'your business?',
    desc: 'Book a quick intro call or fill out the request form.',
    desc2: 'We review your project and get back to you within 24h.',
    callBtn: 'Book a 15-Min Strategy Call',
    formTitle: 'Request an Audit',
    nameLabel: 'Your Name',
    emailLabel: 'Contact Email',
    websiteLabel: 'Website or Socials',
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

  return (
    <section
      id="contact"
      style={{
        width: '100%',
        position: 'relative',
        paddingTop: T.section.topPad,
        paddingBottom: T.section.bottomPad,
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
          background: linear-gradient(180deg, #00E599 0%, #00A3FF 100%);
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
          background: linear-gradient(180deg, #1affaa 0%, #1ab1ff 100%);
          transform: translateY(-1px);
        }
        .btn-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .form-row-split {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 480px) {
          .form-row-split {
            grid-template-columns: 1fr 1fr;
          }
        }
        .quick-links-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.65rem;
          max-width: 420px;
        }
        @media (max-width: 420px) {
          .quick-links-row {
            grid-template-columns: 1fr;
          }
        }
        .quick-link-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
          padding: 0.9rem 0.5rem;
          background: rgba(18, 18, 20, 0.15);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          border: 1px solid rgba(0, 229, 153, 0.15);
          border-radius: 10px;
          color: #fff;
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 600;
          text-align: center;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .quick-link-card:hover {
          border-color: rgba(0, 229, 153, 0.4);
          background: rgba(0, 229, 153, 0.06);
          transform: translateY(-2px);
        }
        .quick-link-icon {
          font-size: 0.9rem;
        }
        .btn-spinner {
          width: 13px;
          height: 13px;
          border: 2px solid rgba(0, 229, 153, 0.25);
          border-top-color: ${ACCENT};
          border-radius: 50%;
          display: inline-block;
          animation: btnSpin 0.7s linear infinite;
        }
        @keyframes btnSpin {
          to {
            transform: rotate(360deg);
          }
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
        .contact-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${ACCENT};
          box-shadow: 0 0 8px ${ACCENT};
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
      `}</style>

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        
        {/* Main Section Content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'stretch', marginBottom: '4rem' }}>

          {/* Left Column: Copy & Quick Actions */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2.5rem' }}>
            <div>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0.35rem 0.85rem',
                  borderRadius: 20,
                  marginBottom: T.section.badgeGap,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  background: 'rgba(0, 229, 153, 0.08)',
                  border: '1px solid rgba(0, 229, 153, 0.25)',
                  color: ACCENT,
                }}
              >
                <span className="contact-badge-dot" />
                {t.badge}
              </span>

              <h2
                style={{
                  fontSize: T.section.titleSize,
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.03em',
                  color: '#fff',
                  marginBottom: '1rem',
                }}
              >
                {t.titleLine1}
                <br />
                {t.titleLine2}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '2rem', maxWidth: '450px' }}>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: T.sub, margin: 0 }}>
                  {t.desc}
                </p>
                <p style={{ fontSize: '1rem', lineHeight: 1.6, color: T.sub, margin: 0 }}>
                  {t.desc2}
                </p>
              </div>
            </div>

            <div className="quick-links-row">
              <button
                type="button"
                onClick={openPopup}
                className="quick-link-card"
                disabled={!calendlyReady || popupLoading}
                style={{
                  borderColor: 'rgba(0, 229, 153, 0.3)',
                  background: 'rgba(0, 229, 153, 0.05)',
                  opacity: calendlyReady ? 1 : 0.6,
                  cursor: calendlyReady && !popupLoading ? 'pointer' : 'not-allowed',
                }}
              >
                <span className="quick-link-icon" style={{ color: ACCENT }}>
                  {popupLoading ? <span className="btn-spinner" /> : '→'}
                </span>
                <span>{!calendlyReady ? "Loading…" : popupLoading ? "Opening…" : t.callBtn}</span>
              </button>

              <a href="https://wa.me/66650255229" target="_blank" rel="noopener noreferrer" className="quick-link-card">
                <span className="quick-link-icon" style={{ color: T.sub, display: 'inline-flex' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <span>WhatsApp</span>
              </a>

              <a href="mailto:fedor@tsvetkov.site" className="quick-link-card">
                <span className="quick-link-icon" style={{ color: T.sub }}>✉</span>
                <span>Email</span>
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
                {/* Honeypot: hidden from real users, bots tend to fill every field */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                />
                <div className="form-row-split">
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
          <div>© 2026 FT Agency. All rights reserved.</div>
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
