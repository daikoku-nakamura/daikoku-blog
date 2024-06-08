'use client';
import { useEffect, useState } from 'react';
import { HiOutlineArrowSmUp } from 'react-icons/hi';

export default function ReturnToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => toggleVisibility();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleVisibility]);

  return (
    <div className='fixed bottom-10 lg:bottom-32 right-10'>
      <button
        type='button'
        onClick={scrollToTop}
        className={`bg-green-500 hover:bg-green-600 hover:scale-110 text-white rounded-full p-4 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label='トップに戻る'
      >
        <HiOutlineArrowSmUp className='h-10 w-10' />
      </button>
    </div>
  );
}
