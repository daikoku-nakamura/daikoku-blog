import Container from '@/components/Container';
import SectionHeader from '@/components/SectionHeader';
import {
  featureFirstCdontent,
  featureFirstTitle,
  featureSecondContent,
  featureSecondTitle,
} from '@/const/featureText';
import Image from 'next/image';
import { AiOutlineCheck } from 'react-icons/ai';

export default function Feature() {
  return (
    <section className='bg-white'>
      <Container>
        <SectionHeader subHeading='feature' title='大黒工業株式会社の強みは？' />
        <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center'>
          <div className='py-6'>
            <h3 className='text-2xl tracking-tight sm:text-3xl'>
              {featureFirstTitle.title}
            </h3>
            <p className='mt-3 text-lg text-gray-600'>{featureFirstTitle.content}</p>
            <div className='mt-12 space-y-12'>
              {featureFirstCdontent.map(content => (
                <div key={content.title} className='flex'>
                  <div className='flex-shrink-0'>
                    <div className='flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50'>
                      <AiOutlineCheck className='w-7 h-7' />
                    </div>
                  </div>
                  <div className='ml-4'>
                    <h4 className='text-lg leading-6'>{content.title}</h4>
                    <p className='mt-2 text-gray-600'>{content.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden='true' className='mt-10 lg:mt-0'>
            <Image
              src='/images/Dlogo.jpg'
              width={360}
              height={480}
              alt='feature image'
              className='mx-auto rounded-lg shadow-lg'
            />
          </div>
        </div>
        <div className='py-6'>
          <div className='grid lg:gap-8 lg:grid-cols-2 lg:items-center'>
            <div className='lg:col-start-2'>
              <h3 className='text-2xl tracking-tight sm:text-3xl'>
                {featureSecondTitle.title}
              </h3>
              <p className='mt-3 text-lg text-gray-600'>{featureSecondTitle.content}</p>
              <div className='mt-12 space-y-12'>
                {featureSecondContent.map(content => (
                  <div key={content.title} className='flex'>
                    <div className='flex-shrink-0'>
                      <div className='flex items-center justify-center w-12 h-12 rounded-md bg-green-600 text-gray-50'>
                        <AiOutlineCheck className='w-7 h-7' />
                      </div>
                    </div>
                    <div className='ml-4'>
                      <h4 className='text-lg leading-6'>{content.title}</h4>
                      <p className='mt-2 text-gray-600'>{content.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1'>
              <Image
                src='/images/Dlogo.jpg'
                width={360}
                height={480}
                alt='feature image'
                className='mx-auto rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
