import Container from '@/components/Container';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineRight } from 'react-icons/ai';

type Props = {
  lists: {
    name: string;
    path?: string;
  }[];
};

export default function Breadcrumb({ lists }: Props) {
  return (
    <div className='bg-white'>
      <Container>
        <nav aria-label='パンくずリスト'>
          <ol className='flex h-8 space-x-2'>
            <li className='flex items-center'>
              <Link href='/' title='ホームに戻る' className='hover:underline'>
                <AiOutlineHome className='w-6 h-6 pr-1 text-gray-600' />
              </Link>
            </li>
            {lists.map(({ name, path = '/' }, index) => (
              <li key={name} className='flex items-center space-x-2'>
                <AiOutlineRight className='w-2 h-2 mt-1 fill-current text-gray-400' />
                {lists.length - 1 !== index ? (
                  <Link href={path} className='flex items-center px-1 hover:underline'>
                    {name}
                  </Link>
                ) : (
                  <span className='flex items-center px-1'>{name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
