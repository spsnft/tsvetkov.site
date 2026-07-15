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
      problemTitle: "Direct Revenue Infrastructure",
      
      prob1Title: "The 15-20% Leak",
      prob1P: "Problem: Every booking through Agoda or Booking.com costs up to 20% in commission.",
      prob1S: "Solution: An integrated direct booking engine. Keep 100% of the revenue in-house.",

      prob2Title: "Zero Direct Traffic",
      prob2P: "Problem: Dependency on OTAs leads to low brand loyalty and zero direct bookings.",
      prob2S: "Solution: Local search traffic via Google Maps & automated retention tools.",

      prob3Title: "Double-Booking Fines",
      prob3P: "Problem: Manual calendar updates lead to double-bookings and platform penalties.",
      prob3S: "Solution: 100% automated synchronization. A reservation on one channel instantly updates the entire grid across all platforms in under a second.",

      priceTitle: "Simple Pricing. No Hidden Fees.",
      priceSub: "Fixed setup fee. Zero commission on direct bookings forever.",
      
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
      aboutDesc: "International software integration and growth architecture provider. Operating as an offshore tech partner to maximize direct revenue and eliminate operational chaos for hospitality businesses globally.",
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
      problemTitle: "โครงสร้างพื้นฐานเพื่อรายได้โดยตรง",
      
      prob1Title: "การสูญเสียรายได้ 15-20%",
      prob1P: "ปัญหา: ทุกการจองผ่าน Agoda หรือ Booking.com มีค่าใช้จ่ายคอมมิชชั่นสูงสุด 20%",
      prob1S: "ทางออก: ระบบจองตรงบนเว็บไซต์ รับรายได้เต็ม 100% เข้าบัญชีคุณโดยตรง",

      prob2Title: "ขาดช่องทางการจองตรง",
      prob2P: "ปัญหา: การพึ่งพาแอปจองที่พักเพียงอย่างเดียวทำให้ขาดความภักดีต่อแบรนด์และยอดจองตรงเป็นศูนย์",
      prob2S: "ทางออก: ดึงลูกค้าจาก Google Maps และใช้เครื่องมือรักษาฐานลูกค้าอัตโนมัติ",

      prob3Title: "ค่าปรับจากการจองซ้ำซ้อน",
      prob3P: "ปัญหา: การอัปเดตปฏิทินด้วยมือทำให้เกิดการจองซ้ำและโดนค่าปรับจากแพลตฟอร์ม",
      prob3S: "ทางออก: ระบบซิงค์อัตโนมัติ 100% เมื่อมีการจองในช่องทางหนึ่ง ระบบจะอัปเดตสถานะห้องในทุกแพลตฟอร์มทันทีใน 1 วินาที",

      priceTitle: "ราคาชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง",
      priceSub: "จ่ายค่าติดตั้งเพียงครั้งเดียว รับรายได้จากการจองตรงเต็มจำนวนตลอดไป",
      
      tier1Title: "LITE (1-10 ห้อง)",
      tier1Desc: "สำหรับวิลล่าส่วนตัวและเกสต์เฮาส์ขนาดเล็ก",
      tier1F1: "✓ ติดตั้งระบบจัดการที่พัก (PMS)",
      tier1F2: "✓ ปุ่ม 'จองเลย' บนเว็บไซต์ของคุณ",
      tier1F3: "✓ ซิงค์ปฏิทิน Booking & Agoda",
      tier1F4: "✓ ตั้งค่าโปรไฟล์ Google Maps",

      tier2Title: "STANDARD (10-30 ห้อง)",
      tier2Desc: "สำหรับบูติกโฮเทลและรีสอร์ท",
      tier2F1: "✓ รวมทุกอย่างในแพ็กเกจ ",
      tier2F1Badge: "LITE",
      tier2F2: "✓ เชื่อมต่อช่องทางจองกว่า 300+ แห่ง",
      tier2F3: "✓ ระบบดึงลูกค้าเก่ากลับมาจองซ้ำ",
      tier2F4: "✓ คู่มือการใช้งานสำหรับพนักงาน (SOPs)",

      tier3Title: "ENTERPRISE (30+ ห้อง)",
      tier3Desc: "สำหรับเครือโรงแรมและบริษัทจัดการ",
      tier3F1: "✓ รวมทุกอย่างในแพ็กเกจ ",
      tier3F1Badge: "STANDARD",
      tier3F2: "✓ ระบบตรวจสอบการทำงานพนักงาน (Anti-Theft)",
      tier3F3: "✓ ตั้งค่าโฆษณาหลายช่องทาง",
      tier3F4: "✓ แดชบอร์ดวิเคราะห์ข้อมูลสำหรับเจ้าของ",

      aboutTitle: "พันธมิตรด้านเทคโนโลยีเพื่อการเติบโต",
      aboutDesc: "ผู้เชี่ยวชาญด้านการวางระบบซอฟต์แวร์และการเติบโตในระดับสากล ทำงานในฐานะพันธมิตรเทคโนโลยีจากภายนอก (Offshore Partner) เพื่อเพิ่มรายได้จากการจองตรงและลดความวุ่นวายในการบริหารจัดการโรงแรมทั่วโลก",
      aboutBtn: "ดูประวัติการทำงาน",
      footerTitle: "พร้อมที่จะเพิ่มรายได้หรือยัง?",
      footerBtn: "นัดหมายตรวจสอบระบบฟรี"
    }
  };

  const t = content[lang];

  return (
    <div style={{ backgroundColor: T.bg0, color: '#fff', minHeight: '100vh', paddingBottom: '6rem', overflow: 'hidden', position: 'relative' }}>
      
      {/* BACKGROUND ANIMATION */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, opacity: 0.4, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: '350px', height: '350px', background: T.glow, filter: 'blur(100px)', borderRadius: '50%', animation: 'float-a 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: '450px', height: '450px', background: T.glow2, filter: 'blur(120px)', borderRadius: '50%', animation: 'float-b 14s ease-in-out infinite' }} />
      </div>

      {/* HEADER */}
      <header style={{ 
        borderBottom: `1px solid ${T.border}`, 
        backdropFilter: 'blur(16px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 100,
        backgroundColor: 'rgba(10, 10, 12, 0.7)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <Logo />
          </a>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="/" style={{ color: T.sub, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
            <div style={{ display: 'flex', backgroundColor: T.bg1, border: `1px solid ${T.border}`, borderRadius: '4px', overflow: 'hidden' }}>
              <button onClick={() => setLang('en')} style={{ padding: '0.4rem 0.8rem', backgroundColor: lang === 'en' ? T.accent : 'transparent', color: lang === 'en' ? T.bg0 : T.sub, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}>EN</button>
              <button onClick={() => setLang('th')} style={{ padding: '0.4rem 0.8rem', backgroundColor: lang === 'th' ? T.accent : 'transparent', color: lang === 'th' ? T.bg0 : T.sub, border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}>TH</button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <section style={{ padding: '8rem 0 5rem 0', textAlign: 'center' }}>
          <span style={{ color: T.acc2, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.75rem', fontWeight: 700 }}>
            {t.badge}
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', marginTop: '1.5rem', marginBottom: '2rem' }}>
            {t.heroTitle}
          </h1>
          <div style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', maxWidth: '850px', margin: '0 auto 3.5rem auto', lineHeight: 1.4 }}>
            <p style={{ color: T.body, margin: 0 }}>{t.heroSub1}</p>
            <p style={{ color: T.accent, margin: '0.5rem 0 0 0', fontWeight: 700 }}>{t.heroSub2}</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/66955183783" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#2cb742', color: '#fff', padding: '1.1rem 2.2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              <i className="fab fa-whatsapp" style={{ fontSize: '1.4rem' }} /> {t.btnChat}
            </a>
            <a href="https://line.me/ti/p/~fedor_tsvetkov" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#06C755', color: '#fff', padding: '1.1rem 2.2rem', borderRadius: '6px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              <i className="fab fa-line" style={{ fontSize: '1.4rem' }} /> {t.btnLine}
            </a>
          </div>
        </section>

        {/* 3 CORE BLOCKS */}
        <section style={{ padding: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', letterSpacing: '-0.02em' }}>{t.problemTitle}</h2>
          <div className="cases-grid">
            {[1, 2, 3].map((num) => (
              <div key={num} style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '2.5rem', borderRadius: '12px' }}>
                <h3 style={{ color: num === 1 ? '#FF4D4D' : num === 2 ? T.acc2 : T.accent, fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 700 }}>
                  {num === 1 ? t.prob1Title : num === 2 ? t.prob2Title : t.prob3Title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ color: T.sub, fontSize: '0.95rem', lineHeight: 1.5, borderLeft: `2px solid ${T.border}`, paddingLeft: '1rem' }}>
                    {num === 1 ? t.prob1P : num === 2 ? t.prob2P : t.prob3P}
                  </p>
                  <p style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.5, fontWeight: 500 }}>
                    {num === 1 ? t.prob1S : num === 2 ? t.prob2S : t.prob3S}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section style={{ padding: '6rem 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>{t.priceTitle}</h2>
            <p style={{ color: T.sub }}>{t.priceSub}</p>
          </div>

          <div className="cases-grid">
            {/* LITE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.muted}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: T.muted, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier1Title}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>$500</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier1Desc}</p>
              <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
                <li>{t.tier1F1}</li>
                <li>{t.tier1F2}</li>
                <li>{t.tier1F3}</li>
                <li>{t.tier1F4}</li>
              </ul>
            </div>

            {/* STANDARD */}
            <div style={{ backgroundColor: T.bg1, border: `2px solid ${T.accent}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: `0 0 40px ${T.glow}` }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: T.accent, color: T.bg0, padding: '2px 14px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800 }}>POPULAR</div>
              <span style={{ color: T.accent, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier2Title}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>$1,200</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier2Desc}</p>
              <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
                <li>{t.tier2F1}<span style={{ color: T.muted, fontWeight: 700 }}>{t.tier2F1Badge}</span></li>
                <li>{t.tier2F2}</li>
                <li>{t.tier2F3}</li>
                <li>{t.tier2F4}</li>
              </ul>
            </div>

            {/* ENTERPRISE */}
            <div style={{ backgroundColor: T.bg1, border: `1px solid ${T.acc2}`, padding: '3.5rem 2.5rem', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: T.acc2, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.tier3Title}</span>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '0.5rem' }}>Custom</h3>
              <p style={{ color: T.sub, fontSize: '0.9rem', margin: '1rem 0 2.5rem' }}>{t.tier3Desc}</p>
              <ul style={{ listStyleType: 'none', padding: 0, color: T.body, fontSize: '1rem', lineHeight: 2 }}>
                <li>{t.tier3F1}<span style={{ color: T.accent, fontWeight: 700 }}>{t.tier3F1Badge}</span></li>
                <li>{t.tier3F2}</li>
                <li>{t.tier3F3}</li>
                <li>{t.tier3F4}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT (Offshore Partner) */}
        <section style={{ backgroundColor: T.bg1, border: `1px solid ${T.border}`, padding: '4rem 3rem', borderRadius: '12px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>{t.aboutTitle}</h2>
          <p style={{ color: T.body, lineHeight: 1.7, maxWidth: '750px', margin: '0 auto 2.5rem auto', fontSize: '1.05rem' }}>{t.aboutDesc}</p>
          <a href="/" style={{ border: `1px solid ${T.border}`, color: '#fff', padding: '0.9rem 2.2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 700, display: 'inline-block', transition: 'all 0.3s' }}>{t.aboutBtn}</a>
        </section>

        {/* FOOTER CTA */}
        <section style={{ textAlign: 'center', padding: '8rem 0 4rem 0' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '3rem', letterSpacing: '-0.02em' }}>{t.footerTitle}</h2>
          <a href="https://calendly.com/fedor_tsvetkov/30min" target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: T.accent, color: T.bg0, padding: '1.3rem 3.5rem', borderRadius: '8px', fontWeight: 800, textDecoration: 'none', display: 'inline-block', boxShadow: `0 0 40px ${T.glow}`, fontSize: '1.1rem' }}>
            {t.footerBtn}
          </a>
        </section>
      </main>
    </div>
  );
}
