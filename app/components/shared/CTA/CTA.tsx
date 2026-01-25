import {
  type ButtonHTMLAttributes,
  cloneElement,
  type HTMLAttributes,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

type CTA = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children: ReactNode;
};

type ChildAttributes = HTMLAttributes<HTMLElement>;

export const CTA = ({ type = 'button', onClick, className, asChild, children }: CTA) => {
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<ChildAttributes>;
    return cloneElement<ChildAttributes>(child, {
      className: `btn ${className} ${child.props.className || ''}`.trim(),
    });
  }

  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};
