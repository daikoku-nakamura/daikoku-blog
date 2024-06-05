import BlogDetail from '@/components/BlogDetail';
import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import SectionHeader from '@/components/SectionHeader';
import { getBlogDetail } from '@/libs/microcms';
import type { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getBlogDetail(params.id);
  return {
    title: data.title,
    description: `${data.description} || 大黒工業 営業ブログ`,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.eyecatch.url,
    },
  };
}

export default async function BlogId({ params }: Props) {
  const data = await getBlogDetail(params.id);
  return (
    <>
      <Breadcrumb lists={[{ name: 'ブログ', path: '/blog' }, { name: 'ブログ記事' }]} />
      <SectionHeader subHeading='blog' title={data.title} />
      <BlogDetail blog={data} />
      <CalltoAction />
    </>
  );
}
