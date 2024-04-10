import Breadcrumb from '@/components/Breadcrumb';
import SectionHeader from '@/components/SectionHeader';

export default function Privacy() {
  return (
    <div>
      <Breadcrumb lists={[{ name: 'プライバシーポリシー' }]} />
      <SectionHeader subHeading='privacy policy' title='プライバシーポリシー' />
    </div>
  );
}
