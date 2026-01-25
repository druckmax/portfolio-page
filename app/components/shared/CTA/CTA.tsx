import {
  type ButtonHTMLAttributes,
  cloneElement,
  type HTMLAttributes,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

import './_CTA.scss';

type CTA = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  isPending?: boolean;
  children: ReactNode;
};

type ChildAttributes = HTMLAttributes<HTMLElement>;

export const CTA = ({
  type = 'button',
  onClick,
  className,
  asChild,
  isPending,
  children,
  ...props
}: CTA) => {
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<ChildAttributes>;
    return cloneElement<ChildAttributes>(child, {
      className: `btn ${className} ${child.props.className || ''}`.trim(),
    });
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className} ${isPending ? 'pending' : ''}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};
