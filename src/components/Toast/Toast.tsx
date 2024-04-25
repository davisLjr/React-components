// Toast.tsx
import { Children, Class } from '@/utils/utils';
import React, { useEffect, useState } from 'react';

export type ToastProps = {
  isVisible: boolean;
  duration?: number;
  onClose?: () => void;
} & Children & Class;

export default function Toast ({ isVisible, duration = 3000, onClose, children, className }: ToastProps) {
  const [show, setShow] = useState(isVisible);
  let timer: NodeJS.Timeout | null = null;

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      timer = setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, duration);
    } else {
      setShow(false);
      if (timer) clearTimeout(timer);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isVisible, duration, onClose]);

  return show ? <div className={className}>{children}</div> : null;
};
