import Link from 'next/link';
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';

const socialLinks = [
  {
    title: 'instagram',
    href: 'https://www.instagram.com/daikoku1950_official/',
    logo: <AiOutlineInstagram />,
  },
  {
    title: 'twitter',
    href: 'https://twitter.com/daikoku_office',
    logo: <AiOutlineTwitter />,
  },
  {
    title: 'github',
    href: 'https://github.com/daikoku-nakamura/daikoku-blog',
    logo: <AiOutlineGithub />,
  },
];

export default function Fotter() {
  return (
    <footer className='py-6'>
      <div className='container px-6 mx-auto space-y-6 border-t border-gray-300 md:space-y-12 divide-opacity-50'>
        <div className='grid justify-center pt-6 lg:justify-between'>
          <div className='flex flex-col self-center text-md text-center md:block lg:col-start-1 md:space-x-6 space-y-2'>
            <span>©2024 DaikokuBlog All rights reserved</span>
            <Link href='/privacy' className='hover:underline'>
              プライバシーポリシー
            </Link>
            <Link href='/sitemap' className='hover:underline'>
              サイトマップ
            </Link>
          </div>
          <div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
            {socialLinks.map(link => (
              <a
                key={link.title}
                href={link.href}
                rel='noopener noreferrer'
                target='_blank'
                className='flex items-center justify-center w-12 h-12 rounded-full text-gray-50 hover:bg-green-600 bg-green-500 hover:scale-110'
                aria-label={`${link.title}へのリンク`}
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
