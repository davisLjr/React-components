// DrawerCloseButton.tsx
import React from 'react';

export type DrawerCloseButtonProps = {
  onClick: () => void;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function DrawerCloseButton ({ onClick, className, ...restProps }: DrawerCloseButtonProps) {
  return (
    <button
      className={`drawer-close-button ${className || ''}`}
      onClick={onClick}
      {...restProps}
    >
      Cerrar
    </button>
  );
};