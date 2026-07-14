'use client';

import React, { useState } from 'react';
import { T } from '../../src/theme/tokens';
import { Logo } from '../../src/ui/Logo';

export default function HospitalityB2B() {
  const [lang, setLang] = useState<'en' | 'th'>('en');

  const content = {
    en: {
      badge: "Hospitality Growth Solutions",
      heroTitle: "Stop Paying 15-20% Commission to Booking.com & Agoda",
      heroSub1: "Connect your hotel directly to guests and stop double-bookings",
      heroSub2: "Keep 100% of the profit in your pocket",
      btnChat: "WhatsApp",
      btnLine: "Line",
      problemTitle: "How Much Money Are You Giving Away to OTAs?",
      prob1Title: "1. The 15-20% Leak",
      prob1Desc: "Every booking through Agoda or Booking.com costs you up to 20%. We install a direct booking engine on your website so guests pay directly into your merchant account.",
      prob2Title: "2. Zero Direct Traffic",
      prob2Desc: "Without OTAs, who will find you? We set up your Google Maps profile for local search and deploy automated WhatsApp/Email campaigns to bring past guests back for a direct discount.",
      prob3Title: "3. Double-Booking Fines",
      prob3Desc: "Manual calendar updates lead to costly errors. When a room is booked on Agoda, it closes on Booking.com and your website in 1 second. 100% automated synchronization.",
      priceTitle: "Simple Pricing. No Hidden Fees.",
      priceSub: "Pay once for the setup. Keep all your direct booking money forever.",
      tier1Title: "LITE (1-10 Rooms)",
      tier1Desc: "For independent villas and small guesthouses",
      tier1F1: "✓ Core System Setup (PMS/Dashboard)",
      tier1F2: "✓ Direct Website Booking button",
      tier1F3: "✓ Booking & Agoda Synchronization",
      tier1F4: "✓ Google Maps Setup",
      tier2Title: "STANDARD (10-30 Rooms)",
      tier2Desc: "For boutique hotels and resorts",
      tier2F1: "✓ Everything in ",
      tier2F1Badge: "LITE",
      tier2F2: "✓ Connect 300+ OTA Channels",
      tier2F3: "✓ Guest Return System",
      tier2F4: "✓ Guides for your Staff (Visual SOPs)",
      tier3Title: "ENTERPRISE (30+ Rooms)",
      tier3Desc: "For hotel chains and management firms",
      tier3F1: "✓ Everything in ",
      tier3F1Badge: "STANDARD",
      tier3F2: "✓ Anti-Theft Logs",
      tier3F3: "✓ Multichannel Ads Setup",
      tier3F4: "✓ Analytics Dashboard",
      aboutTitle: "Growth Architect & Tech Partner",
      aboutDesc: "An international software integration and growth architecture provider. We deploy enterprise-grade hospitality systems globally, operating as an offshore tech partner to maximize your direct revenue and eliminate operational chaos.",
      aboutBtn: "View Professional Profile",
      footerTitle: "Ready to make more money?",
      footerBtn: "Book a Free Hotel Audit"
    },
    th: {
      badge: "โซลูชั่นเพื่อการเติบโตของธุรกิจโรงแรม",
      heroTitle: "หยุดจ่ายค่าคอมมิชชั่น 15-20% ให้ Booking.com และ Agoda",
      heroSub1: "เชื่อมต่อโรงแรมของคุณกับลูกค้าโดยตรงและหยุดปัญหาการจองซ้ำซ้อน",
      heroSub2: "รับกำไรเต็ม 100% เข้ากระเป๋าคุณ",
      btnChat: "WhatsApp",
      btnLine: "Line",
      problemTitle: "คุณกำลังเสียเงินให้แอปจองที่พักเท่าไหร่?",
      prob1Title: "1. เสียกำไร 15-20%",
      prob1Desc: "การจองผ่าน Agoda หรือ Booking.com หักกำไรคุณสูงสุด 20% เราติดตั้งระบบจองตรงบนเว็บไซต์ ลูกค้าจ่ายเงินเข้าบัญชีคุณโดยตรง",
      prob2Title: "2. ไม่มีลูกค้าจองตรง",
      prob2Desc: "เราจัดการโปรไฟล์ Google Maps สำหรับการค้นหาในพื้นที่ และตั้งระบบดึงดูดลูกค้าเก่าให้กลับมาจองตรงผ่าน WhatsApp/Email ด้วยส่วนลดพิเศษ",
      prob3Title: "3. โดนปรับเพราะจองซ้ำซ้อน",
      prob3Desc: "การอัปเดตปฏิทินเองทำให้เกิดข้อผิดพลาด เมื่อมีคนจองผ่าน Agoda ระบบจะปิดห้องใน Booking.com ทันทีใน 1 วินาที อัตโนมัติ 100%",
      priceTitle: "ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง",
      priceSub: "จ่ายค่าติดตั้งเพียงครั้งเดียว และรับรายได้จากการจองตรงของคุณตลอดไป",
      tier1Title: "LITE (1-10 ห้อง)",
      tier1Desc: "สำหรับวิลล่าส่วนตัวและเกสต์เฮาส์ขนาดเล็ก",
      tier1F1: "✓ Core System Setup (PMS/Dashboard)",
      tier1F2: "✓ Direct Website Booking button",
      tier1F3: "✓ Booking & Agoda Synchronization",
      tier1F4: "✓ Google Maps Setup",
      tier2Title: "STANDARD (10-30 ห้อง)",
      tier2Desc: "สำหรับบูติกโฮเทลและรีสอร์ท",
      tier2F1: "✓ Everything in ",
      tier2F1Badge: "LITE",
      tier2F2: "✓ Connect 300+ OTA Channels",
      tier2F3: "✓ Guest Return System",
      tier2F4: "✓ Guides for your Staff (Visual SOPs)",
      tier3Title: "ENTERPRISE (30+ ห้อง)",
      tier3Desc: "สำหรับเครือโรงแรมและบริษัทจัดการขนาดใหญ่",
      tier3F1: "✓ Everything in ",
      tier3F1Badge: "STANDARD",
      tier3F2: "✓ Anti-Theft Logs",
      tier3F3: "✓ Multichannel Ads Setup",
      tier3F4: "✓ Analytics Dashboard",
      aboutTitle: "พันธมิตรเทคโนโลยีและผู้วางระบบการเติบโต",
      aboutDesc: "ผู้ให้บริการติดตั้งระบบซอฟต์แวร์และวางโครงสร้างการเติบโตระดับสากล เราพัฒนาระบบการจัดการโรงแรมระดับองค์กรทั่วโลกในฐานะพันธมิตรเทคโนโลยีจากภายนอก (Offshore Partner) เพื่อเพิ่มรายได้จากการจองตรงและลดความวุ่นวายในการดำเนินงาน",
      aboutBtn: "ดูโปรไฟล์การทำงาน",
      footerTitle: "พร้อมที่จะเพิ่มรายได้หรือยัง?",
      footerBtn: "นัดหมายตรวจสอบระบบฟรี"
    }
  };

  const t = content[lang];

  return (
    <div style={{ backgroundColor: T.bg0, color: '#fff', minHeight: '100vh', paddingBottom: '6rem', overflow: 'hidden', position: 'relative' }}>
      
      {/* Интерактивный анимированный фон */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: '350px', height: '350px', background: T.glow, filter: 'blur(100px)', borderRadius: '50%', animation: 'float-a 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: '450px', height: '450px', background: T.glow2, filter: 'blur(120px)', borderRadius: '50%', animation: 'float-b 14s ease-in-out infinite' }} />
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

      {/* MAIN CONTENT */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '7rem 0 5rem 0', textAlign: 'center' }}>
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
          <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', maxWidth: '800px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
            <p style={{ color: T.body, margin: 0 }}>{t.heroSub1}</p>
            <p style={{ color: T.accent, margin: '0.5rem 0 0 0', fontWeight: 600 }}>{t.heroSub2}</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#2cb742', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.btnChat}
            </a>
            <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#06C755', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', fontWeight: 600, textDecoration: 'none' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.987 8.922 9.421 9.611.368.077.869.237 1.002.544.119.278.077.712.036 1.005l-.26 1.57c-.053.315-.246 1.22.1.84.978-1.071 5.275-5.215 7.42-8.074 4.195-5.592 6.281-9.088 6.281-5.496zM10.158 13.91H7.818a.654.654 0 01-.653-.653V8.049c0-.361.293-.654.653-.654h2.34c.361 0 .653.293.653.654 0 .361-.292.653-.653.653H9.124v1.543h1.034c.361 0 .653.293.653.654 0 .361-.292.653-.653.653H9.124v1.705h1.034c.361 0 .653.293.653.653 0 .361-.292.652-.653.652zm2.083 0c-.361 0-.654-.291-.654-.653V8.049c0-.361.293-.654.654-.654.361 0 .653.293.653.654v5.208c0 .362-.292.653-.653.653zm5.717 0c-.36 0-.652-.291-.652-.653v-2.909l-2.072 2.766a.64.64 0 01-.264.204.646.646 0 01-.252.05h-.002a.654.654 0 01-.653-.653V8.049c0-.361.293-.654.653-.654.361 0 .653.293.653.654v2.908l2.072-2.766c.097-.13.25-.205.41-.205h.001c.361 0 .653.293.653.654v5.208c0 .362-.292.653-.653.653zm-5.717-3.771V8.049c0-.361.293-.654.654-.654h1.728c.361 0 .654.293.654.654 0 .361-.293.653-.654.653h-1.074v1.438z"/>
              </svg>
              {t.btnLine}
            </a>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '3rem 0' }} />

        {/* 3 POWERFUL BLOCKS */}
        <section style={{ padding: '2rem 0' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '3rem', textAlign: 'center' }}>
            {t.problemTitle}
          </h2>
          
          <div className="cases-grid">
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: '#FF4D4D', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{t.prob1Title}</h3>
              <p style={{ color: T.body, lineHeight: 1.6, fontSize: '0.95rem' }}>{t.prob1Desc}</p>
            </div>
            
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: T.acc2, fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{t.prob2Title}</h3>
              <p style={{ color: T.body, lineHeight: 1.6, fontSize: '0.95rem' }}>{t.prob2Desc}</p>
            </div>

            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '8px' }}>
              <h3 style={{ color: T.accent, fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{t.prob3Title}</h3>
              <p style={{ color: T.body, lineHeight: 1.6, fontSize: '0.95rem' }}>{t.prob3Desc}</p>
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
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.muted}`, padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: T.muted, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>{t.tier1Title}</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>$500</h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '2rem' }}>{t.tier1Desc}</p>
                <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  <li>{t.tier1F1}</li>
                  <li>{t.tier1F2}</li>
                  <li>{t.tier1F3}</li>
                  <li>{t.tier1F4}</li>
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
                  <li>{t.tier2F1}<span style={{ color: T.muted, fontWeight: 600 }}>{t.tier2F1Badge}</span></li>
                  <li>{t.tier2F2}</li>
                  <li>{t.tier2F3}</li>
                  <li>{t.tier2F4}</li>
                </ul>
              </div>
            </div>

            {/* ENTERPRISE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.acc2}`, padding: '3rem 2rem', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: T.acc2, fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>{t.tier3Title}</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '0.5rem' }}>Custom</h3>
                <p style={{ color: T.sub, fontSize: '0.9rem', marginTop: '0.5rem', marginBottom: '2rem' }}>{t.tier3Desc}</p>
                <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '0.95rem', lineHeight: 1.8 }}>
                  <li>{t.tier3F1}<span style={{ color: T.accent, fontWeight: 600 }}>{t.tier3F1Badge}</span></li>
                  <li>{t.tier3F2}</li>
                  <li>{t.tier3F3}</li>
                  <li>{t.tier3F4}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        {/* ABOUT AGENCY */}
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
          <a href="https://calendly.com/fedor_tsvetkov/30min" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: T.accent, color: T.bg0, padding: '1.2rem 3rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none', display: 'inline-block', boxShadow: `0 0 30px ${T.glow}` }}>
            {t.footerBtn}
          </a>
        </section>
      </main>
    </div>
  );
}
