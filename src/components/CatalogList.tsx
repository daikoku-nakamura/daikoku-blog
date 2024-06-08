import CatalogCard from '@/components/CatalogCard';
import Container from '@/components/Container';
import { catalogData } from '@/const/catalogData';

export default function CatalogList() {
  return (
    <Container>
      {catalogData.map(({ type, items }) => (
        <div key={type}>
          <h2 className='p-4 border-l-8 border-blue-600 my-12 text-3xl'>{type}</h2>
          <CatalogCard items={items} />
        </div>
      ))}
    </Container>
  );
}
