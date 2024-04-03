import Link from 'next/link';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const socialLinks = [
  { title: 'instagram', href: '', logo: <AiOutlineInstagram /> },
  { title: 'twitter', href: '', logo: <AiOutlineTwitter /> },
  { title: 'github', href: '', logo: <AiOutlineGithub /> },
];

export default function Fotter() {
  return (
    <footer className='py-6 text-gray-900'>
      <div className='container px-6 mx-auto space-y-6 border-t border-gray-300 md:space-y-12 divide-opacity-50'>
        <div className='grid justify-center pt-6 lg:justify-between'>
          <div className='flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6'>
            <span>©2024 All rights reserved</span>
            <Link href='/privacy'>プライバシーポリシー</Link>
            <Link href='/sitemap'>サイトマップ</Link>
          </div>
          <div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
            {socialLinks.map(link => (
              <a
                key={link.title}
                href={link.href}
                rel='noopener noreferrer'
                target='_blank'
                className='flex items-center justify-center w-12 h-12 rounded-full text-gray-50 bg-green-600 hover:scale-110'
              >
                <span className='text-3xl'>{link.logo}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
