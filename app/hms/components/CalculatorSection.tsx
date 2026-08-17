'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';
import HeroCalculator from './HeroCalculator';
import WhatsAppCta from './WhatsAppCta';

interface CalculatorSectionProps {
  // t is the full page contentData blob, same pattern as sibling sections
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t?: any;
  lang?: 'en' | 'ru' | 'th';
}

// Отдельный блок, а не часть хиро: карточка нарочно выглядывает из-за
// сгиба на мобильном, чтобы подсказать про скролл. EN: кнопка и микрокопия
// теперь тоже здесь, сразу под калькулятором — сильнейшим аргументом
// страницы, а не до него (см. ТЗ №7, п. 2). RU/TH: только калькулятор,
// кнопка остаётся в Hero
export default function CalculatorSection({ t = {}, lang = 'en' }: CalculatorSectionProps) {
  const isEn = lang === 'en';

  return (
    <section className="calc-section">
      <style jsx>{`
        /* Калькулятор → лейбл ленты: 32-40px — достаточно тесно, чтобы
           «лейбл + лента» читались как завершение Hero, а не начало
           следующей секции (см. ТЗ №3, п. 2.2) */
        .calc-section {
          width: 100%;
          padding: 0 0 36px 0;
        }

        .calc-inner {
          max-width: 480px;
          margin: 0 auto;
        }

        .calc-cta {
          margin-top: 20px;
        }

        /* Высота/форма/кегль — свои для этой кнопки, не трогают базовый
           .btn-premium-core (он используется в Pricing/FooterCTA/ecommerce).
           Двойной класс поднимает специфичность выше базовых правил
           (см. ТЗ №7, п. 3.2/3.3) */
        :global(.hero-primary-cta.btn-premium-core) {
          width: 100%;
          height: 56px;
          border-radius: 16px;
          font-size: 17px;
          font-weight: 600;
          /* Свечения нет — мягкая тёмная тень вместо неонового бокс-шэдоу */
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          transition: background 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }

        :global(.hero-primary-cta.btn-premium-core:hover) {
          transform: none;
          /* Тот же градиент, затемнённый примерно на 8% */
          background: linear-gradient(180deg, #00D38D 0%, #0096EB 100%);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        :global(.hero-primary-cta.btn-premium-core:active) {
          transform: translateY(1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        @media (min-width: 768px) {
          :global(.hero-primary-cta.btn-premium-core) {
            width: auto;
            max-width: 420px;
          }
        }

        .cta-note {
          margin: 12px 0 0 0;
          font-size: 0.82rem;
          color: ${T.muted};
        }
      `}</style>

      <div className="container">
        <div className="calc-inner">
          <HeroCalculator t={t} />

          {isEn && (
            <>
              <div className="calc-cta">
                <WhatsAppCta
                  className="btn-premium-core hero-primary-cta"
                  label={t.heroCtaLabel || 'Get my free revenue check'}
                  message={t.waMessage}
                />
              </div>
              <p className="cta-note">{t.heroCtaNote || 'One message. No commitment.'}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
