import Breadcrumb from '@/components/Breadcrumb';
import ContactResult from '@/components/ContactResult';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '送信完了',
  description:
    'お問合せ送信完了 || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Thanks() {
  return (
    <>
      <Breadcrumb
        lists={[{ name: 'お問い合わせ', path: '/contact' }, { name: '送信完了' }]}
      />
      <SectionHeader subHeading='success' title='お問い合わせ送信完了' />
      <ContactResult
        title='お問い合わせの送信が完了しました'
        paragragh='内容を確認させていただき担当者より2〜3日以内にご連絡させていただきます。'
        color='gray-800'
      />
    </>
  );
}
