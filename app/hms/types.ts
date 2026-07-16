export interface TabItem {
  num: string;
  closedTitle: string;
  openTitlePrefix: string;
  openTitleAccent: string;
  openTitleSuffix: string;
  subLine1Prefix: string;
  subLine1Suffix: string;
  subLine2Prefix: string;
  subLine2Suffix: string;
  uiType: string;
}

export interface TranslationContent {
  badge: string;
  heroTitle: string;
  heroSub1: string;
  heroSub2: string;
  btnChat: string;
  btnLine: string;
  problemTitle: string;
  tabs: TabItem[];
  priceTitle: string;
  priceSub: string;
  tier1Title: string;
  tier1Desc: string;
  tier1F1: string;
  tier1F2: string;
  tier1F3: string;
  tier1F4: string;
  tier2Title: string;
  tier2Desc: string;
  tier2F1: string;
  tier2F1Badge: string;
  tier2F2: string;
  tier2F3: string;
  tier2F4: string;
  tier3Title: string;
  tier3Desc: string;
  tier3F1: string;
  tier3F1Badge: string;
  tier3F2: string;
  tier3F3: string;
  tier3F4: string;
  aboutTitle: string;
  aboutDesc: string;
  aboutBtn: string;
  footerTitle: string;
  footerBtn: string;
}

export const contentData: Record<'en' | 'th', TranslationContent> = {
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
        closedTitle: "24/7 manual updates",
        openTitlePrefix: "",
        openTitleAccent: "24/7",
        openTitleSuffix: " manual updates",
        subLine1Prefix: "Each reservation locks your entire grid in ",
        subLine1Suffix: " second",
        subLine2Prefix: "Zero risk of human error and overbooking.",
        subLine2Suffix: "",
        uiType: "sync"
      },
      {
        num: "02",
        closedTitle: "20% commission",
        openTitlePrefix: "You are losing up to ",
        openTitleAccent: "20%",
        openTitleSuffix: " OTA commission",
        subLine1Prefix: "Integrate a direct booking engine",
        subLine1Suffix: "",
        subLine2Prefix: "Keep ",
        subLine2Suffix: " of the revenue in-house.",
        uiType: "revenue"
      },
      {
        num: "03",
        closedTitle: "0 leads",
        openTitlePrefix: "",
        openTitleAccent: "0 leads",
        openTitleSuffix: " from direct traffic",
        subLine1Prefix: "Drive ",
        subLine1Suffix: " direct bookings",
        subLine2Prefix: "with local search and automated retention campaigns.",
        subLine2Suffix: "",
        uiType: "traffic"
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
        closedTitle: "อัปเดตระบบด้วยมือ 24/7",
        openTitlePrefix: "",
        openTitleAccent: "24/7",
        openTitleSuffix: " อัปเดตระบบด้วยมือ",
        subLine1Prefix: "ทุกการจองจะล็อกสถานะห้องพักในทุกช่องทางใน ",
        subLine1Suffix: " วินาที",
        subLine2Prefix: "ลดความเสี่ยงจากความผิดพลาดของมนุษย์และการจองซ้ำซ้อนให้เหลือศูนย์",
        subLine2Suffix: "",
        uiType: "sync"
      },
      {
        num: "02",
        closedTitle: "เสียค่าคอมมิชชั่น 20%",
        openTitlePrefix: "คุณกำลังสูญเสียรายได้ไปกับ ",
        openTitleAccent: "ค่าคอม OTA ถึง 20%",
        openTitleSuffix: "",
        subLine1Prefix: "ติดตั้งระบบจองตรงบนเว็บไซต์",
        subLine1Suffix: "",
        subLine2Prefix: "และรับรายได้เต็ม ",
        subLine2Suffix: " เข้าบัญชีคุณโดยตรง",
        uiType: "revenue"
      },
      {
        num: "03",
        closedTitle: "0 ยอดจองตรง",
        openTitlePrefix: "",
        openTitleAccent: "0 ยอดจองตรง",
        openTitleSuffix: " จากช่องทางของคุณเอง",
        subLine1Prefix: "ดึงยอดจองตรงให้เติบโตถึง ",
        subLine1Suffix: " ช่องทางตรง",
        subLine2Prefix: "ด้วยการค้นหาในพื้นที่และแคมเปญรักษาฐานลูกค้าอัตโนมัติ",
        subLine2Suffix: "",
        uiType: "traffic"
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
