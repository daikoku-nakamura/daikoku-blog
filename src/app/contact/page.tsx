import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description:
    'お問い合わせページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Contact() {
  return (
    <>
      <Breadcrumb lists={[{ name: 'お問い合わせ' }]} />
      <SectionHeader subHeading='contact' title='お問い合わせ' />
      <ContactForm />
    </>
  );
}
