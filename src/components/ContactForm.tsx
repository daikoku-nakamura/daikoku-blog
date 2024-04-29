'use client';
import { BaseButton } from '@/components/Button';
import Container from '@/components/Container';
import FormInput from '@/components/FormInput';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

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
  const methods = useForm<FormValues>({ mode: 'onChange' });
  const { handleSubmit } = methods;

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
      <FormProvider {...methods}>
        <p className='text-red-500 py-4'>全ての項目が入力必須となっています。</p>
        <form onSubmit={onSubmit}>
          <FormInput id='name' label='氏名' />
          <FormInput id='email' label='メールアドレス' type='email' />
          <FormInput id='company' label='会社名' />
          <FormInput id='address' label='住所' />
          <FormInput id='tel' label='電話番号' />
          <FormInput id='message' label='メッセージ' rows={5} />
          <BaseButton type='submit'>送信する</BaseButton>
        </form>
      </FormProvider>
    </Container>
  );
}
