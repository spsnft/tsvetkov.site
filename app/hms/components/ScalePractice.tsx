'use client';

import React from 'react';
import { T } from '../../../src/theme/tokens';

interface ScaleItem {
  title: string;
  desc: string;
  uiType: 'capture' | 'convert' | 'recover';
}

interface ScalePracticeProps {
  t?: {
    scaleTitle?: string;
    scaleSub?: string;
    scaleItems?: ScaleItem[];
  };
}

export default function ScalePractice({ t }: ScalePracticeProps) {
  // Дефолтный контент, если данные не переданы из i18n / конфигуратора
  const title = t?.scaleTitle || 'Scale your practice';
  const sub = t?.scaleSub || 'Simplify everyday tasks so your team can focus on what matters most.';
  
  const items: ScaleItem[] = t?.scaleItems || [
    {
      title: 'Capture',
      desc: 'Answer every call, text, and message 24/7. No patients lost to hold music or after-hours gaps.',
      uiType: 'capture'
    },
    {
      title: 'Convert',
      desc: 'Turn referrals into booked appointments in hours, not weeks, and double your conversion rate.',
      uiType: 'convert'
    },
    {
      title: 'Recover',
      desc: 'Cut no-shows in half and automatically backfill cancelled slots to keep your schedule full.',
      uiType: 'recover'
    }
  ];

  // Рендеринг кастомной премиальной графики из скриншота донора
  const renderVisual = (type: 'capture' | 'convert' | 'recover') => {
    const avatarPlaceholder = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>";

    switch (type) {
      case 'capture':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Центральная линия с иконками */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '80%', justifyContent: 'space-between', zIndex: 1 }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: `1px solid ${T.border}`, backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: T.accent, fontSize: '0.8rem' }}>📞</span>
              </div>
              <div style={{ flex: 1, height: '1px', borderTop: `1px dashed ${T.border}` }}></div>
              {/* Логотип-нода ИИ */}
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', backgroundColor: T.bg1, border: `1px solid ${T.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 15px rgba(0, 229, 153, 0.15)` }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: T.accent, opacity: 0.8 }}></div>
              </div>
              <div style={{ flex: 1, height: '1px', borderTop: `1px dashed ${T.border}` }}></div>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(0, 225, 153, 0.1)', border: '1px solid #00E599', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#00E599', fontSize: '0.75rem' }}>✓</span>
              </div>
            </div>
            {/* Всплывающая карточка доктора */}
            <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(255,255,255,0.03)', border: `1px solid ${T.border}`, borderRadius: '10px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: '10px', width: '75%', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
              <img src={avatarPlaceholder} alt="Avatar" style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff' }}>Dr. Marcus Breyer</span>
                <span style={{ fontSize: '0.6rem', color: '#888' }}>Mon 24, 9:40 AM</span>
              </div>
            </div>
          </div>
        );

      case 'convert':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', padding: '0 20px' }}>
            {/* Левый документ */}
            <div style={{ width: '40%', height: '75%', border: `1px solid ${T.border}`, borderRadius: '6px', padding: '6px', opacity: 0.4, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ width: '40%', height: '4px', backgroundColor: T.border }} />
              <div style={{ width: '100%', height: '2px', backgroundColor: T.border, opacity: 0.5 }} />
              <div style={{ width: '80%', height: '2px', backgroundColor: T.border, opacity: 0.5 }} />
            </div>
            {/* Центральный разделитель с ИИ нодой */}
            <div style={{ position: 'absolute', height: '80%', width: '1px', backgroundColor: 'rgba(0, 229, 153, 0.3)', left: '48%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '6px', backgroundColor: T.bg1, border: `1px solid ${T.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translateX(-50%)' }}>
                <span style={{ fontSize: '0.6rem', color: T.accent }}>⇄</span>
              </div>
            </div>
            {/* Правый интерфейс заметок */}
            <div style={{ width: '45%', height: '75%', border: `1px solid ${T.border}`, borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px', marginLeft: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <img src={avatarPlaceholder} alt="Avatar" style={{ width: '14px', height: '14px', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.55rem', color: '#fff', fontWeight: 500 }}>Dr. Mira Solano</span>
              </div>
              <div style={{ width: '100%', height: '30px', borderRadius: '4px', border: `1px solid ${T.border}`, backgroundColor: 'rgba(0,0,0,0.2)', padding: '4px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div style={{ width: '30%', height: '3px', backgroundColor: T.accent, opacity: 0.5 }} />
                <div style={{ width: '85%', height: '2px', backgroundColor: T.border }} />
                <div style={{ width: '60%', height: '2px', backgroundColor: T.border }} />
              </div>
            </div>
          </div>
        );

      case 'recover':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 15px' }}>
            {/* Сетка календаря */}
            <div style={{ width: '65px', height: '65px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px', padding: '4px', border: `1px solid ${T.border}`, borderRadius: '6px', opacity: 0.5 }}>
              {[...Array(9)].map((_, i) => (
                <div key={i} style={{ backgroundColor: i === 4 ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255,255,255,0.03)', border: `1px solid ${i === 4 ? '#FF6B6B' : T.border}`, borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {i === 4 && <span style={{ color: '#FF6B6B', fontSize: '0.5rem' }}>✕</span>}
                </div>
              ))}
            </div>
            
            {/* Стрелочка-коннектор посередине */}
            <div style={{ margin: '0 8px', color: T.accent, opacity: 0.6, fontSize: '0.9rem' }}>→</div>

            {/* Заполненный слот */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 8px', border: `1px solid ${T.border}`, borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
              <img src={avatarPlaceholder} alt="Avatar" style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.55rem', color: '#fff', fontWeight: 500 }}>Dr. Sophia Kellen</span>
                <span style={{ fontSize: '0.45rem', color: '#666' }}>Fri 21, 8:50 AM</span>
              </div>
              <div style={{ marginLeft: '4px', width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'rgba(0, 229, 153, 0.1)', border: '1px solid #00E599', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00E599', fontSize: '0.55rem', fontWeight: 'bold' }}>
                +$
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section style={{ width: '100%', borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`, backgroundColor: 'rgba(255, 255, 255, 0.005)' }}>
      <style jsx>{`
        .scale-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .scale-col {
          padding: 3.5rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .scale-col:not(:last-child) {
          border-right: 1px solid ${T.border};
        }
        @media (max-width: 992px) {
          .scale-grid {
            grid-template-columns: 1fr !important;
          }
          .scale-col {
            padding: 2.5rem 1.5rem !important;
          }
          .scale-col:not(:last-child) {
            border-right: none !important;
            border-bottom: 1px solid ${T.border};
          }
        }
      `}</style>

      {/* Шапка блока */}
      <div style={{ padding: '4rem 1.5rem 3.5rem 1.5rem', textAlign: 'center', borderBottom: `1px solid ${T.border}` }}>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 700, marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>
          {title}
        </h2>
        <p style={{ color: T.sub, maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.5 }}>
          {sub}
        </p>
      </div>

      {/* Интерактивная сетка */}
      <div className="scale-grid">
        {items.map((item, idx) => (
          <div key={idx} className="scale-col">
            {/* Контейнер для визуальной схемы */}
            <div style={{ width: '100%', height: '160px', backgroundColor: 'rgba(0, 0, 0, 0.15)', borderRadius: '12px', border: `1px solid ${T.border}`, overflow: 'hidden' }}>
              {renderVisual(item.uiType)}
            </div>
            
            {/* Текстовое описание */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                {item.title}
              </h3>
              <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
