import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import ProductList from '@/components/ProductList';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '取扱商品',
  description:
    '取扱商品一覧ページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default function Products() {
  return (
    <>
      <Breadcrumb lists={[{ name: '商品一覧' }]} />
      <SectionHeader subHeading='products' title='取扱商品' />
      <ProductList />
      <CalltoAction />
    </>
  );
}
