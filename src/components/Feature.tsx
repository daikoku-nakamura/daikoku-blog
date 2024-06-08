import Container from '@/components/Container';
import SectionHeader from '@/components/SectionHeader';
import { FeatureText } from '@/const/featureText';
import { AiOutlineCheck } from 'react-icons/ai';

export default function Feature() {
  return (
    <Container>
      <SectionHeader subHeading='feature' title='大黒工業株式会社の強みは？' />
      <section className='m-4 md:m-8'>
        <div className='grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {FeatureText.map(feature => (
            <div key={feature.title} className='flex flex-col items-center p-4'>
              <AiOutlineCheck className='w-10 h-10 p-2 rounded-full bg-blue-600 text-gray-50' />
              <h3 className='my-3 text-2xl font-semibold'>{feature.title}</h3>
              <div className='space-y-1 leading-tight'>
                <p className='text-'>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
