import TsvetkovB2C from '@/src/components/TsvetkovB2C';
import { getDictionary } from '@/src/locales/getDictionary';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return <TsvetkovB2C lang={lang} dict={dict} />;
}
