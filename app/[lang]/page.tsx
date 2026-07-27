import TsvetkovB2C from '@/src/components/TsvetkovB2C';

export default function Home({ params: { lang } }: { params: { lang: string } }) {
  // Передаем язык вниз в компоненты, чтобы они могли подтянуть нужный JSON
  return <TsvetkovB2C lang={lang} />;
}
