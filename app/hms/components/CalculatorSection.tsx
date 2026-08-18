'use client';

import React from 'react';
import HeroCalculator from './HeroCalculator';
import PrimaryCta from './PrimaryCta';

interface CalculatorSectionProps {
  // t is the full page contentData blob, same pattern as sibling sections
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t?: any;
  lang?: 'en' | 'ru' | 'th';
}

// Отдельный блок, а не часть хиро: карточка нарочно выглядывает из-за
// сгиба на мобильном, чтобы подсказать про скролл. Кнопка и микрокопия —
// сразу под калькулятором, сильнейшим аргументом страницы, а не до него
// (см. ТЗ №7, п. 2), для всех локалей. Стиль кнопки — общий компонент
// PrimaryCta, тот же, что в Pricing и финальном CTA (см. ТЗ №10, п. C1)
export default function CalculatorSection({ t = {} }: CalculatorSectionProps) {
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

        /* На десктопе кнопка сжимается до содержимого (см. PrimaryCta) и
           без этого паддинга прижималась бы к внешнему краю карточки —
           левее заголовков и цифр внутри неё, у которых есть свой
           горизонтальный паддинг 1.75rem (см. HeroCalculator .hero-calc) */
        @media (min-width: 768px) {
          .calc-cta {
            padding-left: 1.75rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="calc-inner">
          <HeroCalculator t={t} />

          <div className="calc-cta">
            <PrimaryCta
              label={t.heroCtaLabel || 'Ask for my revenue check'}
              message={t.waMessage}
              note={t.heroCtaNote || 'One WhatsApp message. No commitment.'}
              align="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
