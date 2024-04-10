import Breadcrumb from '@/components/Breadcrumb';
import SectionHeader from '@/components/SectionHeader';

export default function Company() {
  return (
    <div>
      <Breadcrumb lists={[{ name: '会社情報' }]} />
      <SectionHeader subHeading='compony' title='会社情報' />
    </div>
  );
}
