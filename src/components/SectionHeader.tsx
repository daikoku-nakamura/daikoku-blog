type Props = {
  subHeading: string;
  title: string;
};

export default function SectionHeader({ subHeading, title }: Props) {
  return (
    <div className='text-center py-6'>
      <p className='text-lg text-green-600 uppercase'>{subHeading}</p>
      <h2 className='text-4xl sm:text-5xl'>{title}</h2>
    </div>
  );
}
