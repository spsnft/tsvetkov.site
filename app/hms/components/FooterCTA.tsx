'use client';

import React, { useEffect } from 'react';
import { T } from '../../../src/theme/tokens';

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

export default function FooterCTA({ t }: FooterCTAProps) {
  const titleText = t?.footerTitle || "Ready to maximize your revenue?";
  const sub1Text = t?.footerSub1 || "Stop leaving 15–20% on the table";
  const sub2Text = t?.footerSub2 || "Take full control of your direct bookings";
  const btnText = t?.footerBtn || t?.btnAudit || "Book a Free Audit";

  useEffect(() => {
    if (!document.getElementById('calendly-w-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-w-css';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    if (!document.getElementById('calendly-w-js')) {
      const script = document.createElement('script');
      script.id = 'calendly-w-js';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleCalendlyPopup = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/fediatsvetkov/15min'
      });
    } else {
      window.open('https://calendly.com/fediatsvetkov/15min', '_blank');
    }
  };

  return (
    <section className="footer-cta-section">
      <style jsx>{`
        .footer-cta-section {
          width: 100%;
          /* Верх: 0 | Низ: 112px (7rem) воздуха до подвала */
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
        
        .btn-gradient-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #000000 !important;
          background: linear-gradient(135deg, #00E599 0%, #00A3FF 100%);
          padding: 1.1rem 2.8rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.05rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(0, 229, 153, 0.25), 0 10px 30px rgba(0, 163, 255, 0.15);
        }
        
        .btn-gradient-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(0, 229, 153, 0.4), 0 15px 40px rgba(0, 163, 255, 0.25);
          filter: brightness(1.08);
        }

        .btn-gradient-cta:active {
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          .footer-cta-section {
            padding: 0 0 4.5rem 0;
          }
          .btn-gradient-cta {
            width: 100%;
            padding: 1.1rem 1.5rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="cta-box">
          <h2 className="main-title">{titleText}</h2>
          
          <div className="subtitle-box">
            <p className="subtitle">{sub1Text}</p>
            <p className="subtitle">{sub2Text}</p>
          </div>
          
          <button onClick={handleCalendlyPopup} className="btn-gradient-cta">
            {btnText}
          </button>
        </div>
      </div>
    </section>
  );
}
