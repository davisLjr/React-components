// Drawer.tsx
import React, { useEffect, useState, CSSProperties } from 'react';

export type DrawerProps = {
  isVisible: boolean;
  duration?: number;
  onClose?: () => void;
  isRight?: boolean;
  isLeft?: boolean;
  isTop?: boolean;
  isBottom?: boolean;
  size?: string;
  style?: CSSProperties;
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
  style,
  ...restProps
}: DrawerProps) {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  const hiddenStyle = {
    transform: `translate(${isRight ? '100%' : isLeft ? '-100%' : '0'}, ${isTop ? '-100%' : isBottom ? '100%' : '0'})`
  };

  const backdropStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    display: isVisible ? 'block' : 'none',
    transition: 'backgroundColor 0.5s ease in out'
  };

  return (
    <>
      <div className="backdrop" style={backdropStyle}></div>
      <div
        className={`drawer ${className || ''} ${isRight ? 'right' : isLeft ? 'left' : isTop ? 'top' : isBottom ? 'bottom' : ''}`}
        style={{
          background: "pink",
          width: isRight || isLeft ? size : '100%',
          height: isTop || isBottom ? size : '100%',
          transition: `transform ${duration}ms ease-in-out`,
          transform: show ? 'translate(0, 0)' : hiddenStyle.transform,
          position: 'fixed',
          top: isTop ? '0' : isBottom ? 'auto' : '',
          bottom: isBottom ? '0' : isTop || isRight || isLeft ? '0' : 'auto',
          left: isLeft ? '0' : !isRight ? 'auto' : '',
          right: isRight ? '0' : 'auto',
          zIndex: 1000,
        }}
        {...restProps}
      >
        {children}
      </div>
    </>
  );
};
