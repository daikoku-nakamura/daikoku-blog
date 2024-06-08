'use client';

import { pageLinks } from '@/const/pageLinks';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function MobileNav() {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow(status => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };
  return (
    <>
      <button
        type='button'
        aria-label='メニュ―を開く'
        className='lg:hidden'
        onClick={onToggleNav}
      >
        <AiOutlineMenu className='h-8 w-8' />
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white text-gray-800 opacity-95 duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-end'>
          <button
            type='button'
            className='mr-8 mt-11'
            onClick={onToggleNav}
            aria-label='メニューを閉じる'
          >
            <AiOutlineClose className='h-8 w-8' />
          </button>
        </div>
        <nav className='fixed mt-8 h-full'>
          {pageLinks.map(link => (
            <div key={link.title} className='px-12 py-6'>
              <Link
                href={link.path}
                className='text-2xl tracking-widest hover:underline'
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
