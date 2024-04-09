import { BaseButton } from '@/components/Button';
import Container from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';

function Card() {
  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow w-full'>
      <Link href='/'>
        <Image
          src='/images/Dlogo.jpg'
          width={384}
          height={384}
          alt='blog image'
          className='rounded-t-lg'
        />
      </Link>
      <div className='p-5'>
        <a href='/'>
          <h5 className='mb-2 text-2xl tracking-tight'>
            これはブログタイトルです。これはブログタイトルです。
          </h5>
        </a>
        <p className='mb-3 text-gray-600'>
          ここにはブログ記事の説明を記載する項目です。ここにはブログ記事の説明を記載する項目です。
        </p>
        <BaseButton type='button'>
          <Link href='/'>Read more</Link>
        </BaseButton>
      </div>
    </div>
  );
}

export default function BlogCard() {
  return (
    <section className='py-6'>
      <Container>
        <div className='grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-3'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </section>
  );
}
