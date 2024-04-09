import BlogCard from '@/components/BlogCard';
import Breadcrumb from '@/components/Breadcrumb';
import SectionHeader from '@/components/SectionHeader';

export default function Blogs() {
  return (
    <div>
      <Breadcrumb lists={[{ name: 'ブログ一覧' }]} />
      <SectionHeader subHeading='blogs' title='ブログ記事一覧' />
      <BlogCard />
    </div>
  );
}
