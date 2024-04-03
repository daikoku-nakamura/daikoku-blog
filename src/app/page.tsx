import { BaseButton, OutlineButton } from '@/components/Button';

export default function Home() {
  return (
    <main className='p-12'>
      <div className='mb-3'>
        <BaseButton type='button'>ボタン</BaseButton>
      </div>
      <div>
        <OutlineButton type='button'>ボタン</OutlineButton>
      </div>
    </main>
  );
}
