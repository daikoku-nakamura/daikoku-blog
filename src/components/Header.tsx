import { pageLinks } from '@/const/pageLinks';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between'>
      <Link href='/'>ホーム</Link>
      <nav>
        <ul className='flex justify-between gap-4'>
          {pageLinks.map(link => (
            <li key={link.title}>
              <Link href={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
