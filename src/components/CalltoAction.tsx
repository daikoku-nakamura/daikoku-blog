import { BaseButton } from '@/components/Button';
import Container from '@/components/Container';
import Link from 'next/link';

export default function CalltoAction() {
  return (
    <section className='py-6'>
      <Container>
        <div className='flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row'>
          <div className='flex flex-col space-y-4 text-center lg:text-left'>
            <h1 className='text-5xl leading-none'>お気軽にお問い合わせください！</h1>
            <p className='text-lg'>
              商品について、ブログ記事について、サイト運営について等、お気軽にお問い合わせください。
              <br />
              担当者より2～3日以内にご連絡させていただきます。
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <BaseButton type='button'>
              <Link href='/contact'>お問い合わせはこちら</Link>
            </BaseButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
