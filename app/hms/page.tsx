// ... все твои импорты остаются прежними
import BentoGrid from './components/BentoGrid';
import ScalePractice from './components/ScalePractice'; // Импортируем новый стильный блок
import Pricing from './components/Pricing';
import About from './components/About';
import FooterCTA from './components/FooterCTA';

export default function HospitalityB2B() {
  const [lang, setLang] = useState<'en' | 'th'>('en');
  const t = contentData[lang];

  return (
    <div style={{ /* твои стили */ }}>
      <NetworkBackground />
      
      {/* ... header ... */}

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
        <Hero t={t} />
        <LogoMarquee />

        {/* БЛОК 2: Твои интерактивные счетчики боли (чистый BentoGrid без фаз на дне) */}
        <BentoGrid t={t} />

        {/* БЛОК 3: Твои Core Deliverables, но упакованные в премиальный интерфейс Clarion */}
        <ScalePractice t={t} />

        <hr style={{ border: 0, borderTop: `1px solid ${T.border}`, margin: '4rem 0' }} />

        <Pricing t={t} />
        <About t={t} />
        <FooterCTA t={t} />
      </main>
    </div>
  );
}
