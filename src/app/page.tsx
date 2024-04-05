import { BaseButton, OutlineButton } from '@/components/Button';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';

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
      <SectionHeader subHeading='feature' title='大黒工業の強みは？' />
    </main>
  );
}
