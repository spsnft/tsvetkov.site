'use client';

import React, { useState } from 'react';
import { T } from '../../../src/theme/tokens';

interface FAQProps {
  t: any;
}

export default function FAQ({ t }: FAQProps) {
  // Первый вопрос (индекс 0) открыт по умолчанию
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <style jsx>{`
        .faq-section {
          width: 100%;
          padding: 0 0 5rem 0;
          background: transparent;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.75rem 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        .faq-subtitle {
          color: ${T.sub};
          font-size: 1.05rem;
          margin: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          backdrop-filter: blur(4px) saturate(140%);
          -webkit-backdrop-filter: blur(4px) saturate(140%);
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .faq-item:hover {
          border-color: rgba(255, 255, 255, 0.15);
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
          font-size: 1.1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          outline: none;
        }

        .faq-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-line {
          position: absolute;
          background: #00E599;
          border-radius: 2px;
          transition: transform 0.3s ease;
        }

        .icon-line-h {
          width: 16px;
          height: 2px;
        }

        .icon-line-v {
          width: 2px;
          height: 16px;
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
          font-size: 0.95rem;
          line-height: 1.6;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1rem;
        }

        /* --- ПЛАНШЕТЫ (768px - 1024px) --- */
        @media (min-width: 768px) and (max-width: 1024px) {
          .faq-section {
            padding: 0 0 3.5rem 0;
          }
        }

        /* --- МОБИЛЬНЫЕ (ДО 767px) --- */
        @media (max-width: 767px) {
          .faq-section {
            padding: 0 0 3rem 0;
          }
          .faq-title { font-size: 1.8rem; }
          .faq-button { font-size: 1rem; padding: 1.2rem; }
          
          /* Было: padding: 0 1.2rem... Стало: padding: 1rem 1.2rem... */
          .faq-answer-text { padding: 1rem 1.2rem 1.2rem 1.2rem; font-size: 0.9rem; } 
        }
      `}</style>

      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">{t?.faqTitle}</h2>
          <p className="faq-subtitle">{t?.faqSub}</p>
        </div>

        <div className="faq-list">
          {t?.faqItems?.map((item: any, index: number) => {
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className="faq-item">
                <button 
                  className="faq-button" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <div className="faq-icon">
                    <div className="icon-line icon-line-h" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    <div className="icon-line icon-line-v" style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }} />
                  </div>
                </button>
                
                <div 
                  className="faq-answer-wrapper"
                  style={{ 
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    opacity: isOpen ? 1 : 0
                  }}
                >
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
