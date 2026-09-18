import type { getDictionary } from '@/src/locales/getDictionary';
import { Header } from '@/src/components/home/Header';
import { Hero } from '@/src/components/Hero';
import { Proof } from '@/src/components/home/Proof';
import { Services } from '@/src/components/Services';
import { HowIWork } from '@/src/components/home/HowIWork';
import { Contact } from '@/src/components/Contact';
import { Footer } from '@/src/components/home/Footer';

interface TsvetkovB2CProps {
  lang: string;
  dict: ReturnType<typeof getDictionary>;
}

export default function TsvetkovB2C({ lang, dict }: TsvetkovB2CProps) {
  const { home } = dict;

  return (
    <main style={{ background: '#F5F3EE' }}>
      <Header
        lang={lang}
        brand={home.brand}
        waLink={home.waLink}
        whatsappLabel={home.header.whatsapp}
        navLinks={[
          { href: '#services', label: home.services.title },
          { href: '#process', label: home.how.title },
          { href: '#contact', label: home.contact.title },
        ]}
      />
      <Hero
        lang={lang}
        place={home.place}
        heroA={home.hero.a}
        heroB={home.hero.b}
        mobileLines={home.hero.mobileLines}
        cta={home.hero.cta}
        waLink={home.waLink}
        portraitAlt={home.hero.portraitAlt}
      />
      <Proof metrics={[home.proof.m1, home.proof.m2, home.proof.m3]} slogan={home.proof.slogan} />
      <Services title={home.services.title} items={home.services.items} />
      <HowIWork title={home.how.title} items={[home.how.items[0], home.how.items[1]]} />
      <Contact
        title={home.contact.title}
        sub={home.contact.sub}
        channels={home.contact.channels}
        email={home.contact.email}
        mailLink={home.contact.mailLink}
      />
      <Footer copyright={home.contact.copyright} />
    </main>
  );
}
