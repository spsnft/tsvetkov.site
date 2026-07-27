'use client';

import React, { useState, useEffect } from 'react';
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
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
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
        
        @media (max-width: 768px) {
          .footer-cta-section {
            padding: 0 0 4.5rem 0;
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
          
          <button 
            type="button" 
            onClick={handleCalendlyPopup} 
            className="btn-premium-core"
            disabled={!calendlyReady}
            style={{ opacity: calendlyReady ? 1 : 0.6, cursor: calendlyReady ? 'pointer' : 'not-allowed' }}
          >
            {calendlyReady ? btnText : "Loading…"}
          </button>
        </div>
      </div>
    </section>
  );
}
