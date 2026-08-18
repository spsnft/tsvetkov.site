'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';
import WhatsAppCta from './WhatsAppCta';

interface PrimaryCtaProps {
  label: string;
  message?: string;
  note?: string;
  // 'left' — Hero/CalculatorSection (кнопка у левого края узкой колонки
  // калькулятора). 'center' — Pricing/FooterCTA, обе секции уже
  // центрированы целиком. Радиус/тень/hover/active/переход одни на всех
  // трёх мест, чтобы следующая правка не разошлась снова (см. ТЗ №10, п. C1)
  align?: 'left' | 'center';
}

export default function PrimaryCta({ label, message, note, align = 'left' }: PrimaryCtaProps) {
  return (
    <div className={`primary-cta${align === 'center' ? ' center' : ''}`}>
      <style jsx>{`
        .primary-cta {
          width: 100%;
        }

        /* Высота/форма/кегль общие для всех трёх кнопок страницы (Hero,
           Pricing, финальный CTA). Двойной класс держит специфичность выше
           базовых правил .btn-premium-core, которые всё ещё обслуживают
           RU/TH-кнопки в старом стиле (см. ТЗ №10, п. C1) */
        :global(.primary-cta-btn.btn-premium-core) {
          width: 100%;
          height: 56px;
          border-radius: ${T.radius.md};
          font-size: 17px;
          font-weight: 600;
          /* Свечения нет. Внешняя тень одна не читалась на почти чёрном
             фоне — добавлена светлая внутренняя кромка сверху */
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 8px 24px rgba(0, 0, 0, 0.4);
          transition: background 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }

        :global(.primary-cta-btn.btn-premium-core:hover) {
          transform: none;
          /* Тот же градиент, затемнённый примерно на 8% */
          background: linear-gradient(180deg, #00D38D 0%, #0096EB 100%);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        :global(.primary-cta-btn.btn-premium-core:active) {
          transform: translateY(1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        @media (min-width: 768px) {
          :global(.primary-cta-btn.btn-premium-core) {
            width: auto;
            max-width: 420px;
          }
        }

        /* .btn-premium-core — inline-flex, margin: auto его не центрирует
           (auto-margины центрируют только блочные боксы). Центрируем через
           flex на обёртке вместо margin (см. ТЗ раунд 2, №4) */
        .primary-cta.center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .primary-cta-note {
          margin: 12px 0 0 0;
          font-size: 0.82rem;
          color: ${T.muted};
          text-align: center;
        }

        @media (min-width: 768px) {
          .primary-cta-note {
            max-width: 420px;
          }
        }

        .primary-cta.center .primary-cta-note {
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>

      <WhatsAppCta
        className="btn-premium-core primary-cta-btn"
        label={label}
        message={message}
      />
      {note && <p className="primary-cta-note">{note}</p>}
    </div>
  );
}
