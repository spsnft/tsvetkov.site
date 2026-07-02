'use client';

import { Nav }         from '@/src/components/Nav';
import { Hero }        from '@/src/components/Hero';
import { Expertise }   from '@/src/components/Expertise';
import { Services }    from '@/src/components/Services';
import { CaseStudies } from '@/src/components/CaseStudies';
import { Contact }     from '@/src/components/Contact';
import { Footer }      from '@/src/components/Footer';

export default function TsvetkovB2C() {
  return (
    <main style={{ background: '#0A0A0C', minHeight: '100vh', overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Expertise />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
