'use client';

import React, { useState } from 'react';
import { T } from '../../src/theme/tokens';
import { Logo } from '../../src/ui/Logo';

export default function HospitalityB2B() {
  const [lang, setLang] = useState<'en' | 'th'>('en');
  const [activeTab, setActiveTab] = useState<number>(0);

  const content = {
    en: {
      badge: "Hospitality Growth Solutions",
      heroTitle: "Stop Paying 15-20% Commission to Booking.com & Agoda",
      heroSub1: "Connect your hotel directly to guests and stop double-bookings",
      heroSub2: "Keep 100% of the profit in your pocket",
      btnChat: "WhatsApp",
      btnLine: "Line",
      problemTitle: "Direct Revenue Infrastructure",
      
      tabs: [
        {
          num: "01",
          title: "Stop the 15-20% Leak",
          desc: "Every booking through Agoda or Booking.com costs up to 20% in commission. An integrated direct booking engine keeps 100% of the revenue in-house.",
          uiType: "revenue"
        },
        {
          num: "02",
          title: "Unlock Direct Traffic",
          desc: "Dependency on OTAs leads to low brand loyalty and zero direct bookings. Get your own local search traffic from Google Maps & automated retention tools.",
          uiType: "traffic"
        },
        {
          num: "03",
          title: "Zero Double-Booking Fines",
          desc: "Manual calendar updates lead to double-bookings and platform penalties. Get 100% automated synchronization that updates the entire grid across all platforms in under a second.",
          uiType: "sync"
        }
      ],

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
      
      tabs: [
        {
          num: "01",
          title: "หยุดจ่ายค่าคอมมิชชั่น 15-20%",
          desc: "ทุกการจองผ่าน Agoda หรือ Booking.com มีค่าใช้จ่ายคอมมิชชั่นสูงสุด 20% ระบบจองตรงบนเว็บไซต์ช่วยให้คุณรับรายได้เต็ม 100% เข้าบัญชีคุณโดยตรง",
          uiType: "revenue"
        },
        {
          num: "02",
          title: "ปลดล็อกลูกค้าจองตรง",
          desc: "การพึ่งพาแอปจองที่พักเพียงอย่างเดียวทำให้ขาดความภักดีต่อแบรนด์และยอดจองตรงเป็นศูนย์ ดึงลูกค้าจาก Google Maps และใช้เครื่องมือรักษาฐานลูกค้าอัตโนมัติ",
          uiType: "traffic"
        },
        {
          num: "03",
          title: "หมดปัญหาการจองซ้ำซ้อน",
          desc: "การอัปเดตปฏิทินด้วยมือทำให้เกิดการจองซ้ำและโดนค่าปรับจากแพลตฟอร์ม ระบบซิงค์อัตโนมัติ 100% จะอัปเดตสถานะห้องในทุกแพลตฟอร์มทันทีใน 1 วินาที",
          uiType: "sync"
        }
      ],

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

        {/* INTERACTIVE ACCORDION (AVIKTO PATTERN) */}
        <section style={{ padding: '4rem 0' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '4rem', textAlign: 'center', letterSpacing: '-0.02em' }}>{t.problemTitle}</h2>
          
          {/* Desktop Accordion Layout */}
          <div className="desktop-only" style={{ display: 'flex', border: `1px solid ${T.border}`, borderRadius: '16px', backgroundColor: T.bg1, overflow: 'hidden', minHeight: '480px' }}>
            {t.tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{ 
                    flex: isActive ? '3' : '1',
                    borderRight: idx !== t.tabs.length - 1 ? `1px solid ${T.border}` : 'none',
                    padding: '3rem 2.5rem',
                    cursor: isActive ? 'default' : 'pointer',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    overflow: 'hidden'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: isActive ? T.accent : T.sub, marginBottom: '1.5rem', transition: 'color 0.3s' }}>
                      {tab.num}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem', whiteSpace: 'nowrap' }}>
                      {tab.title}
                    </h3>
                    <div style={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0, transform: isActive ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.4s ease', pointerEvents: isActive ? 'auto' : 'none' }}>
                      <p style={{ color: T.body, fontSize: '0.95rem', lineHeight: 1.6 }}>{tab.desc}</p>
                    </div>
                  </div>

                  {/* Image Render Area (Desktop Active State Only) */}
                  {isActive && (
                    <div style={{ marginTop: '2rem', animation: 'fadeIn 0.5s ease', borderRadius: '10px', overflow: 'hidden', border: `1px solid ${T.border}`, backgroundColor: T.bg0, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                      {/* ЗАМЕНИ ПУТЬ НА СВОИ РЕАЛЬНЫЕ КАРТИНКИ В ПАПКЕ PUBLIC */}
                      <img 
                        src={`/${tab.uiType}-mockup.jpg`} 
                        alt={tab.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        onError={(e) => {
                          // Фолбэк, пока картинок нет
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span style="color: ${T.sub}; font-size: 0.85rem;">[ Upload /public/${tab.uiType}-mockup.jpg ]</span>`;
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Accordion Layout */}
          <div className="mobile-only" style={{ display: 'flex', flexDirection: 'column', border: `1px solid ${T.border}`, borderRadius: '12px', backgroundColor: T.bg1, overflow: 'hidden' }}>
            {t.tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div key={idx} style={{ borderBottom: idx !== t.tabs.length - 1 ? `1px solid ${T.border}` : 'none' }}>
                  <div 
                    onClick={() => setActiveTab(idx)}
                    style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: isActive ? 'rgba(255, 255, 255, 0.01)' : 'transparent' }}
                  >
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? T.accent : T.sub }}>{tab.num}</span>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{tab.title}</h3>
                    </div>
                    <span style={{ fontSize: '1.2rem', color: T.sub, transform: isActive ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
                  </div>
                  
                  <div style={{ height: isActive ? 'auto' : 0, overflow: 'hidden', transition: 'all 0.4s ease' }}>
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem' }}>
                      <p style={{ color: T.body, fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>{tab.desc}</p>
                      
                      {/* Mobile Image Mockup */}
                      <div style={{ borderRadius: '8px', overflow: 'hidden', border: `1px solid ${T.border}`, backgroundColor: T.bg0, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '150px' }}>
                        {/* ЗАМЕНИ ПУТЬ НА СВОИ РЕАЛЬНЫЕ КАРТИНКИ В ПАПКЕ PUBLIC */}
                        <img 
                          src={`/${tab.uiType}-mockup.jpg`} 
                          alt={tab.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                          onError={(e) => {
                            // Фолбэк, пока картинок нет
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<span style="color: ${T.sub}; font-size: 0.8rem;">[ Upload /public/${tab.uiType}-mockup.jpg ]</span>`;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
      
      {/* Global Embedded CSS Keyframes & Media Queries for Avikto Layout compatibility */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 769px) {
          .desktop-only { display: flex !important; }
          .mobile-only { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
