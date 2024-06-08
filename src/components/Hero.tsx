import { BaseButton, OutlineButton } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='flex flex-col justify-center sm:py-12 md:py-24 md:flex-row md:justify-around bg-white'>
      <div className='flex items-center justify-center mt-8 md:mt-0 h-72 sm:h-80 lg:h-96'>
        <Image
          src='/images/hero-image.webp'
          width={500}
          height={500}
          alt='大黒工業トップイメージ'
          className='object-contain h-72 sm:h-80 lg:h-96'
          priority
        />
      </div>
      <div className='flex flex-col justify-center text-center mt-8 md:mt-0 md:max-w-md xl:max-w-lg md:text-left'>
        <h1 className='text-5xl md:text-4xl leading-none lg:text-6xl'>
          大黒工業の
          <br />
          <span className='text-blue-600'>営業マンによる</span>
          <br />
          商品情報ブログ
        </h1>
        <p className='mt-6 mb-8 text-lg sm:mb-12'>
          このサイトは会社の公式サイトではありません
          <br />
          営業マンによる情報発信サイトです
        </p>
        <div className='flex items-center justify-center space-x-4'>
          <Link href='/blog'>
            <BaseButton type='button'>ブログ</BaseButton>
          </Link>
          <Link href='/contact'>
            <OutlineButton type='button'>お問い合わせ</OutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
