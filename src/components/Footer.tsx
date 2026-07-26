import React from 'react';
import { T } from '@/src/theme/tokens';

const ACCENT = '#00E599';

export const Contact = () => {
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
        }
        .contact-link-card:hover {
          border-color: rgba(0, 229, 153, 0.4);
          background: rgba(0, 229, 153, 0.04);
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
              GET IN TOUCH
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
              Ready to scale your business?
            </h2>

            <p style={{ fontSize: '1rem', lineHeight: 1.6, color: T.sub, marginBottom: '2rem', maxWidth: '450px' }}>
              Book a quick intro call or fill out the request form. We review every project and get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '400px' }}>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="contact-link-card" style={{ borderColor: 'rgba(0, 229, 153, 0.3)', background: 'rgba(0, 229, 153, 0.05)' }}>
                <span>Book a 15-Min Strategy Call</span>
                <span style={{ color: ACCENT }}>→</span>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-card">
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
              Request an Audit
            </h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Your Name
                </label>
                <input type="text" placeholder="John Doe" className="contact-input" required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Contact Email
                </label>
                <input type="email" placeholder="john@company.com" className="contact-input" required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Website or Socials
                </label>
                <input type="text" placeholder="company.com or @company" className="contact-input" />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: T.sub, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Monthly Ad Budget
                </label>
                <select className="contact-input" style={{ color: '#fff' }}>
                  <option value="" style={{ background: '#090B0E' }}>Select your budget range</option>
                  <option value="5k-10k" style={{ background: '#090B0E' }}>$5,000 – $10,000</option>
                  <option value="10k-50k" style={{ background: '#090B0E' }}>$10,000 – $50,000</option>
                  <option value="50k+" style={{ background: '#090B0E' }}>$50,000+</option>
                </select>
              </div>

              <button type="submit" className="btn-submit" style={{ marginTop: '0.5rem' }}>
                Submit Audit Request
              </button>
            </form>
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
