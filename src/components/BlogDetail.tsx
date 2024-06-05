import BlogImage from '@/components/BlogImage';
import Container from '@/components/Container';
import FormatDate from '@/components/FormatDate';
import type { Blog } from '@/libs/microcms';
import { AiOutlineClockCircle } from 'react-icons/ai';

type Props = {
  blog: Blog;
};

export default function BlogDetail({ blog }: Props) {
  return (
    <Container>
      <div className='my-3 flex justify-center'>
        <BlogImage
          imageUrl={blog.eyecatch.url}
          width={1280}
          height={720}
          title={blog.title}
        />
      </div>
      <div className='flex items-center justify-end py-3'>
        <AiOutlineClockCircle className='h-6 w-6' aria-hidden='true' />
        <div className='ml-3 text-2xl leading-8'>
          <FormatDate date={blog.publishedAt} />
        </div>
      </div>
      <div
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
        className='prose py-6 lg:prose-lg'
      />
    </Container>
  );
}
