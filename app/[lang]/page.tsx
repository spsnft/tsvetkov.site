import TsvetkovB2C from '@/src/components/TsvetkovB2C';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  
  return <TsvetkovB2C lang={lang} />;
}
