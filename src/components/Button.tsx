type Props = {
  type: 'button' | 'submit';
  children: React.ReactNode;
};

export function BaseButton({ type, children }: Props) {
  return (
    <button
      type={type}
      className='px-8 py-3 font-semibold rounded bg-green-500 text-white hover:bg-green-600'
    >
      {children}
    </button>
  );
}

export function OutlineButton({ type, children }: Props) {
  return (
    <button
      type={type}
      className='px-8 py-3 font-semibold border rounded border-green-500 text-green-500 hover:bg-green-600 hover:text-white'
    >
      {children}
    </button>
  );
}
