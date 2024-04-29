import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import SectionHeader from '@/components/SectionHeader';

export default function SiteMap() {
  return (
    <>
      <Breadcrumb lists={[{ name: 'サイトマップ' }]} />
      <SectionHeader subHeading='sitemap' title='サイトマップ' />
      <div className='h-48 flex items-center justify-center'>
        <h3>このページは現在準備中です。</h3>
      </div>
      <CalltoAction />
    </>
  );
}
