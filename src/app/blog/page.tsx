import BlogCard from '@/components/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import CalltoAction from '@/components/CalltoAction';
import SectionHeader from '@/components/SectionHeader';
import { getBlogList } from '@/libs/microcms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ブログ一覧',
  description:
    'ブログ一覧ページ || 大黒工業株式会社の営業が商品紹介などを掲載する情報ブログサイトです',
};

export default async function Blogs() {
  const blogData = await getBlogList();
  return (
    <>
      <Breadcrumb lists={[{ name: 'ブログ一覧' }]} />
      <SectionHeader subHeading='blogs' title='ブログ記事一覧' />
      <BlogCard blogs={blogData.contents} />
      <CalltoAction />
    </>
  );
}
