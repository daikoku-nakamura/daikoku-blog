'use client';
import Breadcrumb from '@/components/Breadcrumb';
import { BaseButton, OutlineButton } from '@/components/Button';
import Container from '@/components/Container';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ContactError() {
  const router = useRouter();

  return (
    <>
      <Breadcrumb
        lists={[{ name: 'お問い合わせ', path: '/contact' }, { name: '送信エラー' }]}
      />
      <SectionHeader subHeading='success' title='お問い合わせ送信エラー' />
      <Container>
        <div className='my-12 text-center'>
          <p className='py-3 text-xl text-red-500'>
            お問合せ送信中にエラーが発生しました。
          </p>
          <p className='py-3 text-xl text-red-500'>
            恐れ入りますが、もう一度初めからやり直しください。
          </p>
        </div>
        <div className='flex justify-center space-x-4 my-6'>
          <BaseButton type='button' onClick={() => router.back()}>
            前のページに戻る
          </BaseButton>
          <Link href='/'>
            <OutlineButton type='button'>トップに戻る</OutlineButton>
          </Link>
        </div>
      </Container>
    </>
  );
}
