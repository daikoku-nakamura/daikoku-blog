import Container from '@/components/Container';
import { productImages } from '@/const/productImages';
import Image from 'next/image';

export default function ProductList() {
  return (
    <Container>
      <div className='flex flex-col justify-center'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2'>
          {productImages.map(product => (
            <Image
              key={product.src}
              src={product.src}
              width={300}
              height={300}
              alt={product.alt}
              className='object-cover w-full bg-gray-500 aspect-square'
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
