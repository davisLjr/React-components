import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

export type ButtonProps = {
  icon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button ({ icon, children, ...rest }: ButtonProps) {
  const Element = rest.href ? 'a' : 'button';

  return (
    <Element {...rest}>
      {icon && <span>{icon}</span>}
      {children}
    </Element>
  );
};