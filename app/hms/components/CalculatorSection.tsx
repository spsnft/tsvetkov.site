'use client';

import React from 'react';
import HeroCalculator from './HeroCalculator';

interface CalculatorSectionProps {
  // t is the full page contentData blob, same pattern as sibling sections
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t?: any;
}

// Отдельный блок, а не часть хиро: карточка нарочно выглядывает из-за
// сгиба на мобильном, чтобы подсказать про скролл
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
      `}</style>

      <div className="container">
        <div className="calc-inner">
          <HeroCalculator t={t} />
        </div>
      </div>
    </section>
  );
}
