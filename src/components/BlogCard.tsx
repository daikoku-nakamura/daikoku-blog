import Container from '@/components/Container';
import FormatDate from '@/components/FormatDate';
import type { Blog } from '@/libs/microcms';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  blogs: Blog[];
};

export default function BlogCard({ blogs }: Props) {
  if (!blogs || blogs.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <section className='py-6'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3'>
          {blogs.map(blog => (
            <div
              key={blog.id}
              className='bg-white border border-gray-200 rounded-lg shadow w-full'
            >
              <Link href={`/blog/${blog.id}`}>
                <Image
                  src={blog.eyecatch.url}
                  width={384}
                  height={216}
                  className='w-full object-cover rounded-t-lg'
                  alt={blog.title}
                />
              </Link>
              <div className='p-4'>
                <p className='mb-2 text-sm text-green-600'>
                  投稿日：
                  <FormatDate date={blog.publishedAt} />
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <span className='text-xl hover:underline'>{blog.title}</span>
                </Link>
                <p className='mt-2 text-gray-500'>{blog.description}</p>
                <div className='mt-4 flex gap-2'>
                  {blog.categories.map(category => (
                    <span
                      key={category.id}
                      className='inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-sm text-green-600'
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
