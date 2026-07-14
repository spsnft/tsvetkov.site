'use client';

import React, { useState } from 'react';
import { T } from '../../src/theme/tokens';
import Logo from '../../src/ui/Logo'; // Проверь путь к твоему компоненту Logo

export default function HospitalityB2B() {
  const [lang, setLang] = useState<'en' | 'th'>('en');

  // Словари с упрощенным копирайтингом для ЛПР
  const content = {
    en: {
      badge: "Phuket Hospitality Solutions",
      heroTitle: "Stop Paying 18% Commission to Booking.com & Agoda.",
      heroSub: "I will connect your hotel directly to your guests, stop double-bookings, and keep 100% of the profit in your pocket.",
      btnChat: "Discuss on WhatsApp",
      btnLine: "Contact on Line",
      problemTitle: "Why you are losing money right now",
      prob1Title: "High Commissions",
      prob1Desc: "Every time a guest books through an app, you lose up to 18% of your money. You are paying for guests that could book directly with you.",
      prob2Title: "The Solution",
      prob2Desc: "One simple system. When a guest books on Agoda, your Booking.com and website calendars close automatically. Zero mistakes.",
      feat1: "No Double Bookings",
      feat1Desc: "All calendars update in 1 second.",
      feat2: "Easy for Staff",
      feat2Desc: "Check-in guests and manage cleaning from one simple screen.",
      feat3: "Direct Money",
      feat3Desc: "Guests pay securely on your website. Money goes directly to you.",
      priceTitle: "Simple Pricing. No Hidden Fees.",
      priceSub: "Pay once for the setup. Keep all your direct booking money forever.",
      tier1Title: "LITE (1-10 Rooms)",
      tier1Desc: "Best for independent villas and small guesthouses.",
      tier1F1: "✓ System setup for your property",
      tier1F2: "✓ 'Book Now' button for your website",
      tier1F3: "✓ Connect Booking.com + Agoda",
      tier2Title: "STANDARD (10-30 Rooms)",
      tier2Desc: "Best for boutique hotels and resorts.",
      tier2F1: "✓ Full system and calendar setup",
      tier2F2: "✓ Connect ALL apps (Airbnb, Expedia, etc.)",
      tier2F3: "✓ Staff training at your hotel",
      aboutTitle: "Who am I?",
      aboutDesc: "I am a digital business expert based in Phuket. I help hotels upgrade their systems so owners make more profit with less stress.",
      aboutBtn: "View My Full Executive Profile",
      footerTitle: "Ready to make more money?",
      footerBtn: "Book a Free Hotel Audit"
    },
    th: {
      badge: "โซลูชั่นสำหรับโรงแรมในภูเก็ต",
      heroTitle: "หยุดจ่ายค่าคอมมิชชั่น 18% ให้ Booking.com และ Agoda",
      heroSub: "เราจะเชื่อมต่อโรงแรมของคุณกับลูกค้าโดยตรง แก้ปัญหาการจองซ้ำซ้อน และให้คุณรับกำไรเต็ม 100%",
      btnChat: "คุยผ่าน WhatsApp",
      btnLine: "ติดต่อทาง Line",
      problemTitle: "ทำไมคุณถึงเสียรายได้ในตอนนี้?",
      prob1Title: "ค่าคอมมิชชั่นสูง",
      prob1Desc: "ทุกครั้งที่ลูกค้าจองผ่านแอป คุณเสียเงินสูงสุด 18% คุณกำลังจ่ายเงินให้กับลูกค้าที่สามารถจองตรงกับคุณได้",
      prob2Title: "ทางออกของเรา",
      prob2Desc: "ระบบเดียวที่จัดการได้ทั้งหมด เมื่อลูกค้าจองผ่าน Agoda ปฏิทินใน Booking.com และเว็บไซต์ของคุณจะปิดอัตโนมัติ ไม่มีข้อผิดพลาด",
      feat1: "หมดปัญหาจองซ้ำซ้อน",
      feat1Desc: "ปฏิทินทั้งหมดอัปเดตตรงกันใน 1 วินาที",
      feat2: "พนักงานทำงานง่ายขึ้น",
      feat2Desc: "เช็คอินลูกค้าและจัดการทำความสะอาดได้ในหน้าจอเดียว",
      feat3: "รับเงินโดยตรง",
      feat3Desc: "ลูกค้าจ่ายเงินอย่างปลอดภัยบนเว็บไซต์ของคุณ เงินเข้าบัญชีคุณโดยตรง",
      priceTitle: "ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง",
      priceSub: "จ่ายค่าติดตั้งเพียงครั้งเดียว และรับรายได้จากการจองตรงของคุณตลอดไป",
      tier1Title: "LITE (1-10 ห้อง)",
      tier1Desc: "เหมาะสำหรับวิลล่าส่วนตัวและเกสต์เฮาส์ขนาดเล็ก",
      tier1F1: "✓ ติดตั้งระบบสำหรับที่พักของคุณ",
      tier1F2: "✓ ปุ่ม 'จองเลย' สำหรับเว็บไซต์ของคุณ",
      tier1F3: "✓ เชื่อมต่อ Booking.com + Agoda",
      tier2Title: "STANDARD (10-30 ห้อง)",
      tier2Desc: "เหมาะสำหรับบูติกโฮเทลและรีสอร์ท",
      tier2F1: "✓ ติดตั้งระบบและปฏิทินเต็มรูปแบบ",
      tier2F2: "✓ เชื่อมต่อทุกแอป (Airbnb, Expedia ฯลฯ)",
      tier2F3: "✓ อบรมพนักงานที่โรงแรมของคุณ",
      aboutTitle: "เกี่ยวกับเรา",
      aboutDesc: "ผมคือผู้เชี่ยวชาญด้านธุรกิจดิจิทัลในภูเก็ต ช่วยโรงแรมอัปเกรดระบบเพื่อเพิ่มกำไรและลดความวุ่นวายให้เจ้าของ",
      aboutBtn: "ดูประวัติการทำงานแบบเต็ม",
      footerTitle: "พร้อมที่จะเพิ่มรายได้หรือยัง?",
      footerBtn: "นัดหมายตรวจสอบระบบฟรี"
    }
  };

  const t = content[lang];

  return (
    <div style={{ backgroundColor: T.bg0, color: '#fff', minHeight: '100vh', paddingBottom: '6rem', overflow: 'hidden', position: 'relative' }}>
      
      {/* Имитация глобального анимированного фона с основного сайта */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: T.glow, filter: 'blur(100px)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: T.glow2, filter: 'blur(120px)', borderRadius: '50%' }} />
      </div>

      {/* HEADER */}
      <header style={{ 
        borderBottom: `1px solid ${T.border}`, 
        backdropFilter: 'blur(12px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        backgroundColor: 'rgba(10, 10, 12, 0.8)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo />
          </a>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Language Toggle */}
            <div style={{ display: 'flex', backgroundColor: T.bg1, border: `1px solid ${T.border}`, borderRadius: '4px', overflow: 'hidden' }}>
              <button 
                onClick={() => setLang('en')}
                style={{ padding: '0.4rem 0.8rem', backgroundColor: lang === 'en' ? T.accent : 'transparent', color: lang === 'en' ? T.bg0 : T.sub, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
              >EN</button>
              <button 
                onClick={() => setLang('th')}
                style={{ padding: '0.4rem 0.8rem', backgroundColor: lang === 'th' ? T.accent : 'transparent', color: lang === 'th' ? T.bg0 : T.sub, border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem' }}
              >TH</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <section style={{ padding: '6rem 0 4rem 0', textAlign: 'center' }}>
          <span style={{ color: T.acc2, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', fontWeight: 600 }}>
            {t.badge}
          </span>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4vw, 4rem)', 
            fontWeight: 700, 
            lineHeight: 1.1, 
            letterSpacing: '-0.02em', 
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
          }}>
            {t.heroTitle}
          </h1>
          <p style={{ color: T.body, fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', maxWidth: '760px', margin: '0 auto 2.5rem auto', lineHeight: 1.5 }}>
            {t.heroSub}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: T.accent, color: T.bg0, padding: '1rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
              {t.btnChat}
            </a>
            <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer"
              style={{ backgroundColor: T.bg1, color: '#fff', border: `1px solid ${T.border}`, padding: '1rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
              {t.btnLine}
            </a>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '3rem 0' }} />

        {/* PROBLEM VS SOLUTION */}
        <section style={{ padding: '2rem 0' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>
            {t.problemTitle}
          </h2>
          
          <div className="bento">
            <div className="bento-g1" style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#FF4D4D', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>{t.prob1Title}</h3>
              <p style={{ color: T.body, lineHeight: 1.6 }}>{t.prob1Desc}</p>
            </div>
            
            <div className="bento-g2" style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px', boxShadow: `inset 0 0 20px ${T.glow2}` }}>
              <h3 style={{ color: T.acc2, fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>{t.prob2Title}</h3>
              <p style={{ color: T.body, lineHeight: 1.6 }}>{t.prob2Desc}</p>
            </div>

            <div className="bento-g3" style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>{t.feat1}</h4>
                <p style={{ color: T.muted, fontSize: '0.95rem', lineHeight: 1.5 }}>{t.feat1Desc}</p>
              </div>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>{t.feat2}</h4>
                <p style={{ color: T.muted, fontSize: '0.95rem', lineHeight: 1.5 }}>{t.feat2Desc}</p>
              </div>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 600 }}>{t.feat3}</h4>
                <p style={{ color: T.muted, fontSize: '0.95rem', lineHeight: 1.5 }}>{t.feat3Desc}</p>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* PRICING */}
        <section style={{ padding: '2rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem' }}>{t.priceTitle}</h2>
            <p style={{ color: T.sub, maxWidth: '600px', margin: '0 auto' }}>{t.priceSub}</p>
          </div>

          <div className="cases-grid">
            {/* LITE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: T.muted, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>{t.tier1Title}</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>$500</h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '2rem' }}>{t.tier1Desc}</p>
                <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  <li>{t.tier1F1}</li>
                  <li>{t.tier1F2}</li>
                  <li>{t.tier1F3}</li>
                </ul>
              </div>
            </div>

            {/* STANDARD */}
            <div style={{ backgroundColor: T.bg1, border: `2px solid ${T.accent}`, padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', boxShadow: `0 0 30px ${T.glow}` }}>
              <div>
                <span style={{ color: T.accent, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>{t.tier2Title}</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>$1,200</h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '2rem' }}>{t.tier2Desc}</p>
                <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  <li>{t.tier2F1}</li>
                  <li>{t.tier2F2}</li>
                  <li>{t.tier2F3}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* ABOUT (Замена блока Integrator) */}
        <section style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '3rem', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>{t.aboutTitle}</h2>
          <p style={{ color: T.body, lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            {t.aboutDesc}
          </p>
          <a href="/" style={{ border: `1px solid ${T.border}`, color: '#fff', padding: '0.8rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, display: 'inline-block' }}>
            {t.aboutBtn}
          </a>
        </section>

        {/* FINAL CTA */}
        <section style={{ textAlign: 'center', padding: '6rem 0 2rem 0' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2.5rem' }}>{t.footerTitle}</h2>
          <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: T.accent, color: T.bg0, padding: '1.2rem 3rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', boxShadow: `0 0 30px ${T.glow}` }}>
            {t.footerBtn}
          </a>
        </section>
      </main>
    </div>
  );
}
