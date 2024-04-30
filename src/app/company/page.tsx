import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import CompanyList from '@/components/CompanyList';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社情報',
  description:
    '会社情報ページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Company() {
  return (
    <>
      <Breadcrumb lists={[{ name: '会社情報' }]} />
      <SectionHeader subHeading='compony' title='会社情報' />
      <CompanyList />
      <CalltoAction />
    </>
  );
}
