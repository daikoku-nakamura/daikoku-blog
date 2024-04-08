import { BaseButton, OutlineButton } from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='container flex flex-col justify-center mx-auto sm:py-12 md:py-24 md:flex-row md:justify-around'>
      <div className='flex items-center justify-center mt-8 md:mt-0 h-72 sm:h-80 lg:h-96'>
        <Image
          src='/images/Dlogo.jpg'
          width={500}
          height={500}
          alt='大黒工業トップイメージ'
          className='object-contain h-72 sm:h-80 lg:h-96'
        />
      </div>
      <div className='flex flex-col justify-center text-center mt-8 md:mt-0 md:max-w-md xl:max-w-lg md:text-left'>
        <h1 className='text-5xl md:text-4xl leading-none lg:text-6xl'>
          大黒工業の
          <br />
          <span className='text-green-600'>営業マンによる</span>
          <br />
          商品情報ブログ
        </h1>
        <p className='mt-6 mb-8 text-lg sm:mb-12'>
          このサイトは会社の公式サイトではありません
          <br />
          営業マンによる情報発信サイトです
        </p>
        <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start'>
          <BaseButton type='button'>
            <Link href='/blog'>ブログ</Link>
          </BaseButton>
          <OutlineButton type='button'>
            <Link href='/contact'>お問い合わせ</Link>
          </OutlineButton>
        </div>
      </div>
    </section>
  );
}
