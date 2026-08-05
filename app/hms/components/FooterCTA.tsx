'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { T } from '../../../src/theme/tokens';
import { onCalendlyReady } from '@/src/components/CalendlyScript';

interface FooterCTAProps {
  t?: {
    footerTitle?: string;
    footerSub1?: string;
    footerSub2?: string;
    footerSub?: string;
    footerBtn?: string;
    btnAudit?: string;
    [key: string]: any;
  };
}

export default function FooterCTA({ t = {} }: FooterCTAProps) {
  const [calendlyReady, setCalendlyReady] = useState(false);
  
  const titleText = t.footerTitle || "Ready to maximize your revenue?";
  const sub1Text = t.footerSub1 || t.footerSub || "Stop leaving 15–20% on the table";
  const sub2Text = t.footerSub2 || "Take full control of your direct bookings";
  const btnText = t.footerBtn || t.btnAudit || "Book a Free Audit";

  useEffect(() => {
    onCalendlyReady(() => setCalendlyReady(true));
  }, []);

  const handleCalendlyPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/fediatsvetkov/15min'
      });
    }
  };

  return (
    <section className="footer-cta-section">
      <style jsx>{`
        .footer-cta-section {
          width: 100%;
          padding: 0 0 7rem 0;
          text-align: center;
          position: relative;
          background: transparent;
        }
        
        .cta-box {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .main-title {
          font-size: clamp(2.2rem, 3.8vw, 3rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin: 0;
          color: #ffffff;
          text-wrap: pretty;
        }
        
        .subtitle-box {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 0.8rem;
        }

        .subtitle {
          color: ${T.sub};
          font-size: clamp(1.05rem, 1.5vw, 1.2rem);
          line-height: 1.5;
          margin: 0;
          text-wrap: pretty;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          flex-wrap: nowrap;
        }

        .btn-secondary-chat {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: rgba(0, 229, 153, 0.06);
          border: 1px solid rgba(0, 229, 153, 0.25);
          backdrop-filter: blur(12px);
          color: #00E599;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0, 229, 153, 0.1);
          box-sizing: border-box;
          cursor: pointer;
          flex-shrink: 0;
          text-decoration: none;
        }

        .btn-secondary-chat:hover {
          transform: translateY(-2px);
          background: rgba(0, 229, 153, 0.15);
          border-color: rgba(0, 229, 153, 0.5);
          box-shadow: 0 6px 25px rgba(0, 229, 153, 0.3);
          color: #00E599;
        }

        .btn-secondary-chat svg {
          width: 26px;
          height: 26px;
          display: block;
          transition: transform 0.25s ease;
        }

        .btn-secondary-chat:hover svg {
          transform: scale(1.08);
        }

        .legal-footer {
          width: 100%;
          max-width: 1100px;
          margin: 4rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .legal-footer :global(a) {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-footer :global(a:hover) {
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .footer-cta-section {
            padding: 0 0 4.5rem 0;
          }
          .legal-footer {
            justify-content: center;
            text-align: center;
            margin-top: 3rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="cta-box">
          <h2 className="main-title">{titleText}</h2>

          <div className="subtitle-box">
            <p className="subtitle">{sub1Text}</p>
            {sub2Text && <p className="subtitle">{sub2Text}</p>}
          </div>

          <div className="cta-actions">
            <button
              type="button"
              onClick={handleCalendlyPopup}
              className="btn-premium-core"
              disabled={!calendlyReady}
              style={{ opacity: calendlyReady ? 1 : 0.6, cursor: calendlyReady ? 'pointer' : 'not-allowed' }}
            >
              {calendlyReady ? btnText : "Loading…"}
            </button>

            <a
              href="https://wa.me/66650255229"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-chat"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="legal-footer">
          <div>© 2026 TSVETKOV. All rights reserved.</div>
          <div>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
