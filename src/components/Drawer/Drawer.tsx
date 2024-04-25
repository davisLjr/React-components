// Drawer.tsx
import React, { useEffect, useState } from 'react';

export type DrawerProps = {
  isVisible: boolean;
  duration?: number;
  onClose?: () => void;
  isRight?: boolean;
  isLeft?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
  size?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Drawer ({
  isVisible,
  duration = 300,
  onClose,
  children,
  className,
  isRight = false,
  isLeft = false,
  isTop = false,
  isBottom = false,
  size = '70%',
  ...restProps
}: DrawerProps) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  const hiddenStyle = {
    transform: `translate(${isRight ? '100%' : isLeft ? '-100%' : '0'}, ${isTop ? '-100%' : isBottom ? '100%' : '0'})`
  };

  return (
    <div
      className={`drawer ${className || ''} ${isRight ? 'right' : isLeft ? 'left' : isTop ? 'top' : isBottom ? 'bottom' : ''}`}
      style={{
        background: "pink",
        width: isRight || isLeft ? size : '100%',
        height: isTop || isBottom ? size : '100%',
        transition: `transform ${duration}ms ease-in-out`,
        transform: show ? 'translate(0, 0)' : hiddenStyle.transform,
        position: 'fixed',
        top: isTop ? '0' : isBottom ? 'auto' : '', // Ajuste para isTop y isBottom
        bottom: isBottom ? '0' : isTop || isRight || isLeft ? '0' : 'auto', // Ajuste para isBottom y cuando es isTop, isRight o isLeft
        left: isLeft ? '0' : !isRight ? 'auto' : '',
        right: isRight ? '0' : 'auto',
      }}
      {...restProps}
    >
      {children}
    </div>
  );
};
