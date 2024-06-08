type Props = {
  subHeading: string;
  title: string;
};

export default function SectionHeader({ subHeading, title }: Props) {
  return (
    <div className='text-center py-6'>
      <p className='text-lg text-blue-600 uppercase mb-2'>{subHeading}</p>
      <h2 className='text-4xl sm:text-5xl underline decoration-blue-600 decoration-8 underline-offset-8'>
        {title}
      </h2>
    </div>
  );
}
