import { ReactNode } from "react";

export type Sizes = 'default' | 'small' | 'large';

export const sizeToClass = (size: Sizes | 'default'): string => {
  switch (size) {
    case 'default':
      return '';
    case 'large':
      return 'lg';
    case 'small':
      return 'sm';
  }
};

export type Class = {
  className?: string;
}

export type Children = {
  children?: ReactNode | ReactNode[]
}