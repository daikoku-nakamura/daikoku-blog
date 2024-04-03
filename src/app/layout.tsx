import Fotter from '@/components/Fotter';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daikoku Blog.',
  description: 'This is Daikoku Blog.',
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
        {children}
        <Fotter />
      </body>
    </html>
  );
}
