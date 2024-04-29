'use client';
import { BaseButton } from '@/components/Button';
import Container from '@/components/Container';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  company: string;
  address: string;
  tel: string;
  message: string;
};

export default function ContactForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit = handleSubmit(async data => {
    const formData = new FormData();
    // biome-ignore lint/complexity/noForEach: <explanation>
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT ?? '', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        router.push('/contact/thanks');
      } else {
        router.push('/contact/error');
      }
    } catch (error) {
      router.push('/contact/error');
    }
  });

  return (
    <Container>
      <form
        action={process.env.NEXT_PUBLIC_NEWT_FORM_ENDPOINT}
        method='post'
        onSubmit={onSubmit}
      >
        <div className='mb-4'>
          <label htmlFor='name' className='inline-block sm:text-base'>
            氏名<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='name'
            {...register('name', { required: 'お名前は入力必須です' })}
            aria-describedby='error-name-required'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
          {errors?.name && (
            <span id='error-name-required' aria-live='assertive' className='text-red-500'>
              {errors.name.message}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='inline-block sm:text-base'>
            メールアドレス<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='email'
            id='email'
            {...register('email', { required: 'メールアドレスは入力必須です' })}
            aria-describedby='error-email-required'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
          {errors?.email && (
            <span
              id='error-email-required'
              aria-live='assertive'
              className='text-red-500'
            >
              {errors.email.message}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='company' className='inline-block sm:text-base'>
            会社名<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='company'
            {...register('company', { required: '会社名は入力必須です' })}
            aria-describedby='error-compnay-required'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
          {errors?.company && (
            <span
              id='error-company-required'
              aria-live='assertive'
              className='text-red-500'
            >
              {errors.company.message}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='address' className='inline-block sm:text-base'>
            住所<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='address'
            {...register('address', { required: '住所は入力必須です' })}
            aria-describedby='error-address-required'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
          {errors?.address && (
            <span
              id='error-address-required'
              aria-live='assertive'
              className='text-red-500'
            >
              {errors.address.message}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='tel' className='inline-block sm:text-base'>
            電話番号<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='tel'
            {...register('tel', { required: '電話番号は入力必須です' })}
            aria-describedby='error-tel-required'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
          {errors?.tel && (
            <span id='error-tel-required' aria-live='assertive' className='text-red-500'>
              {errors.tel.message}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='inline-block sm:text-base'>
            メッセージ<span className='ml-1 text-red-500'>*</span>
          </label>
          <textarea
            id='message'
            {...register('message', { required: 'お問い合わせ内容は入力必須です' })}
            aria-describedby='error-message-required'
            rows={5}
            className='h-64 w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
          {errors?.message && (
            <span
              id='error-message-required'
              aria-live='assertive'
              className='text-red-500'
            >
              {errors.message.message}
            </span>
          )}
        </div>
        <div>
          <BaseButton type='submit'>送信する</BaseButton>
        </div>
      </form>
    </Container>
  );
}
