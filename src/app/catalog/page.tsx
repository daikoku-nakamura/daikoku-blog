import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import CatalogList from '@/components/CatalogList';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'カタログ一覧',
  description:
    'カタログ一覧ページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Catalog() {
  return (
    <>
      <Breadcrumb lists={[{ name: 'カタログ一覧' }]} />
      <SectionHeader subHeading='catalog' title='カタログ一覧' />
      <CatalogList />
      <CalltoAction />
    </>
  );
}
