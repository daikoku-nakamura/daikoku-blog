import Breadcrumb from '@/components/Breadcrumb';
import ContactResult from '@/components/ContactResult';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '送信エラー',
  description:
    'お問合せ送信エラー || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function ContactError() {
  return (
    <>
      <Breadcrumb
        lists={[{ name: 'お問い合わせ', path: '/contact' }, { name: '送信エラー' }]}
      />
      <SectionHeader subHeading='success' title='お問い合わせ送信エラー' />
      <ContactResult
        title='お問い合わせ送信中にエラーが発生しました'
        paragragh='恐れ入りますが、もう一度初めからやりなおしてください'
        color='red-500'
      />
    </>
  );
}
