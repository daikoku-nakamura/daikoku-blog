import { useFormContext } from 'react-hook-form';

type Props = {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  rows?: number;
};

export default function FormInput({
  id,
  label,
  type = 'text',
  required = true,
  rows,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className='mb-4'>
      <label htmlFor={id} className='inline-block sm:text-base'>
        {label}
        {required && <span className='ml-2 text-red-500'>*</span>}
      </label>
      {rows ? (
        <textarea
          id={id}
          {...register(id, { required: `${label}は入力必須です` })}
          aria-describedby={`error-${id}-required`}
          rows={rows}
          className='h-64 w-full rounded border px-3 py-2 outline-none ring-blue-300 transition duration-100 focus:ring'
        />
      ) : (
        <input
          type={type}
          id={id}
          {...register(id, { required: `${label}は入力必須です` })}
          aria-describedby={`error-${id}-required`}
          className='w-full rounded border px-3 py-2 outline-none ring-blue-300 transition duration-100 focus:ring'
        />
      )}
      {errors[id] && (
        <span id={`error-${id}-required`} aria-live='assertive' className='text-red-500'>
          {errors[id]?.message as React.ReactNode}
        </span>
      )}
    </div>
  );
}
