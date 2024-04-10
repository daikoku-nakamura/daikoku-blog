import Breadcrumb from '@/components/Breadcrumb';
import SectionHeader from '@/components/SectionHeader';

export default function Catalog() {
  return (
    <div>
      <Breadcrumb lists={[{ name: 'カタログ一覧' }]} />
      <SectionHeader subHeading='catalog' title='カタログ一覧' />
    </div>
  );
}
