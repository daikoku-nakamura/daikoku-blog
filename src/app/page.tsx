import { BaseButton, OutlineButton } from '@/components/Button';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className='mb-3'>
        <BaseButton type='button'>ボタン</BaseButton>
      </div>
      <div>
        <OutlineButton type='button'>ボタン</OutlineButton>
      </div>
    </main>
  );
}
