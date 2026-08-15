'use client';

import React from 'react';
import Image from 'next/image';
import { T } from '../../../src/theme/tokens';

interface ScalePracticeProps {
  t?: any;
}

// 3D-иллюстрации из удалённых карточек: теперь по одной на пункт правой
// колонки. Пропорции исходников — 16:9, поэтому картинка вписывается
// в квадратную ячейку, а не обрезается под неё
const AFTER_ICONS = [
  '/assets/sync.webp',
  '/assets/revenue.webp',
  '/assets/growth.webp'
];

// Полоса сравнения — единственное место, где на странице проговаривается
// «было → стало»
const DEFAULT_CMP_NOW = [
  "Rates and availability updated by hand, around the clock",
  "15–20% of every booking goes to the platform",
  "Every guest arrives through a channel you don't own"
];

const DEFAULT_CMP_AFTER = [
  "One room calendar, synced across 300+ channels",
  "Direct bookings at zero commission, forever",
  "Your own search traffic and returning guests"
];

export default function ScalePractice({ t }: ScalePracticeProps) {
  const cmpNow: string[] = t?.scaleCmpNow || DEFAULT_CMP_NOW;
  const cmpAfter: string[] = t?.scaleCmpAfter || DEFAULT_CMP_AFTER;

  return (
    <section id="how-it-works" className="scale-section">
      <style jsx>{`
        .scale-section {
          width: 100%;
          padding: 3rem 0 3.5rem 0;
          background: transparent;
          scroll-margin-top: 80px;
        }

        .scale-header {
          text-align: center;
          margin-bottom: 3.5rem; 
        }

        .scale-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.03em;
          line-height: 1.2;
        }

        /* ---- ПОЛОСА СРАВНЕНИЯ ----
           Единственный брейкпоинт полосы — 760px, и все её правила собраны
           здесь: остальная секция ломается на 767/768, и если смешать сетки,
           в диапазоне 760–767px обе раскладки применяются разом. */
        .cmp {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          margin-bottom: 40px;
        }

        .cmp-col {
          background: #101214;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 22px;
          min-width: 0;
        }

        .cmp-col.now {
          background: #0B0C0D;
        }

        .cmp-col.after {
          border-color: rgba(110, 231, 168, 0.22);
        }

        .cmp-h {
          font-size: 10.5px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-weight: 700;
          margin: 0 0 16px 0;
        }

        .cmp-h.now {
          color: #5A6069;
        }

        .cmp-h.after {
          color: ${T.mint};
        }

        .cmp-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .cmp-list li {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 14.5px;
          line-height: 1.45;
          padding: 11px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          text-wrap: pretty;
        }

        .cmp-list li:last-child {
          border-bottom: none;
        }

        /* Слева маркер-тире висит по первой строке, справа иконку центрирует
           общее правило списка */
        .cmp-col.now .cmp-list li {
          align-items: flex-start;
          color: #7B818A;
        }

        .cmp-col.after .cmp-list li {
          color: #F2F4F6;
          font-weight: 500;
        }

        .mk {
          flex: none;
          width: 16px;
          text-align: center;
          line-height: 1.45;
        }

        .cmp-col.now .mk {
          color: #41464D;
        }

        /* Иконка вместо галочки: квадратная ячейка 60px, картинка 16:9
           вписывается в неё целиком — пропорции сохранены, кропа нет */
        .cmp-icon {
          flex: none;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        :global(.cmp-icon .visual-asset) {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain;
          display: block;
          mix-blend-mode: screen;
          filter: contrast(1.18) brightness(1.08) drop-shadow(0 0 10px rgba(0, 229, 153, 0.25));
        }

        .cmp-mid {
          display: none;
        }

        /* Мобилка: колонки друг под другом, серая сверху, стрелка скрыта */
        @media (max-width: 759px) {
          .cmp {
            max-width: 480px;
            margin-left: auto;
            margin-right: auto;
          }
          .cmp-col {
            padding: 18px 16px;
          }
          .cmp-list li {
            font-size: 14px;
          }
        }

        /* Десктоп: две равные колонки, сшитые круглой стрелкой по стыку */
        @media (min-width: 760px) {
          .cmp {
            grid-template-columns: 1fr auto 1fr;
            gap: 0;
            align-items: stretch;
          }
          /* Внутренние границы убраны — полоса читается как единый элемент */
          .cmp-col.now {
            border-radius: 16px 0 0 16px;
            border-right: none;
          }
          .cmp-col.after {
            border-radius: 0 16px 16px 0;
            border-left: none;
          }
          /* Пункты выравниваются попарно: строку держит иконка правой колонки
             (60px) плюс вертикальные паддинги, поэтому однострочный пункт не
             сдвигает соседний столбец */
          .cmp-list li {
            min-height: calc(60px + 22px);
          }
          .cmp-mid {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 52px;
            position: relative;
            z-index: 2;
          }
          .cmp-arrow {
            width: 38px;
            height: 38px;
            border-radius: 99px;
            background: ${T.bg0};
            border: 1px solid rgba(255, 255, 255, 0.12);
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${T.mint};
            font-size: 15px;
            line-height: 1;
          }
        }

        /* Нижний край двухколоночной раскладки: колонка сужается до ~330px, и
           самый длинный пункт (русский) уходит в третью строку — кегль на
           полпункта мельче возвращает его в две, сохраняя парность строк */
        @media (min-width: 760px) and (max-width: 899px) {
          .cmp-col {
            padding: 20px 18px;
          }
          .cmp-list li {
            font-size: 13.5px;
          }
        }

        /* Полоса сравнения — последний блок секции, отступ снизу ей не нужен */
        .cmp:last-child {
          margin-bottom: 0;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .scale-section {
            padding: 2.5rem 0 3rem 0;
          }
          .scale-header {
            margin-bottom: 2.5rem;
          }
          .scale-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 767px) {
          .scale-section {
            padding: 2.25rem 0 2.75rem 0;
          }
          .scale-header {
            margin-bottom: 2.25rem;
          }
          .scale-title {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="scale-header">
          <h2 className="scale-title">{t?.scaleTitle || "Where your revenue leaks"}</h2>
        </div>

        <div className="cmp">
          <div className="cmp-col now">
            <p className="cmp-h now">{t?.scaleCmpNowLabel || "WITHOUT A DIRECT SYSTEM"}</p>
            <ul className="cmp-list">
              {cmpNow.map((line, i) => (
                <li key={i}>
                  <span className="mk" aria-hidden="true">—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cmp-mid" aria-hidden="true">
            <div className="cmp-arrow">→</div>
          </div>

          <div className="cmp-col after">
            <p className="cmp-h after">{t?.scaleCmpAfterLabel || "WITH FT AGENCY"}</p>
            <ul className="cmp-list">
              {cmpAfter.map((line, i) => (
                <li key={i}>
                  <span className="cmp-icon" aria-hidden="true">
                    <Image
                      src={AFTER_ICONS[i % AFTER_ICONS.length]}
                      alt=""
                      className="visual-asset"
                      width={120}
                      height={68}
                    />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
