'use client';
import { BaseButton, OutlineButton } from '@/components/Button';
import Container from '@/components/Container';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  paragragh: string;
  color: string;
};

export default function ContactResult({ title, paragragh, color }: Props) {
  const router = useRouter();
  return (
    <Container>
      <div className='my-12 text-center'>
        <p className={`py-3 text-xl text-${color}`}>{title}</p>
        <p className={`py-3 text-xl text-${color}`}>{paragragh}</p>
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
  );
}
