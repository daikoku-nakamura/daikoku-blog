import { pageLinks } from '@/const/pageLinks';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className='p-4 bg-[#3D3D3D] text-white'>
      <div className='container flex justify-between h-20 mx-auto'>
        <Link
          href='/'
          aria-label='大黒工業ブログのホームへ'
          className='flex items-center p-2'
        >
          <Image
            src='/images/daikoku-logo.webp'
            width={280}
            height={70}
            alt='大黒工業ロゴ'
            className='hover:opacity-80'
          />
        </Link>
        <ul className='items-stretch hidden space-x-3 lg:flex'>
          {pageLinks.map(link => (
            <li key={link.title} className='flex items-center px-4'>
              <Link href={link.path} className='hover:scale-110 hover:underline'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <MobileNav />
      </div>
    </header>
  );
}
