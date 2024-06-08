type Props = {
  type: 'button' | 'submit';
  children: React.ReactNode;
  onClick?: () => void;
};

export function BaseButton({ type, children, onClick }: Props) {
  return (
    <button
      type={type}
      className='px-8 py-3 rounded bg-blue-600 text-white hover:bg-indigo-600'
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
      className='px-8 py-3 border rounded bg-white border-blue-600 text-blue-600 hover:bg-indigo-600 hover:text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
