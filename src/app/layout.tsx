import Fotter from '@/components/Fotter';
import Header from '@/components/Header';
import ReturnToTop from '@/components/ReturnToTop';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daikoku Blog.',
  description: 'This is Daikoku Blog.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <Header />
        <main>
          {children}
          <ReturnToTop />
        </main>
        <Fotter />
      </body>
    </html>
  );
}
