import Container from '@/components/Container';

type Props = {
  subHeading: string;
  title: string;
};

export default function SectionHeader({ subHeading, title }: Props) {
  return (
    <Container>
      <div className='text-center'>
        <p className='text-lg text-green-600 uppercase'>{subHeading}</p>
        <h2 className='text-3xl sm:text-5xl'>{title}</h2>
      </div>
    </Container>
  );
}
