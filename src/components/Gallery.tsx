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
            src='/productImage/01ナプキン.webp'
            width={300}
            height={300}
            alt='紙ナプキン'
            className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 object-cover'
          />
          <Image
            src='/productImage/03箸袋.webp'
            width={200}
            height={200}
            alt='箸袋'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/04コースター.webp'
            width={200}
            height={200}
            alt='コースター'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/29キッチンペーパー.webp'
            width={200}
            height={200}
            alt='キッチンペーパー'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/32マスク.webp'
            width={200}
            height={200}
            alt='マスク'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/12保冷剤.webp'
            width={200}
            height={200}
            alt='保冷剤'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/16プラスチックスプーン.webp'
            width={200}
            height={200}
            alt='スプーン・フォーク'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/19パルプモールド.webp'
            width={200}
            height={200}
            alt='パルプモールド'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/36フルーツキャップ.webp'
            width={200}
            height={200}
            alt='フルーツキャップ'
            className='w-full h-full rounded shadow-sm min-h-48 object-cover'
          />
          <Image
            src='/productImage/02おしぼり.webp'
            width={300}
            height={300}
            alt='紙おしぼり'
            className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 object-cover'
          />
        </div>
      </Container>
    </section>
  );
}
