import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import SectionHeader from '@/components/SectionHeader';

export default function Privacy() {
  return (
    <>
      <Breadcrumb lists={[{ name: 'プライバシーポリシー' }]} />
      <SectionHeader subHeading='privacy policy' title='プライバシーポリシー' />
      <div className='h-48 flex items-center justify-center'>
        <h3>このページは現在準備中です。</h3>
      </div>
      <CalltoAction />
    </>
  );
}
