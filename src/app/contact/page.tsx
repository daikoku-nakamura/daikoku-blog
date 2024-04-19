import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import SectionHeader from '@/components/SectionHeader';

export default function Contact() {
  return (
    <div>
      <Breadcrumb lists={[{ name: 'お問い合わせ' }]} />
      <SectionHeader subHeading='contact' title='お問い合わせ' />
      <ContactForm />
    </div>
  );
}
