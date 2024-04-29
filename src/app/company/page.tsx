import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import CompanyList from '@/components/CompanyList';
import SectionHeader from '@/components/SectionHeader';

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
