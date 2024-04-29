import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import Container from '@/components/Container';
import FormatDate from '@/components/FormatDate';
import SectionHeader from '@/components/SectionHeader';
import { getBlogDetail } from '@/libs/microcms';
import Image from 'next/image';
import { AiOutlineClockCircle } from 'react-icons/ai';

type Props = {
  params: {
    id: string;
  };
};

export default async function BlogId({ params }: Props) {
  const data = await getBlogDetail(params.id);
  return (
    <>
      <Breadcrumb lists={[{ name: 'ブログ', path: '/blog' }, { name: 'ブログ記事' }]} />
      <SectionHeader subHeading='blog' title={data.title} />
      <Container>
        <div className='my-3 flex justify-center'>
          <Image src={data.eyecatch.url} width={1280} height={720} alt={data.title} />
        </div>
        <div className='flex items-center justify-end py-3'>
          <AiOutlineClockCircle className='h-8 w-8' aria-hidden='true' />
          <div className='ml-3 text-2xl leading-8'>
            <FormatDate date={data.publishedAt} />
          </div>
        </div>
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: `${data.body}` }}
          className='prose py-6 lg:prose-lg'
        />
      </Container>
      <CalltoAction />
    </>
  );
}
