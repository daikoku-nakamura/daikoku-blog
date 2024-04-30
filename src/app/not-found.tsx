import { BaseButton } from '@/components/Button';
import Container from '@/components/Container';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404エラー',
  description:
    '404エラー ページが見つかりませんでした || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function NotFound() {
  return (
    <section className='flex items-center h-full p-16'>
      <Container>
        <div className='flex flex-col items-center justify-center'>
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-green-500'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='text-2xl md:text-3xl'>指定されたページが見つかりません。</p>
            <p className='mt-4 mb-8 text-gray-600'>
              URLが間違っているか、移動もしくは削除された可能性があります。
            </p>
            <BaseButton type='button'>
              <Link href='/'>ホームに戻る</Link>
            </BaseButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
