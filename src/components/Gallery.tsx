import Container from '@/components/Container';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className='py-6'>
      <Container>
        <SectionHeader subHeading='products' title='大黒工業株式会社の取り扱い製品' />
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 mt-6'>
          <Image
            src='/images/Dlogo.jpg'
            width={300}
            height={300}
            alt=''
            className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={200}
            height={200}
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 aspect-square'
          />
          <Image
            src='/images/Dlogo.jpg'
            width={300}
            height={300}
            alt=''
            className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square'
          />
        </div>
      </Container>
    </section>
  );
}
