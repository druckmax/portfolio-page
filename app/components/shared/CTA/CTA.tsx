import type { ButtonHTMLAttributes, ReactNode } from 'react';

type CTA = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const CTA = ({ type = 'button', onClick, className, children }: CTA) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};
