import { BaseButton } from '@/components/Button';
import Container from '@/components/Container';

export default function ContactForm() {
  return (
    <Container>
      <form className='mx-auto max-w-screen-md'>
        <div className='mb-4'>
          <label htmlFor='name' className='inline-block sm:text-base'>
            氏名<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='name'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='inline-block sm:text-base'>
            メールアドレス<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='email'
            id='email'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='company' className='inline-block sm:text-base'>
            会社名<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='company'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='address' className='inline-block sm:text-base'>
            住所<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='address'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='tel' className='inline-block sm:text-base'>
            電話番号<span className='ml-1 text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='tel'
            className='w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='message' className='inline-block sm:text-base'>
            メッセージ<span className='ml-1 text-red-500'>*</span>
          </label>
          <textarea
            id='message'
            rows={5}
            className='h-64 w-full rounded border px-3 py-2 outline-none ring-green-300 transition duration-100 focus:ring'
          />
        </div>
        <div>
          <BaseButton type='submit'>送信する</BaseButton>
        </div>
      </form>
    </Container>
  );
}
