import BlogCard from '@/components/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeader from '@/components/SectionHeader';
import { getBlogList } from '@/libs/microcms';

export default async function Blogs() {
  const blogData = await getBlogList();
  return (
    <div>
      <Breadcrumb lists={[{ name: 'ブログ一覧' }]} />
      <SectionHeader subHeading='blogs' title='ブログ記事一覧' />
      <BlogCard blogs={blogData.contents} />
    </div>
  );
}
