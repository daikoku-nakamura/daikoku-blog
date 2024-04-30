import Fotter from '@/components/Fotter';
import Header from '@/components/Header';
import ReturnToTop from '@/components/ReturnToTop';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL as string),
  title: {
    template: '%s | 大黒工業 営業ブログ',
    default: '大黒工業 営業ブログ',
  },
  description:
    '大黒工業株式会社の営業マンが商品情報やお知らせを配信する情報ブログサイトです',
  openGraph: {
    title: {
      template: '%s | 大黒工業 営業ブログ',
      default: '大黒工業 営業ブログ',
    },
    description:
      '大黒工業株式会社の営業マンが商品情報やお知らせを配信する情報ブログサイトです',
    type: 'website',
    images: '/images/moldimage1280x650.jpg',
  },
  twitter: {
    card: 'summary_large_image',
  },
  alternates: {
    canonical: '/',
  },
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
