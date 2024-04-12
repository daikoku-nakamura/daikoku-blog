import { BaseButton } from '@/components/Button';
import Image from 'next/image';

type Props = {
  items: {
    name: string;
    description: string;
    image: string;
    link: string;
  }[];
};

export default function CatalogCard({ items }: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {items.map(item => (
        <div
          key={item.name}
          className='relative flex bg-clip-border rounded-xl bg-white shadow-md w-full max-w-[48rem] flex-row'
        >
          <div className='relative w-2/5 overflow-hidden shrink-0'>
            <Image
              src={item.image}
              width={220}
              height={300}
              alt={item.name}
              className='object-cover w-full h-full'
            />
          </div>
          <div className='px-6 py-12'>
            <a
              href={`http://dcs4.icata.net/iportal/oc.do?v=DKU00001&d=DKUD001&c=${item.link}&p=1`}
              target='_blank'
              rel='noreferrer'
              className='block mb-2 text-2xl hover:underline'
            >
              {item.name}
            </a>
            <p className='block mb-8 text-base antialiased text-gray-600'>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
