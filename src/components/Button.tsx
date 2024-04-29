type Props = {
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
};

export function BaseButton({ type, children, onClick }: Props) {
  return (
    <button
      type={type}
      className='px-8 py-3 rounded bg-green-500 text-white hover:bg-green-600'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function OutlineButton({ type, children, onClick }: Props) {
  return (
    <button
      type={type}
      className='px-8 py-3 border rounded bg-white border-green-500 text-green-500 hover:bg-green-600 hover:text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
