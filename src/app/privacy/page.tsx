import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description:
    'プライバシーポリシーページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Privacy() {
  return (
    <>
      <Breadcrumb lists={[{ name: 'プライバシーポリシー' }]} />
      <SectionHeader subHeading='privacy policy' title='プライバシーポリシー' />
      <div className='h-48 flex items-center justify-center'>
        <h3>このページは現在準備中です。</h3>
      </div>
      <CalltoAction />
    </>
  );
}
