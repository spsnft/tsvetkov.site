'use client';

import React, { useState } from 'react';
import { T } from '../../../src/theme/tokens';

interface FAQProps {
  t: any;
  lang?: 'en' | 'ru' | 'th';
}

export default function FAQ({ t, lang = 'en' }: FAQProps) {
  // Первый вопрос (индекс 0) открыт по умолчанию
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // EN: eyebrow + faqSub как H2, faqTitle убран (см. ТЗ). RU/TH: старая
  // пара faqTitle (H2) + faqSub (подзаголовок) — их H2 локализован,
  // трогать не нужно
  const isEn = lang === 'en';

  return (
    <section id="faq" className="faq-section">
      <style jsx>{`
        .faq-section {
          width: 100%;
          padding: ${T.hms.sectionPadTop} 0 ${T.hms.sectionPadBottom} 0;
          background: transparent;
          scroll-margin-top: 80px;
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

        .faq-eyebrow {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T.sub};
          opacity: 0.8;
          margin: 0 0 ${T.hms.eyebrowGap} 0;
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

        /* Тап-зона 44x44 при неизменном визуальном размере иконки:
           отрицательные поля гасят прирост бокса в потоке */
        .faq-icon {
          width: 44px;
          height: 44px;
          margin: -10px -10px -10px 0;
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

        /* Ответ может состоять из нескольких абзацев: рамка и внешние отступы
           живут на контейнере, чтобы у каждого абзаца не появлялась своя линия */
        .faq-answer-text {
          padding: 1rem 1.5rem 1.5rem 1.5rem;
          margin: 0;
          color: ${T.body};
          font-size: 0.95rem;
          line-height: 1.6;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .faq-answer-text p {
          margin: 0;
        }

        .faq-answer-text p + p {
          margin-top: 0.85rem;
        }

        /* --- МОБИЛЬНЫЕ (ДО 767px) --- */
        @media (max-width: 767px) {
          .faq-section { padding: ${T.hms.sectionPadTopMobile} 0 ${T.hms.sectionPadBottomMobile} 0; }
          .faq-title { font-size: 1.8rem; }
          .faq-button { font-size: 1rem; padding: 1.2rem; }

          .faq-answer-text { padding: 1rem 1.2rem 1.2rem 1.2rem; font-size: 0.9rem; }
        }
      `}</style>

      <div className="faq-container">
        <div className="faq-header">
          {isEn ? (
            <>
              <p className="faq-eyebrow">{t?.faqLabel || 'FAQ'}</p>
              <h2 className="faq-title">{t?.faqSub}</h2>
            </>
          ) : (
            <>
              <h2 className="faq-title">{t?.faqTitle}</h2>
              <p className="faq-subtitle">{t?.faqSub}</p>
            </>
          )}
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
                    <div className="faq-answer-text">
                      {String(item.a).split('\n\n').map((para: string, i: number) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
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
