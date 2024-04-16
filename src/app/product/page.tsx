import Breadcrumb from '@/components/Breadcrumb';
import ProductList from '@/components/ProductList';
import SectionHeader from '@/components/SectionHeader';

export default function Products() {
  return (
    <div>
      <Breadcrumb lists={[{ name: '商品一覧' }]} />
      <SectionHeader subHeading='products' title='取扱商品' />
      <ProductList />
    </div>
  );
}
