'use client';

import React, { useState } from 'react';
import { T } from '@/src/theme/tokens';
import { EcommerceContent } from '../constants';

export default function FAQ({ t }: { t: EcommerceContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <style jsx>{`
        .faq-section {
          width: 100%;
          padding: 0 0 clamp(3rem, 6vw, 5rem) 0;
        }

        .faq-container {
          max-width: 720px;
          margin: 0 auto;
        }

        .header-box {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .title {
          font-size: clamp(1.8rem, 4vw, 2.4rem);
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.6rem 0;
          letter-spacing: -0.02em;
        }

        .subtitle {
          color: ${T.sub};
          font-size: 1rem;
          margin: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: rgba(12, 12, 16, 0.06);
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          border: 1px solid ${T.accent15};
          border-radius: 12px;
          overflow: hidden;
        }

        .faq-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: transparent;
          border: none;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }

        .faq-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          position: relative;
        }

        .icon-line {
          position: absolute;
          top: 50%;
          left: 50%;
          background: ${T.accent};
          border-radius: 2px;
          transition: transform 0.3s ease;
        }

        .icon-line-h {
          width: 16px;
          height: 2px;
          transform: translate(-50%, -50%);
        }

        .icon-line-v {
          width: 2px;
          height: 16px;
          transform: translate(-50%, -50%);
        }

        .faq-answer-wrapper {
          display: grid;
          transition: all 0.3s ease-in-out;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer-text {
          padding: 0 1.5rem 1.5rem 1.5rem;
          margin: 0;
          color: ${T.body};
          font-size: 0.92rem;
          line-height: 1.6;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }
      `}</style>

      <div className="container faq-container">
        <div className="header-box">
          <h2 className="title">{t.faqTitle}</h2>
          <p className="subtitle">{t.faqSub}</p>
        </div>

        <div className="faq-list">
          {t.faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button className="faq-button" onClick={() => toggleAccordion(index)} aria-expanded={isOpen}>
                  <span>{item.q}</span>
                  <div className="faq-icon">
                    <div className="icon-line icon-line-h" style={{ transform: `translate(-50%, -50%) rotate(${isOpen ? 180 : 0}deg)` }} />
                    <div className="icon-line icon-line-v" style={{ transform: `translate(-50%, -50%) rotate(${isOpen ? 90 : 0}deg)` }} />
                  </div>
                </button>
                <div className="faq-answer-wrapper" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}>
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
